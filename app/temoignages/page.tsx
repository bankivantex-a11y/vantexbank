import Testimonials from '@/components/Testimonials';
import Reveal from '@/components/Reveal';

export default function TemoignagesPage() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="container">
          <div className="sec-header center">
            <Reveal>
              <div className="sec-label">Témoignages</div>
              <h1 className="sec-title">Ils nous font confiance</h1>
              <p className="sec-desc">
                Découvrez les expériences de nos clients qui ont réalisé leurs projets grâce à Vantex Bank.
              </p>
            </Reveal>
          </div>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}
