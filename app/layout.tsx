import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Typing Test Online | Improve Speed & Accuracy",
  description:
    "Practice typing online with our free typing tutor. Improve your typing speed, accuracy, and WPM with real-time feedback.",
  keywords: [
    "typing test online",
    "typing speed test",
    "free typing tutor",
    "improve typing speed",
    "learn typing fast",
  ],
  verification: {
    google: "j4eGOY39eqeYbZrzAozSkHkE536hVVNBa_PY8Y3wcWw",
  },
  openGraph: {
    title: "Free Typing Test Online",
    description: "Improve your typing speed with real-time feedback",
    url: "https://typingmaster-woad.vercel.app/",
    siteName: "Typing Master",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
