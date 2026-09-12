import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Steps from '@/components/Steps';

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <div style={{ background: '#fff' }}>
        <Steps />
      </div>
    </>
  );
}
