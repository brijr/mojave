import type { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import { Layout, Main, Section, Container } from "@/components/craft";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Studio Mojave | St George, Utah Design and Web Development Studio",
  description:
    "Studio Mojave is a Design and Code studio based in St George, Utah. Mojave specializes in brand design and web development. Created by Bridger Tower.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Main>
            <Section>
              <Container>{children}</Container>
            </Section>
          </Main>
        </ThemeProvider>
        <Analytics />
      </body>
    </Layout>
  );
}
