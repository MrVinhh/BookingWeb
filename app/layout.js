import "./globals.css";
import ClientLayout from "@/components/layout";
import { LanguageProvider } from "@/components/LanguageContext";

// CORRECT: Import fonts from Google Fonts via next/font/google
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "23Homestay",
  description: "Help booking easy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
