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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://virxyd.com';
  const locales = ['fr', 'en', 'kw', 'sl', 'es', 'lt', 'de', 'it', 'hr', 'lv'];

  // Construire dynamiquement les liens hreflang pour Google
  const languageAlternates: Record<string, string> = {};
  locales.forEach((l) => {
    languageAlternates[l] = `${baseUrl}/${l}`;
  });

  const title = dict.hero.title + ' | Virxyd';
  const description = dict.hero.desc;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Virxyd',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/images/virxyd-brand-glow.png',
          width: 1200,
          height: 630,
          alt: 'Virxyd Financement',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/virxyd-brand-glow.png'],
    },
    icons: {
      icon: '/images/favicon/virxyd.png',
      shortcut: '/images/favicon/virxyd.png',
      apple: '/images/favicon/virxyd.png',
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
