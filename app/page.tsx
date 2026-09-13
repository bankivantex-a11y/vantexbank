import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Steps from '@/components/Steps';
import Simulator from '@/components/Simulator';
import HomeContent from '@/components/HomeContent';
import HomeFAQ from '@/components/HomeFAQ';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <HomeContent />
      <Simulator />
      <div style={{ background: '#fff' }}>
        <Steps />
      </div>
      <Testimonials />
      <HomeFAQ />
    </>
  );
}
