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
    title: 'FocusFlow — ADHD Task App',
    role: 'Sole Product Designer (UX/UI) within a cross functional hackathon team',
    client: 'Hackathon Project · 🏆 Fan Favourite',
    year: '2022',
    context: 'Mobile App · Cognitive Accessibility · 3-Day Hackathon',
    thumbClass: 'thumb-b',
    tags: ['Mobile App', 'Accessibility', 'ADHD Design', 'Figma', '🏆 Fan Favourite'],
    overview: `A mobile app concept designed to help people with ADHD start and stay on tasks — without the overwhelm of traditional productivity tools. Built in 3 days at a hackathon, FocusFlow strips the experience back to one task at a time and one action at a time. It won Fan Favourite.`,
    problem: `Most productivity tools assume users can plan, prioritise, and execute tasks in a linear way. Tools such as Todoist, Trello, and Notion rely on lists, priorities, and multiple views of information. For people with ADHD, this model often fails. The issue is rarely knowing what needs to be done. The issue is starting, choosing, and staying on a task without feeling overwhelmed. Existing tools unintentionally increase cognitive load instead of reducing it.`,
    tools: ['Pen & Paper', 'Miro', 'Figma'],
    stages: [
      {
        id: 'empathize',
        label: '01 / Empathize',
        title: '01 / Empathize — Understanding ADHD Task Behaviour',
        overview: ['Research Approach', 'Research Goals', 'Key Insights'],
        content: [
          {
            heading: 'Research Approach',
            body: `Research was focused, practical, and informed by both user input and lived experience:`,
            list: [
              'Quick interviews with 3 adults diagnosed with ADHD',
              'Team discussion shaping the app concept and feature set',
              'My own lived experience navigating ADHD and task management',
              'Rapid accessibility heuristic review with a focus on cognitive load',
            ],
          },
          {
            heading: 'Research Goals',
            list: [
              'Understand how people with ADHD currently attempt to manage tasks',
              'Identify why existing tools are abandoned',
              'Identify emotional and behavioural patterns around task avoidance',
            ],
          },
          {
            heading: 'Key Insights',
            body: `<strong>Task lists create overwhelm.</strong> Participants described immediate anxiety when opening apps like Todoist.<br><br><em>"Seeing everything at once makes me want to close the app."</em><br><br><strong>Starting is harder than doing.</strong> Once they begin, they can often continue. Initiation is the main barrier.<br><br><strong>Decision making is exhausting.</strong> Choosing what to do next frequently leads to procrastination.<br><br><strong>Time blindness is common.</strong> Participants regularly lost track of time while working.`,
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: '02 / Define — Framing the Right Problem',
        overview: ['Problem Statement', 'Design Principles'],
        content: [
          {
            heading: 'Core Problem Statement',
            body: `How might we design a task experience that removes the need to plan and instead helps users simply begin?`,
          },
          {
            heading: 'Design Principles Derived from Research',
            list: [
              'Show only one task at a time',
              'Remove task lists and dashboards',
              'Reduce choices per screen',
              'Provide a clear, obvious starting action',
              'Support time awareness visually',
            ],
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: '03 / Ideate — Low Fidelity Exploration',
        overview: ['Pen and Paper Sketching', 'Core User Flow'],
        content: [
          {
            heading: 'Pen and Paper Sketching',
            body: `We started with rapid pen and paper sketches to explore ideas without committing to interface too early.<br><br>We explored removing task lists entirely, a single focus screen, a dominant start action, visual time feedback, and minimal content and choices per screen.<br><br>Crazy 8 style sketching helped generate multiple layout directions quickly before selecting a clear path forward.`,
          },
          {
            heading: 'Core User Flow',
            body: `We reduced the experience to only what was essential:<br><br><strong>Open app → See one task → Start → Complete → See next task</strong><br><br>No dashboards. No navigation complexity. No prioritisation features.`,
          },
        ],
      },
      {
        id: 'prototype',
        label: '04 / Prototype',
        title: '04 / Prototype — Mid Fidelity in Figma',
        overview: ['Prototype Scope', 'Accessibility Heuristics'],
        content: [
          {
            heading: 'Prototype Scope',
            body: `Due to the time constraint, we created a mid fidelity interactive prototype focused on demonstrating the intended flow for the pitch. Not every element was functional. Only the interactions required to communicate the concept were built. This allowed us to prioritise clarity of experience over visual polish.`,
          },
          {
            heading: 'Accessibility Heuristics — Designing for Cognitive Load',
            body: `Each screen was evaluated using cognitive accessibility principles:`,
            list: [
              'One primary action per screen',
              'Limited text and visual noise',
              'Strong visual hierarchy',
              'Large tap targets',
              'No reliance on memory',
              'Clear focus state during tasks',
            ],
          },
        ],
      },
      {
        id: 'test',
        label: '05 / Test & Outcomes',
        title: '05 / Test & Outcomes',
        overview: ['Usability Testing', 'Iterations', 'Role & Collaboration', 'Design Decisions', 'Next Steps', 'Reflections'],
        content: [
          {
            heading: 'Usability Testing',
            body: `We tested the mid fidelity prototype with 3 users.`,
            list: [
              'Users immediately understood what to do',
              'No one asked where to go next',
              'Participants responded positively to seeing only one task',
              'Users described the experience as "calmer" than other apps',
            ],
          },
          {
            heading: 'Iterations During the Hackathon',
            body: `Based on feedback, we:`,
            list: [
              'Increased prominence of the primary action',
              'Reduced explanatory text',
              'Simplified screens further',
              'Strengthened the visual emphasis on the active task',
            ],
          },
          {
            heading: 'Role and Collaboration',
            body: `I was the sole designer on the team, responsible for:`,
            list: [
              'Translating the idea into user flows and interface concepts',
              'Leading low fidelity sketching',
              'Building the mid fidelity prototype in Figma',
              'Applying accessibility and cognitive load principles to the design',
            ],
          },
          {
            heading: 'Design Decisions and Trade Offs',
            body: `<strong>Why remove task lists</strong> — Research showed that lists were the primary source of overwhelm.<br><br><strong>Why mid fidelity</strong> — The goal was to communicate behaviour and flow within 3 days, not polish visuals.<br><br><strong>Why limit functionality</strong> — We prioritised the story of the experience for the pitch rather than building every screen.<br><br><strong>Why focus on one flow</strong> — A single clear flow demonstrated the value of the idea more effectively than multiple features.`,
          },
          {
            heading: 'What We Demonstrated in the Pitch',
            body: `In the 8 to 10 minute pitch, the prototype demonstrated:`,
            list: [
              'How the app removes task list anxiety',
              'How users are guided into starting a task',
              'How the experience reduces cognitive load',
              'How the flow supports ADHD behaviour rather than fighting it',
            ],
          },
          {
            heading: 'Next Steps If Developed Further',
            list: [
              'Longer term usability testing over multiple days',
              'Smart task suggestion logic',
              'Personalisation based on user behaviour',
              'Visual design refinement',
              'Expansion into a complete product ecosystem',
            ],
          },
          {
            heading: 'Reflections and Takeaways',
            body: `Designing within a 3 day constraint required ruthless prioritisation of the core problem rather than features.<br><br>Bringing lived experience into research allowed patterns to be recognised quickly and translated into practical design decisions that resonated with users.<br><br>This project reinforced that productivity for ADHD is not about better organisation. It is about reducing the effort required to begin.`,
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

      <footer>
        <div class="footer-logo">
          <img src="assets/logo.gif" alt="Joanne Nghiem">
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <p class="footer-col-heading">NAVIGATION</p>
            <a onclick="showPage('home')" class="footer-link" style="cursor:pointer">Home</a>
            <a onclick="showPage('about')" class="footer-link" style="cursor:pointer">About Me</a>
            <a href="assets/joanne-nghiem-resume.pdf" download class="footer-link">Resume</a>
          </div>
          <div class="footer-col">
            <p class="footer-col-heading">SOCIAL</p>
            <a href="https://www.linkedin.com/in/phoi-nghiem/" class="footer-link" target="_blank" rel="noopener">LinkedIn</a>
          </div>
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
