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
    process: [
      'Researched public transport apps internationally — TfL Oyster (London), Suica (Tokyo), Myki (Melbourne) — documenting standout features and UX patterns worth adopting',
      'Audited the existing Opal app, walking through key flows: top-up, trip history, card management, and balance checks — noting friction points and missing functionality at each step',
      'Synthesised findings into design principles: reduce taps, surface what matters, plan and pay in one place',
      'Explored navigation and layout options through low-fidelity sketches before committing to a direction',
      'Designed a mid-fidelity Figma prototype covering the redesigned top-up flow, trip history, card management, and an integrated journey planner',
    ],
    outcomes: [
      'Redesigned top-up flow reduced to a single tap from the home screen',
      'New trip history view with clear fare breakdowns and journey summaries',
      'Consolidated card management with multi-card support informed by TfL and Suica',
      'Integrated journey planner keeping users in one app rather than switching to Google Maps',
      'Delivered as a complete mid-fidelity Figma prototype with documented design rationale',
    ],
    tools: ['Figma', 'Competitive benchmarking', 'UX audit', 'User flow mapping', 'Low-fi sketching', 'Mid-fi prototyping'],
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
    process: [
      'Identified the core problem from personal experience with ADHD: app-switching during focus sessions breaks concentration and derails the whole session',
      'Researched evidence-based, non-medication focus strategies used by people with ADHD — Pomodoro technique, brown and white noise, minimal task lists — to define exactly what the app needed to include (and what to leave out)',
      'Pitched the concept to the hackathon team: one app, three tools, zero clutter — and got buy-in to run with it',
      'Sketched low-fidelity flows to work out how to surface three features in a single interface without adding cognitive load',
      'Built a mid-fidelity Figma prototype showing the full user journey — opening the app, starting a session, using noise, ticking off tasks — with calm visual design and minimal interaction steps',
      'Presented the design rationale, user research, and accessibility considerations to peers and judges',
    ],
    outcomes: [
      'Won "Fan Favourite" — voted by peers and judges across all entries at the 2022 hackathon',
      'Delivered a complete mid-fidelity Figma prototype in under 24 hours',
      'Concept validated immediately by colleagues with ADHD who recognised the problem and wanted the app',
      'Demonstrated how designing for neurodiversity produces better experiences for everyone',
    ],
    tools: ['Figma', 'Low-fi sketching', 'Mid-fi prototyping', 'User research', 'Accessibility heuristics'],
  },
  {
    num: '03',
    title: 'ServiceNow — Enterprise Portal Redesign',
    role: 'UX Designer · Concept Project',
    client: 'Concept Project',
    year: '2024',
    context: 'Web UX · Design Systems · Accessibility',
    thumbClass: 'thumb-c',
    tags: ['Web UX', 'Design Systems', 'WCAG', 'Enterprise', 'Figma'],
    overview: `A concept redesign of an enterprise IT service portal — the kind of tool employees use to log support tickets, request software, and track approvals. The project focused on reducing friction for non-technical users while maintaining consistency with the existing design system.`,
    problem: `Enterprise portals are notorious for being clunky. Employees often don't know where to find what they need, forms are long and confusing, and the status of a submitted request is opaque. The result: IT teams get flooded with follow-up calls and employees waste time on tasks that should take seconds.`,
    process: [
      'Audited an existing enterprise portal experience, mapping the most common user tasks and identifying the biggest friction points',
      'Defined three priority journeys: submitting a request, checking request status, and finding self-service help articles',
      'Sketched low-fidelity concepts exploring simplified navigation and a clearer request flow',
      'Designed a mid-fidelity Figma prototype with a redesigned home dashboard, streamlined request form, and a live status tracker',
      'Applied WCAG 2.1 AA accessibility standards throughout — ensuring keyboard navigation, sufficient contrast, and screen reader-compatible structure',
    ],
    outcomes: [
      'Simplified request flow from 7 steps to 3 with progressive disclosure',
      'New status dashboard giving employees clear visibility of in-progress and completed requests',
      'Accessible component designs meeting WCAG 2.1 AA, documented for design system integration',
      'Delivered as a complete mid-fidelity Figma prototype with annotated design decisions',
    ],
    tools: ['Figma', 'UX audit', 'Low-fi sketching', 'Mid-fi prototyping', 'WCAG 2.1 AA', 'Design systems'],
  },
];

/* ── Page routing ── */
function showPage(page) {
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
function showCS(idx) {
  const cs = caseStudies[idx];
  showPage('work');

  document.getElementById('cs-list').style.display = 'none';
  document.getElementById('cs-detail').style.display = '';

  const tagHTML     = cs.tags.map(t => `<span class="cs-tag">${t}</span>`).join('');
  const toolHTML    = cs.tools.map(t => `<span class="t-tag">${t}</span>`).join('');
  const processList = cs.process.map(p => `<li>${p}</li>`).join('');
  const outcomeList = cs.outcomes.map(o => `<li>${o}</li>`).join('');

  document.getElementById('cs-detail-content').innerHTML = `
    <div style="padding: 2.5rem 3rem 0; max-width:1200px; margin:0 auto;">
      <button class="back-link" onclick="backToList()">← All case studies</button>
    </div>

    <div class="cs-detail-hero">
      <div class="cs-detail-thumb-lg ${cs.thumbClass}">
        <svg width="300" height="260" viewBox="0 0 300 260" fill="none">
          <rect x="25" y="25" width="250" height="210" rx="14" stroke="white" stroke-width="1.5" fill="none" opacity=".7"/>
          <rect x="48" y="55" width="160" height="14" rx="7" fill="white" opacity=".6"/>
          <rect x="48" y="80" width="110" height="8" rx="4" fill="white" opacity=".35"/>
          <rect x="48" y="104" width="204" height="60" rx="8" fill="white" opacity=".18"/>
          <rect x="48" y="178" width="100" height="30" rx="15" fill="white" opacity=".38"/>
        </svg>
      </div>
      <div>
        <div class="section-label">${cs.context}</div>
        <h2 class="cs-detail-title">${cs.title}</h2>
        <p class="cs-detail-sub">${cs.overview}</p>
        <div class="cs-detail-meta">
          <div class="meta-pill">
            <div class="meta-pill-label">Client</div>
            <div class="meta-pill-val">${cs.client}</div>
          </div>
          <div class="meta-pill">
            <div class="meta-pill-label">Year</div>
            <div class="meta-pill-val">${cs.year}</div>
          </div>
          <div class="meta-pill">
            <div class="meta-pill-label">My role</div>
            <div class="meta-pill-val">${cs.role}</div>
          </div>
        </div>
        <div class="cs-tags">${tagHTML}</div>
      </div>
    </div>

    <div class="cs-detail-content">
      <div class="cs-placeholder-note">
        ⚠️ <strong>Add your real content here:</strong> Replace the sections below with your actual screenshots, Figma frames, research findings, and outcome metrics. Even one real visual per section makes a huge difference to hiring managers.
      </div>

      <div class="cs-detail-section">
        <h3>The problem</h3>
        <p>${cs.problem}</p>
      </div>

      <div class="cs-detail-section">
        <h3>My process</h3>
        <ul>${processList}</ul>
      </div>

      <div class="cs-detail-section">
        <h3>Outcomes</h3>
        <ul>${outcomeList}</ul>
      </div>

      <div class="cs-detail-section">
        <h3>Tools used</h3>
        <div class="timeline-tags" style="padding:0">${toolHTML}</div>
      </div>
    </div>

    <footer>
      <span class="footer-name">Joanne Nghiem</span>
      <div class="footer-links">
        <a href="mailto:n.nghiem049@gmail.com" class="footer-link">n.nghiem049@gmail.com</a>
        <a href="https://www.linkedin.com/in/phoi-nghiem/" class="footer-link" target="_blank" rel="noopener">LinkedIn</a>
        <a href="assets/joanne-nghiem-resume.pdf" download class="footer-link">↓ Resume</a>
      </div>
    </footer>
  `;

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function backToList() {
  document.getElementById('cs-list').style.display = '';
  document.getElementById('cs-detail').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ── Scroll fade-in for cards ── */
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.cs-full-card, .hcs-row').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  obs.observe(el);
});
