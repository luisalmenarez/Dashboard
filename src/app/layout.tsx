import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Noto_Sans_Display } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={noto.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
