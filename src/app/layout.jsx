import { Manrope, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import { themeInitScript } from "./theme-script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Ashwini Bheemireddy | Portfolio",
  description:
    "A modern portfolio built with Next.js and Tailwind CSS, showcasing experience, skills, education, and projects.",
  metadataBase: new URL("https://my-portfolio-ky55.onrender.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
