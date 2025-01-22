import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-resume-craft.com"),
  title: {
    template: "%s | AI ResumeCraft",
    default: "AI ResumeCraft - Professional Resume Builder with AI",
  },
  keywords:
    "resume builder, AI resume, CV maker, professional resume, career tools, resume template, free resume builder, online resume creator, resume writing assistant, AI CV builder, job application tools, resume generator, resume design, modern resume templates, professional CV maker, resume writing tips, career development tools, resume formatting, job search tools, resume optimization",
  description:
    "Create professional, ATS-friendly resumes instantly with AI-powered tools. Free resume builder with premium features including AI writing assistance, multiple templates, and unlimited resumes. Perfect for job seekers, professionals, and students.",
  openGraph: {
    type: "website",
    title: "AI ResumeCraft - Create Professional Resumes with AI",
    description:
      "Professional resume builder with AI assistance. Start free, upgrade for unlimited resumes and advanced features.",
    url: "https://ai-resume-craft.com",
    siteName: "AI ResumeCraft",
    images: ["/public/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI ResumeCraft - Professional Resume Builder",
    description: "Create standout resumes with AI assistance",
  },
  alternates: {
    canonical: "https://ai-resume-craft.com",
  },
  verification: {
    google: "ZpIV7VvpfBlsXDcOOYXptdp6ym9ODCu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Analytics />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
          <Script id="schema" type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SaaS",
              name: "AI ResumeCraft",
              applicationCategory: "Resume Builder",
              offers: {
                "@type": "AggregateOffer",
                offers: [
                  {
                    "@type": "Offer",
                    name: "Free Plan",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    name: "Premium",
                    price: "4.99",
                    priceCurrency: "USD",
                    description: "AI resume writing tools, up to 3 resumes",
                  },
                  {
                    "@type": "Offer",
                    name: "Premium Plus",
                    price: "9.99",
                    priceCurrency: "USD",
                    description: "Unlimited resumes, advanced customization",
                  },
                ],
              },
              featureList: [
                "AI Content Generation",
                "Multiple Languages",
                "Professional Templates",
                "ATS-Friendly Resumes",
                "Real-time Preview",
                "Multiple Export Formats",
                "Custom Sections",
                "Professional Design Templates",
              ],
            })}
          </Script>
        </body>
      </html>
    </ClerkProvider>
  );
}
