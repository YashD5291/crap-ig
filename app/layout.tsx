import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instagram",
  description: "Instagram login page clone",
  icons: {
    icon: "/instagram-favicon.ico",
    shortcut: "/instagram-favicon.ico",
    apple: "/instagram-favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/instagram-favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/instagram-favicon.ico" />
        <link rel="apple-touch-icon" href="/instagram-favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
