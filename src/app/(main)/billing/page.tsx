import { Metadata } from "next";
import { formatDate } from "date-fns";
import { auth } from "@clerk/nextjs/server";
import {
  getSubscription,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";

import prisma from "@/lib/prisma";
import GetSubscriptionButton from "./GetSubscriptionButton";
import ManageSubscriptionButton from "./ManageSubscriptionButton";
import { env } from "process";

export const metadata: Metadata = {
  title: "Billing",
};

lemonSqueezySetup({
  apiKey: env.LEMON_SQUEEZY_API_KEY,
  onError: (error) => console.error("Lemonsqueezy Checkout Error:", error),
});

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const subscription = await prisma.userSubscription.findUnique({
    where: { userId },
  });

  let productName = "Free";

  if (subscription) {
    try {
      const { data: productData } = await getSubscription(
        subscription.lemonSqueezySubscriptionId,
      );

      productName = productData?.data.attributes.product_name || "Unnamed Plan";
    } catch (error) {
      console.error("Failed to retrieve product details:", error);
    }
  }

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      <h1 className="text-3xl font-bold">Billing</h1>
      <p>
        Your current plan: <span className="font-bold">{productName}</span>
      </p>
      {subscription ? (
        <>
          {subscription.lemonSqueezyCancelAtPeriodEnd && (
            <p className="text-destructive">
              Your subscription will be canceled on{" "}
              {formatDate(
                subscription.lemonSqueezyCurrentPeriodEnd,
                "MMMM dd, yyyy",
              )}
            </p>
          )}
          <ManageSubscriptionButton />
        </>
      ) : (
        <GetSubscriptionButton />
      )}
    </main>
  );
}
