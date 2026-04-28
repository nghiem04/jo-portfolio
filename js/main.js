/* ── Case study data ── */
const caseStudies = [
  {
    num: '01',
    title: 'Opal — Designing Around How People Actually Travel',
    role: 'UX Designer · Research, Synthesis, Interaction Design',
    team: '5 UX Designers',
    client: 'Independent UX Project',
    year: '2022',
    context: 'UX Research · Interaction Design',
    thumbClass: 'thumb-a',
    heroImage: 'assets/opal/opal_1.png',
    heroImageAlt: 'Opal app redesign mockup',
    tags: ['UX Research', 'Synthesis', 'Journey Mapping', 'Interaction Design', 'Figma'],
    overview: `The Opal project started as a research question, not a design brief. Instead of assuming the app needed new features, the team asked how Sydney commuters actually moved through their day and where Opal fitted into that, or where it failed to.<br><br>Five UX designers ran 15 interviews, synthesised findings in Miro using four methods, audited the existing app, and benchmarked against three international transit applications. The project concluded with a mid-fidelity Figma prototype covering the redesigned core flows.<br><br>The central finding: the Opal app had been designed for ticketing administration, not commuting. Participants did not use it as their primary transit tool. It was one stop in a fragmented multi-app workflow. The redesign treated that fragmentation as a structural problem, not a feature gap.`,
    problem: `The Opal app covered the functional basics: checking balance, topping up, reviewing trip history. What it did not account for was how those tasks fitted into the actual experience of commuting.<br><br>Participants did not describe the app as broken. They described it as incomplete. One participant described opening Opal to check his balance, switching to TripView to see if his train was running, checking Google Maps for the route, then returning to Opal to top up before leaving the house. That sequence, repeated every morning, was not unusual. It was the normal workflow. Every commuting need beyond account management required leaving Opal entirely.<br><br>The question the team set out to answer was not which features the app was missing. It was whether the structural premise of the app, as a ticketing tool consulted in isolation, was the right model for what commuters actually needed.`,
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
            body: `Rather than asking participants to evaluate the Opal app, interviews were structured around the full commuting day. Asking people to evaluate an app produces feedback about the app. Asking them to walk through their morning, describe the tools they reached for, and explain where things went wrong produces a behavioural map that places the app in its actual context of use.<br><br>Each of the five designers interviewed three participants, producing 15 sessions. Participants ranged from 17 to 45, covering students and workers across varied commuting patterns. Each session ran about an hour.<br><br>Three patterns emerged that a product-focused interview would not have surfaced.<br><br>The highest-stress moment in the commuting day was consistently the window before departure. One participant described checking TripView while still in bed, not because she preferred it, but because Opal was too slow to load route status when she needed to decide whether to leave now or wait. Several others had built the same habit. The app did not meet the need at the moment it mattered most, so participants had found something that did.<br><br>Most participants were not planning new routes each day. They were repeating the same one or two journeys on a fixed schedule, and the app treated every session identically, with no awareness of their established pattern.<br><br>When asked directly what would improve the morning experience, responses converged without prompting: save a regular route, get an alert if something changes, and access that without having to search.`,
            placeholder: '<img src="assets/opal/opal_2.jpg" alt="Interview affinity map from Miro" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Synthesis in Miro',
            body: `All five designers synthesised collaboratively in Miro, working through four methods in sequence. The goal was not to catalogue what participants had said but to find the patterns that held across the full dataset.<br><br><strong>Affinity mapping</strong> came first, clustering raw observations from all 15 interviews by behavioural similarity, not by participant. Moving notes across a shared board without attributing them to individuals surfaced cross-cutting themes that no single interview had made fully visible.<br><br><strong>Persona creation</strong> translated those patterns into representative commuter types, built from routines, decision points, and friction patterns rather than demographics.<br><br><strong>End-to-end journey mapping</strong> traced the full commuting workflow from planning at home through to arrival, documenting which tools were active at each stage and the participant's emotional state throughout. The map made the fragmentation structurally visible for the first time. Opal appeared at specific, limited moments in a workflow that moved continuously between applications. The switching was not incidental. It was built into how commuters had adapted to what each tool could and could not do.<br><br><strong>Emotional mapping</strong> over the journey identified where confidence dropped and anxiety peaked. Two moments concentrated almost all the friction: the pre-departure window before the first service, and any point mid-journey where a disruption required replanning under time pressure.<br><br>Two insights emerged that had not been visible in any individual interview. Fragmentation was the structural problem, not a side effect. And the app was completely blind to habitual behaviour. Most participants were making the same trip every day, and the application had no way to recognise or respond to that.`,
            placeholder: '<img src="assets/opal/opal_3.jpg" alt="Miro board showing persona and end-to-end journey map" style="width:100%;border-radius:8px;display:block;"><img src="assets/opal/opal_persona.png" alt="Opal user persona" style="width:100%;border-radius:8px;display:block;margin-top:1rem;">',
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb5sCgU=/?share_link_id=506555134836" target="_blank" rel="noopener">→ View Miro board</a></div>`,
            placeholderAfter: '<img src="assets/opal/opal_4.jpg" alt="Miro insight cluster showing repeated route behaviour across participants" style="width:100%;border-radius:8px;display:block;">',  
          },
          {
            heading: 'International Benchmarking',
            body: `Three international transit applications were reviewed to understand what a well-integrated commuting experience looked like and to set a credible level of ambition for the redesign. Benchmarking was structured around the specific failure points research had surfaced, not as a general feature audit.<br><br><strong>Oyster (London, TfL)</strong> showed how top-up and journey planning could coexist in a single interface without degrading either. Balance persisted across the app and was accessible exactly when commuters needed it, without requiring navigation into account settings.<br><br><strong>Suica (Tokyo, JR East)</strong> offered the clearest model for reducing friction in high-frequency transactional flows. Top-up and multi-card management were designed to require minimum input, demonstrating that a simple interface does not require a simple system behind it.<br><br><strong>Myki (Melbourne)</strong> was the most directly comparable, an Australian transit application under similar constraints to Opal. Examining it alongside the existing app made visible both where Opal lagged and where structural limitations were shared, which was useful for deciding what the redesign could realistically address.`,
          },
          {
            heading: 'Opal App Audit',
            body: `Walking through the existing app flow by flow produced a moment the research had already set up, but seeing it mapped against actual user behaviour made it land differently.<br><br>Checking balance required navigating into account settings. Research had identified balance visibility as the single most frequently needed piece of information before departure. The app had buried it behind account navigation. That was not a minor inconvenience. It was the wrong information architecture for the job the app was supposed to do.<br><br>Top-up required more steps than the underlying transaction warranted. Confirmation screens and navigation stages that added nothing meaningful contributed friction at a point participants had already described as time-sensitive. Two participants mentioned they had abandoned the top-up flow mid-morning and paid at a station machine instead, because it was faster.<br><br>Trip history was a flat chronological list with no fare breakdown or per-journey cost visibility. Participants who needed to understand their balance had to work through individual records manually to piece together their spending.<br><br>The audit confirmed what research had already shown. The app handled transactions. It had not been designed around the decisions and workflows that surrounded those transactions in practice. The information commuters needed most was present but not surfaced. The flows they needed to complete quickly were the ones carrying the most steps.`,
            placeholder: '<img src="assets/opal/opal_5.jpg" alt="Annotated screenshots from the Opal app audit" style="width:100%;border-radius:8px;display:block;">',
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
            body: `Research and synthesis converged on a single reframing: the Opal app had not been designed badly. It had been designed for the wrong model of commuting.<br><br>Participants did not use Opal as a transit tool. They used it as one leg of a multi-app workflow, switching to TripView for real-time status, to Google Maps to plan the route, and back to Opal only when payment was required. None of those switches were preferences. Each was an adaptation to a specific gap. Fragmentation was not a side effect of the app's scope. It was the direct result of building a ticketing tool and placing it inside a commuting workflow it was not designed to serve.<br><br>The second finding from synthesis was equally consequential: the app was invisible to habit. Most participants were making the same trip every day. The app presented the same blank starting state on every session, with no recognition of their routine, no shortcut to their regular journey, and no proactive information about disruptions on a route they had travelled hundreds of times. The redesign needed to address both the fragmentation and the invisibility of habit.`,
          },
          {
            heading: 'Design Principles',
            body: `Four principles came directly from research and audit findings. Each one exists because of a specific pattern the research revealed, not as a general design preference:`,
            list: [
              'Reduce taps: the audit found every core flow required more steps than the task warranted. Participants in time-pressured situations described that friction as a reason to abandon the app. Core tasks needed to be completable in fewer interactions',
              'Surface what matters: balance visibility and top-up access were the two most frequently needed functions in research. Both required navigation to reach in the existing app. They needed to be immediately visible from home',
              'Combine planning and paying: switching to an external app for journey planning was the most consistent fragmentation pattern across all 15 interviews. Embedding a planner within Opal directly resolves the structural cause of that switching',
              'Support habitual routes: most participants were repeating the same journey daily. The app had no awareness of that pattern. A redesigned app should recognise a saved route, surface it immediately on opening, and send proactive alerts for disruptions without requiring the user to search',
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
            body: `Ideation started with structure and navigation before any visual decisions were made. The principles from the define phase pointed toward a home screen that surfaced frequently needed information immediately, but they did not prescribe how to achieve that structurally. Three approaches were sketched and tested.<br><br>A <strong>dashboard model</strong> spread account-level information across a dense home screen. It was rejected quickly. Distributing attention across multiple items worked against the research finding that participants needed to reach one or two specific things fast, not scan a summary. A dashboard optimises for overview. Research showed participants needed speed to a single action.<br><br>A <strong>task-oriented model</strong> surfaced the next likely action rather than a static overview. Conceptually closer, but it required the app to make assumptions about intent that the research had not established clearly enough to design around reliably. Presenting a predicted action that turned out to be wrong would have created more friction than no prediction at all.<br><br>A <strong>card-first model</strong> treated each Opal card as the primary organising element with persistent top-up access alongside it. This came directly from how participants described their mental model of Opal in interviews. They consistently framed it as a card they managed, not an account they administered. Building the home screen around that framing reduced the interpretive work required to navigate the interface.<br><br>Saved routes and proactive alerts were explored in sketches alongside the home screen structure. These were not treated as secondary features. They were a first-class design problem because research had placed them at the highest-friction moment in the commuting day.`,
            placeholder: '<img src="assets/opal/opal_6.png" alt="Low-fidelity sketches of home screen and navigation concepts" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_7.png" alt="Sketch of saved route concept showing route pinning and alert toggle" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            heading: 'Key Structural Decisions',
            body: `Three structural decisions defined the redesign direction. Each came from a specific finding in research or synthesis, not from a design preference.<br><br><strong>Card-first home screen.</strong> This decision came from how participants described Opal in interviews. They framed it as a card they managed, not an account they administered. Organising the home screen around the card aligned the interface with the mental model participants already held, reducing the interpretive work required to navigate.<br><br><strong>Persistent top-up access from home.</strong> The audit identified top-up as high-frequency and time-sensitive, with more navigation steps than the task required. Research confirmed that participants under time pressure described that friction as a reason to defer or abandon the flow entirely. Surfacing top-up from home directly addressed both the step count finding and the avoidance behaviour it produced.<br><br><strong>Journey planner as a primary navigation destination.</strong> This decision came from synthesis. The absence of journey planning within Opal was the direct structural cause of the switching behaviour participants described as their central frustration. Embedding the planner as a primary destination removed the reason to leave the app, resolving the fragmentation at its source rather than patching around it.`,
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
            body: `The prototype was scoped to test two hypotheses from the define and ideate phases: whether a card-first home screen with persistent top-up access reduced friction in the most frequent tasks, and whether saved routes with real-time alerts resolved the pre-departure anxiety every participant had described.<br><br><strong>One-tap top-up from home</strong> came directly from two findings: the audit's step count on the existing flow, and participants who described abandoning top-up mid-morning and paying at a station machine because it was faster. This decision existed because the friction had a documented cost.<br><br><strong>Trip history with fare breakdowns</strong> replaced the flat chronological list. This came from participants who described manually working through records to understand their spending because the existing format made per-journey costs invisible.<br><br><strong>Multi-card management</strong> was redesigned with reference to Oyster and Suica from benchmarking, providing a single screen for multiple cards. The decision came from the structural clarity those apps demonstrated, not from a general preference for simplicity.<br><br><strong>Integrated journey planner</strong> was embedded as a primary navigation destination. This existed because synthesis had identified switching to Google Maps or TripView to plan a journey, then returning to Opal to pay, as the most consistent fragmentation pattern across all 15 interviews. Removing the reason to switch resolved the structural problem.<br><br><strong>Saved route on home screen</strong> came from the finding that most participants were repeating the same journey daily. The app had no awareness of this. Pinning a frequent route so it was visible on opening addressed a behaviour that had been invisible to the existing product.<br><br><strong>Real-time alerts for the saved route</strong> came from a pattern participants described unprompted: they had adopted TripView specifically to get disruption alerts before departure, not because they preferred it, but because Opal offered nothing equivalent. Surfacing alerts from the saved route removed that gap.<br><br>The saved route and alert flows were the centrepiece of the prototype demonstration because they showed the clearest line from interview insight to interface decision.`,
            placeholder: '<img src="assets/opal/opal_8.gif" alt="Figma prototype with interactive flows" style="width:100%;border-radius:8px;display:block;">',
            placeholderAfter: '<img src="assets/opal/opal_9.png" alt="Saved route home screen and real-time alert notification screens" style="width:100%;border-radius:8px;display:block;">',
          },
          {
            placeholder: '<img src="assets/opal/opal_10.png" alt="Key screen mockups: home screen, top-up flow, trip history, journey planner" style="width:100%;border-radius:8px;display:block;"><img src="assets/opal/opal_11.png" alt="Key screen mockups continued" style="width:100%;border-radius:8px;display:block;margin-top:1rem;">',
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
            body: `Every decision in this project is traceable to a specific thing someone said in an interview or a specific gap the audit revealed. That traceability is the result of research framed around behaviour rather than product evaluation, synthesis methods chosen for what each contributed rather than as a standard process, and design principles that exist because of findings rather than as general best practice.<br><br>The project proved that starting from the right question matters as much as the design work that follows. Asking how commuters actually move through their day, rather than asking what they think of the Opal app, produced a different category of insight. It revealed a structural problem that a feature audit alone would never have surfaced. And it produced a redesign direction that addressed the cause of the problem rather than its symptoms.`,
          },
          {
            heading: 'Reflection',
            body: `The most significant decision in this project was made before any design work began: structuring research around the commuting day rather than the Opal app. That framing choice determined what the project was able to find. Interviews about a product produce product feedback. Interviews about how people actually move through their day produce a behavioural map that reveals structural limitations no interface evaluation can surface.<br><br>The saved routes and real-time alerts feature is where that difference shows most clearly. It did not come from a competitive analysis, a product roadmap, or a designer's instinct. It came from participants describing the stress of the window before departure, the workarounds they had built around a tool that did not meet them when they needed it, and the single consistent answer they gave when asked what would make the morning better. Following that finding from synthesis into a named design principle and then into a first-class prototype feature is what contextual research makes possible.<br><br>The primary constraint of the project was the absence of usability testing. The next step would be moderated task-based sessions with participants from the same cohort, measuring whether the redesigned flows reduced task completion time and whether saved routes with alerts reduced the application-switching synthesis had identified as the central problem. Without that, the prototype demonstrates a well-reasoned direction. It does not yet confirm the direction works.<br><br>What the project ultimately proved is that the Opal app's problems were not the result of missing features or poor execution. They were the result of being designed for ticketing administration in a context where people needed a tool for commuting. Those are not the same job. Designing for the transaction rather than the journey is a category of mistake that more features cannot fix.`,
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

    overview: `FocusFlow was built in three days to solve a problem most productivity tools are not designed to address: helping people with ADHD start tasks, not organise them.<br><br>As the sole designer in a cross-functional team of engineers, I ran research, synthesis, and end-to-end interface design across the sprint. With one day for research and one day to validate before the pitch, there was no room to explore incrementally. Every decision had to be grounded in a clear finding or cut.<br><br>The central decision was to remove the task list entirely and replace it with a conversational assistant that guides users into a single task, one step at a time. This was not a feature addition. It was a structural reframing of what a productivity tool is for, derived from what research revealed about where the existing model fails.`,
    overviewLink: `<a class="cs-proto-btn" href="#" target="_blank" rel="noopener">→ View Mid Fidelity Prototype (Figma)</a>`,
    problemPart1: `Most productivity tools are built on one assumption: users can plan, prioritise, and execute in a structured, linear way. Todoist, Trello, Notion. All of them treat task management as an organisational problem, giving users lists and views to sort and sequence their work.`,
    problemPlaceholder: '<img src="assets/focusflow/ff_2.png" alt="Comparison of a traditional task list app versus FocusFlow single-focus screen" style="width:100%;border-radius:8px;display:block;">',
    problemPart2: `For people with ADHD, that assumption does not describe how task initiation works.<br><br>The barrier is not knowing what needs doing. The barrier is starting. Opening an app to a full list of pending tasks, each requiring a decision about priority and order, adds cognitive demand at exactly the moment it needs to be reduced. The interface asks for self-direction at the point when self-direction is hardest.<br><br>This is not a feature gap. It is a structural mismatch between how these tools are designed and how cognition actually operates when someone reaches for them.`,
    problem: `Most productivity tools assume users can plan, prioritise, and execute tasks in a linear, self-directed way. For people with ADHD, this model does not describe how task initiation works. The challenge is not knowing what needs to be done. It is starting. Existing tools add cognitive demand at precisely the moment it needs to be reduced, by requiring users to survey a list, make decisions about priority, and self-direct before they have begun.`,
    tools: ['Figma', 'Miro', 'Lo-fi Interactive Prototype', 'Mid Fidelity Prototype'],
    stages: [
      {
        id: 'research',
        label: '01 / Research',
        title: '01 / Research — Understanding ADHD Task Behaviour',
        overview: ['Research Approach', 'Key Insights'],
        content: [
          {
            heading: 'Research Approach',
            body: `Day one was research. Three adults diagnosed with ADHD were interviewed individually, with sessions structured around how they managed tasks day to day: which tools they used, when those tools failed them, and what they had tried and abandoned. The goal was to understand task behaviour as a lived experience, not to evaluate specific applications.<br><br>I drew on my own experience with ADHD throughout. This shaped the interview framing and shortened the time to pattern recognition. I already had a working theory about where productivity tools break down for this audience. The interviews confirmed that the failures were consistent across people, not individual, and that no tool was addressing the initiation moment specifically.<br><br>One participant described opening Todoist and feeling overwhelmed before she had done anything. Another described spending time building a system of tags, labels, and priority flags across three different apps, and still not starting the task he needed to do. A third said she abandoned her task app every time she opened it to a backlog. The tools were not failing at organisation. They were failing at the moment before organisation could begin.<br><br>A team workshop after interviews consolidated the patterns. A rapid cognitive accessibility review assessed information density, decision count per screen, and working memory load across the tools participants had mentioned.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://miro.com/app/board/uXjVHb6c4w0=/?share_link_id=989572133225" target="_blank" rel="noopener">→ View Miro board</a></div>`,
          },
          {
            heading: 'Key Insights',
            body: `<em>"Seeing everything at once makes me want to close the app."</em><br><br>Said while describing opening Todoist. The same sentiment came up in all three sessions, in different words. Synthesis produced four findings that shaped every subsequent decision:`,
            list: [
              'Task lists create overwhelm before anything has started. Seeing the full backlog at the moment of opening was described as demotivating, not clarifying. It produced avoidance, not action',
              'Initiation is the primary barrier, not organisation. Every participant knew what needed doing. No tool offered support for the moment of actually starting',
              'Decision fatigue compounds the problem. Every choice required before a task begins adds to the cost of beginning. Existing tools ask users to prioritise, categorise, and sequence before they can act',
              'Time blindness disrupts completion. Participants described losing track of elapsed time inside a task, stopping too early or running well past productive focus',
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
            body: `Synthesis converged on a reframing. The problem was not missing features. The problem was that productivity tools were built around a model of behaviour that does not describe how people with ADHD approach task work.<br><br>Standard tools assume users arrive with executive function already engaged: survey the list, decide priority, then begin. For people with ADHD, that sequence is precisely where the process breaks down. The cost of deciding what to do first is often enough to prevent doing anything at all.<br><br>The challenge was not to build a better list. It was to design an experience that removed the need to self-direct, guiding the user into a single task without requiring them to plan first.<br><br><strong>How might we design a task experience that removes the burden of initiation and guides users into beginning, without requiring them to plan?</strong>`,
          },
          {
            heading: 'Design Principles',
            placeholder: '<img src="assets/focusflow/ff_4.png" alt="Design principles mapped from research insights" style="width:100%;border-radius:8px;display:block;">',
            body: `Six principles came directly from the research findings. Each one addresses a specific failure pattern the interviews revealed:`,
            list: [
              'Show only one task at a time: addressing the overwhelm caused by full list views, which every participant identified as a barrier to beginning',
              'Remove task lists and dashboards: eliminating the interface pattern identified as the primary source of initiation failure',
              'Reduce choices per screen: addressing decision fatigue; every additional choice before beginning a task increases the likelihood of disengagement',
              'Provide a single unambiguous primary action: removing the need for the user to interpret what to do next, the point at which participants consistently stalled',
              'Support time awareness visually: addressing time blindness without numerical timers, which participants described as increasing rather than reducing anxiety',
              'Guide rather than expect self-direction: the central principle, reframing the interface from a tool that stores tasks to one that actively moves the user through them',
            ],
            afterList: `<p style="margin-top:1rem">These principles did not point toward a refined version of an existing productivity interface. They pointed toward a structurally different interaction model.</p>`,
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
            body: `On day two, with 24 hours left before the pitch, the question was which interaction model could structurally deliver all six principles without requiring the user to navigate, prioritise, or self-organise at any point.<br><br>A <strong>list-with-focus mode</strong> was the first option. Highlight the current task, dim the rest. It was rejected immediately. The list still existed, which meant the user still had to select a task before beginning. The initiation barrier remained, just visually de-emphasised. Research had identified selecting from a list as the failure point. Styling around it did not remove it.<br><br>A <strong>card-swipe model</strong> was explored next. Surface one task at a time, let the user swipe to reach the next. Closer, but still wrong. It presented tasks. It did not guide the user into them. After the swipe, the user was still standing in front of a task, deciding whether to start. The gap was in the same place it had always been.<br><br>The <strong>conversational interface</strong> resolved the problem by eliminating the gap entirely. A chat assistant does not show a list and wait. It offers one step and asks for a response. By the time the user sees the screen, the decision about what to do has already been made. The user is not choosing. They are responding. That structural difference was exactly what research had shown was missing.<br><br>This was not a decision to add a chatbot feature to a productivity app. It was a decision to use conversation as the primary interaction model because conversation, by its structure, removes the patterns that break down initiation. The assistant replaces the list. The response replaces the selection. The guided step replaces open-ended navigation.`,
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
            body: `Sketching was not an option. With one day left and testing needed before the pitch, the only thing worth building was something navigable. Static wireframes would describe visual structure but could not reveal whether removing the task list created relief or confusion. That was the hypothesis that had to be tested, and it could only be tested by making the experience interactive, however roughly.<br><br>I moved directly into a lo-fi interactive prototype as a structural thinking tool. The prototype was not about screens. It was about five specific questions: does removing the list create confusion or relief; is a single dominant action legible without instruction; can visual progress communicate elapsed time without numbers; does minimal content per screen change engagement; does a fully linear flow feel constraining or clarifying.<br><br>The validated flow reduced to a single repeating sequence with no branches: <strong>Open app → Chat assistant offers a task → User confirms → Single focus screen → Complete → Assistant offers next step.</strong> No list. No navigation. No open-ended choices. Everything that required the user to self-direct had been removed.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/LmoT0D4wYqwGcRTLWhvRzE/lo-fi-mockup?fullscreen=1&t=pjFWlr2VZ0TU34hL-1" target="_blank" rel="noopener">→ View lo-fi prototype</a></div>`,
            placeholderAfter: 'Lo-fi screens showing the conversational flow',
          },
          {
            heading: 'Mid-fidelity Build',
            placeholder: '4 to 6 mid-fi screens laid out horizontally',
            body: `With the interaction structure validated, the mid-fidelity build had one job: make the flow legible enough to test and demonstrate. Not every screen was built. Only the interactions required to communicate the core concept were made functional. Any effort spent outside the primary flow would have come at the cost of the screens within it.<br><br>Every screen was built against cognitive accessibility criteria drawn directly from research, not applied as a retrospective checklist.<br><br>One primary action per screen came from the decision fatigue finding: every additional choice before starting a task increased the likelihood of not starting. Limited text and visual noise came from the ambient cognitive load pattern participants described. Large tap targets came from the low-focus state problem, the gap between intending to act and managing to. The current task and next step were always simultaneously visible because participants described tools that required them to remember context between screens as actively frustrating. The palette of light green and white came from participants describing high-contrast, high-density interfaces as a reason to close the app.`,
          },
          {
            heading: 'Testing and Iterations',
            body: `Testing happened on day three. Three moderated sessions, task-based: open the app, respond to the assistant, begin a task, complete the flow. Observations focused on hesitation, confusion, and unprompted navigation attempts as indicators of whether the model reduced or added cognitive load.<br><br>No participant tried to navigate away or looked for a list. No one asked what to do next; the conversational structure answered the question before it arose. All three described the experience as calmer than other tools they had used, and two used the word "simple" without prompting.<br><br>Three iterations came directly from what was observed. Button size and contrast were increased after two participants paused before tapping the primary action. Introductory text was removed after two participants read it before interacting, adding a delay before the task began. Focus state hierarchy was strengthened after one participant's attention drifted from the active task name.`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes — What This Demonstrates',
        overview: ['Design Decisions', 'What This Project Proved', 'Reflection'],
        content: [
          {
            heading: 'Key Design Decisions',
            placeholder: `<table class="cs-decision-table"><thead><tr><th>Problem</th><th>Decision</th><th>Outcome</th></tr></thead><tbody><tr><td>Task lists cause overwhelm</td><td>Removed lists entirely</td><td>Reduced cognitive load at the point of opening</td></tr><tr><td>Limited time</td><td>Built mid fidelity, not high fidelity</td><td>Interaction model communicated and tested within sprint</td></tr><tr><td>Too many potential features</td><td>Designed one core flow</td><td>Clearer demonstration of the concept's value</td></tr></tbody></table>`,
            body: `<strong>Removing task lists entirely</strong> was the most consequential decision. Research identified the list view as the primary initiation failure point, not because lists are poorly designed, but because they require self-direction before a task can begin. Removing the list was not a simplification. It was a reframing of what the tool was for.<br><br><strong>Limiting the prototype to a single flow</strong> came from the same principle as the product: one task at a time, one decision at a time. A prototype that demonstrates one thing clearly is more useful than one that covers multiple flows at partial fidelity. Given three days, demonstrating the core idea well was more valuable than demonstrating everything partially.`,
          },
          {
            heading: 'What This Project Proved',
            body: `Three days is enough time to make a structural design decision from research if the research is focused and the synthesis is honest. Every decision in this project is traceable to a specific interview moment or a specific failure pattern the workshops identified. None came from convention or assumption about what a productivity app should look like.<br><br>The project also proved that structural thinking and time pressure are not incompatible. Skipping sketches and building interactive from the start was not a shortcut. It was the right call given what needed to be validated and how little time there was to do it. The lo-fi prototype tested the core hypothesis in hours. The mid-fidelity build communicated and tested it in one more day.<br><br>What the constraint produced was discipline. No features outside the primary flow. No visual detail before the interaction was validated. One thing done well rather than several things done partially.`,
          },
          {
            heading: 'Reflection',
            body: `The most consequential decision was removing the task list rather than refining it. This did not come from brainstorming. It came from synthesis. Participants did not describe the list as a flawed solution. They described it as the source of the problem, a trigger for avoidance, cognitive overload, and friction before anything had started. Recognising that meant reframing the question. Not how to improve the list. Whether the list should be there at all.<br><br>The conversational model was a structural response to that insight. Conversation moves forward with the user. It removes the need to choose, scan, and prioritise before action begins. This was not a creative decision. It was the direct outcome of taking synthesis seriously and letting findings challenge what a productivity tool is supposed to look like.<br><br>The judges' feedback after the pitch raised a question that needed to be taken seriously. Because the experience resembled guided support, they asked whether users might interpret the assistant as psychological guidance rather than task facilitation. That question was not a criticism of the concept. It was a responsibility question, and an important one. A product that guides people through cognitively difficult moments has to be explicit about what it is and what it is not. If developed further, this would require careful framing in the product's language, clearly defined scope, and likely input from clinical professionals to ensure the product supported users without implying therapeutic or medical authority. The feedback clarified the category of work this product belongs to, and what that category demands from the people who build it.<br><br>The primary limitation was the absence of longitudinal testing. Three sessions during a hackathon were enough to validate that the interface was understood and experienced as less cognitively demanding. They were not enough to determine whether this approach would support sustained behaviour change. For a product designed to help people start tasks consistently, that is the more meaningful test, and the most important next step.<br><br>What the project ultimately proved is that the task list is not an imperfect solution for people with ADHD. It is the wrong structural model entirely. A list assumes self-direction. It presents options and waits. For an audience where the cost of choosing is often the reason nothing gets done, that is not a starting point for a product. It is the obstacle the product needs to remove.`,
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
