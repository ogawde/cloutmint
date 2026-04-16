import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PageTransition } from "@/components/layout/PageTransition";
import { AppHeader } from "@/components/layout/AppHeader";
import { Toaster } from "@/components/ui/sonner";
import { getAuthSession } from "@/lib/auth-session";
import { getViewerMeta } from "@/lib/server/get-viewer-meta";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloutmint",
  description: "Earning made decentralised",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getAuthSession();
  const authUserId = session?.user.id;
  const { role, credits, earnings } = await getViewerMeta(authUserId);

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppHeader
          role={role}
          credits={credits}
          earnings={earnings}
          userEmail={session?.user.email ?? null}
        />
        <PageTransition>{children}</PageTransition>
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
