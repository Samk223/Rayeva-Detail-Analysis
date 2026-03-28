import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Rayeva Pvt LMT - Website Analysis',
  description: 'Comprehensive analysis and strategic roadmap for Rayeva platform.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#F5F5F0] text-[#1A1A1A] selection:bg-[#E67E22] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
