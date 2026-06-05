/* ── Dark mode ── */
function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }
})();

/* ── Case study data ── */
const caseStudies = [
  {
    num: '01',
    title: 'Opal: Designing Around How People Actually Travel',
    role: 'Product Designer · Research, Synthesis, Interaction Design',
    team: 'UX Design Team',
    client: 'Independent UX Project',
    year: '2024',
    context: 'UX Research · Interaction Design',
    thumbClass: 'thumb-a',
    heroImage: 'assets/opal/opal_1.png',
    heroImageAlt: 'Opal app redesign mockup',
    tags: ['UX Research', 'Interaction Design', 'Figma'],
    overview: `Sydney commuters were running three apps to make one journey, and Opal was only one of them. Research with 15 participants showed why: Opal had been built for ticketing administration, not commuting. Two structural failures explained the pattern. The first was workflow fragmentation, with TripView used for real-time status, Google Maps for routing, and Opal only to top up. The second was a trust failure, where the app asked commuters to accept fares, charges, and stored value they could not verify or recover. A third condition compounded both: the app had no memory of routine, opening to the same blank state every session despite most people making the same trip every day. Fragmentation, trust, and habit became the three threads that organise this project. The redesign consolidated the workflow into one surface and made the system legible, rebuilt around how Sydney commuters actually begin their day.<br><br>This was a self-initiated project. It was conducted without access to Transport for NSW and without a testing budget, which shaped both its scope and the way its outcomes are framed.`,
    overviewLink: `<a class="cs-proto-btn" href="https://www.figma.com/make/pKtWgdPJyzKpnD8a5ZZtn3/opal_mid_fi?t=2IdijnlOUEr40Rhc-20&fullscreen=1" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a>`,
    problem: `Participants described the same routine every morning: open Opal to check balance, switch to TripView for real-time status, check Google Maps for the route, return to Opal to top up. Every commuting need beyond payment required leaving the app.<br><br>The friction was not only about missing features. It was also about what could not be trusted. Fares sometimes seemed wrong, with no breakdown to check against. Students were quietly overpaying because the app offered no digital path to the concession fares they were entitled to. And anyone carrying real value on a card knew that losing it could mean losing the money.<br><br>The question was not which features were missing. It was whether a standalone ticketing tool, one that asked for trust without offering visibility, was the right model at all.`,
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
            body: `Fifteen participants were recruited across commute type: 8 rail, 4 bus, 3 multi-modal. Ages ranged from 17 to 45, all regular Opal users. Interviews were structured around the full commuting day, not the Opal app. When participants described their morning from waking to arriving at work, patterns emerged that no product-focused interview would have surfaced. The findings sorted into the three threads that organise this case study.<br><br><strong>Fragmentation: the workflow lived across apps.</strong> The highest-friction moment was the window before departure. Participants relied on TripView because Opal did not surface route status at decision speed, and on Google Maps because Opal offered no routing at all. Opal appeared only at the payment step of a workflow that otherwise moved continuously between other applications. The switching was not preference. It was how commuters had adapted to what each tool could and could not do.<br><br><strong>Trust: the app asked for faith it had not earned.</strong> Participants did not trust what Opal charged them. Several recalled journeys where the fare seemed wrong, with nothing to check it against. Students described a structural penalty: with no digital concession option in-app, they defaulted to a physical adult card and were charged full adult fares for concession-eligible trips. Those carrying real value on a card described a different anxiety, that a lost card could be canceled but its balance was unrecoverable in practice, with the only safeguard being a registration step most had never completed.<br><br><strong>Habit: the app was blind to routine.</strong> Cutting across both threads, most participants repeated the same one or two journeys daily, yet the app opened to a blank state every session. Unprompted, they converged on the same request: save a regular route, get an alert if something changes, and reach it immediately on opening. The app held no memory of a journey travelled hundreds of times.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb5sCgU=/?share_link_id=506555134836" target="_blank" rel="noopener">→ View full research synthesis (Miro)</a></div>`,
          },
          {
            heading: 'International Benchmarking',
            body: `Contactless smart cards are a global category, and an initial scan covered systems across Asia-Pacific (Octopus, Suica, EZ-Link, T-Money, Myki), Europe (Oyster, Navigo, OV-chipkaart), and North America (OMNY, Clipper, PRESTO). The scan established a baseline: account-held value and open-loop tap-on, where a phone or bank card replaces the physical card at the same fare caps, are now category norms. That reframes Opal's gaps as lagging an established standard, not facing unsolved problems.<br><br>Three systems were then selected as close benchmarks. Each had already resolved a specific failure this research found in Opal, and together they covered all three threads. The closest domestic system was included so the findings could not be dismissed as foreign edge cases.<br><br><strong>Suica (Tokyo)</strong> answers fragmentation and lost value. It lives entirely on the phone, tapped in an express mode that needs no app open and no unlock. Crucially, an existing card can be transferred onto the device and topped up there, so value moves with the phone rather than being trapped on a card.<br><br><strong>Oyster (London)</strong> answers lost value through account ownership. A registered card's balance can be moved to a replacement when the card is lost. The lesson is about ownership: value tied to an account survives the card. Notably, London delivers digital tap-on through contactless bank cards, not by putting Oyster itself on the phone, reaching the same outcome by a different route.<br><br><strong>Myki (Melbourne)</strong> answers the concession penalty, on comparable terrain. Operating under similar fare-capping conditions, Mobile myki already offered a digital card in the phone wallet with real-time balance, mobile top-up, and tap-on. Most significantly, it supported a concession fare type, the exact gap forcing Sydney students onto adult fares.<br><br>The benchmarking established one thing clearly. Opal's failures are not inherent to transit ticketing. Each had been solved elsewhere, and Myki had solved most of them under conditions close to Opal's. Opal's opacity was a design and platform choice, not a necessity. That is what made an app-level redesign worth pursuing now, ahead of the Opal Next Gen replacement already announced by Transport for NSW.<br><br>Retail payment, where cards like Suica double as general digital wallets, was noted but scoped out. It sits outside the commuting workflow this research addressed.`,
          },
          {
            heading: 'Opal App Audit',
            body: `The audit diagnosed the current app against the same three threads. It records problems only. The decisions that answer them appear in Ideate, after the navigation model that shaped them.<br><br><strong>Problem (Trust):</strong> Balance was buried in account settings, so commuters could not see their standing before a journey.<br><br><strong>Problem (Fragmentation):</strong> Top-up took more steps than the task warranted. Two participants abandoned the in-app flow mid-morning for station machines.<br><br><strong>Problem (Trust):</strong> Trip history was a flat chronological list with no fare detail. Participants calculated costs by hand and could not confirm whether a charge was correct.<br><br><strong>Problem (Trust):</strong> There was no in-app digital card or native concession path. Students on physical adult cards were charged adult fares for concession-eligible trips.<br><br><strong>Problem (Trust):</strong> Stored value was tied to the physical card, with recovery conditional on a registration step most commuters never complete.`,
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
            body: `Opal had not been designed badly. It had been designed for the wrong model of commuting, and the wrong model of trust. The distinction sets the intervention. A feature-gap diagnosis produces a backlog of additions. A wrong-model diagnosis calls for a structural rethink. The research supported the second.<br><br><strong>Wrong workflow (Fragmentation).</strong> Participants used Opal as the payment step in a multi-app routine. Adding features one at a time would not fix this, because the problem was the boundary of the app, not its contents.<br><br><strong>Wrong trust model (Trust).</strong> The app treated the commuter as an account administrator and asked them to take its numbers on faith. None of that faith was earned. Fares could not be verified, eligible riders were overcharged by default, and stored value was effectively lost with the card. The one safeguard depended on a registration step few completed, which made the protection invisible.<br><br><strong>Invisible to habit (Habit).</strong> Most participants made the same trip every day, yet the app recognised none of it. No shortcut to a familiar journey, no proactive alert on a route travelled hundreds of times.<br><br><strong>What this framing chose not to solve.</strong> Two adjacent problems were deliberately excluded. Retail payment, a category norm in systems like Suica, sits outside the commuting workflow. And the platform-level fixes that need backend or policy change, including concession-eligibility verification and the value-recovery process, were named as dependencies rather than claimed as design solutions. The framing committed to what an app-level redesign could credibly own, and was explicit about what it could not.`,
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
            body: `Three home screen structures were explored before settling on the approach the prototype takes.<br><br>A <strong>dashboard model</strong> spread account-level information across a dense home screen. It was rejected quickly, because research showed participants needed to reach one or two things fast, not scan a summary.<br><br>A <strong>task-oriented model</strong> surfaced the next likely action rather than a static overview. It was rejected because predicting intent required assumptions the research had not established. A wrong prediction would create more friction than no prediction at all.<br><br>A <strong>card-first model</strong> treated each Opal card as the primary organising element, with persistent top-up alongside it. Participants consistently framed Opal as a card they managed, not an account they administered. Building the home screen around that mental model reduced the work of navigating it. Paired with account-held balance, it kept the card as the mental anchor without keeping the physical card as the only place value lived. This model was carried forward, and the decisions below all follow from it.`,
            placeholder: '<img src="assets/opal/opal_6.png" alt="Low-fidelity sketches of home screen and navigation concepts" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_7.png" alt="Sketch of saved route concept showing route pinning and alert toggle" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Key Structural Decisions',
            body: `Each decision answers a problem named in the audit and follows from the card-first model. This is the single place the decisions are set out.`,
            list: [
              '<strong>Decision (Habit + Fragmentation):</strong> Card-first home screen, aligned with the mental model participants already held.',
              '<strong>Decision (Fragmentation):</strong> Persistent one-tap top-up from home, addressing both step count and the avoidance it caused under time pressure.',
              '<strong>Decision (Fragmentation):</strong> Integrated journey planner as a primary destination, removing the reason to leave for Google Maps or TripView.',
              '<strong>Decision (Trust):</strong> Persistent balance on the home screen, replacing the buried settings path.',
              '<strong>Decision (Trust):</strong> Per-journey fare breakdowns that make every charge legible and auditable.',
              '<strong>Decision (Trust):</strong> Digital card with concession fare type, so the correct fare is the default rather than a privilege of carrying the right physical card.',
              '<strong>Decision (Trust):</strong> Account-held balance with multi-card management, so value is recoverable when a card is not.',
              '<strong>Decision (Habit):</strong> Saved routes with real-time disruption alerts on opening, giving the app the memory of routine it had lacked.',
            ],
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
            body: `The prototype tested two core hypotheses: that a card-first home screen with persistent top-up would reduce friction in the most frequent task, and that saved routes with real-time alerts would resolve the pre-departure anxiety participants described. Alongside these, it showed how a more legible and trustworthy system could sit inside the existing app. The decisions set out in Ideate were carried into the build in full.`,
            placeholder: '<img src="assets/opal/opal_8.gif" alt="Figma prototype with interactive flows" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_9.png" alt="Saved route home screen and real-time alert notification screens" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'How this fits into the Opal app',
            body: `This redesign sits inside Opal, not alongside it. The entry point is the home screen where commuters already begin. The primary paths each replace a step that previously required deep navigation or sent users to a third-party app. Each also removes a reason the system could not be trusted: fare breakdowns make charges legible, digital concession makes the right fare the default, and account-held balance makes value safe.<br><br>Every flow returns to the home screen on completion. No interaction ends at a confirmation page or strands the user in a sub-menu, reflecting how transit tools are actually used: briefly, repeatedly, and under time pressure.`,
          },
          {
            heading: 'Key screens within the flow',
            body: `The screens below show the home state, top-up flow, trip history, and journey planner. Look for the persistent balance display and the saved route card that appears immediately on opening.`,
            placeholder: '<img src="assets/opal/opal_10.png" alt="Key screen mockups: home screen, top-up flow, trip history, journey planner" style="width:100%;border-radius:8px;display:block;"><img src="assets/opal/opal_11.png" alt="Key screen mockups continued" style="width:100%;border-radius:8px;display:block;margin-top:1rem;">',
          },
          {
            heading: 'High fidelity prototype within Opal',
            body: `Mid-fidelity validated structure. High fidelity answered whether these features could credibly exist inside the real Opal app, built to the constraints the product team works within.<br><br>Opal is a government product with an established visual system. Colour tokens, iconography, and interaction patterns all reference the existing Opal design language. The goal was not to redesign Opal's identity. It was to show that these features belong inside it and could ship without a full rebuild.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/pKtWgdPJyzKpnD8a5ZZtn3/opal_mid_fi?t=2IdijnlOUEr40Rhc-20&fullscreen=1" target="_blank" rel="noopener">→ View high fidelity prototype (Figma)</a></div>`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes: Intended Outcomes and How to Verify Them',
        overview: ['Intended Outcomes', 'What This Demonstrates', 'Next Steps'],
        content: [
          {
            heading: 'Intended Outcomes',
            body: `This project produced a high-fidelity prototype but was not usability-tested. The items below are the outcomes the design is built to produce, each paired with its mechanism and the signal that would confirm it. They are hypotheses, not measured results.`,
            list: [
              '<strong>Reduce pre-departure app-switching</strong> (Habit + Fragmentation). Saved-route alerts surface disruptions on opening, the task TripView was doing. <em>Verification: whether saved-route users reduce or stop opening TripView before travel.</em>',
              '<strong>Make balance visible at the moment of need</strong> (Trust). Persistent home-screen balance replaces a buried path. <em>Verification: whether commuters check balance in-app rather than at station readers or not at all.</em>',
              '<strong>Keep route planning inside the app</strong> (Fragmentation). An embedded planner removes the reason to switch to Google Maps. <em>Verification: whether planning happens in-app and external-map use for transit drops.</em>',
              '<strong>Recognise routine</strong> (Habit). A saved-route card appears on opening for repeated journeys. <em>Verification: whether adoption is high among daily commuters and repeated manual lookups fall.</em>',
              '<strong>Remove top-up abandonment</strong> (Fragmentation). One-tap top-up from home replaces a multi-step flow. <em>Verification: whether mid-commute abandonment to station machines falls and completion rises.</em>',
              '<strong>Make fares auditable</strong> (Trust). Per-journey breakdowns replace a flat list. <em>Verification: whether fare distrust and manual cost-checking decrease.</em>',
              '<strong>Default eligible riders to the correct fare</strong> (Trust). A digital concession card removes the adult-fare default. <em>Verification: whether eligible students adopt it and overpayment falls. Dependent on backend concession verification.</em>',
              '<strong>Protect stored value against card loss</strong> (Trust). Account-held balance survives a lost card. <em>Verification: whether recovery rates improve. Dependent on a backend value-recovery process.</em>',
            ],
          },
          {
            heading: 'What This Demonstrates',
            body: `The core of the work was a diagnosis, not a feature list: recognising that Opal's problem was a wrong model of commuting and trust, and choosing the structural intervention that diagnosis called for. The supporting craft was translating research into specific patterns (pre-departure anxiety into saved-route alerts, fare distrust into auditable breakdowns, the concession penalty into a digital fare default) while working inside an established government design system and being explicit about the line between design decisions and cross-functional dependencies.`,
          },
          {
            heading: 'Next Steps',
            body: `The primary gap is the absence of usability testing, which is why the outcomes above are framed as hypotheses. The next step is moderated, task-based sessions measuring the signals named in each outcome: completion time, application-switching, and the fare and concession behaviours the research found broken.<br><br>Two of the trust fixes, digital concession fares and account-held balance recovery, carry policy and backend dependencies beyond an app redesign. These are cross-functional rather than pure design decisions, particularly given the Opal Next Gen replacement already announced by Transport for NSW. A near-term app redesign and a multi-year platform replacement are complementary. The redesign addresses the workflow and trust failures commuters face today, without waiting on the larger program.`,
          },
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
