import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { Plus, Briefcase, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { canCreateResume } from "@/lib/permissions";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import prisma from "@/lib/prisma";
import CreateResumeButton from "./CreateResumeButton";
import ResumeItem from "./ResumeItem";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const [resumes, totalCount, subscriptionLevel] = await Promise.all([
    prisma.resume.findMany({
      where: { userId },
      orderBy: { updatedAt: "desc" },
      include: {
        workExperiences: true,
        educations: true,
        projectExperiences: true,
        languages: true,
      },
    }),
    prisma.resume.count({
      where: { userId },
    }),
    getUserSubscriptionLevel(userId),
  ]);

  const recentResumes = resumes.filter(
    (r) =>
      new Date(r.updatedAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  ).length;

  const canCreate = canCreateResume(subscriptionLevel, totalCount);
  const maxResumes =
    subscriptionLevel === "free"
      ? 1
      : subscriptionLevel === "pro"
        ? 3
        : Infinity;

  return (
    <main className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Resume Dashboard</h1>
            <p className="text-green-400 mt-1">
              {totalCount} of{" "}
              {maxResumes === Infinity ? "unlimited" : maxResumes} resumes used
            </p>
          </div>
          <CreateResumeButton canCreate={canCreate} />
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Resumes
              </CardTitle>
              <Briefcase className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Updated Recently
              </CardTitle>
              <Clock className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{recentResumes}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Plan
              </CardTitle>
              <Star className="h-4 w-4 text-gray-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold capitalize">
                {subscriptionLevel.replace("_", " ")}
              </div>
            </CardContent>
          </Card>
        </div>

        {!canCreate && (
          <Alert className="bg-amber-50 text-amber-900 border-amber-200">
            <AlertDescription>
              You&apos;ve reached the limit of {maxResumes}{" "}
              {maxResumes === 1 ? "resume" : "resumes"} for your{" "}
              {subscriptionLevel.replace("_", " ")} plan. Upgrade to create
              more.
            </AlertDescription>
          </Alert>
        )}

        <div>
          <h2 className="text-xl font-semibold mb-4">Your Resumes</h2>
          {resumes.length > 0 ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {resumes.map((resume) => (
                <ResumeItem key={resume.id} resume={resume} />
              ))}
            </div>
          ) : (
            <Card className="bg-gray-50">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <div className="rounded-full bg-gray-100 p-3">
                  <Plus className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium">No resumes yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by creating your first resume
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}
