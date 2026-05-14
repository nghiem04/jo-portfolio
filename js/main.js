/* ── Case study data ── */
const caseStudies = [
  {
    num: '01',
    title: 'Opal: Designing Around How People Actually Travel',
    role: 'UX Designer · Research, Synthesis, Interaction Design',
    team: 'UX Design Team',
    client: 'Independent UX Project',
    year: '2024',
    context: 'UX Research · Interaction Design',
    thumbClass: 'thumb-a',
    heroImage: 'assets/opal/opal_1.png',
    heroImageAlt: 'Opal app redesign mockup',
    tags: ['UX Research', 'Interaction Design', 'Figma'],
    overview: `Opal had been designed for ticketing administration, not commuting. Research with 15 participants surfaced a structural fragmentation pattern: every commuter was running a three-app workflow: TripView for real-time status, Google Maps for routing, Opal only to top up. None of those switches were preferences; each was an adaptation to a gap the app did not fill. A second structural problem compounded this: the app had no awareness of routine. Most participants made the same journey every day, but the app presented the same blank state every session. The redesign consolidated the workflow into a single surface, rebuilt around how Sydney commuters actually begin their day.`,
    overviewLink: `<a class="cs-proto-btn" href="https://www.figma.com/make/pKtWgdPJyzKpnD8a5ZZtn3/opal_mid_fi?t=2IdijnlOUEr40Rhc-20&fullscreen=1" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a>`,
    problem: `Participants described the same workflow every morning: open Opal to check balance, switch to TripView for real-time status, check Google Maps for the route, return to Opal to top up. Every commuting need beyond payment required leaving the app entirely. The question was not which features were missing. It was whether a standalone ticketing tool was the right model at all.`,
    tools: ['Figma', 'Miro', 'User interviews', 'Competitive benchmarking', 'UX audit', 'Lo-fi sketching', 'Mid-fi prototyping'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: '01 / Research: What Commuters Actually Do',
        overview: ['Interview Findings', 'International Benchmarking', 'Opal App Audit'],
        content: [
          {
            heading: 'Interview Findings',
            body: `15 participants recruited across commute type: 8 rail, 4 bus, 3 multi-modal. Ages 17–45, all regular Opal users.<br><br>Interviews were structured around the full commuting day, not the Opal app. When participants described their morning from waking to arriving at work, a consistent pre-departure pattern emerged that no product-focused interview would have surfaced.<br><br>The highest-friction moment was the window before departure. Participants had built habits around TripView because Opal did not surface route status at decision speed. Most were repeating the same one or two journeys daily; the app had no awareness of this pattern. Unprompted, participants converged on the same request: save a regular route, get an alert if something changes, access it immediately on opening. That convergence became the central feature decision.<br><br>Synthesis identified fragmentation as a structural condition, not a side effect. Opal appeared at specific, limited moments in a workflow that moved continuously across applications. The switching was built into how commuters had adapted to what each tool could and could not do.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb5sCgU=/?share_link_id=506555134836" target="_blank" rel="noopener">→ View full research synthesis (Miro)</a></div>`,
          },
          {
            heading: 'International Benchmarking',
            body: `Three international transit apps were reviewed against the specific failure points research had surfaced, not as a general feature comparison.<br><br><strong>Oyster (London, TfL)</strong>: <strong>balance and top-up coexist without degrading either.</strong> Balance persisted across the app, accessible at the moment commuters needed it.<br><br><strong>Suica (Tokyo, JR East)</strong>: <strong>the clearest model for high-frequency transactional flows.</strong> Minimum input. A simple interface does not require a simple system behind it.<br><br><strong>Myki (Melbourne)</strong>: most directly comparable. Made visible both where Opal lagged and where constraints were shared, which mattered for scoping what the redesign could realistically address.`,
          },
          {
            heading: 'Opal App Audit',
            body: `<strong>Finding:</strong> Balance was buried in account settings. The most-needed pre-departure information was the hardest to reach.<br><strong>Decision:</strong> Persistent balance display on the home screen.<br><br><strong>Finding:</strong> Top-up required more steps than the task warranted. Two participants abandoned the in-app flow mid-morning for station machines.<br><strong>Decision:</strong> One-tap top-up accessible from home, removing the friction that caused avoidance behaviour.<br><br><strong>Finding:</strong> Trip history was a flat chronological list. Participants manually calculated costs to understand their spending.<br><strong>Decision:</strong> Per-journey fare breakdowns within trip history.`,
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: '02 / Define: Framing the Opportunity',
        overview: ['Key Insight'],
        content: [
          {
            heading: 'Key Insight',
            body: `<strong>Opal had not been designed badly. It had been designed for the wrong model of commuting.</strong><br><br>Participants used it as the payment step in a multi-app workflow. The switching was not coincidental; it was built into how commuters had adapted to what each tool could and could not do.<br><br>A second structural finding: <strong>the app was invisible to habit.</strong> Most participants made the same trip every day. The app presented the same blank state every session: no recognition of routine, no shortcut to a familiar journey, no proactive disruption alert on a route travelled hundreds of times.`,
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: '03 / Ideate: Structuring a Better Experience',
        overview: ['Navigation Exploration', 'Key Structural Decisions'],
        content: [
          {
            heading: 'Navigation Exploration',
            body: `Three home screen structures were explored before settling on the approach the prototype takes.<br><br>A <strong>dashboard model</strong> spread account-level information across a dense home screen. Rejected quickly. Research showed participants needed to reach one or two things fast, not scan a summary.<br><br>A <strong>task-oriented model</strong> surfaced the next likely action rather than a static overview. Rejected. Predicting intent required assumptions the research had not established clearly enough. A predicted action that turned out to be wrong would create more friction than no prediction at all.<br><br>A <strong>card-first model</strong> treated each Opal card as the primary organising element with persistent top-up access alongside it. Participants consistently framed Opal as a card they managed, not an account they administered. Building the home screen around that mental model reduced the interpretive work required to navigate.`,
            placeholder: '<img src="assets/opal/opal_6.png" alt="Low-fidelity sketches of home screen and navigation concepts" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_7.png" alt="Sketch of saved route concept showing route pinning and alert toggle" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Key Structural Decisions',
            body: `Three structural decisions defined the redesign. Each traces directly to a research or audit finding.<br><br><strong>Finding:</strong> Participants framed Opal as a card they managed, not an account they administered.<br><strong>Decision:</strong> Card-first home screen, aligned with an existing mental model and reducing interpretive navigation work.<br><br><strong>Finding:</strong> Top-up friction caused avoidance behaviour. Participants abandoned the in-app flow for station machines under time pressure.<br><strong>Decision:</strong> Persistent one-tap top-up from home, addressing both step count and avoidance.<br><br><strong>Finding:</strong> Switching to Google Maps or TripView was necessity, not preference.<br><strong>Decision:</strong> Integrated journey planner as a primary destination, removing the structural reason to leave the app.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: '04 / Design: Prototype',
        overview: ['Prototype Scope', 'How this fits into the Opal app', 'Key screens within the flow', 'High fidelity prototype within Opal'],
        content: [
          {
            heading: 'Prototype Scope',
            body: `The prototype tested two hypotheses: that a card-first home screen with persistent top-up access would reduce friction in the most frequent task, and that saved routes with real-time alerts would resolve the pre-departure anxiety participants described consistently.<br><br>Five decisions were carried into the build:`,
            list: [
              'Persistent balance on home (buried in account settings in the existing app)',
              'One-tap top-up from home (two participants abandoned the in-app flow for a station machine)',
              'Per-journey fare breakdowns (participants were manually calculating costs through a flat list)',
              'Unified multi-card management (informed by Oyster and Suica benchmarking)',
              'Saved routes with real-time disruption alerts. The most direct line from finding to interface.<br><br>Participants repeated the same journey daily; the app had no awareness of this. They used TripView for pre-departure alerts because Opal offered nothing equivalent.',
            ],
            placeholder: '<img src="assets/opal/opal_8.gif" alt="Figma prototype with interactive flows" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_9.png" alt="Saved route home screen and real-time alert notification screens" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'How this fits into the Opal app',
            body: `This redesign sits inside Opal, not alongside it. The entry point is the home screen where commuters already begin. The three primary paths (one-tap top-up, saved route with real-time alerts, and integrated journey planner) each replace a step that previously required multi-step navigation or sent users out to a third-party app.<br><br>Every flow returns to the home screen on completion. No interaction terminates at a confirmation page or leaves the user inside a sub-menu, reflecting how transit tools are actually used: briefly, repeatedly, and under time pressure.`,
          },
          {
            heading: 'Key screens within the flow',
            body: `The screens below show the home state, top-up flow, trip history, and journey planner. Look for the persistent balance display and the saved route card that appears immediately on opening.`,
            placeholder: '<img src="assets/opal/opal_10.png" alt="Key screen mockups: home screen, top-up flow, trip history, journey planner" style="width:100%;border-radius:8px;display:block;"><img src="assets/opal/opal_11.png" alt="Key screen mockups continued" style="width:100%;border-radius:8px;display:block;margin-top:1rem;">',
          },
          {
            heading: 'High fidelity prototype within Opal',
            body: `Mid-fidelity validated structure. High fidelity answered whether these features could credibly exist inside the real Opal app, built to the same constraints the product team works within.<br><br>Opal is a government product with an established visual system. Colour tokens, iconography, and interaction patterns all reference the existing Opal design language. The goal was not to redesign Opal's visual identity. It was to demonstrate that these features belong inside it and could ship without requiring a full rebuild.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/pKtWgdPJyzKpnD8a5ZZtn3/opal_mid_fi?t=2IdijnlOUEr40Rhc-20&fullscreen=1" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a></div>`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes: What Changes for Commuters',
        overview: ['What Changes', 'What This Demonstrates', 'Next Steps'],
        content: [
          {
            heading: 'What Changes',
            body: `The redesign addresses the workflow commuters had actually built, not the one the app assumed they were running.`,
            list: [
              'No need to open TripView before leaving home. Real-time disruption alerts surface on saved routes on opening.',
              'No need to navigate into settings to see balance. Persistent display on the home screen.',
              'No reason to leave the app to plan a route. Journey planner embedded as a primary destination.',
              'No repeat of the same decisions for the same daily journey. The app recognises routine for the first time.',
              'No abandoning top-up mid-commute. One tap from home replaces a multi-step flow.',
            ],
          },
          {
            heading: 'What This Demonstrates',
            body: ``,
            list: [
              'Identify structural problems beyond feature gaps: a service-level fragmentation pattern no feature audit would surface.',
              'Design around real behaviour, not stated preferences. Every decision traces to a specific finding.',
              'Translate research into interaction patterns: pre-departure anxiety became saved routes with alerts; abandonment behaviour became one-tap top-up.',
              'Work within an established government design system without requiring a rebuild',
              'Think at a service level across tools, not just within a single product surface',
            ],
          },
          {
            heading: 'Next Steps',
            body: `The primary gap is the absence of usability testing. The next step is moderated task-based sessions measuring whether redesigned flows reduce completion time and whether saved routes reduce the application-switching interviews identified as the core problem.`,
          }
        ],
      },
    ],
  },
  {
    num: '02',
    title: 'Focus — Maximising Task Initiation by Removing the Decision',
    role: 'Sole Product Designer (UX and UI) in a cross functional team of engineers',
    client: 'Hackathon Project · Fan Favourite',
    year: '2022',
    context: 'Cognitive Accessibility · Rapid Prototyping Sprint',
    thumbClass: 'thumb-b',
    heroImage: 'assets/focus/ff_1.png',
    heroImageAlt: 'Focus app redesign mockup',
    tags: ['Cognitive Accessibility', 'Behaviour Design', 'Rapid Prototyping'],

    overview: `Focus was built in three days to address a problem most productivity tools are not designed for: helping people with ADHD start tasks, not organise them.<br><br>As the sole designer in a cross-functional team of engineers, I led research, synthesis, and end-to-end interface design within the sprint. The constraint forced discipline. Every decision had to be grounded in a finding or cut.<br><br>The central decision was structural: remove the task list entirely and replace it with a conversational assistant that guides users into a single task at a time. Research showed the list was not an imperfect solution. It was the source of the problem. The redesign, developed from lo-fi validation through to a high-fidelity prototype, addressed that directly.`,
    overviewLink: `<a class="cs-proto-btn" href="https://www.figma.com/make/msY8oDslYcx6RhBGTpxsxh/AI-Chat-Assistant-Prototype?t=DcJRutSglPAmbPe6-20&fullscreen=1" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a>`,
    problemPart1: `Most productivity tools are built on one assumption: users can plan, prioritise, and execute in a structured, linear way. The screen below contrasts a standard task list view with focus's single-focus screen.`,
    problemPlaceholder: '<img src="assets/focus/ff_2.png" alt="Comparison of a traditional task list app versus Focus single-focus screen" style="width:100%;border-radius:8px;display:block;">',
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
            placeholder: '<img src="assets/focus/ff_3.png" alt="Early lo-fi screens of the chatbot concept" style="width:100%;border-radius:8px;display:block;">',
            body: `Three interaction models were evaluated against a single criterion: does the user ever have to choose a task?<br><br>The image above shows early explorations of each model. One by one, they failed the same test.<br><br>A <strong>list-with-focus mode</strong> still opened on a list. The user still had to select a task before the assistant could surface one. Research had identified that selection as the exact point where initiation broke down. The assistant could not fix a problem that the model required users to solve before reaching it.<br><br>A <strong>card-swipe model</strong> surfaced one task at a time, which removed visual overwhelm. It did not remove the decision. After the swipe, the user was still standing in front of a task, determining whether to start. The initiation gap was still open.<br><br>The <strong>conversational model</strong> was the only one that closed it structurally. A conversational assistant does not surface options and wait for a choice. It initiates. It offers the next step. The user's first interaction is a response, not a selection. By the time the user is engaged, the decision has already been made. That is not a UX detail. It is the entire hypothesis.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: '04 / Design — Lo-fi to Mid-fidelity',
        overview: ['Lo-fi Prototype', 'Mid-fidelity Build', 'Testing and Iterations', 'High fidelity prototype after interaction validation'],
        content: [
          {
            heading: 'Lo-fi Prototype',
            body: `The interaction model could not be validated in static form. Whether replacing task selection with assistant-initiated turns actually removed the experience of deciding had to be tested in a navigable state.<br><br>The prototype was built against five criteria — each tracing directly to a research finding, none exploratory:`,
            list: [
              'Does removing task selection create relief or reorientation?',
              'Does a single assistant-initiated action communicate without instruction?',
              'Can a progress indicator carry elapsed time without requiring the user to monitor it?',
              'Does limiting each conversational state to one response option reduce cognitive load?',
              'Does a fully linear, non-branching sequence feel like structure or constraint?',
            ],
            afterList: `<p><br>The validated model reduced to a single repeating sequence: <strong>Open app → Assistant offers a task → User confirms → Focus state begins → Task complete → Assistant offers next step.</strong> The user makes no choices. They respond. The assistant leads the entire sequence.</p>`,
            placeholderAfter: '<img src="assets/focus/ff_lofi.png" alt="Lo-fi screens showing the conversational flow" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Mid-fidelity Build',
            placeholder: '<img src="assets/focus/ff_midfi.png" alt="Mid-fidelity screens showing the conversational flow" style="width:100%;border-radius:8px;display:block;">',
            body: `With the interaction model validated, the mid-fidelity build had one job: make the conversation legible as a product experience. Not cleaner states. Not a more resolved palette. The question was whether a user could understand the turn-taking model without instruction.<br><br>Every decision served that:`,
            list: [
              'One response option per state: always clear what the assistant was asking',
              'Minimal content per state: the response required no evaluation before giving it',
              'Large tap targets: confirmation required no precision in a low-focus moment',
              'Active task and next step simultaneously visible: working memory had nothing to carry between turns',
              'Calm palette of light green and white: participants had described visual stimulation as a trigger for closing the tools they already used',
            ],
            afterList: `<p><br>Nothing was added that did not directly support the conversation.</p>`,
          },
          {
            heading: 'What changed after testing',
            body: `Three moderated task-based sessions were run on day three. The result was the most direct validation possible: no participant looked for a list. No participant tried to navigate. No participant asked what they were supposed to do. The assistant had already told them.<br><br>All three described the experience as calmer than other tools they used. Two used the word "simple" without prompting. Neither was describing the visual design. They were describing what it felt like when someone else made the decision.<br><br>Changes made after testing:`,
            list: [
              'Button size and contrast increased: two participants paused before the primary action',
              'Introductory text removed: it delayed engagement without adding clarity',
              'Focus state hierarchy strengthened: one participant\'s attention drifted from the active task name',
            ],
          },
          {
            heading: 'High fidelity prototype after interaction validation',
            body: `High fidelity was the final test of the hypothesis. The goal was to prove that this conversational model could exist as a resilient, shippable product rather than just a prototype.<br><br><strong>Design for Precision</strong><br>Type hierarchy communicates conversational state, not decoration. Clear typographic rules ensure the user always knows where they are in the flow — reducing cognitive effort at the moment it matters most.<br><br><strong>Systems Thinking and Accessibility</strong><br>The colour system meets the same cognitive accessibility criteria that governed earlier phases: high contrast, calm palette, no sensory overwhelm. <strong>Inconsistency in a turn-based interaction creates hesitation.</strong> Every component was designed to eliminate it.<br><br><strong>The Result</strong><br>The high-fidelity build demonstrates that conversational task initiation is a viable architectural pattern for a real-world product. It moves the concept from a validated interaction model into a polished, accessible interface ready for technical implementation.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/msY8oDslYcx6RhBGTpxsxh/AI-Chat-Assistant-Prototype?t=DcJRutSglPAmbPe6-20&fullscreen=1" target="_blank" rel="noopener">\u2192 View high fidelity prototype (Figma)</a></div>`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes — What Changes for the User',
        overview: ['What Changes', 'Key Design Decisions', 'Next Steps'],
        content: [
          {
            heading: 'What Changes',
            body: `The redesign addresses the failure state every existing productivity tool creates for ADHD users.`,
            list: [
              'The user never sees a task list — the assistant surfaces one task at a time, on opening',
              'The user never decides what to start — the assistant initiates; the user only responds',
              'The user never tracks time themselves — a passive progress indicator carries elapsed time without requiring attention',
              'The user never navigates between states — the flow is fully linear, returning to the same conversational surface',
              'The decision to begin has already been made before the user is aware of making it',
            ],
          },
          {
            heading: 'Key Design Decisions',
            placeholder: `<table class="cs-decision-table"><thead><tr><th>Problem</th><th>Decision</th><th>Outcome</th></tr></thead><tbody><tr><td>Opening a task list triggered disengagement before starting</td><td>Replaced the list with a conversational assistant</td><td>Decision made before the user sees a screen; initiation barrier removed</td></tr><tr><td>Limited time</td><td>Built lo-fi to mid-fidelity first</td><td>Interaction model validated and demonstrated within sprint</td></tr><tr><td>Too many potential features</td><td>Designed one core flow</td><td>Clearer demonstration of the concept\'s value</td></tr></tbody></table>`,
            body: `<strong>Replacing the task list</strong> was the most consequential decision in the project. Research identified list-opening as the structural failure point: it requires the user to self-direct before any task can begin. The conversational assistant removes that requirement entirely. The user's first interaction is a response. The decision has already been made.<br><br><strong>Limiting the work to a single flow</strong> applied the same discipline: one task, one conversational state, one response at a time. One thing demonstrated clearly was more valuable than several things demonstrated partially.`,
          },
          {
            heading: 'Next Steps',
            body: `Three sessions validated that the interface was understood and felt less demanding. They did not test whether the behaviour would hold over time or support sustained task completion.<br><br>Longitudinal use data is the primary gap. If taken further, the product would need clearly defined scope distinguishing task facilitation from guided support.`,
          },
        ],
      },
    ],
  },
  {
    num: '03',
    title: 'Government AI Assistant: End-to-End Design Under Real Constraint',
    role: 'Frontend Designer-Developer · Design, Implementation, Accessibility',
    client: 'Client Engagement · Federal Government',
    year: '2025',
    context: 'Conversational AI · Accessibility · Design Under Constraint',
    thumbClass: 'thumb-c',
    heroImage: '',
    heroImageAlt: 'Government AI assistant interface',
    heroBanner: true,
    heroBannerLabel: '03 / Case Study',
    heroBannerHeading: 'Government Chatbot',
    heroBannerSub: 'Designing Conversational AI Under Real-World Constraint',
    tags: ['Conversational AI', 'WCAG 2.2', 'Frontend Delivery'],
    overview: `A federal Australian government department needed a public-facing AI assistant to help citizens and operational staff navigate a body of complex regulatory information. The product was built on an enterprise chatbot platform with a custom retrieval pipeline ingesting departmental documents, and governance tooling moderating responses.<br><br>I owned the frontend end-to-end as part of the delivery team. This covered design, implementation, accessibility, and responsive behaviour across desktop, tablet, and mobile.`,
    problemHeading: 'Overview',
    problem: `<em>This case study covers a live federal government client engagement. Visual assets, UI screens, and departmental branding are intentionally limited or anonymised due to NDA and governance restrictions. The focus is decision-making, interaction design, accessibility implementation, and delivery.</em><br><br>A federal Australian government department needed a public-facing AI assistant to help citizens and operational staff navigate complex regulatory information. Built on an enterprise chatbot platform with a custom retrieval pipeline and governance-moderated responses.<br><br>I joined as the only frontend designer-developer on a delivery team of backend engineers and business analysts. The expectation was implementation against an existing brief.<br><br>The client had no UI direction. The backend team was focused on retrieval and moderation systems. Brand input was a slide deck with two font specifications. I had three options: wait, escalate, or start designing and use prototypes to extract the brief from the client. I chose the third.`,
    tools: ['Figma', 'Browser DevTools', 'AI-assisted coding tools', 'WCAG 2.2', 'Competitive benchmarking'],
    confidentiality: 'Client and product details anonymised per engagement terms',
    stages: [
      {
        id: 'design-decisions',
        label: '01 / Design Decisions',
        title: '01 / Design Decisions',
        overview: ['Prototypes as the Requirements Engine', 'Benchmarking Modern AI Patterns', 'Solving the Cold-Start Problem', 'The Mobile Compromise'],
        content: [
          {
            heading: 'Prototypes as the Requirements Engine',
            body: `The client couldn't articulate requirements upfront, but they could react. I ran more than a dozen rounds of iterative prototyping, each version surfacing one more specification the client hadn't been able to volunteer. The first build used approximate brand colours from their slide deck, framed explicitly as a starting point. The process worked. What started as a best-guess layout became an approved-for-build spec.<br><br>This wasn't a refinement process. It was requirements gathering. Design as extraction.`,
            placeholderAfter: `<figure style="margin:0"><img src="assets/gov/gov_2.png" alt="Early prototype iteration of the government AI assistant interface" style="width:100%;border-radius:8px;display:block;"><figcaption style="font-size:0.8rem;color:var(--ink-3);margin-top:0.5rem;font-style:italic;">An early prototype built from approximate brand colours in the client's slide deck, used as a reactions surface to extract requirements that couldn't be articulated upfront.</figcaption></figure>`,
          },
          {
            heading: 'Benchmarking Modern AI Patterns',
            body: `The client's initial visual preferences skewed dated for a 2025 AI product. The stakeholder group was less familiar with modern AI tools, which I came to see as the actual constraint to design around.<br><br>I benchmarked against the major consumer AI products the target users had already been exposed to. The conventions were clear: input at the bottom, suggested prompts for discoverability, conversational thread layout, distinct AI/user message treatment. These aren't aesthetic preferences; they're the interaction vocabulary users already hold. I used the benchmarking work directly in stakeholder conversations to shift design disputes from taste to evidence.`,
          },
          {
            heading: 'Solving the Cold-Start Problem',
            body: `An empty input field with no context is a dead end. I designed three suggested prompt cards surfacing the most common inquiry categories. Two jobs simultaneously: show users what to ask, and signal what the system is actually equipped to handle.`,
          },
          {
            heading: 'The Mobile Compromise',
            body: `The most substantive design negotiation on the project.<br><br>The client requested vertical card stacking on mobile, a pattern absent from major consumer AI products that would crowd out higher-priority content. Horizontal scroll also failed: mandatory government branding, a legally required disclaimer, and a persistent input field left no room on a small viewport.<br><br>Decision: remove prompt cards from mobile entirely. Recovered space preserved branding, input, and disclaimer: the elements that establish credibility and enable primary action. Mobile users lose the cold-start scaffold; they keep a usable, dignified interface. On desktop and tablet, the cards stayed.<br><br>I'd make the same call again. The lever I'd push hardest on if revisiting is the disclaimer length: the content cost driving most of the mobile layout's weight.`,
            placeholderAfter: `<figure style="margin:0"><img src="assets/gov/gov_1.png" alt="Wireframe comparison showing client-requested mobile layout versus final decision" style="width:100%;border-radius:8px;display:block;"><figcaption style="font-size:0.8rem;color:var(--ink-3);margin-top:0.5rem;font-style:italic;">Left: client-requested approach, three prompt cards stacked vertically on mobile. Right: final decision, cards removed, branding, input field, and legally required disclaimer preserved.</figcaption></figure>`,
          },
        ],
      },
      {
        id: 'craft',
        label: '02 / Craft and Delivery',
        title: '02 / Craft and Delivery',
        overview: ['Designing for Failure', 'Accessibility in Conversational UI', 'Engineering and Delivery'],
        content: [
          {
            heading: 'Designing for Failure',
            body: `Conversational AI fails in ways static interfaces don't: model timeouts, content filtering, retrieval failures, character limits, ambiguous responses. Each requires a different user-facing treatment. Generic error messaging would have undermined a tool whose core value proposition is reliable regulatory information.<br><br>I designed differentiated error states across every failure mode. A backend-imposed character limit became a visible counter rather than a silent rejection. Streaming failures got distinct treatment from retrieval failures. Every error state ends with a clear next action.`,
          },
          {
            heading: 'Accessibility in Conversational UI',
            body: `WCAG 2.2 compliance on conversational AI is harder than on static pages. Three challenges required deliberate decisions rather than default-library handling:<br><br><strong>Streaming response text:</strong> announced to screen readers without re-reading accumulated content as text appends.<br><strong>Focus management:</strong> conversation updates handled without disorienting keyboard users.<br><strong>Character counter:</strong> state communicated through assistive technology, not visually only.<br><br>WCAG 2.2 became an ISO/IEC international standard in October 2025, during the project. WCAG 3.0 was in working draft and not appropriate for production deployment on a federal domain.`,
          },
          {
            heading: 'Engineering and Delivery',
            body: `I implemented the frontend end-to-end, using AI-assisted coding tools as an acceleration layer, keeping focus on design decisions, accessibility behaviour, and stakeholder iteration while delegating routine implementation to tooling.<br><br>Implementation included: building a component system for conversational states (empty, loading, streaming, error, complete), handling streaming response rendering without layout thrash, correctly consuming the backend's response shapes and edge-case payloads, and managing focus across a dynamically updating thread.<br><br>Testing ran in browser DevTools at real device dimensions throughout — not against Figma mockups at the end. This caught mobile composition issues that static design review had missed.`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '03 / Outcome',
        title: '03 / Outcome',
        overview: ['Outcome', 'Key Takeaways'],
        content: [
          {
            heading: 'Outcome',
            body: `The product shipped to production on a public government domain and is now the department's live AI assistant for the regulatory area it serves — accessible to citizens navigating compliance for the first time and operational staff using it day-to-day.<br><br>Specific usage metrics are not available for disclosure under engagement terms. The product is live, in production, and serving its intended function in a public government context.`,
          },
          {
            heading: 'Key Takeaways',
            body: `<strong>No brief is a brief.</strong> When requirements can't be articulated upfront, prototyping is the extraction mechanism. The iteration wasn't refinement. It was discovery.<br><br><strong>Ground design disagreements in evidence.</strong> Benchmarking data made stakeholder pushback productive. Every compromise landed better than either starting position.<br><br><strong>Solo design in a non-design-led team requires decisiveness.</strong> No design review, no peer critique, no design leadership above me. The clarity it forces is something I'd carry into any team.`,
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
        ${cs.heroBanner ? `
        <div class="cs-hero-banner">
          <div class="cs-hero-banner-inner">
            <div class="cs-hero-banner-label">${cs.heroBannerLabel}</div>
            <h1 class="cs-hero-banner-title">${cs.heroBannerHeading}</h1>
            <p class="cs-hero-banner-sub">${cs.heroBannerSub}</p>
          </div>
        </div>
        ` : `
        <div class="cs-overview-hero">
          <div class="cs-overview-visual ${cs.thumbClass}">
            <img src="${cs.heroImage}" alt="${cs.heroImageAlt}" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">
          </div>
          <div class="cs-overview-intro">
            <div class="section-label">${cs.context}</div>
            <h1 class="cs-v2-title">${cs.title}</h1>
            ${cs.heroPlaceholder ? `<div class="cs-placeholder"><span>${cs.heroPlaceholder}</span></div>` : ''}
            <p class="cs-v2-sub">${cs.overview}</p>
            ${cs.atAGlance ? `<div class="cs-table-wrap" style="margin-top:1.5rem;">${cs.atAGlance}</div>` : ''}
            ${cs.overviewLink ? `<div class="cs-proto-btn-wrap">${cs.overviewLink}</div>` : ''}
          </div>
        </div>
        `}
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
              ${cs.confidentiality ? `<div class="cs-meta-row"><span class="cs-meta-label">Confidentiality</span><span class="cs-meta-val">${cs.confidentiality}</span></div>` : ''}
            </div>
          </div>
          <div class="cs-stage-main">
            <div class="cs-content-block">
              <h3 class="cs-content-heading">${cs.problemHeading || 'The Problem'}</h3>
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
            <a href="https://www.linkedin.com/in/joanne-nghiem/" class="footer-link" target="_blank" rel="noopener">LinkedIn</a>
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
