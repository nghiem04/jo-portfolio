import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { asset } from '../utils/assets';
import { useFadeInCards } from '../hooks/useFadeInCards';
import Footer from '../components/Footer';

export default function Work() {
  useFadeInCards();

  return (
    <div className="page active">
      <div id="cs-list">
        <div className="cs-page-hero">
          <div className="section-label">Case studies</div>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">Product design case studies exploring research, synthesis, systems thinking, and prototyping. Each one grounded in real user behaviour and shaped into practical product solutions.</p>
        </div>

        <div className="cs-disclaimer">
          Much of my professional work is protected by confidentiality agreements. The projects featured here showcase my approach to simplifying complex problems through research, systems thinking, and product design.
        </div>

        <div className="cs-page-grid" style={{ display: 'block' }}>
          {caseStudies.map((cs, i) => {
            const m = cs.card ?? { label: 'Product Design', desc: cs.overview ?? '', tags: cs.tags ?? [] };
            const visual = (
              <div className={`hcs-card-visual ${cs.thumbClass}`}>
                <img src={asset(cs.heroImage)} alt={cs.heroImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
              </div>
            );
            const body = (
              <div className="hcs-card-body">
                <div className="hcs-card-label">{m.label}</div>
                <h3 className="hcs-card-title">{cs.title}</h3>
                <p className="hcs-card-desc">{m.desc}</p>
                <div className="hcs-card-tags">
                  {m.tags.map((tag) => (
                    <span className="hcs-pill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="hcs-card-actions">
                  <Link className="hcs-btn-primary" to={`/work/${cs.slug}`}>View case study</Link>
                </div>
              </div>
            );
            // Alternate the visual side, matching the homepage layout.
            const flip = i % 2 === 1;
            return (
              <div className="hcs-card" key={cs.slug}>
                {flip ? <>{visual}{body}</> : <>{body}{visual}</>}
              </div>
            );
          })}

          {/* In-progress preview — no detail page yet */}
          <div className="hcs-card hcs-card-wip" aria-label="Carer Companion — case study in progress">
            <div className="hcs-card-body">
              <div className="hcs-card-label">Self-initiated · Service Design</div>
              <h3 className="hcs-card-title">Carer Companion</h3>
              <p className="hcs-card-desc">An early-stage service design project exploring how adult children coordinate care across family members, healthcare providers, appointments, and scattered information.</p>
              <div className="hcs-card-tags">
                <span className="hcs-pill-tag">Service design</span>
                <span className="hcs-pill-tag">Care coordination</span>
                <span className="hcs-pill-tag">Systems thinking</span>
              </div>
              <div className="hcs-card-actions">
                <span className="cs-arrow cs-arrow-wip">Case study currently being developed</span>
              </div>
            </div>
            <div className="hcs-card-visual cs-wip-thumb">
              <span className="cs-wip-badge"><span className="cs-wip-dot" aria-hidden="true" />In progress</span>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="2.6" />
                <circle cx="4" cy="5" r="1.7" />
                <circle cx="20" cy="5" r="1.7" />
                <circle cx="4" cy="19" r="1.7" />
                <circle cx="20" cy="19" r="1.7" />
                <path d="M10.1 10.4 5.4 6.3M13.9 10.4 18.6 6.3M10.1 13.6 5.4 17.7M13.9 13.6 18.6 17.7" />
              </svg>
              <span className="cs-wip-caption">Care ecosystem · Service design</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
