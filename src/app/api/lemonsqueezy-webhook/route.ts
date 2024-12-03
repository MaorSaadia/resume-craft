/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from "crypto";
import { NextRequest } from "next/server";
// import { clerkClient } from "@clerk/nextjs/server";

import { env } from "@/env";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // Get the raw payload
    const rawPayload = await req.text();

    // Important: Lemon Squeezy uses specific headers
    const signature = req.headers.get("X-Signature") || "";
    const eventType = req.headers.get("X-Event-Name") || "";

    console.log("Received Event Type:", eventType);
    console.log("Raw Payload:", rawPayload);
    console.log("Signature:", signature);

    // Parse the payload
    const event = JSON.parse(rawPayload);

    // Signature Verification
    function verifyWebhookSignature(
      payload: string,
      signature: string,
    ): boolean {
      const secret = env.LEMON_SQUEEZY_WEBHOOK_SECRET;
      const hmac = crypto.createHmac("sha256", secret);
      const computedSignature = hmac.update(payload).digest("hex");
      return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(computedSignature),
      );
    }

    // Verify signature
    if (!verifyWebhookSignature(rawPayload, signature)) {
      return new Response("Invalid signature", { status: 400 });
    }

    // Process different event types
    switch (eventType) {
      case "subscription_created":
        await handleSubscriptionCreated(event);
        break;
      case "subscription_updated":
        await handleSubscriptionUpdated(event);
        break;
      case "subscription_cancelled":
        await handleSubscriptionCancelled(event);
        break;
      default:
        console.log(`Unhandled event: ${eventType}`);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}

async function handleSubscriptionCreated(event: any) {
  const data = event.data;

  await prisma.userSubscription.create({
    data: {
      userId: data.attributes.user_email, // Use a reliable user identifier
      lemonSqueezySubscriptionId: data.id,
      lemonSqueezyCustomerId: data.attributes.customer_id.toString(),
      lemonSqueezyPriceId: data.attributes.variant_id.toString(),
      lemonSqueezyCurrentPeriodEnd: new Date(data.attributes.renews_at),
      lemonSqueezyCancelAtPeriodEnd: data.attributes.cancelled || false,
    },
  });
}

async function handleSubscriptionUpdated(event: any) {
  const data = event.data;

  await prisma.userSubscription.update({
    where: {
      lemonSqueezySubscriptionId: data.id,
    },
    data: {
      lemonSqueezyPriceId: data.attributes.variant_id.toString(),
      lemonSqueezyCurrentPeriodEnd: new Date(data.attributes.renews_at),
      lemonSqueezyCancelAtPeriodEnd: data.attributes.cancelled || false,
    },
  });
}

async function handleSubscriptionCancelled(event: any) {
  const data = event.data;

  await prisma.userSubscription.update({
    where: {
      lemonSqueezySubscriptionId: data.id,
    },
    data: {
      lemonSqueezyCancelAtPeriodEnd: true,
      canceledAt: new Date(),
    },
  });
}
