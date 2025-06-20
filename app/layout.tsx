import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Guess the Country | flags.games",
  description: "Test your knowledge and identify countries by their flags",
  openGraph: {
    title: "Guess the Country | flags.games",
    description: "Test your knowledge and identify countries by their flags",
    url: "https://www.flags.games",
    siteName: "flags.games",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guess the Country | flags.games",
    description: "Test your knowledge and identify countries by their flags",
  },
  applicationName: "flags.games",
  metadataBase: new URL("https://www.flags.games"),
  alternates: {
    canonical: "https://www.flags.games/",
  },
  keywords: ["flag guessing game", "country guessing game"],
  authors: [{ name: "Xurify" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get("theme")?.value;
  const isDark = theme === "dark";
  return (
    <html lang="en" className={isDark ? `dark` : undefined}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
