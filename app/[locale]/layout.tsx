import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import '../globals.css';
import { AppStateProvider, Locale } from '@/components/AppState';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import AppModal from '@/components/AppModal';
import LoadingOverlay from '@/components/LoadingOverlay';
import CookieBanner from '@/components/CookieBanner';
import { getDictionary } from '@/lib/get-dictionary';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.hero.title + ' | Vantex Bank',
    description: dict.hero.desc,
    icons: {
      icon: '/images/favicon/logo.png',
      shortcut: '/images/favicon/logo.png',
      apple: '/images/favicon/logo.png',
    }
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${dmSerif.variable}`}>
      <body>
        <AppStateProvider initialLocale={locale.toUpperCase() as Locale} initialDictionary={dictionary}>
          <LoadingOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AuthModal />
          <AppModal />
          <CookieBanner />
        </AppStateProvider>
      </body>
    </html>
  );
}
