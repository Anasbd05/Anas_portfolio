import type {Metadata} from "next";
import {Inter,Outfit} from "next/font/google";
import "./globals.css";

const headingFont = Outfit({
  variable: "--font-head",
  subsets: ["latin"],
  weight: ['300',"400","500","600","700"]
});
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anas Portfolio",
  description: "Anas tryiing Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true"
        className={`${inter.className} ${headingFont.variable} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
