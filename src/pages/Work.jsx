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

          {/* In-progress preview — no detail page yet */}
          <div className="cs-full-card cs-card-wip" aria-label="Carer Companion — case study in progress">
            <div className="cs-full-thumb cs-wip-thumb">
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
            <div className="cs-full-body">
              <div className="cs-num">03</div>
              <div className="cs-full-name">Carer Companion</div>
              <p className="cs-full-desc">As Australia's population ages, more adult children are becoming informal carers for their parents. Through personal experience, I found the challenge wasn't a lack of tools — it was the fragmentation of information across family members, healthcare providers, and communication channels. This project explores how a shared care platform could reduce the mental load of coordinating care and help families care with greater confidence.</p>
              <div className="cs-meta">
                <div className="cs-meta-item">
                  <div className="cs-meta-label">Type</div>
                  <div className="cs-meta-val">Self-initiated · Service Design</div>
                </div>
                <div className="cs-meta-item">
                  <div className="cs-meta-label">Focus</div>
                  <div className="cs-meta-val">Care coordination</div>
                </div>
                <div className="cs-meta-item">
                  <div className="cs-meta-label">Status</div>
                  <div className="cs-meta-val">Research in progress</div>
                </div>
              </div>
              <span className="cs-arrow cs-arrow-wip">Case study in progress — check back soon</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
