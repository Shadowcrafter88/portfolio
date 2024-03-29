import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col ", inter.className)}>
        <Suspense fallback={<Loading />} >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <nav className="top-0 w-full h-15 z-50 flex justify-end p-2">
              <ThemeToggle />
            </nav>
            
            <main className="relative p-2 flex justify-center overflow-hidden">
              {children}
            </main>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
