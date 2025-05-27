import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Customer Service Kiosk",
  description: "Mobile-friendly ticketing system for customer support",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap"
        />
      </head>
      <body
        className="min-h-screen bg-gray-50"
        style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
