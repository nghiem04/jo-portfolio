/* ── Case study data ──
   Each entry has a `slug` used for its route: /work/:slug
   HTML strings (body, placeholder, etc.) are rendered via dangerouslySetInnerHTML.
   Asset paths are written relative (e.g. "assets/opal/opal_1.png") and prefixed
   with the Vite base path at render time — see src/utils/assets.js. */
export const caseStudies = [
  {
    num: '01',
    slug: 'opal',
    title: 'Opal Redesign',
    role: 'Product Designer · Research, Synthesis, Interaction Design',
    team: 'UX Design Team',
    client: 'Conceptual Project',
    year: '2023',
    context: 'UX Research · Interaction Design',
    thumbClass: 'thumb-a',
    heroImage: 'assets/opal/opal_1.png',
    heroImageAlt: 'Opal app redesign mockup',
    tags: ['UX Research', 'Interaction Design', 'Figma'],
    // Card metadata shared by the homepage and Work-page case-study cards.
    card: {
      label: 'Conceptual Project · Behavioural Insights',
      desc: 'Commuters were relying on TripView, Google Maps, and Opal across one fragmented journey. I redesigned Opal around saved routes, live disruptions, and faster decision-making during high-friction commute moments.',
      tags: ['User research', 'Behavioural insights', 'Mobile UX'],
    },
    snapshot: [
      { label: 'Product', val: `<strong>Opal</strong>, Sydney's public-transport ticketing app, used by millions of daily commuters.` },
      { label: 'Problem', val: `It was built for ticketing admin, not commuting. People ran three apps to make one journey, and couldn't trust what Opal charged them.` },
      { label: 'Outcome', val: `A <strong>card-first redesign</strong> that pulls the workflow onto one surface and makes fares, stored value, and daily routine legible. Self-initiated; outcomes framed as testable hypotheses.` },
    ],
    overview: `Sydney commuters were running three apps to make one journey, and Opal was only one of them. Research with 15 participants showed why: Opal had been built for ticketing administration, not commuting. Two structural failures explained the pattern. The first was workflow fragmentation, with TripView used for real-time status, Google Maps for routing, and Opal only to top up. The second was a trust failure, where the app asked commuters to accept fares, charges, and stored value they could not verify or recover. A third condition compounded both: the app had no memory of routine, opening to the same blank state every session despite most people making the same trip every day. Fragmentation, trust, and habit became the three threads that organise this project. The redesign consolidated the workflow into one surface and made the system legible, rebuilt around how Sydney commuters actually begin their day.<br><br>This was a self-initiated project. It was conducted without access to Transport for NSW and without a testing budget, which shaped both its scope and the way its outcomes are framed.`,
    overviewLink: `<a class="cs-proto-btn" href="https://www.figma.com/make/pKtWgdPJyzKpnD8a5ZZtn3/opal_mid_fi?t=2IdijnlOUEr40Rhc-20&fullscreen=1" target="_blank" rel="noopener">→ View High fidelity prototype (Figma)</a>`,
    problem: `Participants described the same routine every morning: open Opal to check balance, switch to TripView for real-time status, check Google Maps for the route, return to Opal to top up. Every commuting need beyond payment required leaving the app.<br><br>The friction was not only about missing features. It was also about what could not be trusted. Fares sometimes seemed wrong, with no breakdown to check against. Students were quietly overpaying because the app offered no digital path to the concession fares they were entitled to. And anyone carrying real value on a card knew that losing it could mean losing the money.<br><br>The question was not which features were missing. It was whether a standalone ticketing tool, one that asked for trust without offering visibility, was the right model at all.`,
    tools: ['Figma', 'Miro', 'User interviews', 'Competitive benchmarking', 'UX audit', 'Lo-fi sketching', 'Mid-fi prototyping'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: 'Nobody opens Opal to commute. They open it to top up, then leave',
        overview: ['Interview Findings', 'International Benchmarking', 'Opal App Audit'],
        content: [
          {
            heading: 'Interview Findings',
            body: `Fifteen regular Opal users, aged 17–45, across rail, bus, and multi-modal commutes. I structured the interviews around the whole commuting day rather than the app, and patterns surfaced that a product-focused interview never would. They sorted into three threads.<br><br><strong>Fragmentation: the workflow lived across apps.</strong> The tense moment was just before departure. Commuters leaned on TripView for live status and Google Maps for routing because Opal offered neither at decision speed; Opal showed up only to take payment. The app-switching wasn't preference, it was adaptation.<br><br><strong>Trust: the app asked for faith it hadn't earned.</strong> People didn't trust what Opal charged them, and had nothing to check a fare against. Students with no in-app concession defaulted to adult cards and overpaid on eligible trips. Anyone carrying real balance knew a lost card likely meant lost money, and the one safeguard was a registration step almost nobody had done.<br><br><strong>Habit: the app was blind to routine.</strong> Most people made the same one or two trips every day, yet every session opened blank. Unprompted, they asked for the same thing: save a route, alert me if it changes, show it the moment I open the app. Opal held no memory of a journey taken hundreds of times.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb5sCgU=/?share_link_id=506555134836" target="_blank" rel="noopener">→ View full research synthesis (Miro)</a></div>`,
          },
          {
            heading: 'International Benchmarking',
            body: `Account-held value and open-loop tap-on (a phone or bank card replacing the physical card at the same fare caps) are now category norms. I scanned systems across Asia-Pacific, Europe, and North America to establish that baseline, which reframes Opal's gaps as lagging a standard, not facing unsolved problems.<br><br>I then chose three close benchmarks, each of which had already solved one of my three threads, and included the nearest domestic system so the findings couldn't be dismissed as foreign edge cases.<br><br><strong>Suica (Tokyo)</strong> answers fragmentation and lost value: it lives on the phone in an express mode needing no app and no unlock, and an existing card's value can move onto the device.<br><br><strong>Oyster (London)</strong> answers lost value through ownership: a registered balance moves to a replacement card. Notably, London delivers digital tap-on via contactless bank cards rather than putting Oyster on the phone.<br><br><strong>Myki (Melbourne)</strong> answers the concession penalty on near-identical terrain: under similar fare caps, Mobile myki already offers a digital card with live balance, mobile top-up, tap-on, and, critically, a concession fare type, the exact gap forcing Sydney students onto adult fares.<br><br>The takeaway: Opal's failures aren't inherent to transit ticketing. Each is solved elsewhere, most of them by Myki under conditions close to Opal's. Opal's opacity was a design choice, not a necessity, which is what made an app-level redesign worth pursuing now, ahead of the Opal Next Gen replacement TfNSW has announced. (Retail payment, where cards like Suica double as wallets, sits outside the commuting workflow and was scoped out.)`,
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
        title: `The problem wasn't missing features. It was the wrong model of trust`,
        overview: ['Key Insight'],
        content: [
          {
            heading: 'Key Insight',
            body: `Opal hadn't been designed badly. It had been designed for the wrong model of commuting, and the wrong model of trust. That distinction sets the intervention: a feature-gap diagnosis produces a backlog of additions; a wrong-model diagnosis calls for a structural rethink. The research pointed to the second.<br><br><strong>Wrong workflow (Fragmentation):</strong> Opal was the payment step in a multi-app routine. Adding features one at a time wouldn't fix a problem that lived at the boundary of the app, not in its contents.<br><br><strong>Wrong trust model (Trust):</strong> The app treated commuters as account administrators and asked them to take its numbers on faith it hadn't earned. Fares were unverifiable, eligible riders overcharged by default, and stored value lost with the card.<br><br><strong>Invisible to habit (Habit):</strong> Most people made the same trip daily; the app recognised none of it.<br><br><strong>What I chose not to solve:</strong> Retail payment sits outside the commuting workflow. And platform-level fixes that need backend or policy change, like concession verification and value recovery, I named as dependencies rather than claiming them as design wins. The framing committed to what an app redesign could credibly own, and was explicit about what it couldn't.`,
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: 'If commuters think in cards, the home screen should too',
        overview: ['Navigation Exploration', 'Key Structural Decisions'],
        content: [
          {
            heading: 'Navigation Exploration',
            body: `I explored three home-screen structures before committing.<br><br>A <strong>dashboard model</strong> spread account-level information across a dense home screen. Rejected fast: research showed people needed to reach one or two things quickly, not scan a summary.<br><br>A <strong>task-oriented model</strong> surfaced the next likely action. Rejected because predicting intent required assumptions the research hadn't earned, and a wrong guess creates more friction than none.<br><br>A <strong>card-first model</strong> made each Opal card the primary organising element, with top-up always alongside it. Participants consistently framed Opal as a card they managed, not an account they administered, so building the home screen around that mental model cut the work of using it. Paired with account-held balance, the card stays the mental anchor without being the only place value lives. This is the model I carried forward, and every decision below follows from it.`,
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
        title: 'Making it legible, and proving it fits inside real Opal',
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
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/pKtWgdPJyzKpnD8a5ZZtn3/opal_mid_fi?t=2IdijnlOUEr40Rhc-20&fullscreen=1" target="_blank" rel="noopener">→ View High fidelity prototype (Figma)</a></div>`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: `What this should change, and how I'd know it worked`,
        overview: ['From Findings to Decisions', 'Intended Outcomes', 'What This Demonstrates', 'Next Steps'],
        content: [
          {
            heading: 'From Findings to Decisions',
            body: `One view of the project across its three threads: how each research finding became a design decision, and the signal that would confirm it worked. The mechanism-level detail follows below.`,
            placeholderAfter: `<table class="cs-decision-table cs-table-threads"><thead><tr><th>Thread</th><th>What we found</th><th>What we built</th><th>How we'd verify</th></tr></thead><tbody><tr><td>Fragmentation</td><td><strong>Workflow lived across apps:</strong><ul><li>Opal was opened only to top up</li><li>TripView and Maps handled status and routing</li><li>Top-up took too many steps, so two participants abandoned it mid-commute</li></ul></td><td><ul><li>Integrated journey planner as a primary destination</li><li>One-tap top-up from home</li></ul></td><td><ul><li>In-app planning replaces external maps</li><li>Mid-commute top-up abandonment falls</li></ul></td></tr><tr><td>Trust</td><td><strong>Asked for faith it had not earned:</strong><ul><li>Balance buried in settings</li><li>Fares unverifiable</li><li>Students defaulted to adult fares</li><li>Lost-card balance unrecoverable in practice</li></ul></td><td><ul><li>Persistent balance on home</li><li>Per-journey fare breakdowns</li><li>Digital concession card</li><li>Account-held balance</li></ul></td><td><ul><li>Fare distrust and manual cost-checking fall</li><li>Concession adoption rises</li><li>Recovery rates improve</li></ul></td></tr><tr><td>Habit</td><td><strong>Blind to routine:</strong><ul><li>Same journey daily, yet every session opened to a blank state</li><li>No shortcut and no disruption alert</li></ul></td><td><ul><li>Card-first home screen</li><li>Saved routes with real-time disruption alerts surfaced on opening</li></ul></td><td><ul><li>Pre-departure app-switching drops</li><li>Saved-route adoption high among daily commuters</li></ul></td></tr></tbody></table>`,
          },
          {
            heading: 'Intended Outcomes',
            body: `This project produced a high-fidelity prototype but was not usability-tested. The items below are the outcomes the design is built to produce, each paired with its mechanism and the signal that would confirm it. They are hypotheses, not measured results.`,
            list: [
              '<strong>Reduce pre-departure app-switching</strong> (Habit + Fragmentation): Saved-route alerts surface disruptions on opening, the task TripView was doing. <em>Verification: whether saved-route users reduce or stop opening TripView before travel.</em>',
              '<strong>Make balance visible at the moment of need</strong> (Trust): Persistent home-screen balance replaces a buried path. <em>Verification: whether commuters check balance in-app rather than at station readers or not at all.</em>',
              '<strong>Keep route planning inside the app</strong> (Fragmentation): An embedded planner removes the reason to switch to Google Maps. <em>Verification: whether planning happens in-app and external-map use for transit drops.</em>',
              '<strong>Recognise routine</strong> (Habit): A saved-route card appears on opening for repeated journeys. <em>Verification: whether adoption is high among daily commuters and repeated manual lookups fall.</em>',
              '<strong>Remove top-up abandonment</strong> (Fragmentation): One-tap top-up from home replaces a multi-step flow. <em>Verification: whether mid-commute abandonment to station machines falls and completion rises.</em>',
              '<strong>Make fares auditable</strong> (Trust): Per-journey breakdowns replace a flat list. <em>Verification: whether fare distrust and manual cost-checking decrease.</em>',
              '<strong>Default eligible riders to the correct fare</strong> (Trust): A digital concession card removes the adult-fare default. <em>Verification: whether eligible students adopt it and overpayment falls. Dependent on backend concession verification.</em>',
              '<strong>Protect stored value against card loss</strong> (Trust): Account-held balance survives a lost card. <em>Verification: whether recovery rates improve. Dependent on a backend value-recovery process.</em>',
            ],
          },
          {
            heading: 'What This Demonstrates',
            body: `The core of this work was a diagnosis, not a feature list: seeing that Opal's real problem was a wrong model of commuting and trust, and choosing the structural intervention that called for. The craft was in the translation: pre-departure anxiety into saved-route alerts, fare distrust into auditable breakdowns, the concession penalty into a digital fare default, all inside an established government design system, and all explicit about the line between a design decision and a cross-functional dependency.`,
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
    slug: 'focus',
    title: 'Focus',
    role: 'Sole Product Designer (UX and UI) in a cross-functional team of engineers',
    client: 'Hackathon',
    year: '2022',
    context: 'Hackathon · AI Assisted Productivity',
    thumbClass: 'thumb-b',
    heroImage: 'assets/focus/ff_1.png',
    heroImageAlt: 'Focus app redesign mockup',
    tags: ['Cognitive Accessibility', 'Behaviour Design', 'Rapid Prototyping'],
    // Card metadata shared by the homepage and Work-page case-study cards.
    card: {
      label: 'Hackathon · AI Assisted Productivity',
      desc: 'Research showed task initiation often failed at prioritisation. Focus uses a conversational assistant to recommend one next step, reducing decision fatigue and helping users start faster.',
      tags: ['Conversational AI', 'Design sprint', 'Moderated testing'],
    },
    snapshot: [
      { label: 'Product', val: `<strong>Focus</strong>, a productivity app for people with ADHD, built in a three-day hackathon.` },
      { label: 'Problem', val: `Task lists ask people to plan and choose before they start. For people with ADHD, that first decision is exactly where initiation breaks down.` },
      { label: 'Outcome', val: `An <strong>AI conversational assistant</strong> that removes the list and offers one task at a time, so the user's first move is a response, not a choice. Validated in moderated testing on day three.` },
    ],

    overview: `Focus was built in three days to address a problem most productivity tools are not designed for: helping people with ADHD start tasks, not organise them.<br><br>As the sole designer in a cross-functional team of engineers, I led research, synthesis, and end-to-end interface design within the sprint. The constraint forced discipline. Every decision had to be grounded in a finding or cut.<br><br>One question ran through the entire project and became the test every design decision had to pass: <em>does the user ever have to choose a task?</em> Research showed that the moment of choosing was where initiation broke down for people with ADHD, so any model that still required it had already failed. That criterion led to the central decision, which was structural: remove the task list entirely and replace it with a conversational assistant that guides users into a single task at a time. The list was not an imperfect solution. It was the source of the problem.<br><br>This is a design response to barriers observed in research, not a clinical intervention. The work was done with and for people with ADHD, but it makes no diagnostic or therapeutic claims.`,
    overviewLink: `<a class="cs-proto-btn" href="https://www.figma.com/make/msY8oDslYcx6RhBGTpxsxh/AI-Chat-Assistant-Prototype?t=DcJRutSglPAmbPe6-20&fullscreen=1" target="_blank" rel="noopener">→ View High fidelity prototype (Figma)</a>`,
    problemPart1: `Most productivity tools are built on one assumption: that users can plan, prioritise, and execute in a structured, linear way. For many people with ADHD, that assumption fails at the very first step. The screen below contrasts a standard task list view with Focus's single-focus screen.`,
    problemPlaceholder: '<img src="assets/focus/ff_2.png" alt="Comparison of a traditional task list app versus Focus single-focus screen" style="width:100%;border-radius:8px;display:block;">',
    problemPart2: `In interviews, participants with ADHD described opening these tools and disengaging before starting anything. The barrier was not knowing what to do. It was the decision required before beginning. An interface that opens to a full task list adds cognitive load at exactly the moment it needs to be removed.<br><br>The barriers the design targets are well documented in ADHD: difficulty initiating tasks, decision fatigue, and difficulty tracking elapsed time. Throughout the project, ADHD framed who the design was for, and these mechanisms framed what it had to change. As a hackathon build, the work was deliberately bounded: a small participant pool, a single core flow, and no room for longitudinal testing, all of which shape how its results should be read.`,
    problem: `Most productivity tools assume users can plan, prioritise, and execute tasks in a linear, self-directed way. For many people with ADHD, that assumption fails at the very first step. The challenge is not knowing what needs to be done, it is starting. Existing tools add cognitive demand at precisely the moment it needs to be reduced, by requiring users to survey a list, make decisions about priority, and self-direct before they have begun.`,
    tools: ['Figma', 'Miro', 'Lo-fi Interactive Prototype', 'Mid-Fidelity Prototype'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: 'People open the app, see everything, and close it before starting',
        overview: ['Research Approach', 'Key Insights'],
        content: [
          {
            heading: 'Research Approach',
            body: `Across all interviews, the same pattern emerged: participants opened their task app and disengaged before starting anything. Sessions were structured around task behaviour, not product evaluation, covering which tools participants used, where they failed, and what had been abandoned.<br><br>I designed and ran all three interviews with participants who had ADHD, and facilitated the team synthesis workshop. A rapid cognitive accessibility review assessed decision count per screen and working memory load across the tools participants mentioned.<br><br>This was rapid, qualitative validation scaled to a three-day sprint. Three interviews surface strong directional signal, not generalisable evidence, and the findings are reported on that basis.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb6c4w0=/?share_link_id=989572133225" target="_blank" rel="noopener">→ View Miro board</a></div>`,
          },
          {
            heading: 'Key Insights',
            body: `One participant captured the pattern the others described in different words: <em>seeing everything at once made them want to close the app.</em> Four findings shaped every decision that followed.`,
            list: [
              '<strong>Task lists triggered avoidance, not action:</strong> Seeing the full backlog at opening was consistently described as demotivating rather than clarifying.',
              '<strong>Initiation was the primary barrier, not organisation:</strong> Every participant knew what needed doing. No tool supported the moment of actually starting.',
              '<strong>Decision fatigue compounded the problem:</strong> Every required choice before a task begins increases the cost of beginning, and for participants with ADHD that cost was often decisive.',
              '<strong>Time was hard to track inside a task:</strong> Participants described stopping too early or running well past productive focus.',
            ],
          },
        ],
      },
      {
        id: 'define',
        label: '02 / Define',
        title: `The problem wasn't a worse list. It was needing a list at all`,
        overview: ['Problem Statement'],
        content: [
          {
            body: `The mapping below traces the four findings to the decisions they produced and to what testing showed. Three of the four findings converged on a single structural decision; the fourth drove a separate feature. It is the spine of the project in one view.`,
            placeholderAfter: '<img src="assets/focus/ff_4.png" alt="Finding to decision to outcome mapping: research insights mapped to design principles and interface decisions" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Problem Statement',
            body: `Synthesis identified the issue: productivity tools assume users arrive ready to self-direct. For these participants, that assumption was consistently where the process broke down, and the cost of deciding what to do first was often enough to prevent doing anything at all.<br><br>So the list wasn't a neutral container that happened to be poorly designed. It was an instrument of self-direction, the exact capacity these users couldn't reliably summon at the moment of starting. A better list would still be a list, and would still open with the same demand.<br><br>The challenge wasn't to build a better list. It was to remove the need to self-direct.<br><br><strong>How might we design a task experience that removes the burden of initiation and guides users into beginning, without requiring them to plan?</strong>`,
          },
        ],
      },
      {
        id: 'ideate',
        label: '03 / Ideate',
        title: 'Why a chatbot, not a better list, became the MVP',
        overview: ['Chatbot as Core Concept'],
        content: [
          {
            heading: 'Chatbot as Core Concept',
            placeholder: '<img src="assets/focus/ff_3.png" alt="Early lo-fi screens of the chatbot concept" style="width:100%;border-radius:8px;display:block;">',
            body: `Three interaction models were evaluated against the project's central criterion: <em>does the user ever have to choose a task?</em> One by one, they failed the same test.<br><br>A <strong>list-with-focus model</strong> still opened on a list. The user had to select a task before the assistant could surface one, and research had identified that selection as the exact point where initiation broke down. The assistant could not fix a problem the model required users to solve before reaching it.<br><br>A <strong>card-swipe model</strong> surfaced one task at a time, which removed visual overwhelm but not the decision. After the swipe, the user was still standing in front of a task, determining whether to start. The initiation gap was still open.<br><br>The <strong>conversational model</strong> was the only one that closed it structurally. A conversational assistant does not surface options and wait for a choice. It initiates. It offers the next step. The user's first interaction is a response, not a selection. By the time the user is engaged, the decision has already been made. That is not a UX detail. It is the entire hypothesis.`,
          },
        ],
      },
      {
        id: 'design',
        label: '04 / Design',
        title: 'Designing a conversation a low-focus user can follow without instruction',
        overview: ['Lo-fi Prototype', 'Mid-fidelity Build', 'What Changed After Testing', 'High Fidelity Prototype After Interaction Validation'],
        content: [
          {
            heading: 'Lo-fi Prototype',
            body: `The interaction model could not be validated in static form. Whether replacing task selection with assistant-initiated turns actually removed the experience of deciding had to be tested in a navigable state.<br><br>The prototype was built against five criteria, each tracing directly to a research finding, none exploratory:`,
            list: [
              'Does removing task selection create relief or reorientation?',
              'Does a single assistant-initiated action communicate without instruction?',
              'Can a progress indicator carry elapsed time without requiring the user to monitor it?',
              'Does limiting each conversational state to one response option reduce cognitive load?',
              'Does a fully linear, non-branching sequence feel like structure or constraint?',
            ],
            afterList: `<p><br>The validated model reduced to a single repeating sequence: <strong>open app → assistant offers a task → user confirms → focus state begins → task completes → assistant offers the next step.</strong> The user makes no required choices. They respond, and the assistant leads the sequence. An override was included so a user could skip the offered task when something more urgent took priority, keeping the default path decision-free without trapping the user in it.</p>`,
            placeholderAfter: '<img src="assets/focus/ff_lofi.png" alt="Lo-fi screens showing the conversational flow" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Mid-fidelity Build',
            placeholder: '<img src="assets/focus/ff_midfi.png" alt="Mid-fidelity screens showing the conversational flow" style="width:100%;border-radius:8px;display:block;">',
            body: `With the interaction model validated, the mid-fidelity build had one job: make the conversation legible as a product experience. Not cleaner states, not a more resolved palette. The question was whether a user could understand the turn-taking model without instruction.<br><br>Every decision served that:`,
            list: [
              '<strong>One response option per state</strong>, so it was always clear what the assistant was asking',
              '<strong>Minimal content per state</strong>, so the response required no evaluation before giving it',
              '<strong>Large tap targets</strong>, so confirmation required no precision in a low-focus moment',
              '<strong>Active task and next step visible together</strong>, so working memory had nothing to carry between turns',
              '<strong>A calm palette of light green and white</strong>, because participants had described visual stimulation as a trigger for closing the tools they already used',
            ],
            afterList: `<p><br>Nothing was added that did not directly support the conversation.</p>`,
          },
          {
            heading: 'What Changed After Testing',
            body: `Three moderated task-based sessions were run on day three. Within that small sample, the result was the most direct validation available: no participant looked for a list, tried to navigate, or asked what they were supposed to do. The assistant had already told them.<br><br>All three described the experience as calmer than other tools they used. Two used the word "simple" without prompting, and neither was describing the visual design. They were describing what it felt like when the decision was made for them.<br><br>Changes made after testing:`,
            list: [
              '<strong>Button size and contrast were increased</strong>, because two participants paused before the primary action',
              '<strong>Introductory text was removed</strong>, because it delayed engagement without adding clarity',
              '<strong>The focus-state hierarchy was strengthened</strong>, because one participant\'s attention drifted from the active task name',
            ],
          },
          {
            heading: 'High Fidelity Prototype After Interaction Validation',
            body: `High fidelity was the final test of the hypothesis: could this conversational model exist as a resilient, shippable product, not just a prototype?<br><br>Type hierarchy communicates conversational state rather than decorating it, keeping the user oriented in the flow and reducing cognitive effort at the moment it matters most. The colour system meets the same accessibility criteria that governed earlier phases: high contrast, calm palette, no sensory overwhelm. In a turn-based interaction, inconsistency creates hesitation, so every component was built to remove it.<br><br>The result moves conversational task initiation from a validated interaction model into a polished, accessible interface ready for technical implementation.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/msY8oDslYcx6RhBGTpxsxh/AI-Chat-Assistant-Prototype?t=DcJRutSglPAmbPe6-20&fullscreen=1" target="_blank" rel="noopener">→ View High fidelity prototype (Figma)</a></div>`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: 'What the design does, and what three days of testing showed',
        overview: ['The single test every decision answered to', 'What the Design Does', 'What Testing Showed', 'Key Design Decisions', 'Next Steps'],
        content: [
          {
            heading: 'The single test every decision answered to',
            body: `<strong>Does the user ever have to choose a task?</strong> Every design decision in the project answered to this one question. The table maps what research found, what that led us to decide, and what day-three testing showed.`,
            placeholderAfter: `<table class="cs-decision-table"><thead><tr><th>What research found</th><th>What we decided</th><th>What testing showed</th></tr></thead><tbody><tr><td><ul><li>Task lists triggered avoidance, not action</li><li>Initiation was the barrier, not organisation</li><li>Decision fatigue compounded the cost of starting</li></ul></td><td><strong>Three findings, one decision.</strong><ul><li>Remove the task list</li><li>Replace it with a conversational assistant that initiates, so the user's first interaction is a response, not a selection</li></ul></td><td><ul><li>No participant looked for a list, navigated, or asked what to do</li><li>Three described it as calmer; two said "simple" unprompted</li></ul></td></tr><tr><td><ul><li>Time was hard to track inside a task</li></ul></td><td><strong>One finding, one feature.</strong><ul><li>A passive progress indicator carries elapsed time without asking the user to monitor it</li></ul></td><td><ul><li>Carried elapsed time without drawing attention</li><li>Not yet tested for whether it improves stopping behaviour over time</li></ul></td></tr></tbody></table>`,
          },
          {
            heading: 'What the Design Does',
            body: `The redesign targets the failure state that conventional task lists create for people with ADHD at the moment of initiation. Each change below is a property of the design, and each closes the initiation criterion the project was built around.`,
            list: [
              '<strong>The user is not shown a task list.</strong> The assistant surfaces one task at a time, on opening.',
              '<strong>The user is not asked to decide what to start.</strong> The assistant initiates, and the user responds, with an override available when priorities demand it.',
              '<strong>The user is not required to track time.</strong> A passive progress indicator carries elapsed time without demanding attention.',
              '<strong>The user does not navigate between states.</strong> The flow is linear, returning to the same conversational surface.',
            ],
          },
          {
            heading: 'What Testing Showed',
            body: `The day-three sessions tested whether this model was understood and how it felt, not whether it changes behaviour over time. Within three sessions, the interface was understood without instruction, no participant reverted to list-seeking behaviour, and all three described it as calmer and less demanding than tools they currently used.<br><br>These are early signals of comprehension and felt experience. They are not evidence of sustained task completion, which the timeframe could not test.`,
          },
          {
            heading: 'Key Design Decisions',
            placeholder: `<table class="cs-decision-table"><thead><tr><th>Problem</th><th>Decision</th><th>What it produced</th></tr></thead><tbody><tr><td>Opening a task list triggered disengagement before starting</td><td>Replaced the list with a conversational assistant that initiates</td><td>The decision to begin is made before the user evaluates a screen</td></tr><tr><td>Three-day timeframe</td><td>Built lo-fi to mid-fidelity before any visual polish</td><td>Interaction model validated and demonstrated within the sprint</td></tr><tr><td>Risk of over-scoping the concept</td><td>Designed one core flow only</td><td>The concept's value shown clearly rather than several features shown partially</td></tr></tbody></table>`,
            body: `<strong>Replacing the task list</strong> was the most consequential decision in the project. Research identified list-opening as the structural failure point, because it requires the user to self-direct before any task can begin. The conversational assistant removes that requirement by making the user's first interaction a response.<br><br><strong>Limiting the work to a single flow</strong> applied the same discipline: one task, one conversational state, one response at a time. One thing demonstrated clearly was worth more than several demonstrated partially.`,
          },
          {
            heading: 'Next Steps',
            body: `Two gaps define the honest limits of this work.<br><br><strong>The first is durability:</strong> Three sessions validated that the interface was understood and felt less demanding in the moment. They did not test whether the effect holds with repeated use, whether novelty accounts for some of the calm participants described, or whether the model supports sustained task completion over days and weeks. For an ADHD tool this matters especially, since novelty itself can drive early engagement that fades. Longitudinal use data is the primary gap, and it is the evidence the concept most needs next.<br><br><strong>The second is the agency tradeoff</strong> at the heart of the design. Removing choice is what makes initiation effortless, but it is also a cost. An assistant that decides for the user is only as good as the task it offers, and a user who needs to do the urgent thing rather than the next thing is relying on the override to correct a decision the system made for them. The skip option was a first answer to this tension, but it does not resolve the deeper question of how far guidance should go before it becomes over-direction, or how the system should learn which tasks to offer. If taken further, the product would need a clearly defined scope distinguishing task facilitation from guided support, and a model of when the assistant should lead and when it should defer.`,
          },
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((cs) => cs.slug === slug);
