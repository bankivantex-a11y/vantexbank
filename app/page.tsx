import { AppStateProvider } from '@/components/AppState';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import Simulator from '@/components/Simulator';
import Conditions from '@/components/Conditions';
import Testimonials from '@/components/Testimonials';
import Trust from '@/components/Trust';
import Footer from '@/components/Footer';
import AuthModal from '@/components/AuthModal';
import AppModal from '@/components/AppModal';

export default function Home() {
  return (
    <AppStateProvider>
      <Navbar />
      <Hero />
      <Steps />
      <Simulator />
      <Conditions />
      <Testimonials />
      <Trust />
      <Footer />
      <AuthModal />
      <AppModal />
    </AppStateProvider>
  );
}
