import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deaa Aldin Alawad",
  description: "Generated by Deaa Aldin Alawad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width,inital-scale=1" name="viewport" />
        <link rel="icon" href="/dea.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
