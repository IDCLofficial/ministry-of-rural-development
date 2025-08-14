export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'


export const metadata: Metadata = {
  title: "Ministry of Rural Development and Economic Empowerment",
  description: "The Ministry of Rural Development and Economic Empowerment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <GlobalLoader />

        <Navbar/>
        {children}
      </body>
    </html>
  );
}
