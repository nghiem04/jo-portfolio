import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { asset } from '../utils/assets';
import { useFadeInCards } from '../hooks/useFadeInCards';
import Footer from '../components/Footer';

const heroStatements = [
  <>I design products that make complexity feel <em>simple</em></>,
  <>I bring a builder’s mindset to <em>product design</em></>,
  <>I solve for <em>people, systems, and real behaviour</em></>,
  <>I care about the details that make products feel <em>thoughtful</em></>,
];

function HeroCycle() {
  // Cycles the hero statements with the same timing as the original site.
  useEffect(() => {
    const statements = document.querySelectorAll('.hero-statement');
    if (!statements.length) return;
    let current = 0;
    statements[0].classList.add('is-active');
    const id = setInterval(() => {
      const prev = current;
      current = (current + 1) % statements.length;
      statements[prev].classList.remove('is-active');
      statements[prev].classList.add('is-exit');
      statements[current].classList.add('is-active');
      setTimeout(() => statements[prev].classList.remove('is-exit'), 750);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-cycle-wrap anim d2">
      {heroStatements.map((s, i) => (
        <h1 className="hero-statement" key={i}>{s}</h1>
      ))}
    </div>
  );
}

export default function Home() {
  useFadeInCards();

  const opal = caseStudies.find((c) => c.slug === 'opal');
  const focus = caseStudies.find((c) => c.slug === 'focus');

  if (!opal || !focus) return null;

  return (
    <div className="page active">
      <div className="hero">
        <div className="hero-kicker anim d1">Welcome! I'm Joanne <span className="kicker-spark">✦</span></div>
        <HeroCycle />
        <div className="hero-bottom anim d3">
          <p className="hero-desc">My work sits at the intersection of product design, frontend thinking, and systems problem-solving. I'm interested in how people actually behave, where experiences break down, and how thoughtful design can make complex products feel easier to use.</p>
        </div>
      </div>
      <div className="home-cs-rows">
        <div className="home-cs-header">
          <div className="cs-pill-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            Case Studies
          </div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>What I've designed recently</h2>
          <p className="cs-disclaimer" style={{ margin: '0.75rem 0 0', padding: 0 }}>Due to client confidentiality, selected work includes self-initiated and conceptual projects that showcase my product thinking, design process, and approach to solving complex problems.</p>
        </div>

        {/* Card 1: Opal */}
        <div className="hcs-card">
          <div className="hcs-card-body">
            <div className="hcs-card-label">Conceptual Project · Behavioural Insights</div>
            <h3 className="hcs-card-title">{opal.title}</h3>
            <p className="hcs-card-desc">Commuters were relying on TripView, Google Maps, and Opal across one fragmented journey. I redesigned Opal around saved routes, live disruptions, and faster decision-making during high-friction commute moments.</p>
            <div className="hcs-card-tags">
              <span className="hcs-pill-tag">User research</span>
              <span className="hcs-pill-tag">Behavioural insights</span>
              <span className="hcs-pill-tag">Mobile UX</span>
            </div>
            <div className="hcs-card-actions">
              <Link className="hcs-btn-primary" to={`/work/${opal.slug}`}>View case study</Link>
            </div>
          </div>
          <div className="hcs-card-visual thumb-a">
            <img src={asset(opal.heroImage)} alt={opal.heroImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
          </div>
        </div>

        {/* Card 2: Focus */}
        <div className="hcs-card">
          <div className="hcs-card-visual thumb-b">
            <img src={asset(focus.heroImage)} alt={focus.heroImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
          </div>
          <div className="hcs-card-body">
            <div className="hcs-card-label">Hackathon · AI Assisted Productivity</div>
            <h3 className="hcs-card-title">Focus</h3>
            <p className="hcs-card-desc">Research showed task initiation often failed at prioritisation. Focus uses a conversational assistant to recommend one next step, reducing decision fatigue and helping users start faster.</p>
            <div className="hcs-card-tags">
              <span className="hcs-pill-tag">Conversational AI</span>
              <span className="hcs-pill-tag">Design sprint</span>
              <span className="hcs-pill-tag">Moderated testing</span>
            </div>
            <div className="hcs-card-actions">
              <Link className="hcs-btn-primary" to={`/work/${focus.slug}`}>View case study</Link>
            </div>
          </div>
        </div>

        {/* Card 3: Carer Companion — in progress, no detail page yet */}
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
              <span className="cs-arrow cs-arrow-wip">Case study in progress — check back soon</span>
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
  );
}
