import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TrpcProvider } from "@/components/providers/trpc-provider";
import { cn } from "@/lib/utils";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dstack",
  description:
    "The stack for building fast, lightweight and end-to-end typesafe applications using latest technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          libreBaskerville.className,
          "min-h-screen bg-[url('/noise.png')] antialiased",
        )}
      >
        <TrpcProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}
