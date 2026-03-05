import { heroTypewriterPhrases, faqs } from './index';

export const homepageSectionsData = {
  hero: {
    staticText:
      'Empowering  Businesses  with  Smart  Software  Solutions  Designed to ',
    phrases: heroTypewriterPhrases,
    subtitle:
      'Simplify your workflow and boost productivity with InnoX, the all-in-one platform for modern business automation.',
    primaryCtaText: 'Book a Demo',
    primaryCtaLink: '/auth/sign-up',
  },

  modulesCarousel: {
    slides: [
      {
        title: 'Powerful Integrated Modules',
        buttonText: 'Explore Modules',
      },
      {
        title: 'Smart Dashboards',
        buttonText: 'See Dashboards',
      },
      {
        title: 'Automation Everywhere',
        buttonText: 'Automate Workflows',
      },
    ],
  },

  businessSolutions: {
    heading: 'Business Solutions With',
    highlightedText: 'InnoX',
    solutions: [
      {
        _key: 's1',
        emoji: '🧑‍💼',
        title: 'Human Resource',
        description:
          'Human Resource Management, Recruitment, Time & Attendance, Employee Self-Service',
      },
      {
        _key: 's2',
        emoji: '💲',
        title: 'Finance & Accounting',
        description:
          'Financials & Accounting, Payroll Management, Budget Management, Procurement, Billing System',
      },
      {
        _key: 's3',
        emoji: '📊',
        title: 'Administration',
        description:
          'Task Management, Project Management, Activity Reports, Document Management (gDocs)',
      },
      {
        _key: 's4',
        emoji: '📝',
        title: 'Legal Compliance',
        description:
          'Legal Management, Compliance Tracking, Case Management, Document Archiving, Laws & Judgement Catalogues',
      },
      {
        _key: 's5',
        emoji: '⚡',
        title: 'Power and Utilities',
        description:
          'Power Apps, eLog Book, Telemetry (iTel), Planned Outage Management, PoSAM',
      },
      {
        _key: 's6',
        emoji: '🛡️',
        title: 'Safety and Risk',
        description:
          'Safety Management, Accident Reporting, PPE Requests, WASACO Audits, Safety Group Management',
      },
    ],
  },

  streamline: {
    heading: 'Streamline Your Business Operations With',
    highlightedText: 'InnoX',
    buttonText: 'Get Started',
    buttonLink: '/contact',
    images: [], // add image assets via Sanity Studio if you want them to show
  },

  managePeople: {
    mainTitle: 'Empower Your Workforce',
    mainDescription:
      'Automate HR processes, track attendance, and support employees with self-service tools. Build a productive and engaged team with smart HR management.',
    content: [
      {
        _key: 'mp1',
        title: 'Recruitment',
        description:
          'Streamline hiring and onboarding with automated workflows. Post job openings, track applicants, and manage interview schedules from a single dashboard.',
      },
      {
        _key: 'mp2',
        title: 'Attendance Tracking',
        description:
          'Monitor employee hours and absences with real-time data. Automate attendance logs, flag irregularities, and integrate with payroll for accurate compensation.',
      },
      {
        _key: 'mp3',
        title: 'Self-Service Portal',
        description:
          'Enable employees to manage their own data, request leave, and update personal information. Empower staff with easy access to HR resources.',
      },
    ],
  },

  hrBanner: {
    imageSrc: '/assets/images/pages/modules-bg.png',
    heading: 'Smarter HR Starts Here',
    subheading:
      'Automate recruitment, payroll and performance tracking, all in one place.',
    linkText: 'See it in Action',
    href: '/contact',
    direction: 'right',
  },

  manageAssets: {
    mainTitle: 'Manage Assets and Operations Efficiently.',
    mainDescription:
      'InnoX simplifies how organizations handle critical operational workflows.',
    content: [
      {
        _key: 'ma1',
        title: 'Fleet Tracking',
        description:
          'Monitor vehicle locations and usage in real time. Track maintenance schedules, fuel consumption, and driver assignments to optimize fleet performance and reduce costs.',
        imageSrc: '/assets/images/dashboards/hrm.png',
      },
      {
        _key: 'ma2',
        title: 'Maintenance Scheduling',
        description:
          'Automate service reminders and repairs for all assets. Schedule preventive maintenance, track service history, and minimize downtime with timely interventions.',
        imageSrc: '/assets/images/pages/modules-bg.png',
      },
    ],
  },

  assetsBanner: {
    imageSrc: '/assets/images/pages/modules-bg.png',
    heading: 'Track, Maintain, and Optimize Your Assets',
    subheading: 'Centralized Asset Oversight for modern enterprises',
    linkText: 'Learn More',
    href: '/modules/assets-management',
    direction: 'left',
  },

  documentManager: {
    mainTitle: 'All Your Documents, Organized',
    mainDescription:
      'Upload, search, and share documents with advanced permissions and audit trails. Keep your files safe and accessible for every team and project.',
    content: [
      {
        _key: 'dm1',
        title: 'gDocs Integration',
        description:
          'Connect and sync with Google Docs for seamless document collaboration.',
      },
      {
        _key: 'dm2',
        title: 'Archiving Tools',
        description:
          'Archive old files securely to maintain a clean and organized document repository.',
      },
    ],
    position: 'left',
  },

  legalBanner: {
    imageSrc: '/assets/images/pages/modules-bg.png',
    heading: 'Legal Management',
    subheading:
      'Digitize and centralize all legal matters — from case tracking and documentation to client, judge, and task management.',
    linkText: 'Explore Legal Tools',
    href: '/modules/legal-management',
    direction: 'right',
  },

  financeAccounting: {
    mainTitle: 'Finance Made Simple',
    mainDescription:
      'Automate payroll, manage expenses, and generate invoices with ease. Keep your financials accurate and up-to-date for every team and project.',
    content: [
      {
        _key: 'fa1',
        title: 'Payroll Automation',
        description:
          'Process salaries and deductions automatically. Integrate payroll with attendance and leave data for accurate, timely payments.',
      },
      {
        _key: 'fa2',
        title: 'Expense Management',
        description: 'Monitor spending and flag overruns instantly.',
      },
    ],
    position: 'right',
  },

  financeBanner: {
    imageSrc: '/assets/images/pages/modules-bg.png',
    heading: 'Financials & Accounting',
    subheading:
      'Automate payroll, billing, and accounting for every department.',
    linkText: 'Explore Finance',
    href: '/modules/financials-and-accounting',
    direction: 'left',
  },

  powerAssets: {
    mainTitle: 'Power & Utility Operations',
    mainDescription:
      'InnoX equips energy teams with tools for reliability, and infrastructure visibility',
    content: [
      {
        _key: 'pa1',
        title: 'Live Load Monitoring',
        description:
          'Monitor real-time load data across all feeders and substations, with dynamic charts and alerts for out-of-range conditions.',
      },
    ],
    position: 'left',
  },

  powerBanner: {
    imageSrc: '/assets/images/pages/modules-bg.png',
    heading: 'Power Apps',
    subheading:
      'Manage energy distribution, faults, switch controls, and outage logs',
    linkText: 'Explore Power Apps',
    href: '/modules/power-apps',
    direction: 'right',
  },

  businessAdministration: {
    mainTitle: 'Streamlined Business Administration',
    mainDescription:
      'InnoX connects departments, documents, and tasks to make operations smoother',
    content: [
      {
        _key: 'ba1',
        title: 'Onboarding and Recruitment',
        description:
          'Manage job postings, applications, and onboarding tasks with ease.',
        imageSrc: '/assets/images/dashboards/hrm.png',
      },
    ],
    position: 'right',
  },

  operationsBanner: {
    imageSrc: '/assets/images/pages/modules-bg.png',
    heading: 'Operations & Field Management',
    subheading: 'Tools for maintenance, outages and field operations',
    linkText: 'Learn More',
    href: '/contact',
    direction: 'left',
  },

  quoteBox: {
    quote: 'One platform for finance, HR, operations and legal.',
    author: 'InnoX Team',
    company: 'Innorik',
  },

  visualizedIllustration: {
    imageSrc: '/assets/images/illustration.png',
    heading: 'Designed For People',
    subheading: 'Human-first design combined with enterprise-grade features',
  },

  movingModules: {
    title: 'Modules',
    modulesGroupA: [],
    modulesGroupB: [],
  },

  onePlatformBanner: {
    backgroundImage: '/assets/images/pages/modules-bg.png',
    heading: 'One Platform, Many Solutions',
    linkText: 'Discover Platform',
    href: '/about',
  },

  faqSection: {
    heading: 'Frequently Asked Questions',
    faqs,
  },

  dividerContent: {
    text: 'Interested in learning more? Schedule a demo today',
    link: '/contact',
    showIcon: true,
  },

  testimonial: {
    author: 'Sample Customer',
    content:
      'InnoX transformed the way our teams collaborate — saving time and improving compliance.',
    rating: 5,
  },
};

export default homepageSectionsData;
