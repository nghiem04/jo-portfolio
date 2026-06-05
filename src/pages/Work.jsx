import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { asset } from '../utils/assets';
import { useFadeInCards } from '../hooks/useFadeInCards';
import Footer from '../components/Footer';

// Per-card list metadata (mirrors the original Case Studies list view).
const listMeta = {
  opal: {
    desc: 'Interviews revealed a consistent fragmentation pattern: TripView for live status, Google Maps for routing, Opal for payment only. The redesign consolidated the workflow into a single surface, prioritising saved-route access and real-time disruption alerts at the highest-friction moment of the commuting day.',
    meta: [
      { label: 'Type', val: 'Independent UX Case Study' },
      { label: 'Year', val: '2024' },
      { label: 'Role', val: 'Research + Design' },
    ],
  },
  focus: {
    desc: 'Research identified a consistent failure point: the task list requires self-direction before any work can begin, and that decision is exactly where initiation breaks down. Focus replaces it with a conversational assistant that selects the next task and presents it, eliminating the planning step that was driving avoidance. Validated through moderated testing within a 3-day sprint.',
    meta: [
      { label: 'Type', val: 'Rapid Concept Validation' },
      { label: 'Year', val: '2022' },
      { label: 'Award', val: '🏆 Fan Favourite' },
    ],
  },
};

export default function Work() {
  useFadeInCards();

  return (
    <div className="page active">
      <div id="cs-list">
        <div className="cs-page-hero">
          <div className="section-label">Case studies</div>
          <h2 className="section-title">What I've designed recently</h2>
          <p className="section-sub">User Design case studies spanning research, synthesis, and design. Each grounded in real user behaviour and carried through to a working prototype.</p>
        </div>

        <div className="cs-disclaimer">
          Due to NDA and client confidentiality agreements, the work presented here consists of self-initiated or conceptual projects that reflect my process and capabilities.
        </div>

        <div className="cs-page-grid">
          {caseStudies.map((cs, i) => {
            const m = listMeta[cs.slug];
            const flip = i % 2 === 1;
            return (
              <div className={`cs-full-card${flip ? ' flip' : ''}`} key={cs.slug}>
                <div className={`cs-full-thumb ${cs.thumbClass}`}>
                  <img src={asset(cs.heroImage)} alt={cs.heroImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                </div>
                <div className="cs-full-body">
                  <div className="cs-num">{cs.num}</div>
                  <div className="cs-full-name">{cs.title}</div>
                  <p className="cs-full-desc">{m.desc}</p>
                  <div className="cs-meta">
                    {m.meta.map((item) => (
                      <div className="cs-meta-item" key={item.label}>
                        <div className="cs-meta-label">{item.label}</div>
                        <div className="cs-meta-val">{item.val}</div>
                      </div>
                    ))}
                  </div>
                  <Link className="cs-arrow" to={`/work/${cs.slug}`}>Read case study →</Link>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </div>
  );
}
