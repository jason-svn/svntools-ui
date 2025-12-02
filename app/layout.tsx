import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "SvNTools Helper Scripts UI",
  description: "Community scripts browser for SvNTools"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
