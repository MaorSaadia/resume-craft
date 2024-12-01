"use server";

import { currentUser } from "@clerk/nextjs/server";
import {
  type NewCheckout,
  createCheckout,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";
import { env } from "@/env";

// Ensure Lemonsqueezy is setup
lemonSqueezySetup({
  apiKey: env.LEMON_SQUEEZY_API_KEY,
  onError: (error) => console.error("Lemonsqueezy Checkout Error:", error),
});

export async function createCheckoutSession(variantId: string) {
  console.log(variantId);
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const newCheckout: NewCheckout = {
    productOptions: {
      name: "Resume Builder AI Premium",
      description: "Premium subscription for AI Resume Builder",
    },
    checkoutOptions: {
      embed: false, // Set to false for full page redirect
      media: true,
      logo: true,
    },
    checkoutData: {
      email: user.emailAddresses[0].emailAddress,
      name: user.fullName || user.firstName || "User",
      custom: {
        userId: user.id,
      },
    },
    expiresAt: null,
    preview: false,
    testMode: process.env.NODE_ENV !== "production",
  };

  try {
    const { error, data } = await createCheckout(
      env.LEMON_SQUEEZY_STORE_ID,
      variantId,
      newCheckout,
    );

    if (error) {
      console.error("Checkout Creation Error:", error);
      throw new Error(error.message || "Failed to create checkout session");
    }

    if (!data?.data.attributes.url) {
      throw new Error("Failed to generate checkout URL");
    }

    return data?.data.attributes.url;
  } catch (error) {
    console.error("Checkout Process Error:", error);
    throw new Error("Failed to create checkout session");
  }
}
