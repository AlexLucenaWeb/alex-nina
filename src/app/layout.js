import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Nina and Alex",
  description: "Nina and Alex wedding page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}
