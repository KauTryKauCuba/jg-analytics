import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "JobGiga | Employer Analytics",
  description: "Advanced hiring insights and candidate performance tracking for JobGiga employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={cn("min-h-full bg-background text-foreground", inter.className)}>
        {children}
      </body>
    </html>
  );
}
