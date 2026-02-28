import type { Translations } from './types';

export const en: Translations = {
  lang: 'en',
  altLang: 'pl',
  altPath: '/pl/',
  meta: {
    title: 'Paweł Przytuła - Full Stack Developer',
    description: 'Full Stack Developer specializing in distributed systems, .NET/Blazor, Angular, and Flutter. Based in Poznan, Poland.',
  },
  nav: {
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    projects: 'Projects',
    approach: 'Approach',
    education: 'Education',
    toggleMenu: 'Toggle menu',
  },
  hero: {
    greeting: "Hello, I'm",
    name: 'Paweł Przytuła',
    role: 'Full Stack Developer',
    bio: 'Specialising in <strong>distributed systems</strong>, <strong>.NET / Blazor</strong>, <strong>ASP.NET Core MVC</strong>, <strong>Angular</strong>, and <strong>Flutter</strong>. Based in <strong>Poznan, Poland</strong>.',
    scrollDown: 'scroll down',
  },
  sections: {
    stack: { label: 'Tech Stack', title: 'What I work with' },
    experience: { label: 'Experience', title: 'Work history' },
    projects: { label: 'Projects', title: 'Selected work' },
    approach: { label: 'How I Work', title: 'Development process' },
    education: { label: 'Education', title: 'Academic background' },
  },
  approach: {
    withinSprint: 'Within the sprint',
    beyondSprint: 'Beyond the sprint',
    phases: [
      { name: 'Planning', items: ['Scope & acceptance criteria', 'Story points (Fibonacci)', 'Priority assignment'] },
      { name: 'Development', items: ['Implementation', 'Blocker flagged at daily', 'Task-switch until resolved', 'Return & finish'] },
      { name: 'Quality', items: ['Manual & smoke tests', 'Unit / integration tests'] },
      { name: 'Delivery', items: ['PR + CI verification', 'Code review', 'Version bump & changelog', 'Deploy / mobile release'] },
    ],
    items: [
      { title: 'Ticket & log analysis', desc: 'When a report comes in, I trace it through logs and system behavior to find the actual root cause before writing a single line of code.' },
      { title: 'Problem classification', desc: 'I distinguish between bugs, missing features, and improvement opportunities - and describe each clearly so the team can make an informed decision about priority.' },
      { title: 'Backlog contribution', desc: 'Anything worth addressing gets written up and added to the backlog for the next sprint discussion - not left as a mental note or a stray comment in code.' },
    ],
  },
  education: {
    degree: 'B.Eng. Computer Science',
    school: 'Wyzsza Szkola Bankowa w Poznaniu (WSB University)',
    period: '2018 - 2022',
    beyondWork: 'Beyond work',
    interests: [
      'Open source - contributions to Blazor School & production tools',
      'Learning piano',
    ],
  },
  projects: {
    criteriaLabel: 'Acceptance criteria:',
    viewOnGithub: 'View on GitHub',
  },
  footer: 'Built with',
  techStack: [
    {
      category: 'Primary',
      items: [
        { name: 'Flutter', icon: 'logos:flutter' },
        { name: 'Dart', icon: 'logos:dart' },
        { name: 'C#', icon: 'devicon:csharp' },
        { name: '.NET Core', icon: 'devicon:dotnetcore' },
        { name: 'Blazor Server', icon: 'devicon:blazor' },
      ],
    },
    {
      category: 'Web & Mobile',
      items: [
        { name: 'Angular', icon: 'logos:angular-icon' },
        { name: 'ASP.NET MVC', icon: 'devicon:dot-net' },
        { name: 'MAUI', icon: 'devicon:dotnetcore' },
        { name: 'TypeScript', icon: 'logos:typescript-icon' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MSSQL', icon: 'devicon:microsoftsqlserver' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MySQL', icon: 'logos:mysql-icon' },
        { name: 'MongoDB', icon: 'logos:mongodb-icon' },
        { name: 'EF Core', icon: 'devicon:dot-net' },
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Azure DevOps', icon: 'devicon:azuredevops' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'BitBucket', icon: 'logos:bitbucket' },
        { name: 'Jira', icon: 'logos:jira' },
        { name: 'Confluence', icon: 'logos:confluence' },
      ],
    },
    {
      category: 'Reporting & UI',
      items: [
        { name: 'DevExpress', icon: 'simple-icons:devexpress' },
        { name: 'Grafana', icon: 'logos:grafana' },
        { name: 'Power BI', icon: 'powerbi' },
        { name: 'SAP Web Intelligence', icon: 'logos:sap' },
      ],
    },
    {
      category: 'Low-Code',
      items: [
        { name: 'PowerApps', icon: 'powerapps' },
        { name: 'Power Automate', icon: 'powerautomate' },
      ],
    },
  ],
  projectsList: [
    {
      title: 'Flutter Field Operations App',
      type: 'Commercial',
      stack: ['Flutter', 'Dart', 'Blazor Server', 'ASP.NET Core'],
      description: 'Mobile application for field operatives working in distributed teams. Implemented fault reporting with multi-step navigation, sticker-based workflows, ticket scanning with recent scan history, attachment handling, and PDF interaction validation. Served Android and Flutter clients from a shared backend.',
      highlights: ['Fault report flow', 'Scan history', 'PDF validation', 'Multi-platform'],
      link: null,
    },
    {
      title: 'Real-time GPS Tracking Dashboard',
      type: 'Commercial',
      stack: ['Blazor Server', 'ASP.NET Core', 'EF Core', 'PostgreSQL'],
      description: 'Real-time vehicle tracking and route management dashboard integrating with GPS hardware over TCP. Handled driver and vehicle data, live position updates, and EF Core migrations for evolving data models. Designed for high-frequency event ingestion from embedded devices.',
      highlights: ['Live GPS positions', 'Driver/vehicle data', 'EF Core migrations', 'TCP integration'],
      link: null,
    },
    {
      title: 'MDM Load Testing Simulator',
      type: 'Commercial',
      stack: ['.NET', 'C#', 'PostgreSQL', 'Kubernetes', 'Grafana', 'Prometheus'],
      description: 'Built a simulator emulating 15,000 concurrent Android MDM agents to validate platform stability before production rollout. Each virtual device runs a configurable lifecycle: enrollment, periodic command polling with jitter, heartbeat reporting, command execution, and real APK downloads to generate authentic network load. Designed four test scenarios - enrollment burst, 4-hour baseline load, mass APK distribution (50 MB x 15k devices), and command burst - monitored in real time via Grafana dashboards fed by Prometheus and postgres-exporter.',
      highlights: ['15k virtual devices', 'APK distribution load', '4 test scenarios', 'Grafana monitoring'],
      criteria: ['p50 < 500 ms', 'CPU < 80%', 'DB queries < 1 s', 'zero deadlocks'],
      link: null,
    },
    {
      title: 'Multi-platform POS & Reporting Backend',
      type: 'Commercial',
      stack: ['ASP.NET Core', 'Android', 'Flutter', 'DevExpress'],
      description: 'Ticketing and workforce management backend serving Android and Flutter clients simultaneously. Added disciplinary notice and discrepancy report modules, improved date-range queries for shift autocomplete, enhanced insertion methods to return generated IDs, and extended ExplanationReport handling with structured logging.',
      highlights: ['Android + Flutter clients', 'Disciplinary notices', 'Shift autocomplete', 'DevExpress Reports'],
      link: null,
    },
    {
      title: 'CopyCost',
      type: 'Personal',
      stack: ['.NET 7', 'MAUI', 'Blazor', 'MudBlazor', 'EF Core'],
      description: 'Personal Windows desktop tool for tracking and summarising copywriter payments. Supports multiple customers and text categories with per-1000-character pricing, monthly payment summaries, and visual charts. Built as a MAUI Blazor hybrid app with local EF Core persistence and MudBlazor UI.',
      highlights: ['Customer & category mgmt', 'Monthly summaries', 'Payment charts', 'MAUI Blazor hybrid'],
      link: 'https://github.com/pawelel/CopyCost',
    },
    {
      title: 'Facility Asset Management System',
      type: 'Personal',
      stack: ['ASP.NET Core', 'Blazor Server', 'EF Core', 'MediatR', 'MudBlazor', 'MSSQL'],
      description: 'Full-stack system for managing industrial facility assets, devices, areas, and maintenance communicates. Modelled a rich domain spanning assets, categories, situations, coordinates, and inspection parameters. REST API backend with Blazor Server UI, MediatR for command handling, temporal tables for full audit history, and Serilog structured logging.',
      highlights: ['Rich domain model', 'MediatR CQRS', 'Temporal tables', 'Blazor Server'],
      link: 'https://github.com/pawelel/Sc3Hosted',
    },
    {
      title: 'MCP Server for Outline Wiki',
      type: 'Open Source',
      stack: ['TypeScript', 'Node.js', 'MCP'],
      description: 'Open-source Model Context Protocol server enabling AI assistants to interact with Outline documentation services. Implemented robust HTTP retry logic with Retry-After header handling, rate-limit backoff, URL sanitization, API key security, and a comprehensive test suite covering edge cases.',
      highlights: ['Rate limit handling', 'Retry-After support', 'URL sanitization', 'Test coverage'],
      link: 'https://github.com/pawelel/mcp-outline',
    },
  ],
  experienceList: [
    {
      role: 'Software Developer',
      company: 'Antumo P.S.A. (rebranded from M2T)',
      period: '2024 - present',
      items: [
        'Developing a distributed railway operations system (ASP.NET Core MVC, Blazor Server, Flutter)',
        'Scaled backend to handle 30,000+ new events per day through DB and query optimization',
        'Built advanced reports and views using DevExpress components',
        'Created custom MVC tag helpers and integrated custom CSS utilities',
        'Integrated Teltonika GPS devices and implemented real-time train tracking in Blazor Server',
        'Developed performance testing tools and GPS vehicle simulators',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'M2T Prosta Spolka Akcyjna',
      period: '2023',
      items: [
        'Developed web and mobile apps using ASP.NET Zero',
        'Optimised document workflows and audit tooling',
      ],
    },
    {
      role: 'Business Consultant',
      company: 'ARP Ideas sp. z o.o.',
      period: '2022',
      items: [
        'Built PowerApps and Power Automate applications',
        'Analysed and documented User Stories',
      ],
    },
    {
      role: 'Associate Consultant / Senior IT/OT Specialist',
      company: 'HCL Poland',
      period: '2016 - 2022',
      items: [
        'Developed Blazor applications for internal tooling',
        'Automated SAP reporting workflows',
        'Provided IT/OT system support for Volkswagen production lines',
      ],
    },
  ],
};
