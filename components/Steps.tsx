import Reveal from './Reveal';
import { useAppState } from './AppState';

export default function Steps() {
  const { t } = useAppState();

  const steps = [
    {
      num: 1,
      title: t('steps.s1_title'),
      desc: t('steps.s1_desc'),
      icon: (
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      ),
    },
    {
      num: 2,
      title: t('steps.s2_title'),
      desc: t('steps.s2_desc'),
      icon: (
        <>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </>
      ),
    },
    {
      num: 3,
      title: t('steps.s3_title'),
      desc: t('steps.s3_desc'),
      icon: (
        <>
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </>
      ),
    },
  ];

  return (
    <section id="steps" className="section">
      <div className="container">
        <div className="sec-header center">
          <Reveal className="sec-label">{t('steps.label')}</Reveal>
          <Reveal delay={1}>
            <h2 className="sec-title">{t('steps.title')}</h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="sec-desc">{t('steps.desc')}</p>
          </Reveal>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i + 1} className="step-card">
              <div className="step-ico-wrap">
                <span className="step-num">{s.num}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  {s.icon}
                </svg>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
