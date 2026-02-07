import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFixedButtons from "@/components/MobileFixedButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home - Global Nexus Inc",
  description: "Swift and Secure Money Transfer to any UK bank account will become a breeze with Global Nexus Inc.",
  keywords: "banking, credit union, savings, loans, financial services, online banking",
  icons: {
    icon: "https://globalnexusincorp.com/storage/app/public/photos/D1UAzCMna99e0rqx4JVKwiezdm9NCcVdODs85WTo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/gh/aquawolf04/font-awesome-pro@5cd1511/css/all.css" 
        />
        <Script id="dark-mode-init" strategy="beforeInteractive">
          {`
            const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
                              (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
            if (isDarkMode) {
              document.documentElement.classList.add('dark');
            }
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <MobileFixedButtons position="top" />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <MobileFixedButtons position="bottom" />
      </body>
    </html>
  );
}
