import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import '../globals.css';
import { AppStateProvider } from '@/components/AppState';
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

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: dict.hero.title + ' | Vantex Bank',
    description: dict.hero.desc,
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dictionary = await getDictionary(params.locale);

  return (
    <html lang={params.locale} className={`${inter.variable} ${dmSerif.variable}`}>
      <body>
        <AppStateProvider initialLocale={params.locale.toUpperCase()} initialDictionary={dictionary}>
          <LoadingOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AppModal />
          <CookieBanner />
        </AppStateProvider>
      </body>
    </html>
  );
}
