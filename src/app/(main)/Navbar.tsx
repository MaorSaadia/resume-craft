"use client";

import Image from "next/image";
import Link from "next/link";
import { CreditCard, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import logo from "@/assets/resume-craft-logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  return (
    <header className="shadow-sm border-b border-green-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
        <div className="flex items-center gap-4">
          <Link href="/resumes" className="flex items-center gap-3 group">
            <Image
              src={logo}
              alt="Logo"
              width={45}
              height={45}
              quality={100}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" asChild className="flex gap-2">
            <Link href="/contact">
              <MessageCircle className="h-4 w-4" />
              Contact
            </Link>
          </Button>
          <ThemeToggle />
          <UserButton
            afterSwitchSessionUrl="/"
            appearance={{
              baseTheme: resolvedTheme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                labelIcon={<CreditCard className="size-4" />}
                href="/billing"
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </div>
    </header>
  );
}
