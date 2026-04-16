export const bio = {
  hero: 'Senior software engineer with 4+ years building and owning production web applications. Interested in how AI is reshaping what software can do.',
  about: [
    "I'm a software engineer with 4+ years of experience building and owning production web applications. For the last few years I've had sole ownership of an internal cloud operations platform used daily by engineering and support teams — handling everything from feature development to architectural decisions to security hardening.",
    "I'm deeply interested in how AI is reshaping what software can do, and I'm always looking for ways to bring that into the tools I build. I like tackling problems that have clear, measurable impact — whether that's replacing a painful manual process, eliminating a performance bottleneck, or leading a modernization effort that was long overdue. Ready to pick up whatever it takes to solve the problem at hand.",
    "Outside of work, I'm usually at the gym lifting, building Gunpla, or deep in a video game.",
  ],
}

export const skills = ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Quasar', 'Vuex / Pinia', 'REST APIs', 'Git', 
    'Python', 'Java', 'C# / .NET', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Next.js']


export interface ExperienceItem {
  dateRange: string
  company: string
  title: string
  bullets: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    dateRange: 'Jan 2024 — Apr 2026',
    company: 'Motorola Solutions',
    title: 'Senior Software Engineer',
    bullets: [
      'Served as the sole engineer on the internal support platform for 2+ years, owning all feature development, architectural decisions, and technical direction for a tool used daily by ~25 support and engineering staff.',
      'Brought in by a separate team to deliver occupancy sensor views in their React/Next.js device management portal, surfacing multi-zone telemetry data ahead of a coordinated firmware release.',
      'Designed and shipped a domain migration tool that consolidated a complex, multi-step manual process into a single automated operation with dry-run pre-checks, phase-selectable execution, and per-phase logging, successfully transitioning 2000+ customer records to a new domain architecture',
      'Built a CSV ingestion framework across three data pipelines, users, devices, and sites, with dry-run previews, error tracking, and exportable logs, directly unblocking the onboarding of enterprise-scale customers and replacing a manual entry process that couldn\'t support that volume',
      'Proposed and led a codebase-wide dependency modernization effort, resolving compatibility issues and addressing security vulnerabilities flagged in audits, including a full Vuex to Pinia migration across 19 store modules',
      'Led full-stack API naming standardization across 250+ endpoints and 15+ microservices, resolving request convention inconsistencies to improve codebase maintainability and scalability',
    ],
    tech: ['Vue.js', 'TypeScript', 'Pinia', 'React', 'Next.js', 'REST APIs'],
  },
  {
    dateRange: 'May 2023 — Jan 2024',
    company: 'Motorola Solutions',
    title: 'Full Stack Developer',
    bullets: [
      'Replaced per-device API status calls with a batched request strategy, eliminating sequential per-device load times, making status retrieval near-instantaneous, and resolving a data accuracy issue in a single architectural change.',
      'Identified and resolved a sequential device command execution bottleneck, replacing it with parallel processing and achieving a 16x performance improvement across multi-device operations.',
      'Built user management tooling covering sign-in history, temporary password provisioning, and user-domain assignment search, giving support the visibility and control they previously lacked to diagnose account issues and resolve login failures without engineering intervention.',
      'Overhauled domain and device search in direct response to support-identified failures, adding MAC address lookup, fixing substring matching, and handling special characters, eliminating a class of recurring lookup failures that had blocked support staff from locating specific records.',
      'Implemented MFA enforcement, configurable session timeouts, and activity tracking into the authentication layer using AWS Cognito, in direct response to security concerns flagged by the principal engineer, bringing the platform up to production security standards',
    ],
    tech: ['Vue.js', 'TypeScript', 'AWS Cognito', 'REST APIs'],
  },
  {
    dateRange: 'Jun 2022 — May 2023',
    company: 'IPVideo',
    title: 'Software Engineer Intern',
    bullets: [
      'Owned and delivered a Vue 2 → Vue 3 and Quasar migration across a multi-module production codebase within two months, preserving full functionality and completing work originally scoped for a team.',
      'Rapidly onboarded to Vue and an Agile workflow, contributing UI components and REST API integrations before taking full ownership of the codebase migration.',
    ],
    tech: ['Vue.js', 'Quasar', 'REST APIs'],
  },
  {
    dateRange: 'Jul 2020',
    company: 'JP Morgan Chase & Co.',
    title: 'Fintech Focus Fellow',
    bullets: [
      'Built full-stack web applications using Flask, MongoDB, Python, HTML, and CSS; developed and iterated on MVPs culminating in a restaurant discovery app powered by the Yelp API.',
      'Used Git for version control and collaborative development across a team of fellows.',
    ],
    tech: ['Python', 'Flask', 'MongoDB', 'Bootstrap'],
  },
]


export interface ProjectItem {
  title: string
  description: string
  tech: string[]
  github: string
}

export const projects: ProjectItem[] = [
  {
    title: 'jonathanmin.com',
    description:
      "A personal portfolio site rebuilt from scratch. You're looking at it right now! Rebuilt from a static HTML/CSS template into a modern web app to showcase current tooling. Features type safety, utility-first styling, and scroll-driven animations.",
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com/min-j/min-j.github.io',
  },
  {
    title: 'PulseCheck',
    description:
      'Built a real-time market sentiment dashboard using a full RAG pipeline with dual-source news ingestion, vector embeddings, cosine similarity retrieval, and streaming LLM analysis to surface live Bullish/Bearish/Neutral readings for the three major US indices.',
    tech: ['Next.js', 'React', 'OpenAI API', 'Vercel AI SDK', 'Supabase pgVector', 'Finnhub API', 'Alpaca Markets API'],
    github: 'https://github.com/min-j/pulsecheck',
  },
  {
    title: 'Sheet2App',
    description:
      'A Google AppSheet clone. Architected the entire frontend from scratch — including a role-based permission system driven by a live Google Sheets membership sheet, full CRUD record operations against the Sheets API, dynamic table/detail views, session storage caching, and RESTful backend routes with integration test coverage.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Material UI', 'Google Sheets API', 'Jest/Supertest'],
    github: 'https://github.com/tamimrahman22/Sheet2App',
  },
  {
    title: 'Top 5 Lister',
    description:
      'A social platform where users can create, like, dislike, and comment on user-generated top 5 lists. Built with the MERN stack; implemented JWT-based user authentication and designed the UI using the Material UI component library.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Material UI', 'JWT'],
    github: 'https://github.com/min-j/top5_lister_final',
  },
  {
    title: 'Satiate',
    description:
      'A Tinder-esque web app that helps users find a new restaurant. Explore by cuisine, swipe left to browse, swipe right to land on a restaurant\'s Yelp page. Powered by the Yelp Fusion API.',
    tech: ['Python', 'Flask', 'Yelp API'],
    github: 'https://github.com/min-j/restaurant-finder',
  },
  {
    title: 'Nuclei',
    description:
      'When Bronx Science shifted to Talos for course selection, it was plagued with shortcomings. Nuclei is an attempt at overcoming those drawbacks and building a better experience.',
    tech: ['JavaScript', 'HTML/CSS'],
    github: 'https://github.com/min-j/CourseSelection',
  },
]

export const education = [
  {
    period: 'Aug 2019 — May 2023',
    school: 'Stony Brook University',
    degree: 'B.S. Computer Science',
    detail: 'GPA: 3.59 / 4.0',
  },
  {
    period: 'Sep 2015 — Jun 2019',
    school: 'Bronx High School of Science',
    degree: "Regent's Diploma",
    detail: 'GPA: 3.77 / 4.0',
  },
]
