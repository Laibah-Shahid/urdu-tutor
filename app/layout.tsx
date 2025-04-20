import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Urdu Tutor",
  description: "Interactive Urdu tutoring for kids",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}