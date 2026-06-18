import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "Ashwini Bheemireddy | Portfolio",
  description:
    "A modern portfolio built with Next.js and Tailwind CSS, showcasing experience, skills, education, and projects.",
  metadataBase: new URL("https://my-portfolio-ky55.onrender.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
