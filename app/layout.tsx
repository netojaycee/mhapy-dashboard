import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mhapy Therapist Dashboard",
  description:
    "Professional therapist dashboard for managing clients, sessions, schedules, and practice analytics. Streamline your mental health practice with mhapy.",
  keywords: [
    "therapist",
    "mental health",
    "dashboard",
    "practice management",
    "client management",
    "therapy sessions",
    "mental health professionals",
  ],
  authors: [{ name: "mhapy" }],
  creator: "mhapy",
  publisher: "mhapy",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://portal.mhapy.com"
  ),
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portal.mhapy.com",
    siteName: "mhapy Therapist Dashboard",
    title: "mhapy Therapist Dashboard",
    description:
      "Professional therapist dashboard for managing clients, sessions, schedules, and practice analytics.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "mhapy Therapist Dashboard",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "mhapy Therapist Dashboard",
    description:
      "Professional therapist dashboard for managing clients, sessions, schedules, and practice analytics.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#441890" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="mhapy Dashboard"
        />
        <link rel="canonical" href="https://dashboard.mhapy.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
