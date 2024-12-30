"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import usePremiumModal from "@/hooks/usePremiumModal";
import { useToast } from "@/hooks/use-toast";
import { env } from "@/env";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { createCheckoutSession } from "./actions";

const premiumFeatures = ["AI tools", "Up to 3 resumes"];
const premiumPlusFeatures = [
  "All Premium features",
  "Infinite resumes",
  "Design customizations",
];

export default function PremiumModal() {
  const { open, setOpen } = usePremiumModal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function handlePremiumClick(variantId: string) {
    try {
      setLoading(true);
      const redirectUrl = await createCheckoutSession(variantId);
      window.location.href = redirectUrl;
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (!loading) {
          setOpen(open);
        }
      }}
    >
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto sm:max-h-none">
        <DialogHeader className="p-4 sm:p-6">
          <DialogTitle className="text-xl sm:text-2xl text-center font-bold">
            Choose Your Plan
          </DialogTitle>
          <p className="text-center text-sm sm:text-base text-muted-foreground">
            Unlock premium features to enhance your resume building experience
          </p>
        </DialogHeader>
        <div className="p-4 sm:p-6 -mt-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-1 rounded-lg border p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-full flex-col">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-center">
                    Premium
                  </h3>
                  <div className="text-center">
                    <span className="text-2xl sm:text-3xl font-bold">
                      $4.99
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="my-4 sm:my-6 space-y-3 flex-1">
                  {premiumFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="rounded-full bg-green-100 p-1">
                        <Check className="size-4 text-green-600" />
                      </div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <Button
                    className="w-full"
                    onClick={() =>
                      handlePremiumClick(
                        env.NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_MONTHLY,
                      )
                    }
                    disabled={loading}
                  >
                    Get Premium
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Cancel anytime. No questions asked.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg border border-green-200 bg-green-50/50 p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex h-full flex-col">
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-center bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                    Premium Plus
                  </h3>
                  <div className="text-center">
                    <span className="text-2xl sm:text-3xl font-bold">
                      $9.99
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="my-4 sm:my-6 space-y-3 flex-1">
                  {premiumPlusFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="rounded-full bg-green-100 p-1">
                        <Check className="size-4 text-green-600" />
                      </div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <Button
                    variant="premium"
                    className="w-full"
                    onClick={() =>
                      handlePremiumClick(
                        env.NEXT_PUBLIC_LEMON_SQUEEZY_VARIANT_ID_PRO_PLUS_MONTHLY,
                      )
                    }
                    disabled={loading}
                  >
                    Get Premium Plus
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    Cancel anytime. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
