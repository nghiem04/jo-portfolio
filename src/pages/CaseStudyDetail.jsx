import { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getCaseStudy } from '../data/caseStudies';
import { asset, withBaseHtml } from '../utils/assets';

const slugify = (text) => text.toLowerCase().replace(/[\s/&·]/g, '-');

// Render an embedded HTML snippet (image / table / generic) with the same
// wrappers the original buildCSDetail used.
function Embed({ html, kind = 'after' }) {
  if (!html) return null;
  const t = html.trimStart();
  const fixed = withBaseHtml(html);
  if (t.startsWith('<img')) {
    return <div className="cs-problem-image" dangerouslySetInnerHTML={{ __html: fixed }} />;
  }
  if (t.startsWith('<table')) {
    return <div className="cs-table-wrap" dangerouslySetInnerHTML={{ __html: fixed }} />;
  }
  return (
    <div className="cs-placeholder"><span dangerouslySetInnerHTML={{ __html: fixed }} /></div>
  );
}

function ContentBlock({ stageId, block }) {
  const id = block.heading ? `${stageId}-${slugify(block.heading)}` : undefined;
  return (
    <div className="cs-content-block" id={id}>
      {block.heading && <h3 className="cs-content-heading">{block.heading}</h3>}
      <Embed html={block.placeholder} />
      {block.body && <p dangerouslySetInnerHTML={{ __html: withBaseHtml(block.body) }} />}
      {block.list && (
        <ul className="cs-v2-list">
          {block.list.map((li, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: withBaseHtml(li) }} />
          ))}
        </ul>
      )}
      {block.afterList && (
        <div dangerouslySetInnerHTML={{ __html: withBaseHtml(block.afterList) }} />
      )}
      <Embed html={block.placeholderAfter} />
      {block.tags && (
        <div className="cs-v2-tags">
          {block.tags.map((t) => <span className="t-tag" key={t}>{t}</span>)}
        </div>
      )}
    </div>
  );
}

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cs = getCaseStudy(slug);
  const [activeIdx, setActiveIdx] = useState(0);

  // Jump to top whenever a new case study loads.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Scroll progress bar + active-section tracking (ports initCSProgress).
  useEffect(() => {
    if (!cs) return;
    const fill = document.getElementById('cs-progress-fill');
    const sections = document.querySelectorAll('.cs-v2-section');
    if (!fill) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      fill.style.width = docHeight > 0 ? (scrollTop / docHeight) * 100 + '%' : '0%';

      let idx = 0;
      sections.forEach((sec, i) => {
        if (sec.getBoundingClientRect().top <= window.innerHeight * 0.45) idx = i;
      });
      setActiveIdx(idx);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [cs]);

  if (!cs) return <Navigate to="/work" replace />;

  const scrollToSection = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { target: 'cs-s0', label: 'Overview' },
    ...cs.stages.map((s, i) => ({ target: `cs-s${i + 1}`, label: s.label })),
  ];

  return (
    <div className="page active">
      <div className="cs-v2">
        <div className="cs-v2-back">
          <button className="back-link" onClick={() => navigate('/work')}>← All case studies</button>
        </div>

        {/* Overview / hero */}
        <section className="cs-v2-section" id="cs-s0" data-section="0">
          <div className="cs-overview-hero">
            <div className={`cs-overview-visual ${cs.thumbClass}`}>
              <img src={asset(cs.heroImage)} alt={cs.heroImageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
            </div>
            <div className="cs-overview-intro">
              <div className="section-label">{cs.context}</div>
              <h1 className="cs-v2-title">{cs.title}</h1>
              <p className="cs-v2-sub" dangerouslySetInnerHTML={{ __html: withBaseHtml(cs.overview) }} />
              {cs.overviewLink && (
                <div className="cs-proto-btn-wrap" dangerouslySetInnerHTML={{ __html: cs.overviewLink }} />
              )}
            </div>
          </div>

          <div className="cs-overview-body">
            <div className="cs-stage-sidebar">
              <div className="cs-meta-stack">
                <div className="cs-meta-row"><span className="cs-meta-label">Role</span><span className="cs-meta-val">{cs.role}</span></div>
                {cs.team && <div className="cs-meta-row"><span className="cs-meta-label">Team</span><span className="cs-meta-val">{cs.team}</span></div>}
                <div className="cs-meta-row"><span className="cs-meta-label">Type</span><span className="cs-meta-val">{cs.client}</span></div>
                <div className="cs-meta-row"><span className="cs-meta-label">Year</span><span className="cs-meta-val">{cs.year}</span></div>
                <div className="cs-meta-row"><span className="cs-meta-label">Tools</span><span className="cs-meta-val">{cs.tools.join(', ')}</span></div>
              </div>
            </div>
            <div className="cs-stage-main">
              <div className="cs-content-block">
                <h3 className="cs-content-heading">{cs.problemHeading || 'The Problem'}</h3>
                {cs.problemPart1 ? (
                  <>
                    <p dangerouslySetInnerHTML={{ __html: withBaseHtml(cs.problemPart1) }} />
                    {cs.problemPlaceholder && (
                      <div className="cs-problem-image" dangerouslySetInnerHTML={{ __html: withBaseHtml(cs.problemPlaceholder) }} />
                    )}
                    <p dangerouslySetInnerHTML={{ __html: withBaseHtml(cs.problemPart2) }} />
                  </>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: withBaseHtml(cs.problem) }} />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stages */}
        {cs.stages.map((stage, i) => (
          <section className="cs-v2-section" id={`cs-s${i + 1}`} data-section={i + 1} key={stage.id}>
            <div className="cs-stage-header"><h2>{stage.title}</h2></div>
            <div className="cs-stage-body">
              <div className="cs-stage-sidebar">
                <h3 className="cs-sidebar-heading">Overview</h3>
                <ul className="cs-sidebar-list">
                  {stage.overview.map((item) => (
                    <li key={item}>
                      <a className="cs-sidebar-link" href={`#${stage.id}-${slugify(item)}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cs-stage-main">
                {stage.content.map((block, bi) => (
                  <ContentBlock stageId={stage.id} block={block} key={bi} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Progress nav */}
        <div className="cs-progress" id="cs-progress">
          <div className="cs-progress-track"><div className="cs-progress-fill" id="cs-progress-fill" /></div>
          <div className="cs-progress-nav">
            <div className="cs-prog-items">
              {navItems.map((item, i) => (
                <button
                  key={item.target}
                  className={`cs-prog-item${i === activeIdx ? ' active' : ''}`}
                  onClick={() => scrollToSection(item.target)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="cs-prog-toggle" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Back to top">↑</button>
          </div>
        </div>
      </div>
    </div>
  );
}
