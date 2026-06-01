import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IQ Liber Pvt. Ltd | High-End Custom Software & Web/Mobile App Engineering",
  description: "Experience modern innovation with IQ Liber Pvt. Ltd. We design premium custom software systems, interactive mobile/web applications, growth analytics, branding, and digital marketing engines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
      style={{ scrollBehavior: 'auto' }}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-base text-text-main font-sans selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}

