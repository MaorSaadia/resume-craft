import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-100 dark:from-black dark:to-green-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-16">
        <div className="rounded-2xl bg-white dark:bg-black p-4 sm:p-8 shadow-lg">
          <div className="mx-auto max-w-xl space-y-6 sm:space-y-8 text-center">
            <div className="flex justify-center">
              <div className="rounded-full bg-green-100 p-2 sm:p-3">
                <CheckCircle2 className="h-8 w-8 sm:h-12 sm:w-12 text-green-600" />
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Payment Successful!
              </h1>
              <p className="text-base sm:text-lg text-gray-500">
                Thank you for upgrading to Pro! Your account has been activated
                and you now have access to premium features.
              </p>
            </div>

            <div className="pt-2 sm:pt-4">
              <Button
                asChild
                className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg transition-transform hover:scale-105"
              >
                <Link href="/resumes">Start Creating Resumes →</Link>
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500">
              Need help?{" "}
              <a href="/contact" className="text-green-600 hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
