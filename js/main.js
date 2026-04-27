/* ── Case study data ── */
const caseStudies = [
  {
    num: '01',
    title: 'Opal — Reimagining Public Transport Ticketing',
    role: 'UX Designer · Research & App Redesign',
    client: 'Concept Project',
    year: '2022',
    context: 'Mobile App · UX Research · Figma',
    thumbClass: 'thumb-a',
    tags: ['Mobile App', 'UX Research', 'App Redesign', 'Figma'],
    overview: `A research-led concept redesign of Sydney's Opal travel app. The project explored what a modern public transport ticketing experience could look like — drawing on international benchmarking, an audit of the current app, and a full Figma redesign covering the core user journeys.`,
    problem: `The Opal app covers the basics, but it's showing its age. Topping up takes too many taps, trip history is hard to parse, and there's no integrated journey planning. Commuters juggle the Opal app alongside Google Maps and other tools just to get through their day. Meanwhile, travel apps in cities like London, Tokyo, and Singapore offer seamless, feature-rich experiences that Sydney's system doesn't come close to matching.`,
    tools: ['Figma', 'Competitive benchmarking', 'UX audit', 'User flow mapping', 'Low-fi sketching', 'Mid-fi prototyping'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: '01 / Research — Exploring the Landscape',
        overview: ['International Benchmarking', 'Opal App Audit'],
        content: [
          {
            heading: 'International Benchmarking',
            body: `I researched public transport apps internationally — TfL Oyster (London), Suica (Tokyo), Myki (Melbourne) — documenting standout features and UX patterns worth adopting. Each offered something the Opal app lacked: smarter top-up flows, integrated journey planning, or clearer card management.`,
          },
          {
            heading: 'Opal App Audit',
            body: `I walked through the existing Opal app across four key flows — top-up, trip history, card management, and balance checks — noting friction points and missing functionality at each step. The app covered the basics, but every core task required more taps than it should.`,
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: '02 / Define — Framing the Problem',
        overview: ['Key Insights', 'Design Principles'],
        content: [
          {
            heading: 'Key Insights',
            body: `The research revealed a consistent gap: transit apps that do more require less from users. Sydney commuters were juggling the Opal app alongside Google Maps and other tools just to complete a simple journey — a fragmented experience that a single, better-designed app could fix.`,
          },
          {
            heading: 'Design Principles',
            body: `Three principles guided the redesign: <em>Reduce taps</em> — every core action achievable in fewer steps. <em>Surface what matters</em> — balance, recent trips, and top-up should never require digging. <em>Plan and pay in one place</em> — integrate journey planning to eliminate app-switching.`,
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: '03 / Ideate — Generating Solutions',
        overview: ['Navigation Concepts', 'Low-Fidelity Sketches'],
        content: [
          {
            heading: 'Navigation Concepts',
            body: `I explored several navigation patterns — bottom tabs, a card-based home screen, and a one-tap top-up widget — sketching how different entry points could reduce time-to-action for the most frequent tasks.`,
          },
          {
            heading: 'Low-Fidelity Sketches',
            body: `Quick sketches helped me work through the top-up flow, trip history view, and card management screen before committing to a direction. The focus was on reducing cognitive load and keeping the most common actions immediately visible on the home screen.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: '04 / Design — Building the Prototype',
        overview: ['Mid-Fidelity Prototype', 'Key Screens'],
        content: [
          {
            heading: 'Mid-Fidelity Prototype',
            body: `I designed a mid-fidelity Figma prototype covering four core flows: one-tap top-up from the home screen, a redesigned trip history with fare breakdowns, consolidated card management with multi-card support, and an integrated journey planner — all within a single app.`,
          },
          {
            heading: 'Key Screens',
            body: `The home screen surfaces card balance and a one-tap top-up button at a glance. The journey planner sits within the app rather than redirecting to Google Maps. Card management draws on patterns from TfL and Suica to cleanly handle multiple cards.`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes — Results & Reflection',
        overview: ['What Was Achieved', 'Tools Used', 'Reflection'],
        content: [
          {
            heading: 'What Was Achieved',
            list: [
              'Redesigned top-up flow reduced to a single tap from the home screen',
              'New trip history view with clear fare breakdowns and journey summaries',
              'Consolidated card management with multi-card support informed by TfL and Suica',
              'Integrated journey planner keeping users in one app rather than switching to Google Maps',
              'Complete mid-fidelity Figma prototype with documented design rationale',
            ],
          },
          {
            heading: 'Tools Used',
            tags: ['Figma', 'Competitive benchmarking', 'UX audit', 'User flow mapping', 'Low-fi sketching', 'Mid-fi prototyping'],
          },
          {
            heading: 'Reflection',
            body: `This project reinforced how much international benchmarking can reveal — not just what's missing, but what's possible. Working without direct user research was the main constraint; future iterations would prioritise usability testing with real commuters to validate the redesigned flows.`,
          },
        ],
      },
    ],
  },
  {
    num: '02',
    title: 'Focus — ADHD Productivity App',
    role: 'UX Designer · Concept & Prototype Lead',
    client: 'Hackathon Project · 🏆 Fan Favourite',
    year: '2022',
    context: 'Mobile App · Accessibility · 24hr Hackathon',
    thumbClass: 'thumb-b',
    tags: ['Mobile App', 'Accessibility', 'ADHD', 'Figma', '🏆 Hackathon'],
    overview: `A mobile app concept that consolidates three essential focus tools — a Pomodoro timer, brown noise, and a minimal task list — into one calm, clutter-free experience designed specifically for people with ADHD. Pitched from personal experience and hands-on research, it won Fan Favourite at a 2022 hackathon.`,
    problem: `People with ADHD who want to manage their focus without medication often piece together a Pomodoro timer, a noise app, and a to-do list from three different places. The act of switching between apps mid-session is itself a source of distraction. On top of that, most productivity apps are designed for neurotypical users — feature-heavy, visually busy, and overwhelming. There was a clear gap for something that does less, better.`,
    tools: ['Figma', 'Low-fi sketching', 'Mid-fi prototyping', 'User research', 'Accessibility heuristics'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: '01 / Research — Understanding the Problem',
        overview: ['Personal Context', 'Evidence-Based Strategies'],
        content: [
          {
            heading: 'Personal Context',
            body: `The problem was identified from lived experience with ADHD. App-switching during focus sessions — jumping between a Pomodoro timer, a noise app, and a to-do list — is itself a source of distraction that breaks concentration and often derails the whole session.`,
          },
          {
            heading: 'Evidence-Based Strategies',
            body: `I researched non-medication focus strategies proven to work for people with ADHD: the Pomodoro technique (structured work/break intervals), brown and white noise (reduces distractibility), and minimal task lists (reduces decision fatigue). These defined exactly what to include — and what to leave out.`,
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: '02 / Define — The Core Concept',
        overview: ['Problem Statement', 'Design Direction'],
        content: [
          {
            heading: 'Problem Statement',
            body: `People with ADHD who want to manage focus without medication piece together tools from multiple apps. Most productivity apps are designed for neurotypical users — feature-heavy, visually busy, and overwhelming. There's a clear gap for something that does less, better.`,
          },
          {
            heading: 'Design Direction',
            body: `One app, three tools, zero clutter. A single calm space combining a Pomodoro timer, brown noise, and a minimal task list — without the cognitive overhead of app-switching or navigating complex settings. The concept was pitched to the hackathon team and got immediate buy-in.`,
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: '03 / Ideate — Designing for Calm',
        overview: ['Interface Sketches', 'Accessibility Considerations'],
        content: [
          {
            heading: 'Interface Sketches',
            body: `Low-fidelity sketches explored how to surface three features in one interface without adding cognitive load. Key questions: should tools be tabs or layers? How do you show a Pomodoro timer and task list simultaneously? Each iteration pushed toward fewer elements, more whitespace, and calmer interactions.`,
          },
          {
            heading: 'Accessibility Considerations',
            body: `Designing for ADHD meant applying accessibility principles throughout: high contrast, no unnecessary animations, clear visual hierarchy, and minimal decision points. Every interaction was designed to require as few taps as possible — keeping users in flow rather than breaking it.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: '04 / Design — Built in 24 Hours',
        overview: ['Mid-Fidelity Prototype', 'Key Design Decisions'],
        content: [
          {
            heading: 'Mid-Fidelity Prototype',
            body: `A mid-fidelity Figma prototype was built in under 24 hours showing the full user journey — opening the app, starting a Pomodoro session, enabling brown noise, ticking off tasks. Calm visual design, generous spacing, and a muted palette were core to the feel.`,
          },
          {
            heading: 'Key Design Decisions',
            body: `The noise control is always accessible during an active session without navigating away. Tasks are minimal by design — no subtasks, tags, or due dates. The Pomodoro timer is prominent and large. Every choice reduced the surface area of distraction.`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes — Results & Reflection',
        overview: ['What Was Achieved', 'Tools Used', 'Reflection'],
        content: [
          {
            heading: 'What Was Achieved',
            list: [
              'Won "Fan Favourite" — voted by peers and judges across all entries at the 2022 hackathon',
              'Delivered a complete mid-fidelity Figma prototype in under 24 hours',
              'Concept validated immediately by colleagues with ADHD who recognised the problem and wanted the app',
              'Demonstrated how designing for neurodiversity produces better experiences for everyone',
            ],
          },
          {
            heading: 'Tools Used',
            tags: ['Figma', 'Low-fi sketching', 'Mid-fi prototyping', 'User research', 'Accessibility heuristics'],
          },
          {
            heading: 'Reflection',
            body: `This hackathon showed that the best design brief can come from personal experience. Pitching something you've lived gave the concept immediate credibility — and peer validation from colleagues with ADHD confirmed the problem was real. Next steps would include user testing with a broader ADHD community.`,
          },
        ],
      },
    ],
  },
];

/* ── Page routing ── */
function showPage(page) {
  cleanupCSProgress();
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');
  if (page === 'work') {
    document.getElementById('cs-list').style.display = '';
    document.getElementById('cs-detail').style.display = 'none';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Case study detail ── */
let csScrollHandler = null;

function showCS(idx) {
  const cs = caseStudies[idx];
  showPage('work');
  document.getElementById('cs-list').style.display = 'none';
  document.getElementById('cs-detail').style.display = '';
  document.getElementById('cs-detail-content').innerHTML = buildCSDetail(cs);
  window.scrollTo({ top: 0, behavior: 'instant' });
  initCSProgress();
}

function buildCSDetail(cs) {
  const stagesHTML = cs.stages.map((stage, i) => {
    const sidebarItems = stage.overview.map(item => {
      const id = `${stage.id}-${item.toLowerCase().replace(/[\s/&·]/g, '-')}`;
      return `<li><a class="cs-sidebar-link" href="#${id}">${item}</a></li>`;
    }).join('');

    const contentHTML = stage.content.map(block => {
      const id = block.heading
        ? `${stage.id}-${block.heading.toLowerCase().replace(/[\s/&·]/g, '-')}`
        : '';
      return `
        <div class="cs-content-block"${id ? ` id="${id}"` : ''}>
          ${block.heading ? `<h3 class="cs-content-heading">${block.heading}</h3>` : ''}
          ${block.body ? `<p>${block.body}</p>` : ''}
          ${block.list ? `<ul class="cs-v2-list">${block.list.map(li => `<li>${li}</li>`).join('')}</ul>` : ''}
          ${block.tags ? `<div class="cs-v2-tags">${block.tags.map(t => `<span class="t-tag">${t}</span>`).join('')}</div>` : ''}
        </div>`;
    }).join('');

    return `
      <section class="cs-v2-section" id="cs-s${i + 1}" data-section="${i + 1}">
        <div class="cs-stage-header"><h2>${stage.title}</h2></div>
        <div class="cs-stage-body">
          <div class="cs-stage-sidebar">
            <h3 class="cs-sidebar-heading">Overview</h3>
            <ul class="cs-sidebar-list">${sidebarItems}</ul>
          </div>
          <div class="cs-stage-main">${contentHTML}</div>
        </div>
      </section>`;
  }).join('');

  const navItems = [
    `<button class="cs-prog-item active" data-target="cs-s0">Overview</button>`,
    ...cs.stages.map((s, i) => `<button class="cs-prog-item" data-target="cs-s${i + 1}">${s.label}</button>`),
  ].join('');

  return `
    <div class="cs-v2">
      <div class="cs-v2-back">
        <button class="back-link" onclick="backToList()">← All case studies</button>
      </div>

      <section class="cs-v2-section" id="cs-s0" data-section="0">
        <div class="cs-overview-hero">
          <div class="cs-overview-visual ${cs.thumbClass}">
            <svg width="300" height="260" viewBox="0 0 300 260" fill="none">
              <rect x="25" y="25" width="250" height="210" rx="14" stroke="white" stroke-width="1.5" fill="none" opacity=".7"/>
              <rect x="48" y="55" width="160" height="14" rx="7" fill="white" opacity=".6"/>
              <rect x="48" y="80" width="110" height="8" rx="4" fill="white" opacity=".35"/>
              <rect x="48" y="104" width="204" height="60" rx="8" fill="white" opacity=".18"/>
              <rect x="48" y="178" width="100" height="30" rx="15" fill="white" opacity=".38"/>
            </svg>
          </div>
          <div class="cs-overview-intro">
            <div class="section-label">${cs.context}</div>
            <h1 class="cs-v2-title">${cs.title}</h1>
            <p class="cs-v2-sub">${cs.overview}</p>
          </div>
        </div>
        <div class="cs-overview-body">
          <div class="cs-stage-sidebar">
            <div class="cs-meta-stack">
              <div class="cs-meta-row">
                <span class="cs-meta-label">Role</span>
                <span class="cs-meta-val">${cs.role}</span>
              </div>
              <div class="cs-meta-row">
                <span class="cs-meta-label">Type</span>
                <span class="cs-meta-val">${cs.client}</span>
              </div>
              <div class="cs-meta-row">
                <span class="cs-meta-label">Year</span>
                <span class="cs-meta-val">${cs.year}</span>
              </div>
              <div class="cs-meta-row">
                <span class="cs-meta-label">Tools</span>
                <span class="cs-meta-val">${cs.tools.join(', ')}</span>
              </div>
            </div>
          </div>
          <div class="cs-stage-main">
            <div class="cs-content-block">
              <h3 class="cs-content-heading">The Problem</h3>
              <p>${cs.problem}</p>
            </div>
          </div>
        </div>
      </section>

      ${stagesHTML}

      <footer style="margin-bottom:55px">
        <span class="footer-name">Joanne Nghiem</span>
        <div class="footer-links">
          <a href="mailto:n.nghiem049@gmail.com" class="footer-link">n.nghiem049@gmail.com</a>
          <a href="https://www.linkedin.com/in/phoi-nghiem/" class="footer-link" target="_blank" rel="noopener">LinkedIn</a>
          <a href="assets/joanne-nghiem-resume.pdf" download class="footer-link">↓ Resume</a>
        </div>
      </footer>

      <div class="cs-progress" id="cs-progress">
        <div class="cs-progress-track"><div class="cs-progress-fill" id="cs-progress-fill"></div></div>
        <div class="cs-progress-nav">
          <div class="cs-prog-items">${navItems}</div>
          <button class="cs-prog-toggle" id="cs-prog-toggle" onclick="toggleCSProgress()" title="Back to top">↑</button>
        </div>
      </div>
    </div>`;
}

function initCSProgress() {
  const fill    = document.getElementById('cs-progress-fill');
  const items   = document.querySelectorAll('.cs-prog-item[data-target]');
  const sections = document.querySelectorAll('.cs-v2-section');
  if (!fill) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const target = document.getElementById(item.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  csScrollHandler = function () {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = docHeight > 0 ? (scrollTop / docHeight * 100) + '%' : '0%';

    let activeIdx = 0;
    sections.forEach((sec, i) => {
      if (sec.getBoundingClientRect().top <= window.innerHeight * 0.45) activeIdx = i;
    });
    items.forEach((item, i) => item.classList.toggle('active', i === activeIdx));
  };

  window.addEventListener('scroll', csScrollHandler, { passive: true });
  csScrollHandler();
}

function cleanupCSProgress() {
  if (csScrollHandler) {
    window.removeEventListener('scroll', csScrollHandler);
    csScrollHandler = null;
  }
}

function toggleCSProgress() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToList() {
  cleanupCSProgress();
  document.getElementById('cs-list').style.display = '';
  document.getElementById('cs-detail').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── Hero text cycle ── */
(function () {
  const statements = document.querySelectorAll('.hero-statement');
  if (!statements.length) return;
  let current = 0;
  statements[0].classList.add('is-active');
  setInterval(() => {
    const prev = current;
    current = (current + 1) % statements.length;
    statements[prev].classList.remove('is-active');
    statements[prev].classList.add('is-exit');
    statements[current].classList.add('is-active');
    setTimeout(() => statements[prev].classList.remove('is-exit'), 750);
  }, 3500);
})();

/* ── Scroll fade-in for cards ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.cs-full-card, .hcs-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  obs.observe(el);
});
