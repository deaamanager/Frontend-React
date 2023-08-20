import GoogleAnalytics from "@/components/GoogleAnalytics";

import "../globals.css";

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
        <GoogleAnalytics GA_MEASUREMENT_ID="G-FLSVT5K5VH" />
      </head>
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
