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
            body: `The team of five each interviewed three participants, producing 15 interviews in total. Participants ranged in age from 17 to 45, spanning students and full-time workers across different commuting patterns and levels of transit reliance. Each session ran for approximately one hour.<br><br>Interviews were structured around the full commuting day rather than the app in isolation. Topics included how participants started their day, how they planned trips, which applications they used and at what points, when and why they checked their Opal balance, how they topped up, and what caused frustration. This framing surfaced workflow patterns and contextual details that would have been missed by asking about the app directly.<br><br>A major recurring pain point was the morning commute rush. Multiple participants described feeling time pressured before work or university and struggling to quickly check whether their usual route was running on time. Under time pressure, the Opal app's inbuilt trip information was not fast or reliable enough for real-time decision making. Several participants had adopted TripView as their go-to for this purpose — not by preference, but because the Opal app did not meet the need.<br><br>When asked what would make mornings easier, participants consistently described the same set of needs: the ability to save their most used route, proactive alerts for delays or disruptions on that route, and faster access to this information without having to search each time.`,
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
    client: 'Hackathon Project · Fan Favourite',
    year: '2022',
    context: 'Mobile App · Cognitive Accessibility · 3-Day Hackathon',
    thumbClass: 'thumb-b',
    tags: ['Cognitive Accessibility', 'Behaviour Design', 'Rapid Prototyping'],

    overview: `FocusFlow was built during a three-day hackathon to address a problem that standard productivity tools consistently fail to solve: helping people with ADHD start tasks, rather than manage them.<br><br>Working as the sole designer in a cross-functional team of engineers, I led research, synthesis, and end-to-end interface design across the sprint. The concept was grounded in three interviews with adults diagnosed with ADHD and validated through a lo-fi interactive prototype before being carried into a mid-fidelity Figma build.<br><br>The central design decision was to remove the task list entirely and replace it with a conversational assistant that guides users into a single task, one step at a time. This was not a feature addition to an existing model. It was a structural reframing of what a productivity tool is for, derived directly from what research revealed about where the existing model fails.`,
    overviewLink: `<a class="cs-proto-btn" href="#" target="_blank" rel="noopener">→ View Mid Fidelity Prototype (Figma)</a>`,
    problemPart1: `Most productivity tools are built around the assumption that users can plan, prioritise, and execute tasks in a structured, linear way. Tools like Todoist, Trello, and Notion treat task management as an organisational problem: they provide lists, views, and categorisation systems designed to help users sort and sequence their work.`,
    problemPlaceholder: '<img src="assets/focusflow/ff_2.png" alt="Comparison of a traditional task list app versus FocusFlow single-focus screen" style="width:100%;border-radius:8px;display:block;">',
    problemPart2: `For people with ADHD, this model does not account for how task initiation works in practice.<br><br>The barrier is rarely knowing what needs to be done. The barrier is starting. Opening an app that immediately presents a full list of pending tasks, each requiring a decision about which to tackle and in what order, adds cognitive demand at precisely the moment it needs to be reduced. The interface asks users to self-direct at the point when self-direction is most difficult.<br><br>This is not a feature gap in existing tools. It is a structural mismatch between how those tools are designed and how cognition operates under the conditions in which users are most likely to reach for them.`,
    problem: `Most productivity tools assume users can plan, prioritise, and execute tasks in a linear, self-directed way. For people with ADHD, this model does not describe how task initiation works. The challenge is not knowing what needs to be done. It is starting. Existing tools add cognitive demand at precisely the moment it needs to be reduced, by requiring users to survey a list, make decisions about priority, and self-direct before they have begun.`,
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
            body: `Research was conducted during the first day of the hackathon. Three adults diagnosed with ADHD were interviewed individually, with sessions structured around how they currently managed tasks, which tools they used, when those tools failed them, and what they had tried or abandoned. The aim was to understand task behaviour as a lived experience rather than to evaluate any specific application.<br><br>Alongside the interviews, I contributed my own lived experience of navigating ADHD and task management. This shaped the framing of the interview questions and helped accelerate pattern recognition during synthesis, surfacing structural problems in the category before individual tool comparisons were made.<br><br>A team workshop synthesised findings from the interviews and grounded the concept direction, identifying which problems were inherent to how productivity tools are structured and which were incidental to the particular applications participants had used. A rapid cognitive accessibility heuristic review was applied in parallel, assessing information density, decision count per screen, and working memory load across the relevant tool category.`,
          },
          {
            heading: 'Key Insights',
            body: `<em>"Seeing everything at once makes me want to close the app."</em><br><br>This response, offered by one participant when describing their experience of opening a task management app, was consistent in substance across all three interviews. Synthesis produced four findings that shaped every subsequent design decision:`,
            list: [
              'Task lists create immediate overwhelm. The act of opening a productivity app and seeing the full scope of outstanding work was described as demotivating rather than clarifying',
              'Initiation is the primary barrier, not organisation. Participants did not struggle to know what needed doing. They struggled to start, and the interface offered no support for that specific moment',
              'Decision fatigue compounds the problem. Every choice the interface asks the user to make before beginning a task adds to the cognitive cost of beginning. Existing tools require users to prioritise, categorise, and sequence before they can act',
              'Time blindness disrupts completion. Once in a task, participants described losing track of elapsed time, causing them to either stop too early or continue well past the point of productive focus',
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
            body: `Synthesis converged on a single reframing: the problem was not that productivity tools lacked features. The problem was that they were built around a model of behaviour that does not describe how people with ADHD approach task work.<br><br>Standard productivity tools ask users to arrive at the app with executive function already engaged: to survey a list, make a decision about priority, and then begin. For people with ADHD, that sequence is precisely where the process breaks down. The cognitive cost of deciding what to do first is often enough to prevent doing anything at all.<br><br>The design challenge was not to build a better list. It was to design an experience that removed the need to self-direct entirely, and instead guided the user into a single task without requiring them to plan.<br><br><strong>How might we design a task experience that removes the burden of initiation and guides users into beginning, without requiring them to plan first?</strong>`,
          },
          {
            heading: 'Design Principles',
            placeholder: 'Screenshot of principles written visually or on sticky notes',
            body: `Six principles were established from the research findings to guide all design decisions. Each is directly traceable to a specific insight from the interviews or synthesis:`,
            list: [
              'Show only one task at a time: addressing the overwhelm caused by full list views, which every participant described as a barrier to beginning',
              'Remove task lists and dashboards: removing the interface pattern identified as the primary source of initiation failure',
              'Reduce the number of choices per screen: addressing the decision fatigue finding, which showed that every additional choice increased the likelihood of disengagement',
              'Provide a single, unambiguous primary action: removing the need for the user to interpret what to do next, which was consistently where participants stalled',
              'Support time awareness visually: addressing time blindness without introducing numerical timers, which were reported as anxiety-inducing rather than helpful',
              'Guide the user rather than expecting self-direction: the central principle, reframing the interface from a tool that stores tasks to one that actively moves the user through them',
            ],
            afterList: `<p style="margin-top:1rem">These principles did not point toward a refined version of an existing productivity interface. They pointed toward a fundamentally different interaction model. The question became what structural form could embody all six at once.</p>`,
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
            body: `The six design principles defined what the experience needed to do behaviourally. Ideation focused on identifying which interaction model could structurally deliver all six without requiring the user to navigate, prioritise, or self-organise at any point.<br><br>A conventional list-with-focus mode was considered and rejected: it still required the user to make a selection before beginning, which reintroduced the initiation barrier at precisely the point it most needed to be removed. A card-swipe model was explored as a way of surfacing one item at a time, but it lacked the capacity to guide the user actively through a task rather than simply presenting it.<br><br>The conversational interface resolved the structural problem. A chat assistant does not present options and wait for selection. It offers the next step directly, removing the decision entirely. The user is not asked what they want to do. They are guided into doing it.<br><br>This was not a decision to add a chatbot feature to a productivity tool. It was a decision to use conversation as the primary interaction model because conversation, by its structure, eliminates the patterns that research had identified as the source of the problem. The assistant replaces the list. The response replaces the selection. The guided next step replaces open-ended navigation.`,
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
            body: `Given the three-day constraint, static wireframes carried a specific risk: they describe visual structure but cannot reveal whether a proposed interaction model actually reduces cognitive load in practice. The only way to validate the core hypothesis was to make the experience navigable, however roughly, and observe whether users could move through it without hesitation.<br><br>I moved directly into a lo-fi interactive prototype, using it as a structural thinking tool rather than a documentation artefact. The goal was to test whether the conversational flow resolved the initiation barrier in practice and to identify any points where the interface was still introducing unnecessary decision moments.<br><br>The prototype explored five structural questions in sequence:`,
            list: [
              'Whether removing the task list entirely created confusion or relief at the point of opening the app',
              'Whether a single dominant action on the focus screen was legible without additional instruction',
              'Whether visual progress feedback could communicate elapsed time without introducing numbers or countdowns',
              'Whether limiting content to the minimum necessary per screen changed the quality of engagement',
              'Whether a fully linear flow, with no navigation or backtracking, felt constraining or clarifying',
            ],
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/LmoT0D4wYqwGcRTLWhvRzE/lo-fi-mockup?fullscreen=1&t=pjFWlr2VZ0TU34hL-1" target="_blank" rel="noopener">→ View lo-fi prototype</a></div>`,
            placeholderAfter: 'GIF or sequence of lo-fi screens showing the flow',
          },
          {
            heading: 'Core User Flow',
            body: `The lo-fi prototype validated the interaction structure before any visual design decisions were made. The complete flow reduced to a single, repeating sequence with no branches and no decision points requiring the user to self-direct:<br><br><strong>Open app → Chat assistant offers a task → User confirms → Single focus screen → Task complete → Assistant offers next step</strong><br><br>No list view. No navigation. No open-ended choices at any stage of the flow.`,
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
            body: `With the interaction structure validated through the lo-fi prototype, the mid-fidelity build in Figma focused on two things: making the interface visually legible enough to evaluate during testing, and demonstrating the complete intended flow for the pitch.<br><br>Not every screen was built. Only the interactions required to communicate the core concept were made functional. This was a deliberate scoping decision: within a three-day constraint, effort spent on screens outside the primary flow would have come at the cost of the clarity and coherence of the screens within it. The prototype was scoped to demonstrate behaviour, not to simulate a production-ready product.`,
          },
          {
            heading: 'Accessibility Heuristics — Designing for Cognitive Load',
            placeholder: 'One screen annotated with callouts explaining cognitive load decisions',
            body: `Each screen was reviewed against cognitive accessibility criteria before it was considered complete. These were not applied as a checklist after the fact. They operated as active design constraints throughout the build, each directly traceable to a specific finding from the research phase:`,
            list: [
              'One primary action per screen: no screen asks the user to make more than one decision at a time, directly addressing the decision fatigue pattern identified in research',
              'Limited text and visual noise: information density was kept below what the task strictly required, reducing ambient cognitive load at every stage',
              'Strong visual hierarchy: the primary action was always the most visually dominant element, removing ambiguity about what to do next',
              'Large tap targets: reducing the fine motor precision required to interact, lowering physical friction for users in low-focus states',
              'No reliance on memory: the current task and next action were always visible simultaneously, removing the need to recall previous steps',
              'Clear active task state: the screen communicates unambiguously when the user is in a task and when they have completed it',
              'Calm colour palette of light green and white: selected to avoid the stimulation associated with high-contrast or saturated interfaces, which participants described as increasing rather than reducing anxiety',
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
            body: `The mid-fidelity prototype was tested with three users during the final day of the hackathon. Testing was moderated and task-based, with participants asked to open the app, respond to the chat assistant, begin a task, and complete the flow. Sessions were observed for hesitation, confusion, and the presence or absence of unprompted navigation attempts, all of which had been identified during the lo-fi phase as indicators of whether the interaction model was reducing or adding cognitive load.<br><br>Four consistent observations emerged across all three sessions:`,
            list: [
              'Users understood what to do at each step without instruction. No participant attempted to navigate away from the presented screen or searched for a list view',
              'No participant asked what to do next. The conversational structure resolved the question of next action before it could arise as a decision point',
              'All three participants described the experience as calmer than other productivity tools they had used. Two participants used the word "simple" unprompted',
              'The chat interaction was described as supportive rather than instructional. Participants engaged with the assistant as a guide rather than as an interface element to be dismissed',
            ],
          },
          {
            heading: 'Iterations During the Hackathon',
            body: `Testing produced three specific observations that were addressed before the pitch. Each iteration was traceable to a moment observed during a session rather than to subjective design preference.<br><br><strong>Primary action visibility:</strong> Two participants paused briefly before tapping the main action button on the focus screen, suggesting the visual prominence was insufficient. Button size and contrast were increased to resolve the hesitation.<br><br><strong>Explanatory text:</strong> Two participants read introductory copy on the chat screen before interacting, slowing the transition into the task. Text that did not contribute directly to the core interaction was removed to reduce this delay.<br><br><strong>Active task emphasis:</strong> One participant briefly looked away from the task name during the focus screen, suggesting the visual weight was not holding attention as intended. The hierarchy of the focus state was strengthened to anchor the participant's focus more reliably.`,
          },
        ],
      },
      {
        id: 'decisions',
        label: '07 / Decisions',
        title: '07 / Design Decisions and Trade Offs',
        overview: ['Design Decisions'],
        content: [
          {
            heading: 'Design Decisions and Trade Offs',
            placeholder: `<table class="cs-decision-table"><thead><tr><th>Problem</th><th>Decision</th><th>Outcome</th></tr></thead><tbody><tr><td>Task lists cause overwhelm</td><td>Removed lists entirely</td><td>Reduced cognitive load immediately</td></tr><tr><td>Limited time</td><td>Built mid fidelity, not high fidelity</td><td>Focused on behaviour and flow</td></tr><tr><td>Too many potential features</td><td>Designed one core flow</td><td>Clearer story for the pitch</td></tr></tbody></table>`,
            body: `<strong>Removing task lists entirely</strong> was the most consequential structural decision in the project. Every research session had identified the list view as the primary point of failure for users with ADHD, not because lists are poorly designed but because they require the user to self-direct before a task has begun. Removing the list was not a simplification of an existing pattern. It was a reframing of what the tool was for.<br><br><strong>Building to mid-fidelity rather than high-fidelity</strong> was a function of constraint, but also of intent. Within three days, high visual polish would have come at the cost of functional coverage across the primary flow. Mid-fidelity allowed the interaction model to be communicated completely and tested meaningfully, which was the only outcome that mattered within the sprint timeline.<br><br><strong>Limiting the build to a single core flow</strong> was a scoping decision grounded in the same logic as the product principle itself: one task at a time, one decision at a time, no parallel paths. A prototype that demonstrates one thing clearly is more useful as a communication artefact than one that covers multiple flows at partial fidelity.`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '08 / Outcomes',
        title: '08 / Outcomes — What This Demonstrates',
        overview: ['Skills Demonstrated', 'Reflection', 'Visual Artefacts'],
        content: [
          {
            heading: 'Skills Demonstrated',
            body: `This project demonstrates end-to-end UX capability within a constrained sprint context, applying the same research-to-design rigour that a longer project requires but compressed into three days:`,
            list: [
              'Structuring user interviews around behaviour and context rather than product evaluation, producing generative insight rather than evaluative feedback',
              'Integrating lived experience as a research input in a way that accelerated pattern recognition without replacing the empirical data from interviews',
              'Synthesising qualitative findings across multiple sources into a clearly framed problem statement with direct design implications',
              'Translating research insights into design principles that each carry a traceable connection to a specific finding, rather than operating as general guidelines',
              'Making a structural interaction model decision grounded in cognitive accessibility requirements surfaced by research, not in convention or trend',
              'Prioritising interactive prototyping over static documentation in order to test structural hypotheses at the earliest possible stage',
              'Conducting moderated prototype testing and translating session observations into specific, traceable design iterations before a high-stakes pitch',
              'Applying cognitive accessibility heuristics as active design constraints throughout the build rather than as a retrospective review layer',
            ],
          },
          {
            heading: 'Reflection',
            body: `The most significant decision in this project was the choice to remove the task list rather than improve it. That decision was not reached through ideation. It was reached through synthesis. The interviews made clear that the list was not an imperfect solution to the problem. It was, for users with ADHD, part of the problem itself. Designing around that finding required accepting that the standard model for this category of tool was not the right starting point.<br><br>The conversational model that replaced it was a structural choice. Conversation, as an interaction pattern, does not present options and wait. It guides. That property was exactly what the research had identified as missing from the tools participants had tried and abandoned. The alignment between the finding and the solution was not coincidental. It was the product of synthesis taken seriously.<br><br>The primary limitation of the project was the absence of longitudinal testing. Three moderated sessions during a hackathon can validate whether users understand the interface and find it less cognitively demanding than alternatives. They cannot validate whether the approach sustains behaviour change over days or weeks, which is the more meaningful measure for a tool designed to support ADHD task management. That testing remains the logical next step for the concept.`,
          },
          {
            heading: 'Visual Artefacts',
            body: `The following artefacts should be shown as images or embedded Figma files within this case study:`,
            list: [
              'Miro board from the team synthesis workshop and research notes',
              'Lo-fi interactive prototype screens showing the conversational flow',
              'Mid-fidelity prototype screens: chat assistant, single focus screen, task complete state',
              'Annotated screen showing cognitive accessibility decisions with callouts',
              'Figma prototype link with interactive mid-fidelity flow',
            ],
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
          ${block.placeholder ? (block.placeholder.trimStart().startsWith('<img') ? `<div class="cs-problem-image">${block.placeholder}</div>` : `<div class="cs-placeholder"><span>${block.placeholder}</span></div>`) : ''}
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
            <img src="assets/opal/opal_1.png" alt="Opal app redesign mockup" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">
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
