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
    heroImage: 'assets/opal/opal_1.png',
    heroImageAlt: 'Opal app redesign mockup',
    tags: ['UX Research', 'Synthesis', 'Journey Mapping', 'Interaction Design', 'Figma'],
    overview: `The Opal project began as a research question rather than a design brief. Rather than starting from the assumption that the app needed new features, the team asked how Sydney commuters actually moved through their day and where the Opal experience fitted into that workflow, or where it failed to.<br><br>A team of five UX designers conducted 15 individual interviews with Sydney commuters, synthesised findings collaboratively across a shared Miro board using four methods, audited the existing Opal application against the behaviours research revealed, and benchmarked against transit applications from three international cities. The project concluded with a mid-fidelity Figma prototype covering the redesigned core flows.<br><br>The central finding was that the Opal app had been built around ticketing administration rather than commuting. Participants did not use it as their primary transit tool. They consulted it as one step in a fragmented workflow that moved between multiple applications to complete a single journey. The redesign addressed that fragmentation as a structural problem, not as a collection of missing features.`,
    problem: `Transport for NSW's Opal app handled the functional basics of transit ticketing: checking balance, topping up, and reviewing trip history. What it did not account for was how those tasks fitted into the experience of commuting as a whole.<br><br>Participants in research did not describe the app as broken. They described it as incomplete. Every commuting need that extended beyond account management required switching to another application. Checking whether a service was running on time, planning a route, or receiving notice of a disruption all required leaving the Opal environment entirely. The app supported ticketing. It did not support travel.<br><br>The question the team set out to answer was not which features the app was missing. It was whether the structural premise of the app, as a ticketing administration tool consulted in isolation, was the right model for what commuters actually needed from a transit application.`,
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
            body: `Interviews were structured around the full commuting day rather than the Opal app specifically. This framing was a deliberate methodological choice. Asking participants to evaluate an application produces feedback about the application. Asking participants to walk through their morning, describe which tools they consulted before leaving home, explain how they managed uncertainty in transit, and reflect on what caused friction produces a behavioural map that places the application in its actual context of use.<br><br>The team of five each interviewed three participants, producing 15 sessions in total. Participants ranged from 17 to 45 years of age, covering students and full-time workers across varied commuting distances, frequencies, and levels of dependence on public transit. Each session ran for approximately one hour.<br><br>The structure moved chronologically through the commuting day from the decision to leave home through to arrival at a destination. Within that sequence, every interaction with the Opal app appeared naturally alongside every other tool the participant reached for at the same moment. This approach surfaced three patterns that a product-focused interview structure would not have revealed.<br><br>The first was that the window before departure was consistently the highest-stress point in the commuting day. Participants needed to confirm their route was operating normally before committing to a departure time. The Opal app's trip information was too slow and unreliable for this purpose under time pressure. Several participants had adopted TripView as their default for pre-departure checks, not because they preferred it, but because the Opal app did not meet the need at the moment it mattered most.<br><br>The second was that the majority of participants were not planning new routes each day. They were repeating a small number of established journeys on a fixed schedule. The app offered no mechanism for recognising this behaviour, presenting the same undifferentiated experience regardless of how many times the participant had made the same trip.<br><br>The third emerged when participants were asked directly what would improve the morning experience. Responses converged without being prompted: save a regular route, receive an alert if something on that route changes, and access that information without having to search each time.`,
            placeholder: 'Interview affinity map from Miro',
          },
          {
            heading: 'Synthesis in Miro',
            body: `All five designers synthesised findings collaboratively in Miro, working through four methods in sequence. The goal was not to catalogue everything participants had said but to identify the patterns that held across the full dataset and could not be attributed to any individual participant's circumstances.<br><br><strong>Affinity mapping</strong> was applied first, clustering raw observations from all 15 interviews into groups based on behavioural similarity. Working across a shared board and moving notes without regard for which participant they came from surfaced cross-cutting themes that no single interview had made fully visible on its own.<br><br><strong>Persona creation</strong> translated the behavioural patterns from the affinity map into representative user types. These were constructed from the commuting contexts, routines, decision points, and pain patterns that clustering had shown were consistent across the research population, not from demographic data.<br><br><strong>End-to-end journey mapping</strong> traced the full commuting workflow from planning at home through to arrival, documenting at each stage which tools were active, what decisions were being made, and what the participant's emotional state was. Mapping the journey this way made the fragmentation pattern structurally legible: the Opal app appeared at specific, limited moments in a workflow that moved continuously between applications. The switching behaviour was not incidental to how participants used the app. It was built into how commuters had adapted to what each tool could and could not do.<br><br><strong>Emotional mapping</strong> was applied over the journey map, identifying where participant confidence dropped and where frustration and anxiety peaked. The highest-friction moments consistently concentrated around two points: the pre-departure window before the first service of the day, and any moment during the journey where a disruption required replanning under time pressure.<br><br>Two insights emerged from synthesis that had not been visible in any individual interview. The first was that fragmentation was the structural problem. Participants were not using the Opal app incorrectly. They were using it alongside multiple other applications because no single tool covered the commuting workflow they actually needed to complete. The second was that habitual commuting behaviour was invisible to the app. Most participants were repeating the same route daily, and the application had no awareness of that pattern and no way to act on it.`,
            placeholder: 'Miro board showing persona and end-to-end journey map',
            placeholderAfter: 'Miro insight cluster showing repeated route behaviour across participants',
          },
          {
            heading: 'International Benchmarking',
            body: `Transit applications from three international cities were reviewed to understand what an integrated, high-quality commuting experience looked like in practice and to establish a credible level of ambition for the redesign.<br><br>The benchmarking exercise was structured around the same behaviours and failure points that research had surfaced. For each application, the team assessed how the tool handled pre-departure checks, real-time disruption information, top-up access, route management, and the relationship between journey planning and account functions. Framing benchmarking around the specific problems identified in research ensured that findings contributed to design decisions rather than producing a general feature inventory.<br><br><strong>Oyster (London, TfL)</strong> demonstrated how top-up and journey planning could coexist within a single interface without each reducing the utility of the other. Balance information persisted across the application rather than being buried in account settings, meaning it was accessible at the moments commuters most needed it without requiring dedicated navigation.<br><br><strong>Suica (Tokyo, JR East)</strong> offered the most instructive model for reducing friction in high-frequency transactional flows. The top-up experience and multi-card management were both designed to require minimum input from the user, demonstrating that simplicity in the interface does not require simplicity in the underlying system.<br><br><strong>Myki (Melbourne)</strong> was the most relevant comparison as a contemporary Australian transit application operating under similar constraints to Opal. Examining it alongside the existing app made visible both where Opal lagged relative to a comparable system and where structural limitations were shared between them, which was useful for distinguishing between problems the redesign could address and those that fell outside its scope.`,
          },
          {
            heading: 'Opal App Audit',
            body: `The existing Opal app was audited across four primary flows: checking balance, topping up, reviewing trip history, and managing cards. Each flow was walked through step by step, documenting total step count, decision points required to complete the task, information that needed to be recalled from previous screens, and moments where the interface's behaviour diverged from what research had shown users expected.<br><br>The balance check flow required navigation into account settings to access information that research had identified as the most frequently needed for pre-departure decisions. Placing the highest-priority piece of account information behind account navigation represented a structural mismatch between the app's information architecture and the priority hierarchy that commuters actually operated with.<br><br>The top-up flow involved more steps than the underlying transaction required. Confirmation and navigation stages that added no meaningful clarity or security contributed friction at a point research had identified as high-frequency and time-sensitive for many participants.<br><br>Trip history presented journeys as a flat chronological list with no fare breakdown or per-journey cost visibility. Participants who needed to understand how their balance had been spent could not extract that information without working through individual journey records manually.<br><br>The audit confirmed the pattern research had already established: the app was built to handle transactions, and it did so functionally. It had not been designed around the decisions and workflows that surround those transactions in practice. Information that research identified as high-priority was present but not surfaced. Flows that the audit identified as carrying excessive steps were also the ones participants described as avoided or abandoned when time was limited.`,
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
            body: `Research and synthesis converged on a finding that reframed the design problem entirely. The issue with the Opal app was not that features were missing. The issue was that the app had been designed around a model of how commuting works that did not describe how commuters actually behaved.<br><br>Participants did not use Opal as a standalone transit tool. They used it as one component in a multi-application workflow, switching to TripView for real-time information, to Google Maps for route planning, and back to Opal for payment. Each of those switches was not a preference. It was an adaptation to a gap. Fragmentation was not a side effect of the app's design. It was the direct consequence of an application scoped for ticketing administration in a context where commuters needed something that addressed the entire workflow.<br><br>Synthesis also produced a second finding that was equally significant for the redesign direction: the app did not recognise habitual commuter behaviour. Most participants were repeating the same one or two routes daily. The app treated each session identically, presenting the same starting state regardless of the user's history. There was no mechanism for saving a frequent route, no awareness of disruptions relevant to that route, and no shortcut for the pre-departure check that research had identified as the highest-friction moment in the commuting day. The redesign needed to address both the fragmentation and the invisibility of habit.`,
          },
          {
            heading: 'Design Principles',
            body: `Four principles were established from the research and synthesis findings to guide all subsequent design decisions. Each is directly traceable to a specific finding from the research or audit phase:`,
            list: [
              'Reduce taps: the audit confirmed that every core flow required more steps than the underlying task warranted, and participants described the friction of extended flows as a reason for abandoning the app in time-pressured situations; core tasks should be completable in fewer interactions',
              'Surface what matters: research identified balance visibility and top-up access as the two most frequently needed functions, and both required navigation steps to reach in the existing app; these should be immediately visible from the home screen without the user needing to navigate',
              'Combine planning and paying: journey planning was consistently the reason participants left the Opal environment and switched to an external application; embedding a journey planner within the app directly resolves the switching behaviour that synthesis identified as the structural core of the problem',
              'Support habitual routes: the majority of participants were repeating the same journey daily, and the app had no awareness of this pattern; a redesigned app should recognise a saved frequent route, surface it immediately on opening, and provide proactive alerts for disruptions on that route without requiring the user to search',
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
            body: `Ideation began with information architecture and navigation structure before any visual decisions were made. The design principles established in the define phase pointed toward a home screen that surfaced the most frequently needed information immediately, but they did not prescribe the structural model for achieving this. Low-fidelity sketches explored three distinct approaches before a direction was selected.<br><br>A <strong>dashboard model</strong> surfaced account-level information across a dense home screen. It was discarded because it distributed attention across multiple items rather than directing it toward the one or two functions that research had shown participants needed most at the moment of opening the app.<br><br>A <strong>task-oriented model</strong> prioritised the next likely action rather than a static summary view. This had merit in principle but required the app to make assumptions about user intent that the research had not established clearly enough to design around reliably at this stage.<br><br>A <strong>card-first model</strong>, treating each Opal card as the primary organising element with persistent top-up access surfaced alongside it, was selected as the direction. This aligned most closely with how participants described their mental model of Opal during interviews. Participants consistently framed Opal as a card they managed rather than an account they administered. The card-first structure reflected that framing directly.<br><br>Alongside the home screen structure, saved routes and proactive alert patterns were explored in low-fidelity sketches at this stage. These had emerged directly from the morning commute frustrations described in interviews and were scoped as a first-class design problem rather than treated as a secondary feature addition.`,
            placeholder: 'Low-fidelity sketches of home screen and navigation concepts',
            placeholderAfter: 'Sketch of saved route concept showing route pinning and alert toggle',
          },
          {
            heading: 'Key Structural Decisions',
            body: `Three structural decisions defined the redesign direction. Each is traceable to a specific finding from research or synthesis rather than to a design preference.<br><br><strong>Card-first home screen.</strong> The participant mental model from interviews established that people thought of Opal as a card they managed, not an account they administered. Organising the home screen around the card rather than around account functions aligned the app's structure with how participants already understood what they were looking at, reducing the interpretive work required to navigate the interface.<br><br><strong>Persistent top-up access from the home screen.</strong> The audit identified top-up as a high-frequency, time-sensitive action that required more navigation steps than the task warranted. Research confirmed that participants in time-pressured situations described this friction as a reason to delay or avoid topping up. Surfacing top-up access persistently without requiring account navigation directly addressed both the step count finding and the behavioural pattern it produced.<br><br><strong>Journey planner as a primary navigation destination.</strong> Synthesis established that the absence of journey planning within the Opal environment was the direct cause of the switching behaviour participants described as their central frustration with the app. Embedding the journey planner as a primary destination rather than a link to an external application resolved the fragmentation at its structural source rather than adding a feature to an otherwise unchanged model.`,
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
            body: `A mid-fidelity Figma prototype was built to demonstrate the redesigned commuting experience across the flows that research had identified as highest priority. The prototype was scoped to cover the interactions required to test the core hypotheses from the define and ideate phases: whether a card-first home screen with persistent top-up access reduced the step count and perceived friction of the most frequent tasks, and whether surfacing saved routes and real-time alerts resolved the pre-departure friction that every research participant had described.<br><br><strong>One-tap top-up</strong> was surfaced directly from the home screen, removing the navigation path through account and card settings that the audit had identified as the primary source of friction in this flow.<br><br><strong>Trip history with fare breakdowns</strong> replaced the flat chronological log with a structured view that made individual journey costs visible at a glance, addressing the information need that participants with budgeting or expense requirements described as unmet by the existing format.<br><br><strong>Multi-card management</strong> was redesigned with reference to the organisational clarity observed in Oyster and Suica during benchmarking, providing a single screen that handled multiple cards without requiring navigation between separate card contexts.<br><br><strong>Integrated journey planner</strong> was embedded within the application as a primary navigation destination, directly resolving the fragmentation that synthesis had identified as the structural core of the problem. Participants would no longer need to switch to an external application to plan a journey before returning to Opal to complete a transaction.<br><br><strong>Saved frequent route on the home screen</strong> addressed the habitual commuting pattern that research had made visible. The user's most commonly travelled route is pinned and visible immediately on launch, requiring no search or repeated navigation to access before departure.<br><br><strong>Real-time delay and disruption alerts</strong> on the saved route are surfaced proactively on the home screen, directly replacing the reliance on TripView that multiple participants had described as an adaptation to a gap rather than a preference. The information participants needed before departure is available without opening a second application.<br><br>The saved route and alert flows were prioritised in the prototype demonstration specifically to show how a direct research finding had been carried through to a concrete interface decision, making the traceability from interview insight to product behaviour explicit.`,
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
            body: `This project demonstrates end-to-end UX capability across research, synthesis, and interaction design, applied across a complete project cycle from initial framing through to a testable prototype:`,
            list: [
              'Structuring user interviews around behaviour and context rather than around product evaluation, producing generative insight about the commuting workflow rather than evaluative feedback about individual features',
              'Conducting collaborative synthesis across a team of five using affinity mapping, persona creation, journey mapping, and emotional mapping, each method chosen for what it contributed to understanding that the previous method could not',
              'Translating qualitative findings into design principles that each carry explicit traceability to a specific research finding, rather than operating as general guidelines applied independently of the data',
              'Auditing an existing product against user needs identified through research, mapping step count, cognitive load, and information hierarchy across core flows to identify structural gaps rather than surface-level issues',
              'Using international benchmarking structured around the specific pain points identified in research rather than as a general feature comparison, ensuring findings contributed directly to design decisions',
              'Making structural information architecture decisions that address the problem at its source rather than layering features onto an unchanged underlying model',
              'Translating a specific research finding about habitual commuting behaviour into a first-class design feature with a clear and explicit connection to the interview data it came from',
              'Scoping a mid-fidelity prototype to the interactions required to test the core hypotheses from synthesis, demonstrating behaviour and structure rather than visual detail',
            ],
          },
          {
            heading: 'Reflection',
            body: `The most significant decision in this project was made before any design work began: structuring the research around the commuting day rather than around the Opal app. That choice determined what the project was able to find. Interviews framed around an application produce feedback about the application. Interviews framed around how people actually move through their day produce a behavioural map that reveals the application's structural limitations in a way that interface evaluation alone cannot.<br><br>The saved routes and real-time alerts feature is the clearest example of the research-to-design trace this project established. That feature did not come from a competitive analysis, a product roadmap, or a designer's assumption about what would be useful. It came from participants describing the stress of the morning commute, the tools they had adopted out of necessity, and the workarounds they had built for themselves because the Opal app did not address the moments they needed it most. Carrying that finding from synthesis into a named design principle and then into a first-class prototype feature is what research grounded in context rather than in product evaluation makes possible.<br><br>The primary constraint of the project was the absence of usability testing with the mid-fidelity prototype. The logical next step would be moderated task-based testing with participants drawn from the same demographic as the research cohort, measuring whether the redesigned flows reduced task completion time and whether the saved route and alert features reduced the application-switching behaviour that synthesis had identified as the central problem. Without that testing, the prototype demonstrates a well-reasoned design direction. It does not yet confirm that the direction works in practice.`,
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
    heroImage: 'assets/focusflow/ff_1.png',
    heroImageAlt: 'FocusFlow app redesign mockup',
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
        id: 'research',
        label: '01 / Research',
        title: '01 / Research — Understanding ADHD Task Behaviour',
        overview: ['Research Approach', 'Key Insights'],
        content: [
          {
            heading: 'Research Approach',
            placeholder: 'Photo or screenshot of Miro board with research notes / workshop outputs',
            body: `Research was conducted on the first day of the hackathon. Three adults diagnosed with ADHD were interviewed individually, with sessions structured around how they currently managed tasks, which tools they used, when those tools failed them, and what they had tried and abandoned. The aim was to understand task behaviour as a lived experience rather than to evaluate any specific application.<br><br>I also drew on my own experience of navigating ADHD and task management. This shaped the interview framing and accelerated pattern recognition during synthesis, surfacing structural problems in the category before tool-level comparisons were made.<br><br>A team workshop consolidated findings from the interviews and identified which problems were inherent to how productivity tools are structured rather than specific to the applications participants had tried. A rapid cognitive accessibility heuristic review assessed information density, decision count per screen, and working memory load across the category.`,
          },
          {
            heading: 'Key Insights',
            body: `<em>"Seeing everything at once makes me want to close the app."</em><br><br>This response, volunteered when one participant described opening a task management app, was consistent in substance across all three sessions. Synthesis produced four findings that shaped every subsequent design decision:`,
            list: [
              'Task lists create immediate overwhelm. Seeing the full scope of outstanding work at the point of opening the app was described as demotivating rather than clarifying, producing avoidance rather than action',
              'Initiation is the primary barrier, not organisation. Participants knew what needed doing. The interface offered no support for the specific moment of starting',
              'Decision fatigue compounds the problem. Every choice the interface requires before a task begins adds to the cognitive cost of beginning. Existing tools ask users to prioritise, categorise, and sequence before they can act',
              'Time blindness disrupts completion. Participants described losing track of elapsed time once inside a task, causing them to stop too early or continue well past productive focus',
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
            body: `Synthesis converged on a reframing: the problem was not that productivity tools lacked features. The problem was that they were built around a model of behaviour that does not describe how people with ADHD approach task work.<br><br>Standard tools ask users to arrive with executive function already engaged: survey a list, decide on priority, then begin. For people with ADHD, that sequence is precisely where the process breaks down. The cognitive cost of deciding what to do first is often enough to prevent doing anything at all.<br><br>The design challenge was not to build a better list. It was to design an experience that removed the need to self-direct entirely, guiding the user into a single task without requiring them to plan first.<br><br><strong>How might we design a task experience that removes the burden of initiation and guides users into beginning, without requiring them to plan?</strong>`,
          },
          {
            heading: 'Design Principles',
            placeholder: 'Screenshot of principles written visually or on sticky notes',
            body: `Six principles were established from the research findings. Each is traceable to a specific finding from the interviews or synthesis:`,
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
            body: `Ideation focused on identifying which interaction model could structurally deliver all six principles without requiring the user to navigate, prioritise, or self-organise at any point.<br><br>A conventional list-with-focus mode was considered and rejected. It still required the user to make a selection before beginning, reintroducing the initiation barrier at the exact point it needed to be removed. A card-swipe model was explored as a mechanism for surfacing one item at a time, but it could only present tasks rather than actively guide the user into them.<br><br>The conversational interface resolved the structural problem. A chat assistant does not present options and wait. It offers the next step directly, removing the decision before it can arise. The user is not asked what they want to do. They are guided into doing it.<br><br>This was not a decision to add a chatbot feature to a productivity tool. It was a decision to use conversation as the primary interaction model because conversation, by its structure, eliminates the patterns research had identified as the source of the problem. The assistant replaces the list. The response replaces the selection. The guided step replaces open-ended navigation.`,
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
            body: `Static wireframes carry a specific risk in a time-constrained sprint: they describe visual structure but cannot reveal whether a proposed interaction model actually reduces cognitive load. The only way to validate the core hypothesis was to make the experience navigable, however roughly, and observe whether the flow resolved the initiation barrier without introducing new decision points.<br><br>Rather than sketching, I moved directly into a lo-fi interactive prototype as a structural thinking tool. The prototype tested five questions: whether removing the task list entirely created confusion or relief; whether a single dominant action was legible without instruction; whether visual progress feedback could communicate elapsed time without numbers; whether minimal content per screen changed engagement; and whether a fully linear flow felt constraining or clarifying.<br><br>The validated flow reduced to a single repeating sequence with no branches: <strong>Open app → Chat assistant offers a task → User confirms → Single focus screen → Complete → Assistant offers next step.</strong> No list view. No navigation. No open-ended choices.`,
            afterList: `<div class="cs-proto-btn-wrap"><a class="cs-proto-btn" href="https://www.figma.com/make/LmoT0D4wYqwGcRTLWhvRzE/lo-fi-mockup?fullscreen=1&t=pjFWlr2VZ0TU34hL-1" target="_blank" rel="noopener">→ View lo-fi prototype</a></div>`,
            placeholderAfter: 'Lo-fi screens showing the conversational flow',
          },
          {
            heading: 'Mid-fidelity Build',
            placeholder: '4 to 6 mid-fi screens laid out horizontally',
            body: `With the interaction structure validated, the mid-fidelity Figma build focused on two things: making the interface visually legible enough to evaluate during testing, and demonstrating the complete flow for the pitch. Not every screen was built. Only the interactions required to communicate the core concept were made functional. Effort spent outside the primary flow would have come at the cost of the clarity and coherence of the screens within it.<br><br>Each screen was reviewed against cognitive accessibility criteria as active design constraints, each traceable to a research finding: one primary action per screen to address decision fatigue; limited text and visual noise to reduce ambient cognitive load; strong visual hierarchy so the next action required no interpretation; large tap targets for low-focus states; no reliance on memory, with the current task and next action always simultaneously visible; and a calm palette of light green and white to avoid the stimulation participants described as increasing anxiety.`,
          },
          {
            heading: 'Testing and Iterations',
            body: `The mid-fidelity prototype was tested with three users during the final day of the hackathon. Sessions were moderated and task-based, with participants asked to open the app, respond to the assistant, begin a task, and complete the flow. Observations focused on hesitation, confusion, and unprompted navigation attempts as indicators of whether the model was reducing or adding cognitive load.<br><br>Three consistent observations emerged. No participant attempted to navigate away or looked for a list view. No participant asked what to do next; the conversational structure resolved the question before it could arise. All three described the experience as calmer than other tools they had used, and two used the word "simple" without prompting.<br><br>Testing produced three traceable iterations. Button size and contrast were increased after two participants paused before tapping the primary action. Introductory text was removed after two participants read it before interacting, slowing the transition into the task. Focus state hierarchy was strengthened after one participant's attention drifted from the active task name.`,
          },
        ],
      },
      {
        id: 'outcomes',
        label: '05 / Outcomes',
        title: '05 / Outcomes — What This Demonstrates',
        overview: ['Design Decisions', 'Skills Demonstrated', 'Reflection'],
        content: [
          {
            heading: 'Key Design Decisions',
            placeholder: `<table class="cs-decision-table"><thead><tr><th>Problem</th><th>Decision</th><th>Outcome</th></tr></thead><tbody><tr><td>Task lists cause overwhelm</td><td>Removed lists entirely</td><td>Reduced cognitive load at the point of opening</td></tr><tr><td>Limited time</td><td>Built mid fidelity, not high fidelity</td><td>Interaction model communicated and tested within sprint</td></tr><tr><td>Too many potential features</td><td>Designed one core flow</td><td>Clearer demonstration of the concept's value</td></tr></tbody></table>`,
            body: `<strong>Removing task lists entirely</strong> was the most consequential structural decision. Research had identified the list view as the primary point of initiation failure: not because lists are poorly designed, but because they require self-direction before a task begins. Removing the list was not a simplification. It was a reframing of what the tool was for.<br><br><strong>Limiting the prototype to a single core flow</strong> applied the same logic as the product principle: one task at a time, one decision at a time. A prototype that demonstrates one thing clearly is more useful as a communication artefact than one that covers multiple flows at partial fidelity.`,
          },
          {
            heading: 'Skills Demonstrated',
            body: `This project demonstrates end-to-end UX capability within a constrained sprint, applying the same research-to-design rigour that a longer project requires, compressed into three days:`,
            list: [
              'Structuring interviews around behaviour and context rather than product evaluation, producing generative insight rather than evaluative feedback',
              'Integrating lived experience as a research input that accelerated pattern recognition without replacing the empirical data from interviews',
              'Translating qualitative findings into design principles with explicit traceability to specific research observations',
              'Making a structural interaction model decision grounded in cognitive accessibility requirements from research rather than in convention',
              'Using interactive lo-fi prototyping to test structural hypotheses before committing to a visual direction',
              'Applying cognitive accessibility heuristics as active design constraints throughout the build rather than as a retrospective review',
              'Conducting moderated testing and translating session observations into specific, traceable design iterations under time pressure',
            ],
          },
          {
            heading: 'Reflection',
            body: `The most consequential decision in this project was choosing to remove the task list entirely rather than refine it. This was not an idea that emerged from brainstorming. It emerged from synthesis. Across interviews, participants did not describe the list as a flawed solution that needed improvement. They described it as a source of friction, avoidance, and cognitive load. For people with ADHD, the list was not supporting task initiation. It was actively contributing to the difficulty of starting. Recognising this required reframing the problem. The issue was not how to design a better list. It was whether a list belonged in the product at all.<br><br>The conversational model that replaced it was a structural response to that insight. Conversation has a property that static interfaces do not. It moves forward with the user. It reduces the need to choose, scan, and prioritise before action can begin. This directly addressed what research identified as missing. The solution was not a creative leap. It was a direct outcome of taking synthesis seriously and allowing the findings to challenge the conventions of the category.<br><br>An important piece of feedback from the hackathon judges surfaced a constraint that had not yet been fully explored. Because the experience resembled guided support, questions were raised about whether users might interpret the system as offering psychological guidance rather than task facilitation. This introduced considerations around duty of care, scope of responsibility, and how clearly the product would need to distinguish itself from therapeutic or clinical tools if developed further. This feedback did not invalidate the concept. It clarified the responsibilities attached to it. If taken beyond prototype stage, the product would require careful framing, explicit boundaries in its language, and likely collaboration with clinical professionals to ensure it supported users without implying medical or psychological authority.<br><br>The primary limitation of the project was the absence of longitudinal testing. Three moderated sessions during a hackathon were sufficient to validate that users understood the interface and experienced it as less cognitively demanding than traditional tools. They were not sufficient to determine whether this approach would support sustained behaviour change over time. For a product designed to help people start tasks consistently, that is the more meaningful measure of success and the most important next step for the concept to be properly evaluated.`,
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
