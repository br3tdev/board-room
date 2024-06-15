import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ConvexClientProvider from "@/providers/convex-client-provider";

import "./globals.css";

import ModalProvider from "@/providers/modal-providers";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Board-room",
  description: "Productivity and collaborations to new heights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
