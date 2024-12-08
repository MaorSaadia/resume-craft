"use server";

import { env } from "@/env";
import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import {
  lemonSqueezySetup,
  getSubscription,
} from "@lemonsqueezy/lemonsqueezy.js";

lemonSqueezySetup({
  apiKey: env.LEMON_SQUEEZY_API_KEY,
  onError: (error) => console.error("Lemonsqueezy Checkout Error:", error),
});

export async function createCustomerPortalSession() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }
  const user = await currentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const subscription = await prisma.userSubscription.findUnique({
    where: { userId },
  });

  if (!subscription?.lemonSqueezySubscriptionId) {
    throw new Error("No active Lemon Squeezy subscription found");
  }

  try {
    const result = await getSubscription(
      subscription.lemonSqueezySubscriptionId,
    );
    // console.log("Full Subscription Result:", JSON.stringify(result, null, 2));

    // Access the customer portal URL from the nested structure
    const originalCustomerPortalUrl =
      result.data?.data.attributes.urls.customer_portal_update_subscription;

    if (originalCustomerPortalUrl) {
      const url = new URL(originalCustomerPortalUrl);

      url.searchParams.delete("expires");

      const cleanedCustomerPortalUrl = url.toString();
      return cleanedCustomerPortalUrl;
    }
  } catch (error) {
    console.error("Detailed Customer Portal Session Error:", error);
    throw new Error("Failed to create customer portal session");
  }

  // try {
  //   const result = await getCustomer(subscription.lemonSqueezyCustomerId);
  //   console.log("Full Subscription Result:", JSON.stringify(result, null, 2));

  //   // Access the customer portal URL from the nested structure
  //   const customerPortalUrl = result.data?.data.attributes.urls.customer_portal;
  //   // console.log(customerPortalUrl);
  //   if (customerPortalUrl) {
  //     return customerPortalUrl;
  //   }
  // } catch (error) {
  //   console.error("Detailed Customer Portal Session Error:", error);
  //   throw new Error("Failed to create customer portal session");
  // }
}
