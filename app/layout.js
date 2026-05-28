import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = DM_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Outfit({
  variable: "--font-inter-font",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Spinoff Studio — Where Brands Get Built",
  description:
    "Spinoff Studio is a growth-focused social media agency helping founders, creators, and modern brands scale through platform-native content, strategic positioning, and performance-driven creative execution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
