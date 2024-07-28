import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Ultimate Todo App",
  description:
    "this todo app is the simplest and best combination to you to you to keep your thoughts and ideas in reach at any time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin_Sans.className} bg-gray dark:bg-dark-blue-veryDark`}
      >
        {children}
      </body>
    </html>
  );
}
