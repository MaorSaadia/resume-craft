"use client";

import Image from "next/image";
import Link from "next/link";
import { CreditCard } from "lucide-react";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import logo from "@/assets/resume-craft-logo.png";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const { resolvedTheme } = useTheme();

  return (
    <header className="shadow-sm border-b border-green-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
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
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <UserButton
            afterSignOutUrl=""
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
