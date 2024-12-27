"use client";

import { PlusSquare } from "lucide-react";
import Link from "next/link";

import usePremiumModal from "@/hooks/usePremiumModal";
import { Button } from "@/components/ui/button";

interface CreateResumeButtonProps {
  canCreate: boolean;
  totalCount?: number;
}

export default function CreateResumeButton({
  canCreate,
  totalCount,
}: CreateResumeButtonProps) {
  const premiumModal = usePremiumModal();
  console.log(totalCount);
  if (canCreate) {
    return (
      <>
        {totalCount !== 0 && (
          <Button asChild className="mx-auto flex w-fit gap-2">
            <Link href="/editor">
              <PlusSquare className="size-5" />
              New resume
            </Link>
          </Button>
        )}
      </>
    );
  }

  return (
    <Button
      onClick={() => premiumModal.setOpen(true)}
      className="mx-auto flex w-fit gap-2"
    >
      <PlusSquare className="size-5" />
      New resume
    </Button>
  );
}
