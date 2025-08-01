import type { Metadata } from "next";
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
  title: "ADmyBrand App",
  description: "Generated by Abhinav Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global Animated SVG Blob Background */}
        <svg
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none"
          width="1600" height="1200" viewBox="0 0 1200 900" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: "blur(80px)", opacity: 0.25 }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="global-hero-gradient" x1="0" y1="0" x2="1200" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3b82f6" />
              <stop offset="0.5" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <path>
            <animate attributeName="d" dur="16s" repeatCount="indefinite"
              values="M 600 200 Q 900 250 800 600 Q 700 900 400 800 Q 100 700 200 400 Q 300 100 600 200 Z;
                      M 600 250 Q 950 300 850 650 Q 700 900 350 850 Q 100 700 250 350 Q 400 100 600 250 Z;
                      M 600 200 Q 900 250 800 600 Q 700 900 400 800 Q 100 700 200 400 Q 300 100 600 200 Z" />
          </path>
          <path
            d="M 600 200 Q 900 250 800 600 Q 700 900 400 800 Q 100 700 200 400 Q 300 100 600 200 Z"
            fill="url(#global-hero-gradient)"
          />
        </svg>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
