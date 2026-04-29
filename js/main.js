/* ── Case study data ── */
const caseStudies = [
  {
    num: '01',
    title: 'Opal — Designing Around How People Actually Travel',
    role: 'UX Designer · Research, Synthesis, Interaction Design',
    team: 'UX Design Team',
    client: 'Independent UX Project',
    year: '2024',
    context: 'UX Research · Interaction Design',
    thumbClass: 'thumb-a',
    heroImage: 'assets/opal/opal_1.png',
    heroImageAlt: 'Opal app redesign mockup',
    tags: ['UX Research', 'Interaction Design', 'Figma'],
    overview: `The central finding was that Opal had been designed for ticketing administration, not commuting. Participants were not using it as their primary transit tool. It was one step in a fragmented three-app workflow: TripView for real-time status, Google Maps for routing, and Opal only when a top-up was required. None of those switches were preferences. Each was an adaptation to a specific gap the app did not fill.<br><br>I led research, synthesis, interaction design, and prototyping on this project. The approach was structured around how Sydney commuters actually moved through their day, not around what they thought of the app. That framing surfaced a structural problem that a feature audit alone would not have found. The redesign addressed the fragmentation directly.`,
    overviewLink: `<a class="cs-proto-btn" href="#" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a>`,
    problem: `The Opal app covered the functional basics: checking balance, topping up, reviewing trip history. What it did not account for was how those tasks sat inside an actual commuting day.<br><br>In interviews, participants described the same pattern: open Opal to check balance, switch to TripView for real-time status, check Google Maps for the route, return to Opal to top up. Repeated every morning. Every commuting need beyond payment required leaving the app entirely. The question was not which features were missing. It was whether a standalone ticketing tool was the right model at all.`,
    tools: ['Figma', 'Miro', 'User interviews', 'Competitive benchmarking', 'UX audit', 'Lo-fi sketching', 'Mid-fi prototyping'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: '01 / Research — What Commuters Actually Do',
        overview: ['Interview Findings', 'International Benchmarking', 'Opal App Audit'],
        content: [
          {
            heading: 'Interview Findings',
            body: `Interviews were structured around the full commuting day, not the Opal app. When participants described their morning from waking to arriving at work, a consistent pattern emerged that no product-focused interview would have surfaced.<br><br>The highest-friction moment was the window before departure. Participants had built habits around TripView specifically because Opal did not surface route status at the speed they needed when deciding whether to leave. The switching was not preference. It was an adaptation to a gap.<br><br>Most participants were repeating the same one or two journeys daily. The app had no awareness of that pattern. Every session started from the same blank state, requiring the same decisions, regardless of how many times that journey had been made before.<br><br>When asked what would improve the morning experience, responses converged without prompting: save a regular route, get an alert if something changes, access it immediately on opening. That unprompted convergence became the central feature decision in the redesign.<br><br>Synthesis mapped fragmentation as a structural condition, not a side effect. Opal appeared at specific, limited moments in a workflow that moved continuously between applications. The switching was built into how commuters had adapted to what each tool could and could not do.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb5sCgU=/?share_link_id=506555134836" target="_blank" rel="noopener">→ View full research synthesis (Miro)</a></div>`,
          },
          {
            heading: 'International Benchmarking',
            body: `Three international transit applications were reviewed against the specific failure points research had surfaced, not as a general feature comparison.<br><br><strong>Oyster (London, TfL)</strong> showed how top-up and journey planning can coexist in one interface without degrading either. Balance persisted across the app and was accessible at the moment commuters needed it, without requiring navigation into account settings.<br><br><strong>Suica (Tokyo, JR East)</strong> offered the clearest model for reducing friction in high-frequency transactional flows. Top-up and multi-card management required minimum input, demonstrating that a simple interface does not require a simple system behind it.<br><br><strong>Myki (Melbourne)</strong> was the most directly comparable. Examining it alongside the existing Opal app made visible both where Opal lagged and where constraints were shared, which mattered for deciding what the redesign could realistically address.`,
          },
          {
            heading: 'Opal App Audit',
            body: `Walking through the existing app against research findings produced the clearest articulation of the structural problem.<br><br>Checking balance required navigating into account settings. Research had identified balance visibility as the most frequently needed piece of information before departure. The app had buried it behind account navigation.<br><br>Top-up required more steps than the transaction warranted. Two participants described abandoning the in-app flow mid-morning and paying at a station machine instead because it was faster.<br><br>Trip history was a flat chronological list with no per-journey fare breakdown. Participants who needed to understand their balance had to work through individual records manually.<br><br>The audit confirmed what research had shown: the app handled transactions but had not been designed around the decisions and workflows that surrounded them. The information commuters needed most was present but not surfaced.`,
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: '02 / Define — Framing the Opportunity',
        overview: ['Key Insight'],
        content: [
          {
            heading: 'Key Insight',
            body: `Research converged on a single reframing: Opal had not been designed badly. It had been designed for the wrong model of commuting.<br><br>Participants did not use it as a transit tool. They used it as the payment step in a multi-app workflow, switching to TripView for real-time status, to Google Maps to plan the route, and back to Opal only when a top-up was required. The switching was not coincidental. It was built into how commuters had adapted to what each tool could and could not do.<br><br>The second finding was equally consequential: the app was invisible to habit. Most participants were making the same trip every day. The app presented the same blank starting state every session, with no recognition of routine, no shortcut to a familiar journey, and no proactive information about disruptions on a route they had travelled hundreds of times. Saved routes with real-time alerts were the direct answer to that gap.`,
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
            body: `I explored three home screen structures before settling on the approach the prototype takes.<br><br>A <strong>dashboard model</strong> spread account-level information across a dense home screen. Rejected quickly. Research showed participants needed to reach one or two specific things fast, not scan a summary.<br><br>A <strong>task-oriented model</strong> surfaced the next likely action rather than a static overview. Conceptually closer, but it required assumptions about intent that the research had not established clearly enough to design around reliably. A predicted action that turned out to be wrong would create more friction than no prediction at all.<br><br>A <strong>card-first model</strong> treated each Opal card as the primary organising element with persistent top-up access alongside it. Participants consistently framed Opal as a card they managed, not an account they administered. Building the home screen around that framing reduced the interpretive work required to navigate.<br><br>The sketches below show the three models alongside early explorations of the saved route and alert layout, which was treated as a first-class design problem from the start.`,
            placeholder: '<img src="assets/opal/opal_6.png" alt="Low-fidelity sketches of home screen and navigation concepts" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_7.png" alt="Sketch of saved route concept showing route pinning and alert toggle" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Key Structural Decisions',
            body: `Three structural decisions defined the redesign. Each came directly from a research or audit finding.<br><br><strong>Card-first home screen.</strong> Participants framed Opal as a card they managed, not an account they administered. Organising the home screen around the card aligned with an existing mental model and removed the interpretive work required to navigate.<br><br><strong>Persistent top-up access from home.</strong> The audit found top-up required more steps than the task warranted. Participants under time pressure described that friction as a reason to abandon the flow and pay at a station machine instead. Surfacing top-up from home addressed both the step count and the avoidance behaviour it caused.<br><br><strong>Journey planner as a primary destination.</strong> Synthesis showed that switching to Google Maps or TripView was necessity, not preference. Embedding a planner removed the structural reason to leave the app.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: '04 / Design — Prototype',
        overview: ['Prototype Scope', 'How this fits into the Opal app', 'Key screens within the flow', 'High fidelity prototype within Opal'],
        content: [
          {
            heading: 'Prototype Scope',
            body: `The prototype tested two hypotheses: that a card-first home screen with persistent top-up access would reduce friction in the most frequent task, and that saved routes with real-time alerts would resolve the pre-departure anxiety participants described consistently.<br><br><strong>One-tap top-up from home</strong> came from the audit and from participants who abandoned the in-app flow mid-commute to use a station machine because it was faster.<br><br><strong>Trip history with per-journey fare breakdowns</strong> replaced the flat chronological list after participants described manually calculating costs to understand their spending.<br><br><strong>Multi-card management</strong> was informed by Oyster and Suica benchmarking, where a single surface for multiple cards provided structural clarity missing in Opal.<br><br><strong>The integrated journey planner</strong> was embedded as a primary destination after interviews showed a consistent pattern: commuters planned in Google Maps or TripView, then returned to Opal only to pay. That switching was necessity, not preference.<br><br><strong>Saved routes and real-time alerts</strong> are the centrepiece of the prototype. They address the finding that most participants repeated the same journey daily while the app had no awareness of this, and that participants relied on TripView specifically for pre-departure alerts because Opal offered nothing equivalent.<br><br>The animated prototype below shows the full saved route and alert flow. This is where the line from research finding to interface decision is most direct.`,
            placeholder: '<img src="assets/opal/opal_8.gif" alt="Figma prototype with interactive flows" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_9.png" alt="Saved route home screen and real-time alert notification screens" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'How this fits into the Opal app',
            body: `This redesign sits inside Opal, not alongside it. The entry point is the home screen where commuters already begin. The three primary paths are one-tap top-up, the saved route with real-time alerts, and the integrated journey planner. Each replaces a step that previously required multi-step internal navigation or sent users out to a third-party app.<br><br>Every flow returns to the home screen on completion. No interaction terminates at a confirmation page or leaves the user inside a sub-menu, reflecting how transit tools are actually used: briefly, repeatedly, and under time pressure.`,
          },
          {
            heading: 'Key screens within the flow',
            body: `The screens below show the home state, top-up flow, trip history, and journey planner. Look for the persistent balance display and the saved route card that appears immediately on opening.`,
            placeholder: '<img src="assets/opal/opal_10.png" alt="Key screen mockups: home screen, top-up flow, trip history, journey planner" style="width:100%;border-radius:8px;display:block;"><img src="assets/opal/opal_11.png" alt="Key screen mockups continued" style="width:100%;border-radius:8px;display:block;margin-top:1rem;">',
          },
          {
            heading: 'High fidelity prototype within Opal',
            body: `Mid-fidelity validated structure. High fidelity answered whether these features could credibly exist inside the real Opal app, built to the same constraints the product team works within.<br><br>Opal is a government product with an established visual system and navigation conventions. I worked inside those constraints: colour tokens, iconography, and interaction patterns all reference the existing Opal design language. The goal was not to redesign Opal's visual identity. It was to demonstrate that these features belong inside it and could ship without requiring a full rebuild.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="#" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a></div>`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes — What This Demonstrates',
        overview: ['What This Project Proved', 'Reflection'],
        content: [
          {
            heading: 'What This Project Proved',
            body: `Every decision in this project traces to something specific: a pattern from interviews, a gap the audit identified, or a finding from benchmarking. Starting from the question of how commuters moved through their day, rather than what they thought of the app, produced a different category of finding. It surfaced a structural problem that no feature audit would have found and pointed toward a redesign that addressed the cause rather than the symptoms.`,
          },
          {
            heading: 'Reflection',
            body: `The primary gap is the absence of usability testing. The next step is moderated task-based sessions measuring whether the redesigned flows reduce completion time and whether saved routes reduce the application-switching interviews identified as the central problem. The saved routes and alerts feature shows the clearest line from finding to decision: it came directly from participants describing a pre-departure workaround, not from a competitive analysis. Opal's structural problem is not missing features. It is being designed for ticketing in a context where people need a commuting tool.`,
          }
        ],
      },
    ],
  },
  {
    num: '02',
    title: 'FocusFlow — ADHD Task App',
    role: 'Sole Product Designer (UX and UI) in a cross functional team of engineers',
    client: 'Hackathon Project · Fan Favourite',
    year: '2022',
    context: 'Cognitive Accessibility · 3-Day Hackathon',
    thumbClass: 'thumb-b',
    heroImage: 'assets/focusflow/ff_1.png',
    heroImageAlt: 'FocusFlow app redesign mockup',
    tags: ['Cognitive Accessibility', 'Behaviour Design', 'Rapid Prototyping'],

    overview: `FocusFlow was built in three days to address a problem most productivity tools are not designed for: helping people with ADHD start tasks, not organise them.<br><br>As the sole designer in a cross-functional team of engineers, I led research, synthesis, and end-to-end interface design within the sprint. The constraint forced discipline. Every decision had to be grounded in a finding or cut.<br><br>The central decision was structural: remove the task list entirely and replace it with a conversational assistant that guides users into a single task at a time. Research showed the list was not an imperfect solution. It was the source of the problem. The redesign, developed from lo-fi validation through to a high-fidelity prototype, addressed that directly.`,
    overviewLink: `<a class="cs-proto-btn" href="#" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a>`,
    problemPart1: `Most productivity tools are built on one assumption: users can plan, prioritise, and execute in a structured, linear way. The screen below contrasts a standard task list view with FocusFlow's single-focus screen.`,
    problemPlaceholder: '<img src="assets/focusflow/ff_2.png" alt="Comparison of a traditional task list app versus FocusFlow single-focus screen" style="width:100%;border-radius:8px;display:block;">',
    problemPart2: `In interviews, participants described opening these tools and disengaging before starting anything. The barrier was not knowing what to do. It was the decision required before beginning. An interface that opens to a full task list adds cognitive load at exactly the moment it needs to be removed.`,
    problem: `Most productivity tools assume users can plan, prioritise, and execute tasks in a linear, self-directed way. For people with ADHD, this model does not describe how task initiation works. The challenge is not knowing what needs to be done. It is starting. Existing tools add cognitive demand at precisely the moment it needs to be reduced, by requiring users to survey a list, make decisions about priority, and self-direct before they have begun.`,
    tools: ['Figma', 'Miro', 'Lo-fi Interactive Prototype', 'Mid Fidelity Prototype'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: '01 / Research — Understanding Task Initiation Behaviour',
        overview: ['Research Approach', 'Key Insights'],
        content: [
          {
            heading: 'Research Approach',
            body: `Across all interviews, the same pattern emerged: participants opened their task app and disengaged before starting anything. Sessions were structured around task behaviour, not product evaluation: which tools participants used, where they failed, and what had been abandoned.<br><br>I designed and ran all three interviews and facilitated the team synthesis workshop. A rapid cognitive accessibility review assessed decision count per screen and working memory load across the tools participants mentioned.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb6c4w0=/?share_link_id=989572133225" target="_blank" rel="noopener">→ View Miro board</a></div>`,
          },
          {
            heading: 'Key Insights',
            body: `<em>"Seeing everything at once makes me want to close the app."</em><br><br>This response appeared in all three sessions in different words. Four findings shaped every decision that followed:`,
            list: [
              'Task lists trigger avoidance, not action. Seeing the full backlog at opening was consistently described as demotivating, not clarifying',
              'Initiation is the primary barrier, not organisation. Every participant knew what needed doing. No tool supported the moment of actually starting',
              'Decision fatigue compounds the problem. Every required choice before a task begins increases the cost of beginning',
              'Participants described difficulty tracking elapsed time inside tasks, stopping too early or running past productive focus',
            ],
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: '02 / Define — Framing the Right Problem',
        overview: ['Problem Statement'],
        content: [
          {
            heading: 'Problem Statement',
            body: `Synthesis identified the issue: productivity tools assume users arrive ready to self-direct. In interviews, that sequence was consistently where the process broke down. The cost of deciding what to do first was often enough to prevent doing anything at all.<br><br>The challenge was not to build a better list. It was to remove the need to self-direct.<br><br><strong>How might we design a task experience that removes the burden of initiation and guides users into beginning, without requiring them to plan?</strong>`,
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
            placeholder: '<img src="assets/focusflow/ff_3.png" alt="Early lo-fi screens of the chatbot concept" style="width:100%;border-radius:8px;display:block;">',
            body: `The lo-fi screens above show three interaction models considered. The question was which could structurally deliver the research requirements without asking the user to navigate, prioritise, or self-organise.<br><br>A <strong>list-with-focus mode</strong> was rejected immediately. The list still existed. The user still had to select a task before beginning. Research identified that selection as the failure point. Styling around it did not remove it.<br><br>A <strong>card-swipe model</strong> surfaced one task at a time but did not close the initiation gap. After the swipe, the user was still standing in front of a task, deciding whether to start.<br><br>The <strong>conversational interface</strong> was the only model that eliminated the gap. A chat assistant does not present options and wait. It offers the next step. By the time the user sees the screen, the decision has already been made. They are not choosing. They are responding.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: '04 / Design — Lo-fi to Mid-fidelity',
        overview: ['Lo-fi Prototype', 'Mid-fidelity Build', 'Testing and Iterations'],
        content: [
          {
            heading: 'Lo-fi Prototype',
            body: `Static wireframes could not test the core hypothesis. The only way to know whether removing the task list created relief or confusion was to make the experience navigable. I moved directly into a lo-fi interactive prototype to test five structural questions: does removing the list create confusion or relief; is a single dominant action legible without instruction; can visual progress communicate elapsed time without numbers; does minimal content per screen change engagement; does a fully linear flow feel constraining or clarifying.<br><br>The validated flow reduced to a single repeating sequence with no branches: <strong>Open app → Chat assistant offers a task → User confirms → Single focus screen → Complete → Assistant offers next step.</strong> No list. No navigation. No self-direction required.`,
            placeholderAfter: '<img src="assets/focusflow/ff_lofi.png" alt="Lo-fi screens showing the conversational flow" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Mid-fidelity Build',
            placeholder: '4 to 6 mid-fi screens laid out horizontally',
            body: `With structure validated, the mid-fidelity build had one job: make the flow legible enough to test and demonstrate. Only the interactions required to communicate the core concept were built. Effort outside the primary flow came at its cost.<br><br>Every screen was built against cognitive accessibility criteria drawn directly from research. One primary action per screen addressed decision fatigue. Limited text and visual noise reduced ambient cognitive load. Large tap targets addressed low-focus states. The current task and next step were always simultaneously visible, eliminating the memory load participants identified as a reason to abandon other tools. A calm palette of light green and white addressed the stimulation participants described as a trigger for closing the app.`,
          },
          {
            heading: 'What changed after testing',
            body: `Three moderated sessions on day three tested the core flow task-based. No participant looked for a list or tried to navigate away. All three described the experience as calmer than other tools they used. Two used the word "simple" without prompting.<br><br>Changes made after testing:`,
            list: [
              'Button size and contrast increased: two participants paused before the primary action',
              'Introductory text removed: it delayed engagement without adding clarity',
              'Focus state hierarchy strengthened: one participant\'s attention drifted from the active task name',
            ],
          },
        ],
      },
      {
        id: 'hifi',
        label: '05 / High Fidelity',
        title: '05 / High Fidelity — Proving the Concept as a Product',
        overview: ['High fidelity prototype after interaction validation'],
        content: [
          {
            heading: 'High fidelity prototype after interaction validation',
            body: `Once the interaction model was validated, I built the high-fidelity version to a standard suitable for production: type hierarchy that communicates state without adding noise, a calm colour system, and consistent component behaviour. The accessibility criteria that shaped the mid-fidelity build were applied at higher resolution.<br><br>The original assets were lost during an account merge. The mid-fidelity prototype and decision record remain.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="#" target="_blank" rel="noopener">\u2192 View high fidelity prototype (Figma)</a></div>`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '06 / Outcomes',
        title: '06 / Outcomes — What This Demonstrates',
        overview: ['Design Decisions', 'What This Project Proved', 'Reflection'],
        content: [
          {
            heading: 'Key Design Decisions',
            placeholder: `<table class="cs-decision-table"><thead><tr><th>Problem</th><th>Decision</th><th>Outcome</th></tr></thead><tbody><tr><td>Opening a task list triggered disengagement before starting</td><td>Replaced the list with a conversational assistant</td><td>Decision made before the user sees a screen; initiation barrier removed</td></tr><tr><td>Limited time</td><td>Built lo-fi to mid-fidelity first</td><td>Interaction model validated and demonstrated within sprint</td></tr><tr><td>Too many potential features</td><td>Designed one core flow</td><td>Clearer demonstration of the concept's value</td></tr></tbody></table>`,
            body: `<strong>Removing the task list</strong> was the most consequential decision. Research identified the list as the primary initiation failure point: it requires self-direction before any task can begin. The conversational assistant removes that requirement by design.<br><br><strong>Limiting the prototype to a single flow</strong> applied the same principle: one task, one decision at a time. Demonstrating one thing clearly was more valuable than covering multiple flows at partial fidelity.`,
          },
          {
            heading: 'What This Project Proved',
            body: `Focused research and honest synthesis are enough to make a structural design decision in three days. Every decision in this project traces to a specific finding. None came from convention or assumption about what a productivity app should look like.<br><br>The constraint produced discipline. No features outside the primary flow. No visual detail before the interaction was validated. The lo-fi prototype tested the core hypothesis in hours. The mid-fidelity build confirmed and demonstrated it in one more day. One thing done well rather than several things done partially.`,
          },
          {
            heading: 'Reflection',
            body: `Three sessions validated that the interface was understood and felt less demanding. They did not test whether the behaviour would hold over time or support sustained task completion.<br><br>Longitudinal use data is the primary gap. If taken further, the product would also need clearly defined scope distinguishing task facilitation from guided support. Judges raised that question, and it is the right one for any product operating in this space.`,
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
          ${block.placeholder ? (block.placeholder.trimStart().startsWith('<img') ? `<div class="cs-problem-image">${block.placeholder}</div>` : block.placeholder.trimStart().startsWith('<table') ? `<div class="cs-table-wrap">${block.placeholder}</div>` : `<div class="cs-placeholder"><span>${block.placeholder}</span></div>`) : ''}
          ${block.body ? `<p>${block.body}</p>` : ''}
          ${block.list ? `<ul class="cs-v2-list">${block.list.map(li => `<li>${li}</li>`).join('')}</ul>` : ''}
          ${block.afterList ? block.afterList : ''}
          ${block.placeholderAfter ? (block.placeholderAfter.trimStart().startsWith('<img') ? `<div class="cs-problem-image">${block.placeholderAfter}</div>` : `<div class="cs-placeholder"><span>${block.placeholderAfter}</span></div>`) : ''}
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
            <img src="${cs.heroImage}" alt="${cs.heroImageAlt}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">
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
              ${cs.problemPart1 ? `<p>${cs.problemPart1}</p>${cs.problemPlaceholder ? `<div class="cs-problem-image">${cs.problemPlaceholder}</div>` : ''}<p>${cs.problemPart2}</p>` : `<p>${cs.problem}</p>`}
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
