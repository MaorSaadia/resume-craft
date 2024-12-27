import { Metadata } from "next";
import { formatDate } from "date-fns";
import { auth } from "@clerk/nextjs/server";
import {
  getSubscription,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";
import { CalendarCheck, RefreshCcw } from "lucide-react";
import { env } from "process";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import prisma from "@/lib/prisma";
import ManageSubscriptionButton from "./ManageSubscriptionButton";
import GetSubscriptionButton from "./GetSubscriptionButton";

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

  let subscriptionData = null;
  let productName = "Free";
  let status = "Active";
  let renewalDate = null;
  // let cardLastFour = null;

  if (subscription) {
    try {
      const { data: productData } = await getSubscription(
        subscription.lemonSqueezySubscriptionId,
      );

      subscriptionData = productData?.data.attributes;
      productName = subscriptionData?.product_name || "Unnamed Plan";
      status = subscriptionData?.status_formatted || "Active";
      renewalDate = subscriptionData?.renews_at
        ? new Date(subscriptionData.renews_at)
        : null;
      // cardLastFour = subscriptionData?.card_last_four;
    } catch (error) {
      console.error("Failed to retrieve product details:", error);
    }
  }

  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 ">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Billing
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <CardHeader className="bg-gray-50 pb-2 dark:bg-gray-800/50">
            <CardTitle className="flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Subscription Details
              </span>
              <Badge
                variant={status === "Active" ? "default" : "destructive"}
                className="text-sm font-normal"
              >
                {status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="flex items-center space-x-4">
              <RefreshCcw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Current Plan
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {productName}
                </p>
              </div>
            </div>

            {renewalDate && (
              <div className="flex items-center space-x-4">
                <CalendarCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {subscription?.lemonSqueezyCurrentPeriodEnd
                      ? "Ends At"
                      : "Next Renewal"}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {formatDate(renewalDate, "MMMM dd, yyyy")}
                  </p>
                </div>
              </div>
            )}

            {/* {cardLastFour && (
              <div className="flex items-center space-x-4">
                <CreditCard className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Payment Method
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    Visa ****{cardLastFour}
                  </p>
                </div>
              </div>
            )} */}
          </CardContent>
        </Card>

        <Card className="shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <CardHeader className="bg-gray-50 dark:bg-gray-800/50">
            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {subscription ? "Update Subscription" : "Get Started"}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4 pt-6">
            {!subscription ? (
              <>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Unlock premium features and boost your productivity with our
                  Pro Plan.
                </p>
                <GetSubscriptionButton />
              </>
            ) : (
              <>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  Manage your subscription settings, update payment method, or
                  switch plans.
                </p>
                <ManageSubscriptionButton />
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {subscription?.lemonSqueezyCancelAtPeriodEnd && (
        <div className="border-l-4 border-rose-500 bg-rose-50 p-4 dark:border-rose-500/50 dark:bg-rose-900/30">
          <p className="text-rose-700 dark:text-rose-300">
            Your subscription will be canceled on{" "}
            {formatDate(
              subscription.lemonSqueezyCurrentPeriodEnd,
              "MMMM dd, yyyy",
            )}
          </p>
        </div>
      )}
    </main>
  );
}
