import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Lincoln Wang",
  description: "Personal website of Lincoln Wang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-semibold">
                LW
              </Link>
              <nav className="flex gap-8">
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/projects"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  href="/contact"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
