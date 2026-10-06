import type { Metadata } from "next";
import "./globals.css";
import "./dashboard.css";
import "./registration.css";
import "./terminal.css";
import "./login-animation.css";
import "./merchant.css";
import "./submissions.css";
import "./operations.css";
import "./field-surfaces.css";
import "./motion.css";
import "./login-video.css";
import "./landing.css";

export const metadata: Metadata = {
  title: "MAMS · Merchant Acquiring Management System",
  description: "Demo interaktif MAMS: login, dashboard, registrasi merchant, dan terminal management.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
