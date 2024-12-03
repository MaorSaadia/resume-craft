import { cache } from "react";

import { env } from "@/env";
import prisma from "./prisma";

export type SubscriptionLevel = "free" | "pro" | "pro_plus";

export const getUserSubscriptionLevel = cache(
  async (userId: string): Promise<SubscriptionLevel> => {
    const subscription = await prisma.userSubscription.findUnique({
      where: {
        userId,
      },
    });
    if (
      !subscription ||
      subscription.lemonSqueezyCurrentPeriodEnd < new Date()
    ) {
      return "free";
    }

    if (
      subscription.lemonSqueezyPriceId ===
      env.NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_MONTHLY
    ) {
      return "pro";
    }

    if (
      subscription.lemonSqueezyPriceId ===
      env.NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_PLUS_MONTHLY
    ) {
      return "pro_plus";
    }

    throw new Error("Invalid subscription");
  },
);
