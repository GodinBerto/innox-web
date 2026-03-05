import { ModuleName } from './modules.data';

export const modulesPageContentData = {
  'power-apps': {
    hero: {
      slug: 'power-apps',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      title: 'Power Apps',
      description:
        'Manage energy distribution, faults, switch controls, and outage logs from a single power dashboard.',
      buttonText: 'Explore Power Apps',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'zap', content: 'Live Load Monitoring' },
      { iconName: 'plug', content: 'Switchgear Control' },
      { iconName: 'shield', content: 'Fault Tracking & Escalation' },
      { iconName: 'clock', content: 'Outage Logging & Timeline' },
      { iconName: 'map', content: 'Feeder Mapping' },
      { iconName: 'bar-chart', content: 'Power Analytics Dashboard' },
    ],
    mainCenter: {
      header: {
        title: 'One Platform for Power Reliability',
        description:
          'Digitize how your engineers manage grids, record outages, track switch positions, and respond to faults. Empower your team with real-time analytics, automated workflows, and instant notifications for every event.',
      },
      contents: [
        {
          title: 'Digital Switching Logs',
          description:
            'Record and review switching operations with full timestamps, including operator notes and automated status updates for every switch event. Ensure compliance and traceability for all grid activities, with instant access to historical logs and audit trails.',
        },
        {
          title: 'Escalation Chain Integration',
          description:
            'Route faults and urgent events through escalation paths instantly, notifying the right teams and stakeholders at every step. Automate escalation rules and track resolution progress with detailed status updates and communication logs.',
        },
        {
          title: 'Live Load Monitoring',
          description:
            'Monitor real-time load data across all feeders and substations, with dynamic charts and alerts for out-of-range conditions. Analyze historical trends and optimize grid performance with actionable insights.',
        },
        {
          title: 'Switchgear Control',
          description:
            'Remotely operate and monitor switchgear devices, with secure access controls and automated safety checks. Schedule switching operations and receive instant feedback on execution status and system health.',
        },
        {
          title: 'Outage Logging & Timeline',
          description:
            'Log outages with detailed event timelines, including cause analysis, affected areas, and restoration steps. Generate reports for regulatory compliance and share updates with internal and external stakeholders.',
        },
        {
          title: 'Feeder Mapping',
          description:
            'Visualize feeder routes and asset locations on interactive maps, with live status indicators and maintenance history. Plan upgrades and maintenance activities with full geographic and operational context.',
        },
      ],
    },
  },
  'legal-management': {
    hero: {
      slug: 'legal-management',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      title: 'Legal Management',
      description:
        'Digitize and centralize all legal matters — from case tracking and documentation to client, judge, and task management.',
      buttonText: 'Explore Legal Tools',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'gavel', content: 'Case Scheduling & Filing' },
      { iconName: 'folder', content: 'Legal Document Control' },
      { iconName: 'gavel', content: 'Judge & Courtroom Tracking' },
      { iconName: 'clipboard-check', content: 'Task Assignment for Counsels' },
      { iconName: 'book-open', content: 'Laws & Judgement Catalogues' },
      { iconName: 'wallet', content: 'Financials & Billing for Cases' },
    ],
    mainCenter: {
      header: {
        title: 'Organize Every Legal Process',
        description: `Streamline every aspect of your legal operations with automated workflows for litigation, defense, counsel, and administration. Centralize case tracking, document management, and client communications. Empower your legal team to collaborate efficiently, meet deadlines, and maintain compliance with robust reporting and audit trails.

Automate document filing, track case progress, and manage client relationships with ease. Use analytics and audit trails to ensure transparency and accountability in every legal matter.`,
      },
      contents: [
        {
          title: 'Case Management Engine',
          description:
            'Track proceedings, filings, motions, and deadlines in real time. Manage case documents, assign tasks to counsels, and monitor progress from initiation to resolution. Ensure every legal action is documented and accessible for review and compliance.',
        },
        {
          title: 'Legal Research & Reference',
          description:
            'Search law books, eBooks, and previous judgements with ease. Access a comprehensive library of legal resources, cross-reference statutes, and maintain up-to-date legal knowledge for every case.',
        },
      ],
    },
  },
  'budget-management': {
    hero: {
      slug: 'budget-management',
      title: 'Budget Management',
      description:
        'Manage budgets, expenses, and financial planning with full visibility.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Budget Tools',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'pie-chart', content: 'Budget Planning' },
      { iconName: 'wallet', content: 'Expense Tracking' },
      { iconName: 'bar-chart', content: 'Financial Analytics' },
    ],
    mainCenter: {
      header: {
        title: 'Full Control Over Your Budgets',
        description: `Plan, track, and optimize your budgets with real-time analytics and reporting. Ensure every department stays on target and every expense is accounted for.

With automated workflows, detailed reporting, and predictive analytics, you can proactively manage resources, prevent overspending, and make informed financial decisions for every project and department.`,
      },
      contents: [
        {
          title: 'Budget Planning',
          description:
            'Create and manage department budgets easily. Set spending limits, allocate resources, and track budget changes over time. Collaborate with stakeholders to ensure financial goals are met and budgets remain flexible to changing needs.',
        },
        {
          title: 'Expense Tracking',
          description:
            'Monitor spending and flag overruns instantly. Categorize expenses, attach receipts, and generate alerts for unusual activity. Maintain transparency and accountability for every transaction.',
        },
        {
          title: 'Approval Workflows',
          description:
            'Automate budget approvals and notifications. Route requests to the right approvers, track decision timelines, and ensure compliance with organizational policies.',
        },
        {
          title: 'Reporting Tools',
          description:
            'Generate detailed budget and expense reports. Visualize spending trends, compare actuals to forecasts, and share insights with finance teams and leadership.',
        },
        {
          title: 'Forecasting',
          description:
            'Predict future spending and adjust plans proactively. Use historical data and predictive analytics to anticipate budget needs and prevent shortfalls.',
        },
        {
          title: 'Audit Trail',
          description:
            'Maintain a secure record of all budget changes. Track who made updates, when, and why, ensuring full accountability and compliance.',
        },
      ],
    },
  },
  'assets-management': {
    hero: {
      slug: 'assets-management',
      title: 'Assets Management',
      description:
        'Track, maintain, and optimize your assets from one dashboard.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Assets',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'truck', content: 'Transport Management' },
      { iconName: 'server', content: 'IT Asset Tracking' },
      { iconName: 'building', content: 'Real Estate Management' },
    ],
    mainCenter: {
      header: {
        title: 'Centralized Asset Oversight',
        description: `Manage vehicles, IT equipment, and properties with automated workflows and live status. Keep your assets productive and secure with preventive maintenance and audit logs.

Gain full visibility into asset lifecycles, schedule maintenance, and ensure compliance with regulatory standards. Streamline asset assignments and optimize utilization across your organization.`,
      },
      contents: [
        {
          title: 'Fleet Tracking',
          description:
            'Monitor vehicle locations and usage in real time. Track maintenance schedules, fuel consumption, and driver assignments to optimize fleet performance and reduce costs.',
        },
        {
          title: 'Maintenance Scheduling',
          description:
            'Automate service reminders and repairs for all assets. Schedule preventive maintenance, track service history, and minimize downtime with timely interventions.',
        },
        {
          title: 'Asset Assignment',
          description:
            'Assign assets to users or departments with full visibility. Track asset transfers, usage patterns, and ensure resources are allocated efficiently.',
        },
        {
          title: 'Depreciation Analytics',
          description:
            'Track asset value and replacement cycles. Analyze depreciation trends, plan for replacements, and optimize asset lifecycles for cost savings.',
        },
        {
          title: 'Document Storage',
          description:
            'Store certificates and service records securely. Maintain digital records for compliance, audits, and easy retrieval during asset reviews.',
        },
        {
          title: 'Audit Trail',
          description:
            'Log every asset change and movement. Ensure traceability for asset assignments, disposals, and maintenance actions.',
        },
      ],
    },
  },
  'performance-management': {
    hero: {
      slug: 'performance-management',
      title: 'Performance Management',
      description:
        'Track KPIs, reviews, and employee performance in real time.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Performance',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'activity', content: 'KPI Tracking' },
      { iconName: 'star', content: 'Performance Reviews' },
      { iconName: 'bar-chart', content: 'Analytics & Reporting' },
    ],
    mainCenter: {
      header: {
        title: 'Optimize Team Performance',
        description: `Set goals, monitor progress, and reward achievements with automated review cycles and analytics. Empower managers and employees to reach their full potential.

Leverage data-driven insights to identify strengths and areas for improvement, foster a culture of continuous growth, and align individual performance with organizational objectives.`,
      },
      contents: [
        {
          title: 'KPI Dashboard',
          description:
            'Visualize key metrics and trends for individuals and teams. Track progress toward goals, identify top performers, and highlight areas needing improvement.',
        },
        {
          title: 'Review Cycles',
          description:
            'Automate performance reviews and feedback. Schedule regular evaluations, collect feedback from peers and managers, and document outcomes for future reference.',
        },
        {
          title: 'Goal Setting',
          description:
            'Set and track individual and team goals. Align objectives with organizational priorities, monitor progress, and celebrate achievements.',
        },
        {
          title: 'Recognition Tools',
          description:
            'Reward top performers and motivate teams. Implement recognition programs, track awards, and foster a culture of appreciation.',
        },
        {
          title: 'Analytics',
          description:
            'Generate reports for HR and leadership. Analyze performance data, identify trends, and support strategic decision-making.',
        },
        {
          title: 'Improvement Plans',
          description:
            'Create actionable plans for growth. Address performance gaps, set milestones, and provide resources for continuous development.',
        },
      ],
    },
  },
  'document-management': {
    hero: {
      slug: 'document-management',
      title: 'Document Management',
      description:
        'Digitize, organize, and secure all your documents in one place.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Documents',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'file-text', content: 'gDocs Integration' },
      { iconName: 'archive', content: 'Document Archiving' },
      { iconName: 'folder', content: 'Secure Storage' },
    ],
    mainCenter: {
      header: {
        title: 'All Your Documents, Organized',
        description: `Upload, search, and share documents with advanced permissions and audit trails. Keep your files safe and accessible for every team and project.

Automate document workflows, ensure version control, and maintain compliance with secure storage and access management. Collaborate seamlessly while protecting sensitive information.`,
      },
      contents: [
        {
          title: 'gDocs Integration',
          description:
            'Connect and sync with Google Docs for seamless document collaboration. Import, export, and share files securely across teams and projects.',
        },
        {
          title: 'Archiving Tools',
          description:
            'Archive old files securely to maintain a clean and organized document repository. Set retention policies and automate archiving for compliance.',
        },
        {
          title: 'Search & Tagging',
          description:
            'Find documents fast with smart tags and advanced search filters. Organize files by project, department, or custom categories for easy access.',
        },
        {
          title: 'Permission Controls',
          description:
            'Set access levels for users and teams. Manage who can view, edit, or share documents to protect sensitive information.',
        },
        {
          title: 'Audit Trail',
          description:
            'Track every change and access event. Maintain a complete history of document edits, shares, and downloads for security and compliance.',
        },
        {
          title: 'Bulk Uploads',
          description:
            'Import multiple files at once to save time and streamline onboarding of new projects or departments.',
        },
      ],
    },
  },
  'hr-management': {
    hero: {
      slug: 'hr-management',
      title: 'HR Management',
      description:
        'Manage recruitment, attendance, and employee records easily.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore HR Tools',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'user-plus', content: 'Recruitment' },
      { iconName: 'calendar-clock', content: 'Time & Attendance' },
      { iconName: 'user-check', content: 'Employee Self-Service' },
    ],
    mainCenter: {
      header: {
        title: 'Empower Your Workforce',
        description: `Automate HR processes, track attendance, and support employees with self-service tools. Build a productive and engaged team with smart HR management.

Streamline recruitment, onboarding, and employee lifecycle management. Use analytics to improve retention, monitor workforce trends, and foster a positive workplace culture.`,
      },
      contents: [
        {
          title: 'Recruitment',
          description:
            'Streamline hiring and onboarding with automated workflows. Post job openings, track applicants, and manage interview schedules from a single dashboard.',
        },
        {
          title: 'Attendance Tracking',
          description:
            'Monitor employee hours and absences with real-time data. Automate attendance logs, flag irregularities, and integrate with payroll for accurate compensation.',
        },
        {
          title: 'Self-Service Portal',
          description:
            'Enable employees to manage their own data, request leave, and update personal information. Empower staff with easy access to HR resources.',
        },
        {
          title: 'Leave Management',
          description:
            'Automate leave requests and approvals. Track leave balances, generate reports, and ensure compliance with company policies.',
        },
        {
          title: 'HR Analytics',
          description:
            'Gain insights into workforce trends, turnover rates, and employee engagement. Use data to inform HR strategies and improve retention.',
        },
        {
          title: 'Document Vault',
          description:
            'Store contracts and HR files securely. Maintain digital records for audits, compliance, and easy retrieval.',
        },
      ],
    },
  },
  'financials-and-accounting': {
    hero: {
      slug: 'financials-and-accounting',
      title: 'Financials & Accounting',
      description:
        'Automate payroll, billing, and accounting for every department.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Finance',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'banknote', content: 'Accounting' },
      { iconName: 'wallet', content: 'Payroll Management' },
      { iconName: 'receipt', content: 'Billing System' },
    ],
    mainCenter: {
      header: {
        title: 'Finance Made Simple',
        description: `Automate payroll, manage expenses, and generate invoices with ease. Keep your financials accurate and up-to-date for every team and project.

Integrate accounting processes, ensure tax compliance, and maintain a secure audit trail for all transactions. Empower finance teams to make strategic decisions with real-time data.`,
      },
      contents: [
        {
          title: 'Payroll Automation',
          description:
            'Process salaries and deductions automatically. Integrate payroll with attendance and leave data for accurate, timely payments.',
        },
        {
          title: 'Expense Management',
          description:
            'Track and approve spending requests. Categorize expenses, attach receipts, and monitor budget impact in real time.',
        },
        {
          title: 'Invoice Generation',
          description:
            'Create and send invoices instantly. Automate billing cycles, track payments, and manage client accounts efficiently.',
        },
        {
          title: 'Accounting Reports',
          description:
            'Generate financial statements and analytics. Visualize income, expenses, and profitability for informed decision-making.',
        },
        {
          title: 'Tax Compliance',
          description:
            'Ensure all filings and payments are on time. Automate tax calculations, generate reports, and stay up-to-date with regulations.',
        },
        {
          title: 'Audit Trail',
          description:
            'Maintain a secure record of all transactions. Track changes, approvals, and ensure full accountability for every financial action.',
        },
      ],
    },
  },
  'project-management': {
    hero: {
      slug: 'project-management',
      title: 'Project Management',
      description:
        'Plan, execute, and track projects with collaborative tools.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Projects',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'clipboard-list', content: 'Project Planning' },
      { iconName: 'check-square', content: 'Task Management' },
      { iconName: 'file-bar-chart', content: 'Activity Reports' },
    ],
    mainCenter: {
      header: {
        title: 'Collaborate and Deliver',
        description: `Assign tasks, monitor progress, and share updates with your team. Deliver projects on time and on budget with powerful management tools.

Coordinate resources, track milestones, and communicate effectively to ensure successful project delivery. Use analytics and reporting to keep stakeholders informed and projects on track.`,
      },
      contents: [
        {
          title: 'Task Assignment',
          description:
            'Delegate tasks and set deadlines for every project. Assign responsibilities, monitor progress, and ensure tasks are completed on time.',
        },
        {
          title: 'Progress Tracking',
          description:
            'Monitor milestones and completion rates. Visualize project timelines, identify bottlenecks, and keep stakeholders informed.',
        },
        {
          title: 'Collaboration Tools',
          description:
            'Share files and communicate in real time. Enable team discussions, document sharing, and centralized updates for seamless collaboration.',
        },
        {
          title: 'Reporting',
          description:
            'Generate project status and activity reports. Track deliverables, budget usage, and resource allocation for full transparency.',
        },
        {
          title: 'Resource Management',
          description:
            'Allocate people and assets efficiently. Optimize resource usage, prevent overload, and ensure every project has what it needs to succeed.',
        },
        {
          title: 'Document Vault',
          description:
            'Store project files and deliverables securely. Maintain version control and easy access for all team members.',
        },
      ],
    },
  },
  'payroll-management': {
    hero: {
      slug: 'payroll-management',
      title: 'Payroll Management',
      description:
        'Automate salary processing and payslip generation for your workforce.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Payroll',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'wallet', content: 'Salary Processing' },
      { iconName: 'file-text', content: 'Payslips' },
      { iconName: 'banknote', content: 'Tax Management' },
    ],
    mainCenter: {
      header: {
        title: 'Payroll Made Effortless',
        description: `Automate salary calculations, deductions, and payslip delivery. Ensure compliance and accuracy for every payroll cycle.

Integrate leave and attendance data, manage statutory deductions, and provide employees with secure access to payroll records. Maintain transparency and streamline payroll approvals.`,
      },
      contents: [
        {
          title: 'Salary Automation',
          description:
            'Calculate and process salaries automatically. Integrate payroll with HR data for accurate, timely payments and compliance.',
        },
        {
          title: 'Payslip Generation',
          description:
            'Create and distribute payslips instantly. Automate payslip delivery, ensure confidentiality, and provide employees with easy access to records.',
        },
        {
          title: 'Tax Management',
          description:
            'Handle tax deductions and filings. Automate statutory calculations, generate tax reports, and ensure regulatory compliance.',
        },
        {
          title: 'Leave Integration',
          description:
            'Sync leave data with payroll for accurate salary calculations. Automate leave approvals and ensure proper compensation.',
        },
        {
          title: 'Compliance Tools',
          description:
            'Stay up-to-date with regulations. Monitor changes in labor laws, automate compliance checks, and generate necessary documentation.',
        },
        {
          title: 'Audit Trail',
          description:
            'Track every payroll change and approval. Maintain a secure record for audits, reviews, and employee inquiries.',
        },
      ],
    },
  },
  'software-management': {
    hero: {
      slug: 'software-management',
      title: 'Software Management',
      description:
        'Track licenses, renewals, and software usage across your organization.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Software',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'code', content: 'License Tracking' },
      { iconName: 'timer', content: 'Renewal Alerts' },
      { iconName: 'bar-chart', content: 'Usage Reports' },
    ],
    mainCenter: {
      header: {
        title: 'Software Oversight Simplified',
        description: `Monitor software inventory, allocate licenses, and ensure compliance. Optimize costs and prevent unauthorized usage with smart tracking tools.

Automate renewal alerts, track usage patterns, and generate reports for IT and finance teams. Ensure software assets are utilized efficiently and remain compliant with licensing agreements.`,
      },
      contents: [
        {
          title: 'Inventory Register',
          description:
            'List all software assets and licenses. Track purchase dates, renewal periods, and usage statistics for every application.',
        },
        {
          title: 'Renewal Alerts',
          description:
            'Get notified before licenses expire. Automate renewal reminders, prevent service interruptions, and manage renewals efficiently.',
        },
        {
          title: 'Usage Analytics',
          description:
            'Track software usage and compliance. Monitor user activity, identify underutilized licenses, and optimize software spending.',
        },
        {
          title: 'Cost Tracking',
          description:
            'Monitor spending on software subscriptions. Analyze costs, compare vendors, and identify opportunities for savings.',
        },
        {
          title: 'Access Logs',
          description:
            'Review who is using which software. Track user access, permissions, and ensure compliance with licensing agreements.',
        },
        {
          title: 'Audit Trail',
          description:
            'Log all license changes and renewals. Maintain a complete history for audits, compliance, and IT reviews.',
        },
      ],
    },
  },
  purchasing: {
    hero: {
      slug: 'purchasing',
      title: 'Purchasing',
      description:
        'Manage procurement, suppliers, and purchase orders efficiently.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Purchasing',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'shopping-cart', content: 'Procurement' },
      { iconName: 'users', content: 'Supplier Management' },
      { iconName: 'file-text', content: 'Purchase Orders' },
    ],
    mainCenter: {
      header: {
        title: 'Procurement Made Easy',
        description: `Automate purchase requests, manage suppliers, and track orders from request to delivery. Keep your procurement process transparent and efficient.

Centralize supplier management, streamline contract storage, and monitor procurement KPIs. Use automated workflows to reduce delays and improve cost control.`,
      },
      contents: [
        {
          title: 'Purchase Requests',
          description:
            'Submit and approve purchase requests with automated workflows. Track request status, attach supporting documents, and ensure timely approvals.',
        },
        {
          title: 'Supplier Directory',
          description:
            'Manage supplier contacts and ratings. Maintain a centralized database, track performance, and streamline supplier communications.',
        },
        {
          title: 'Order Tracking',
          description:
            'Monitor order status and delivery dates. Receive notifications for delays, track shipments, and ensure timely fulfillment.',
        },
        {
          title: 'Invoice Management',
          description:
            'Process and store supplier invoices securely. Automate invoice matching, approvals, and payment tracking.',
        },
        {
          title: 'Contract Storage',
          description:
            'Keep all contracts organized and accessible. Set renewal reminders, manage contract versions, and ensure compliance with terms.',
        },
        {
          title: 'Audit Trail',
          description:
            'Track every procurement action and approval. Maintain a complete history for audits, reviews, and supplier evaluations.',
        },
      ],
    },
  },
  'incidence-management': {
    hero: {
      slug: 'incidence-management',
      title: 'Incidence Management',
      description:
        'Report, track, and resolve incidents with full transparency.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Incidents',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'alert-circle', content: 'Accident Reporting' },
      { iconName: 'file-text', content: 'Incident Logs' },
      { iconName: 'shield', content: 'Risk Management' },
    ],
    mainCenter: {
      header: {
        title: 'Incident Response Simplified',
        description: `Log, track, and resolve incidents quickly. Ensure safety and compliance with automated reporting and follow-up tools.

Assign corrective actions, monitor compliance, and generate detailed incident reports. Improve workplace safety and reduce risk with proactive incident management.`,
      },
      contents: [
        {
          title: 'Accident Reporting',
          description:
            'Submit and review accident reports with detailed documentation. Attach photos, witness statements, and track follow-up actions for every incident.',
        },
        {
          title: 'Incident Logs',
          description:
            'Maintain a record of all incidents. Categorize by type, severity, and resolution status for comprehensive safety oversight.',
        },
        {
          title: 'Risk Assessment',
          description:
            'Evaluate and mitigate risks proactively. Conduct regular assessments, document findings, and implement corrective measures.',
        },
        {
          title: 'Follow-Up Actions',
          description:
            'Assign and track corrective actions for every incident. Monitor progress, set deadlines, and ensure accountability for safety improvements.',
        },
        {
          title: 'Compliance Checks',
          description:
            'Ensure all incidents are properly documented and meet regulatory requirements. Automate compliance reporting and maintain readiness for audits.',
        },
        {
          title: 'Audit Trail',
          description:
            'Track every incident and resolution step. Maintain a secure, searchable history for safety reviews and compliance checks.',
        },
      ],
    },
  },
  'productivity-apps': {
    hero: {
      slug: 'productivity-apps',
      title: 'Productivity Apps',
      description:
        'Boost team productivity with self-service and time tracking tools.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Productivity',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'user-check', content: 'Employee Self-Service' },
      { iconName: 'calendar-clock', content: 'Time Tracking' },
      { iconName: 'activity', content: 'Productivity Analytics' },
    ],
    mainCenter: {
      header: {
        title: 'Empower Your Team',
        description: `Enable employees to manage their own data, track time, and boost productivity. Use analytics to identify trends and improve performance.

Foster a culture of accountability and continuous improvement. Provide tools for goal setting, collaboration, and performance tracking to maximize team output.`,
      },
      contents: [
        {
          title: 'Self-Service Portal',
          description:
            'Employees manage their own records, request time off, and update personal details. Empower staff to take control of their work-life balance and HR interactions.',
        },
        {
          title: 'Time Tracking',
          description:
            'Monitor work hours and attendance with automated tools. Generate reports, flag anomalies, and integrate with payroll for seamless compensation.',
        },
        {
          title: 'Productivity Analytics',
          description:
            'Analyze team output and efficiency. Identify trends, set benchmarks, and implement strategies for continuous improvement.',
        },
        {
          title: 'Goal Setting',
          description:
            'Set and track personal and team goals. Align objectives with company priorities, monitor progress, and celebrate achievements.',
        },
        {
          title: 'Collaboration Tools',
          description:
            'Share updates and communicate easily. Enable team discussions, document sharing, and centralized notifications for improved teamwork.',
        },
        {
          title: 'Audit Trail',
          description:
            'Track changes and performance over time. Maintain a complete history of productivity metrics and improvements.',
        },
      ],
    },
  },
  'task-management': {
    hero: {
      slug: 'task-management',
      title: 'Task Management',
      description:
        'Organize, assign, and track tasks for every team and project.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Tasks',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'check-square', content: 'Task List' },
      { iconName: 'user-cog', content: 'Assignments' },
      { iconName: 'bar-chart', content: 'Progress Tracking' },
    ],
    mainCenter: {
      header: {
        title: 'Stay Organized and On Track',
        description: `Assign tasks, monitor progress, and collaborate with your team. Use analytics to keep projects moving and ensure nothing falls through the cracks.

Automate task assignments, track deadlines, and generate reports to keep everyone aligned. Improve team communication and ensure accountability for every project.`,
      },
      contents: [
        {
          title: 'Task Assignment',
          description:
            'Delegate tasks and set priorities for every team and project. Assign responsibilities, monitor progress, and ensure deadlines are met.',
        },
        {
          title: 'Progress Tracking',
          description:
            'Monitor completion rates and deadlines. Visualize task timelines, identify bottlenecks, and keep everyone informed of status.',
        },
        {
          title: 'Collaboration Tools',
          description:
            'Share updates and communicate easily. Enable team discussions, document sharing, and centralized notifications for improved teamwork.',
        },
        {
          title: 'Reporting',
          description:
            'Generate task status and activity reports. Track deliverables, resource usage, and progress for full transparency.',
        },
        {
          title: 'Resource Management',
          description:
            'Allocate people and assets efficiently. Optimize resource usage, prevent overload, and ensure every project has what it needs to succeed.',
        },
        {
          title: 'Audit Trail',
          description:
            'Track every task change and update. Maintain a secure, searchable history for reviews and accountability.',
        },
      ],
    },
  },
  'safety-management': {
    hero: {
      slug: 'safety-management',
      title: 'Safety Management',
      description:
        'Protect your workforce and assets with safety tools and reporting.',
      backgroundImageUrl: '/assets/images/pages/modules-bg.png',
      buttonText: 'Explore Safety',
      buttonLink: '/contact',
      dashboards: [
        '/assets/images/dashboards/hrm.png',
        '/assets/images/pages/modules-bg.png',
        '/assets/images/dashboards/hrm.png',
      ],
    },
    keyFeatures: [
      { iconName: 'shield', content: 'Safety Group Management' },
      { iconName: 'hard-hat', content: 'PPE Requests' },
      { iconName: 'alert-circle', content: 'Accident Reporting' },
    ],
    mainCenter: {
      header: {
        title: 'Safety First, Always',
        description: `Report incidents, request PPE, and manage safety groups with automated workflows. Keep your workplace safe and compliant with real-time tracking and analytics.

Monitor training records, conduct compliance checks, and maintain a secure audit trail for all safety actions. Empower teams to proactively address risks and improve safety culture.`,
      },
      contents: [
        {
          title: 'Incident Reporting',
          description:
            'Log and review safety incidents with detailed documentation. Attach photos, witness statements, and track follow-up actions for every event.',
        },
        {
          title: 'PPE Requests',
          description:
            'Request and track protective equipment for all staff. Monitor inventory, approve requests, and ensure timely distribution.',
        },
        {
          title: 'Safety Group Management',
          description:
            'Organize teams for safety oversight and training. Assign safety leaders, schedule meetings, and track group activities.',
        },
        {
          title: 'Audit Trail',
          description:
            'Track every safety action and report. Maintain a secure, searchable history for compliance and safety reviews.',
        },
        {
          title: 'Compliance Checks',
          description:
            'Ensure all safety standards are met. Automate compliance reporting, conduct regular audits, and maintain readiness for inspections.',
        },
        {
          title: 'Training Records',
          description:
            'Store and review safety training history for all employees. Track certifications, schedule renewals, and ensure compliance with training requirements.',
        },
      ],
    },
  },
} as const satisfies Record<ModuleName, _IModulePageContent>;
