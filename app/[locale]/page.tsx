import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Steps from '@/components/Steps';
import Simulator from '@/components/Simulator';
import HomeContent from '@/components/HomeContent';
import HomeFAQ from '@/components/HomeFAQ';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Partners />
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
