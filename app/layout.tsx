import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';
import { AppStateProvider } from '@/components/AppState';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import AppModal from '@/components/AppModal';
import LoadingOverlay from '@/components/LoadingOverlay';
import CookieBanner from '@/components/CookieBanner';

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

export const metadata: Metadata = {
  title: 'Vantex Bank — Prêt en ligne rapide & sécurisé',
  description:
    'Vantex Bank vous accompagne dans tous vos projets de vie. Obtenez votre financement en quelques étapes, 100% en ligne.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${dmSerif.variable}`}>
      <body>
        <AppStateProvider>
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
