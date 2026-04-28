/* ── Case study data ── */
const caseStudies = [
  {
    num: '01',
    title: 'Opal — Designing Around How People Actually Travel',
    role: 'UX Designer · Research, Synthesis, Interaction Design',
    team: '5 UX Designers',
    client: 'Concept Project',
    year: '2022',
    context: 'Mobile App · UX Research · Interaction Design',
    thumbClass: 'thumb-a',
    tags: ['UX Research', 'Synthesis', 'Journey Mapping', 'Interaction Design', 'Figma'],
    overview: `Exploring how Sydney commuters actually use the Opal app in context, and how the experience could be redesigned to reduce effort across their entire commuting workflow. A team of five conducted 15 user interviews, synthesised findings across a shared Miro board, and produced a mid-fidelity prototype covering the core commuting flows.`,
    problem: `Transport for NSW's Opal app handled the basics of transit ticketing: checking balance, topping up, and reviewing trip history. It existed in isolation from how people actually commuted. Commuters routinely moved between Opal, mapping applications, and other transit tools to complete a single journey. The research question was not which features were missing from the app. It was how people actually commuted, and how the app could support that workflow rather than interrupt it.`,
    tools: ['Figma', 'Miro', 'User interviews', 'Affinity mapping', 'Journey mapping', 'Competitive benchmarking', 'UX audit', 'Low-fi sketching', 'Mid-fi prototyping'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: '01 / Research — Understanding Real Commuters',
        overview: ['User Interviews', 'Synthesis in Miro', 'International Benchmarking', 'Opal App Audit'],
        content: [
          {
            heading: 'User Interviews',
            body: `The team of five each interviewed three participants, producing 15 interviews in total. Participants ranged in age from 17 to 35, spanning students and full-time workers across different commuting patterns and levels of transit reliance. Each session ran for approximately one hour.<br><br>Interviews were structured around the full commuting day rather than the app in isolation. Topics included how participants started their day, how they planned trips, which applications they used and at what points, when and why they checked their Opal balance, how they topped up, and what caused frustration. This framing surfaced workflow patterns and contextual details that would have been missed by asking about the app directly.<br><br>A major recurring pain point was the morning commute rush. Multiple participants described feeling time pressured before work or university and struggling to quickly check whether their usual route was running on time. Under time pressure, the Opal app's inbuilt trip information was not fast or reliable enough for real-time decision making. Several participants had adopted TripView as their go-to for this purpose — not by preference, but because the Opal app did not meet the need.<br><br>When asked what would make mornings easier, participants consistently described the same set of needs: the ability to save their most used route, proactive alerts for delays or disruptions on that route, and faster access to this information without having to search each time.`,
            placeholder: 'Interview affinity map from Miro',
          },
          {
            heading: 'Synthesis in Miro',
            body: `All five designers converged in Miro to synthesise findings collaboratively. The process moved through four stages.<br><br><strong>Affinity mapping</strong> clustered raw observations into themes across all 15 interviews, surfacing patterns that no individual interview had made visible on its own.<br><br><strong>Persona creation</strong> distilled the shared patterns into representative user types, capturing different commuting contexts, priorities, and pain points.<br><br><strong>End-to-end journey mapping</strong> traced the full commuting workflow from planning at home through to arrival, documenting the tools used, decisions made, and emotional states at each stage.<br><br><strong>Emotional mapping</strong> identified the specific moments where participant confidence dropped and anxiety or frustration peaked across the journey.<br><br>The central insight from synthesis was that no participant used Opal in isolation. It was always one step in a chain of tools, consulted briefly before switching elsewhere. The app was not failing at features. It was failing at integration into a broader commuting workflow.<br><br>A second insight that emerged strongly from the affinity map: commuters do not plan a new trip every day. The vast majority of participants were repeating the same one or two routes on a fixed schedule. They did not want a trip planning tool — they wanted the app to recognise that behaviour and surface what was relevant to their usual journey without any input from them.`,
            placeholder: 'Miro board showing persona and end-to-end journey map',
            placeholderAfter: 'Miro insight cluster showing repeated route behaviour across participants',
          },
          {
            heading: 'International Benchmarking',
            body: `Transit apps from three cities were reviewed to understand what integrated, high-quality commuting experiences looked like in practice.<br><br><strong>Oyster (London, TfL)</strong> demonstrated how top-up and journey planning could coexist within a single interface, with balance surfaced persistently without requiring navigation into account settings.<br><br><strong>Suica (Tokyo, JR East)</strong> showed how minimal friction in top-up flows and multi-card management could be achieved without sacrificing clarity, even across a complex transit network.<br><br><strong>Myki (Melbourne)</strong> provided the closest comparison as a contemporary Australian transit system, highlighting both where Opal was behind on usability and where both systems shared structural limitations worth addressing.<br><br>Benchmarking was used not to copy interface patterns but to establish what was achievable and to build a shared reference point for design decisions.`,
          },
          {
            heading: 'Opal App Audit',
            body: `The team audited the existing Opal app across four primary flows: topping up, reviewing trip history, managing cards, and checking balance. Each flow was mapped step by step, with attention to total step count, points of high cognitive load, visual hierarchy, information density, and moments where the interface did not meet the expectations surfaced in research.<br><br>The audit confirmed that the app was functional but not efficient. Core tasks required more steps than the underlying complexity warranted, key information was buried rather than surfaced at the right moment, and there was no integration with journey planning at any point in the experience.`,
            placeholder: 'Annotated screenshots from the Opal app audit',
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: '02 / Define — Framing the Opportunity',
        overview: ['Key Insight', 'Design Principles'],
        content: [
          {
            heading: 'Key Insight',
            body: `Research and synthesis converged on a single core finding: the problem with the Opal app was not that features were missing. The problem was fragmentation. Commuters moved between multiple applications to complete a single workflow that should have been supported in one place. Adding features to the existing structure would not resolve this. The interface needed to be rethought around the commuting workflow, not around ticketing administration.<br><br>The research also surfaced a second, equally important dimension of the problem: the Opal app did not support habitual commuter behaviour. Most users were not exploring the network — they were repeating the same journey each day, and the app treated every session as if the user had no history. There was no mechanism for saving a frequent route, no proactive awareness of disruptions on that route, and no shortcut for the time-pressured morning check that participants described as their highest-friction moment with the app.`,
          },
          {
            heading: 'Design Principles',
            body: `Three principles were established from the research findings to guide all subsequent ideation and design decisions:`,
            list: [
              'Reduce taps: every core action should be achievable in fewer steps than the current app requires',
              'Surface what matters: balance, recent trips, and top-up access should be immediately visible on the home screen without requiring navigation',
              'Combine planning and paying: journey planning must exist within the app rather than in a separate tool, directly addressing the switching behaviour identified as the core problem',
              'Support habitual routes: the app should recognise and prioritise the user\'s most frequent journey and provide proactive alerts for delays or disruptions on that route without requiring the user to search',
            ],
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: '03 / Ideate — Structuring a Better Experience',
        overview: ['Navigation Exploration', 'Key Structural Decisions'],
        content: [
          {
            heading: 'Navigation Exploration',
            body: `Ideation began with information architecture and navigation structure before any visual design decisions were made. Low-fidelity sketches explored multiple approaches to the home screen: a dashboard model surfacing account-level information at a glance, a card-first model treating each Opal card as the primary organising element, and a task-oriented model prioritising the next likely action rather than a static summary view.<br><br>The card-first home screen with persistent top-up access was selected as the direction, as it aligned most closely with how participants described their mental model of Opal during interviews. Participants thought of their Opal card as the core object, not their account.<br><br>Alongside the core navigation concepts, saved routes and proactive alert patterns were explored in low-fidelity sketches at this stage. These concepts had surfaced directly from the morning commute frustrations described in interviews and were treated as a first-class design problem rather than a secondary feature.`,
            placeholder: 'Low-fidelity sketches of home screen and navigation concepts',
            placeholderAfter: 'Sketch of saved route concept showing route pinning and alert toggle',
          },
          {
            heading: 'Key Structural Decisions',
            body: `Three structural decisions defined the redesign direction, each traceable directly to a finding from research or synthesis.<br><br><strong>Card-first home screen</strong> reflecting the participant mental model of Opal as a card management tool rather than an account service.<br><br><strong>Persistent top-up access</strong> surfaced from the home screen without navigation, addressing the high step count identified in the audit and the top-up friction described consistently in interviews.<br><br><strong>Journey planner as a primary navigation destination</strong> rather than a link to an external application, directly resolving the switching behaviour identified as the central problem in synthesis.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: '04 / Design — Mid-Fidelity Prototype',
        overview: ['Prototype Scope', 'Key Screens'],
        content: [
          {
            heading: 'Prototype Scope',
            body: `A mid-fidelity Figma prototype was built to demonstrate the redesigned commuting experience across the core flows identified in research as the highest priority for commuters.<br><br><strong>One-tap top-up</strong> accessible from the home screen without navigating into account or card settings.<br><br><strong>Trip history with fare breakdowns</strong> replacing the flat chronological log with a structured view that made individual journey costs legible at a glance.<br><br><strong>Multi-card management</strong> informed by patterns observed in Oyster and Suica, designed to handle multiple Opal cards within a single clearly organised screen.<br><br><strong>Integrated journey planner</strong> embedded within the application rather than linking to Google Maps or Transport for NSW separately, directly resolving the fragmentation identified as the core problem in research.<br><br><strong>Saved frequent route on the home screen</strong> — the user's most commonly travelled route is pinned and visible immediately on launch, requiring no search or navigation.<br><br><strong>Real-time alerts for delays and disruptions</strong> on the saved route, surfaced proactively on the home screen rather than requiring the user to open a separate app or navigate into trip details. This directly addresses the TripView reliance identified in interviews.<br><br><strong>Improved in-app journey planning</strong> informed by the usability patterns observed in TripView, designed to give commuters the clarity and speed that the Opal app's original trip feature failed to provide.<br><br>All three of these features were included in the final prototype demonstrated in the presentation, with the saved route and alert screens used to demonstrate how a direct interview insight translated into a concrete product decision.`,
            placeholder: 'Figma prototype link with interactive flows',
            placeholderAfter: 'Saved route home screen and real-time alert notification screens',
          },
          {
            placeholder: 'Key screen mockups: home screen, top-up flow, trip history, journey planner',
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes — What This Demonstrates',
        overview: ['Skills Demonstrated', 'Reflection', 'Visual Artefacts'],
        content: [
          {
            heading: 'Skills Demonstrated',
            body: `This project demonstrates end-to-end UX capability across research, synthesis, and design:`,
            list: [
              'Conducting and moderating structured user interviews with a defined discussion guide',
              'Collaborative synthesis using affinity mapping, persona creation, journey mapping, and emotional mapping',
              'Translating qualitative research into clearly defined design principles with direct traceability to findings',
              'Auditing an existing product against user needs, mapping step count and cognitive load across core flows',
              'Using international benchmarking to establish design precedent and frame the level of ambition for the redesign',
              'Designing end-to-end interaction flows from a clearly defined problem statement rather than from a feature list',
              'Translating repeated user behaviours — such as habitual commuting patterns and time-critical morning routines — into proactive product features including saved routes and real-time delay alerts',
              'Producing mid-fidelity prototypes that communicate structure and behaviour for evaluation',
            ],
          },
          {
            heading: 'Reflection',
            body: `The most significant shift in this project occurred during the research phase. Structuring interviews around the commuting day rather than the application revealed that the problem was one of fragmentation and workflow, not of interface design. Without that framing, the team would have redesigned screens rather than rethought the experience.<br><br>The saved routes and real-time alerts feature is a direct example of how interview insights shaped a concrete product decision. That feature did not come from competitive analysis or assumption — it came from participants describing the stress of the morning commute and the workarounds they had already built for themselves. Recognising that pattern in synthesis, naming it as a design problem, and carrying it through to a first-class prototype feature demonstrates the value of research that is grounded in context rather than focused on the product in isolation.<br><br>The primary constraint of this project was the absence of usability testing with the mid-fidelity prototype. The logical next step would be moderated task-based testing with participants drawn from the same demographic, measuring whether the redesigned flows reduced task completion time and reduced the application-switching behaviour that research identified as the core problem.`,
          },
          {
            heading: 'Visual Artefacts',
            body: `The following artefacts should be shown as images or embedded Figma files within this case study:`,
            list: [
              'Interview affinity map from Miro',
              'Persona and end-to-end journey map',
              'Annotated Opal app audit screenshots',
              'Low-fidelity home screen and navigation sketches',
              'Mid-fidelity prototype screens: home, top-up flow, trip history, journey planner',
              'Figma prototype link with interactive flows',
            ],
          },
        ],
      },
    ],
  },
  {
    num: '02',
    title: 'FocusFlow — ADHD Task App',
    role: 'Sole Product Designer (UX and UI) in a cross functional team of engineers',
    client: 'Hackathon Project · 🏆 Fan Favourite',
    year: '2022',
    context: 'Mobile App · Cognitive Accessibility · 3-Day Hackathon',
    thumbClass: 'thumb-b',
    tags: ['Cognitive Accessibility', 'Behaviour Design', 'Rapid Prototyping'],
    overview: `A chatbot-first task experience designed to help people with ADHD start tasks without overwhelm. Built, tested, and iterated in 3 days at a hackathon, FocusFlow reframed productivity around guided initiation instead of planning.<br><br>The MVP placed a conversational assistant at the centre of the experience, guiding users into a single task one step at a time, removing the need to plan, prioritise, or navigate a list.<br><br>Concepts were validated through a lo-fi interactive prototype before being carried into a mid-fidelity Figma build, keeping the focus on behaviour and flow throughout.`,
    overviewLink: `<a class="cs-proto-btn" href="#" target="_blank" rel="noopener">→ View Mid Fidelity Prototype (Figma)</a>`,
    problemPart1: `Most productivity tools are built around the assumption that users can plan, prioritise, and execute tasks in a structured, linear way. Tools like Todoist, Trello, and Notion rely on lists, multiple views, and user-driven prioritisation to organise work.`,
    problemPlaceholder: 'Comparison image: task list UI (Todoist or similar) alongside FocusFlow single-focus screen',
    problemPart2: `For people with ADHD, this model frequently breaks down.<br><br>The challenge is rarely knowing what needs to be done. It is starting, choosing between options, and staying on a task without the interface itself becoming a source of overwhelm.<br><br>Existing tools are not designed for this. They surface everything at once, require active decision making at every step, and unintentionally increase cognitive load at the exact moment it needs to be reduced.`,
    problem: `Most productivity tools assume users can plan, prioritise, and execute tasks in a linear way. For people with ADHD, this model frequently breaks down. The challenge is not knowing what to do. It is starting, choosing, and staying focused without the interface adding to the load. Existing tools surface everything at once and require active decision making at every step, increasing cognitive demand at the moment it needs to be reduced.`,
    tools: ['Figma', 'Miro', 'Lo-fi Interactive Prototype', 'Mid Fidelity Prototype'],
    stages: [
      {
        id: 'empathize',
        label: '01 / Empathize',
        title: '01 / Empathize — Understanding ADHD Task Behaviour',
        overview: ['Research Approach', 'Key Insights'],
        content: [
          {
            heading: 'Research Approach',
            placeholder: 'Photo or screenshot of Miro board with research notes / workshop outputs',
            list: [
              'Quick interviews with 3 adults diagnosed with ADHD',
              'Team workshop to shape the concept and features',
              'My lived experience navigating ADHD and task management',
              'Rapid accessibility heuristic review with a focus on cognitive load',
            ],
          },
          {
            heading: 'Key Insights',
            body: `<em>"Seeing everything at once makes me want to close the app."</em>`,
            list: [
              'Task lists create immediate overwhelm and anxiety',
              'Starting is harder than doing. Initiation is the main barrier',
              'Decision making is exhausting and leads to procrastination',
              'Time blindness causes users to lose track once they begin',
            ],
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
            heading: 'Problem Statement',
            body: `How might we design a task experience that removes the need to plan and instead helps users simply begin?`,
          },
          {
            heading: 'Design Principles',
            placeholder: 'Screenshot of principles written visually or on sticky notes',
            list: [
              'Show only one task at a time',
              'Remove task lists and dashboards',
              'Reduce choices per screen',
              'Provide a single obvious starting action',
              'Support time awareness visually',
              'Guide the user instead of expecting self direction',
            ],
            afterList: `<p style="margin-top:1rem">This is where the idea of a chatbot assistant as the primary interface emerged.</p>`,
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: '03 / Ideate — Why the Chatbot Became the MVP',
        overview: ['Chatbot as Core Concept'],
        content: [
          {
            heading: 'Chatbot as Core Concept',
            placeholder: 'Early lo-fi screens of chat concept',
            body: `The breakthrough idea was: what if the app did the deciding through conversation?<br><br>The chatbot became the core interaction model, not a feature.`,
          },
        ],
      },
      {
        id: 'lofi',
        label: '04 / Lo-fi',
        title: '04 / Lo-fi Exploration — Interactive, Not Sketches',
        overview: ['Lo-fi Prototype', 'Core User Flow'],
        content: [
          {
            heading: 'Lo-fi Prototype',
            body: `Rather than spending time on static sketches, I moved directly into a very low fidelity interactive prototype to explore ideas quickly and validate the flow.<br><br>This allowed me to test structure, hierarchy, and interaction in minutes instead of hours, and ensured early thinking was grounded in how the experience would actually behave for users.<br><br>Using this rapid prototype approach, I explored:`,
            list: [
              'Removing task lists entirely',
              'A single focus screen with one dominant action',
              'Visual time feedback without numbers or timers',
              'Minimal content and choices per screen',
              'A linear flow with no navigation complexity',
            ],
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/AJwgU0Dii3S2hObJLKEuZ6/focusflow?fullscreen=1&t=2ZPnMAFiLb0Kj3vI-1" target="_blank" rel="noopener">→ View lo-fi prototype</a></div>`,
            placeholderAfter: 'GIF or sequence of lo-fi screens showing the flow',
          },
          {
            heading: 'Core User Flow',
            body: `We reduced the experience to only what was essential:<br><br><strong>Open app → Chat assistant → Suggested task → Start → Complete → Chat suggests next step</strong><br><br>No dashboards. No menus. No prioritisation UI.`,
          },
        ],
      },
      {
        id: 'prototype',
        label: '05 / Prototype',
        title: '05 / Mid Fidelity Prototype in Figma',
        overview: ['Prototype Scope', 'Accessibility Heuristics'],
        content: [
          {
            heading: 'Prototype Scope',
            placeholder: '4 to 6 mid-fi screens laid out horizontally',
            body: `Due to the time constraint, we created a mid fidelity interactive prototype focused on demonstrating the intended flow for the pitch. Not every element was functional. Only the interactions required to communicate the concept were built. This allowed us to prioritise clarity of experience over visual polish.`,
          },
          {
            heading: 'Accessibility Heuristics — Designing for Cognitive Load',
            placeholder: 'One screen annotated with callouts explaining cognitive load decisions',
            body: `Each screen was evaluated using cognitive accessibility principles:`,
            list: [
              'One primary action per screen',
              'Limited text and visual noise',
              'Strong visual hierarchy',
              'Large tap targets',
              'No reliance on memory',
              'Clear focus state during tasks',
              'Calm colour palette of light green and white',
            ],
          },
        ],
      },
      {
        id: 'test',
        label: '06 / Test',
        title: '06 / Testing During the Hackathon',
        overview: ['Observations', 'Iterations'],
        content: [
          {
            heading: 'Observations',
            placeholder: 'Photo of you testing with participants or people using the prototype',
            body: `We tested the mid fidelity prototype with 3 users.`,
            list: [
              'Users immediately understood what to do',
              'No one asked where to go next',
              'Participants described the experience as "calmer" than other apps',
              'The chat interaction felt supportive rather than instructional',
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
        ],
      },
      {
        id: 'role',
        label: '07 / Role',
        title: '07 / My Role and Contribution',
        overview: ['Role and Collaboration'],
        content: [
          {
            heading: 'Role and Collaboration',
            placeholder: 'Screenshot of your Figma file showing flows and screens',
            body: `I was the sole designer on the team, responsible for:`,
            list: [
              'Translating the idea into user flows and interface concepts',
              'Creating and iterating on the lo-fi interactive prototype',
              'Building the mid fidelity prototype in Figma',
              'Applying accessibility and cognitive load principles to the design',
            ],
          },
        ],
      },
      {
        id: 'decisions',
        label: '08 / Decisions',
        title: '08 / Design Decisions and Trade Offs',
        overview: ['Design Decisions'],
        content: [
          {
            heading: 'Design Decisions and Trade Offs',
            placeholder: 'Simple decision table or visual showing Problem to Decision to Outcome',
            body: `<strong>Why remove task lists</strong> — Research showed that lists were the primary source of overwhelm.<br><br><strong>Why mid fidelity</strong> — The goal was to communicate behaviour and flow within 3 days, not polish visuals.<br><br><strong>Why limit functionality</strong> — We prioritised the story of the experience for the pitch rather than building every screen.<br><br><strong>Why focus on one flow</strong> — A single clear flow demonstrated the value of the idea more effectively than multiple features.`,
          },
        ],
      },
      {
        id: 'pitch',
        label: '09 / Pitch',
        title: '09 / What We Demonstrated in the Pitch',
        overview: ['The Pitch', 'Fan Favourite'],
        content: [
          {
            heading: 'The Pitch',
            placeholder: 'Photo of you presenting OR the slide used in the pitch',
            body: `In the 8 to 10 minute pitch, the prototype demonstrated:`,
            list: [
              'How the app removes task list anxiety',
              'How users are guided into starting a task',
              'How the experience reduces cognitive load',
              'How the flow supports ADHD behaviour rather than fighting it',
            ],
          },
          {
            heading: 'Fan Favourite',
            placeholder: 'Photo of award / event / team',
            body: `The project won Fan Favourite — voted by peers and judges across all hackathon entries.`,
          },
        ],
      },
      {
        id: 'next',
        label: '10 / Next Steps',
        title: '10 / Next Steps and Reflections',
        overview: ['Next Steps', 'Reflections'],
        content: [
          {
            heading: 'Next Steps If Developed Further',
            placeholder: 'Simple future roadmap visual',
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
            placeholder: 'Final hero mockup or polished screen to end the case study',
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
          ${block.placeholder ? `<div class="cs-placeholder"><span>${block.placeholder}</span></div>` : ''}
          ${block.body ? `<p>${block.body}</p>` : ''}
          ${block.list ? `<ul class="cs-v2-list">${block.list.map(li => `<li>${li}</li>`).join('')}</ul>` : ''}
          ${block.afterList ? block.afterList : ''}
          ${block.placeholderAfter ? `<div class="cs-placeholder"><span>${block.placeholderAfter}</span></div>` : ''}
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
            ${cs.heroPlaceholder ? `<div class="cs-placeholder"><span>${cs.heroPlaceholder}</span></div>` : ''}
            <p class="cs-v2-sub">${cs.overview}</p>
            ${cs.overviewLink ? `<div class="cs-proto-btn-wrap">${cs.overviewLink}</div>` : ''}
          </div>
        </div>
        <div class="cs-overview-body">
          <div class="cs-stage-sidebar">
            <div class="cs-meta-stack">
              <div class="cs-meta-row">
                <span class="cs-meta-label">Role</span>
                <span class="cs-meta-val">${cs.role}</span>
              </div>
              ${cs.team ? `<div class="cs-meta-row"><span class="cs-meta-label">Team</span><span class="cs-meta-val">${cs.team}</span></div>` : ''}
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
              ${cs.problemPart1 ? `<p>${cs.problemPart1}</p>${cs.problemPlaceholder ? `<div class="cs-placeholder"><span>${cs.problemPlaceholder}</span></div>` : ''}<p>${cs.problemPart2}</p>` : `<p>${cs.problem}</p>`}
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
