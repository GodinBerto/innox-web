export const modulesContentData = {
  'power-apps': {
    'elog-book': {
      hero: {
        slug: 'elog-book',
        backgroundImageUrl: '/images/power/elog-hero.jpg',
        title: 'eLog Book (Station Readings)',
        description:
          'Digitize shift handovers, operation logs, and event reports with timestamped e-logs for utilities and plants.',
        buttonText: 'View Logs',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'notebook', content: 'Shift Logs & Handover Notes' },
          { iconUrl: 'calendar', content: 'Daily Activity Recording' },
          { iconUrl: 'shield', content: 'Incident Logging' },
          { iconUrl: 'users', content: 'Team Communication' },
          { iconUrl: 'history', content: 'Audit Trail & Edits' },
          { iconUrl: 'file-text', content: 'Printable Reports & Exports' },
        ],
        dashboardStat: {
          value: '24/7',
          description: 'Real-time log availability',
        },
      },
      lifecycle: {
        title: 'eLog Book Lifecycle',
        description:
          'Covers the process of logging, reviewing, and archiving operational events and shift handovers.',
        steps: [
          {
            title: 'Log Entry',
            description: 'Record operational events and shift details.',
            iconName: 'edit',
          },
          {
            title: 'Review & Approval',
            description: 'Supervisors review and approve logs.',
            iconName: 'eye',
          },
          {
            title: 'Notification',
            description: 'Notify relevant teams of critical events.',
            iconName: 'bell',
          },
          {
            title: 'Archival',
            description: 'Archive logs for compliance and reference.',
            iconName: 'archive',
          },
          {
            title: 'Retrieval',
            description: 'Retrieve logs for audits or investigations.',
            iconName: 'search',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Never Miss a Shift Detail',
          description:
            'Whether it’s faults, outages, updates or notices — record and retrieve everything with clarity and compliance.',
        },
        mainDashboardImageUrl: '/images/power/elog-dashboard.png',
        sideSections: [
          {
            title: 'Event Timestamps & Attachments',
            description:
              'Attach files, photos, or voice notes to each log entry.',
            imageUrl: '/images/power/elog-attachments.png',
          },
          {
            title: 'Supervisor Sign-Off',
            description:
              'Logs can be digitally reviewed and approved before closing each shift.',
            imageUrl: '/images/power/supervisor-signoff.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/power/elog-banner.jpg',
        title: 'Goodbye Paper Logs',
        description: 'Secure, reliable, and searchable — your logs, evolved.',
        butttontext: 'Start Logging',
        buttonLink: '/signup',
      },
    },
    telemetry: {
      hero: {
        slug: 'telemetry',
        backgroundImageUrl: '/images/power/telemetry-hero.jpg',
        title: 'Telemetry (iTel)',
        description:
          'Real-time data capture from substations, feeders, and field equipment to central dashboards for analysis and alerts.',
        buttonText: 'View Telemetry',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'radio', content: 'IoT Device Integration' },
          { iconUrl: 'wifi', content: 'Remote Data Streaming' },
          { iconUrl: 'bar-chart', content: 'Real-Time Dashboards' },
          {
            iconUrl: 'alert-triangle',
            content: 'Fault Alerts & Notifications',
          },
          { iconUrl: 'map', content: 'Asset Mapping & Status' },
          { iconUrl: 'download', content: 'Data Export & Storage' },
        ],
        dashboardStat: {
          value: '99.9%',
          description: 'Uptime of telemetry connections',
        },
      },
      lifecycle: {
        title: 'Telemetry Lifecycle',
        description:
          'Manages the collection, transmission, and analysis of real-time operational data.',
        steps: [
          {
            title: 'Data Collection',
            description: 'Capture data from field equipment.',
            iconName: 'database',
          },
          {
            title: 'Transmission',
            description: 'Transmit data to central dashboards.',
            iconName: 'send',
          },
          {
            title: 'Analysis',
            description: 'Analyze data for trends and anomalies.',
            iconName: 'bar-chart-2',
          },
          {
            title: 'Alerting',
            description: 'Trigger alerts for critical events.',
            iconName: 'alert-triangle',
          },
          {
            title: 'Reporting',
            description: 'Generate reports for decision-making.',
            iconName: 'file-text',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Eyes on the Field — Always',
          description:
            'Gain visibility into every operational site, monitor status live, and trigger alerts for out-of-bound conditions instantly.',
        },
        mainDashboardImageUrl: '/images/power/telemetry-dashboard.png',
        sideSections: [
          {
            title: 'Live Streaming Engine',
            description:
              'Monitor voltage, current, status, and more — updated every second.',
            imageUrl: '/images/power/live-data.png',
          },
          {
            title: 'Device Health Check',
            description:
              'Track telemetry unit health and receive warnings when offline or unresponsive.',
            imageUrl: '/images/power/device-health.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/power/telemetry-banner.jpg',
        title: 'Real-Time, Real Smart',
        description:
          'Let data guide your grid and asset operations. Always current, never delayed.',
        butttontext: 'Explore iTel',
        buttonLink: '/demo',
      },
    },

    'outage-management': {
      hero: {
        slug: 'outage-management',
        backgroundImageUrl: '/images/power/outage-hero.jpg',
        title: 'Planned Outage Management',
        description:
          'Coordinate, communicate, and document scheduled outages with internal teams and public notifications.',
        buttonText: 'Schedule Outage',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'calendar-x', content: 'Outage Scheduling Tools' },
          { iconUrl: 'megaphone', content: 'Public & Internal Notifications' },
          { iconUrl: 'edit', content: 'Permit Application & Approvals' },
          { iconUrl: 'check-square', content: 'Pre-Execution Checklists' },
          { iconUrl: 'folder', content: 'Outage Reports & Evidence Logs' },
          {
            iconUrl: 'gantt-chart',
            content: 'Execution Timeline & Follow-ups',
          },
        ],
        dashboardStat: {
          value: '4x',
          description: 'Faster coordination of scheduled outages',
        },
      },
      lifecycle: {
        title: 'Planned Outage Lifecycle',
        description:
          'Coordinates the planning, communication, execution, and review of scheduled outages.',
        steps: [
          {
            title: 'Outage Planning',
            description: 'Schedule and plan outage events.',
            iconName: 'calendar',
          },
          {
            title: 'Notification',
            description: 'Notify stakeholders and the public.',
            iconName: 'mail-open',
          },
          {
            title: 'Execution',
            description: 'Carry out planned outage procedures.',
            iconName: 'play-circle',
          },
          {
            title: 'Restoration',
            description: 'Restore services and systems.',
            iconName: 'refresh-ccw',
          },
          {
            title: 'Post-Outage Review',
            description: 'Review and document lessons learned.',
            iconName: 'file-text',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Keep Everyone in the Loop',
          description:
            'Handle permits, update the public, and complete technical outage tasks with verified logs and execution steps.',
        },
        mainDashboardImageUrl: '/images/power/outage-dashboard.png',
        sideSections: [
          {
            title: 'Permit & Approval Flow',
            description:
              'Request and approve outages through engineering and safety checkpoints.',
            imageUrl: '/images/power/permit-flow.png',
          },
          {
            title: 'Stakeholder Alerts',
            description:
              'Instant notifications to teams, communities, and key customers before and after events.',
            imageUrl: '/images/power/stakeholder-alerts.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/power/outage-banner.jpg',
        title: 'Outages With Order',
        description:
          'Eliminate chaos in power interruption events — plan, execute, and recover with clarity.',
        butttontext: 'Request Demo',
        buttonLink: '/demo',
      },
    },
    'transmission-service-bills': {
      hero: {
        slug: 'transmission-service-bills',
        backgroundImageUrl: '/images/power/posam-hero.jpg',
        title: 'Transmission Service Bills',
        description:
          'Capture, review, and process transmission billing data seamlessly with automated uploads and approvals.',
        buttonText: 'Manage Billing',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'file-text', content: 'Billing Data Capture' },
          { iconUrl: 'upload', content: 'Excel Data Upload' },
          { iconUrl: 'zap', content: 'Automated Data Input' },
          { iconUrl: 'users', content: 'Multi-Level Review Workflow' },
          { iconUrl: 'check-circle', content: 'Approval & Submission' },
          {
            iconUrl: 'bar-chart',
            content: 'Billing Analytics & Status Tracking',
          },
        ],
        dashboardStat: {
          value: '100%',
          description: 'Accuracy in billing data processing',
        },
      },
      lifecycle: {
        title: 'Transmission Billing Lifecycle',
        description:
          'Handle the end-to-end process of transmission service billing, from meter readings to final approvals.',
        steps: [
          {
            title: 'Data Capture',
            description: 'Record meter readings manually or via telemetry.',
            iconName: 'edit',
          },
          {
            title: 'Data Upload',
            description: 'Upload Excel or CSV files for bulk entries.',
            iconName: 'upload',
          },
          {
            title: 'Validation',
            description: 'Verify data consistency and correctness.',
            iconName: 'shield-check',
          },
          {
            title: 'Review & Approval',
            description: 'Route bills through review levels for approval.',
            iconName: 'check-circle',
          },
          {
            title: 'Reporting',
            description: 'Generate and share billing reports and analytics.',
            iconName: 'file-text',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Seamless Billing Oversight',
          description:
            'Automate the capture, validation, and review of transmission billing data, reducing errors and cycle times.',
        },
        mainDashboardImageUrl: '/images/power/posam-dashboard.png',
        sideSections: [
          {
            title: 'Excel Integration',
            description:
              'Easily import data from spreadsheets for faster bulk billing processes.',
            imageUrl: '/images/power/posam-templates.png',
          },
          {
            title: 'Review Dashboard',
            description:
              'Track status, highlight anomalies, and approve bills with color-coded indicators.',
            imageUrl: '/images/power/posam-steps.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/power/posam-banner.jpg',
        title: 'Accurate Billing, Every Time',
        description:
          'Automate data entry, streamline reviews, and ensure billing accuracy.',
        butttontext: 'Try Billing Module',
        buttonLink: '/demo',
      },
    },
  },
  'assets-management': {
    'transport-management': {
      hero: {
        slug: 'transport-management',
        backgroundImageUrl: '/images/assets/transport-hero.jpg',
        title: 'Transport Management',
        description:
          'Manage vehicle requests, assignments, maintenance, fuel tracking, and trip logs for your entire fleet.',
        buttonText: 'Manage Fleet',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'truck', content: 'Fleet Directory' },
          { iconUrl: 'calendar-check', content: 'Trip Request & Approval' },
          { iconUrl: 'fuel', content: 'Fuel Logs & Consumption' },
          { iconUrl: 'wrench', content: 'Maintenance & Servicing' },
          { iconUrl: 'map-pin', content: 'Vehicle Location & Status' },
          { iconUrl: 'file', content: 'Driver Logs & Trip Sheets' },
        ],
        dashboardStat: {
          value: '300+',
          description: 'Fleet trips managed monthly',
        },
      },
      lifecycle: {
        title: 'Transport Management Lifecycle',
        description:
          'Manages the process from vehicle request to assignment, usage, maintenance, and reporting.',
        steps: [
          {
            title: 'Request Submission',
            description: 'Submit vehicle or trip requests.',
            iconName: 'file-plus',
          },
          {
            title: 'Assignment',
            description: 'Assign vehicles and drivers to requests.',
            iconName: 'users',
          },
          {
            title: 'Usage & Tracking',
            description: 'Track vehicle usage, location, and fuel.',
            iconName: 'map-pin',
          },
          {
            title: 'Maintenance',
            description: 'Schedule and perform vehicle maintenance.',
            iconName: 'wrench',
          },
          {
            title: 'Reporting',
            description: 'Generate trip and cost reports.',
            iconName: 'bar-chart-2',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Total Control Over Your Fleet',
          description:
            'Digitize transport operations with request workflows, live vehicle status, cost tracking, and history logs.',
        },
        mainDashboardImageUrl: '/images/assets/transport-dashboard.png',
        sideSections: [
          {
            title: 'Driver Assignment Engine',
            description:
              'Match available drivers to vehicles and approve trips in one click.',
            imageUrl: '/images/assets/driver-assign.png',
          },
          {
            title: 'Fuel & Cost Monitoring',
            description:
              'Track expenses by vehicle, trip, or department with full fuel history.',
            imageUrl: '/images/assets/fuel-tracker.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/assets/transport-banner.jpg',
        title: 'Fleet at Your Fingertips',
        description:
          'Whether you manage 3 or 300 vehicles, keep everything running smoothly from one dashboard.',
        butttontext: 'Try Fleet Tools',
        buttonLink: '/demo',
      },
    },

    'it-asset-management': {
      hero: {
        slug: 'it-asset-management',
        backgroundImageUrl: '/images/assets/it-hero.jpg',
        title: 'IT Asset Management',
        description:
          'Track the acquisition, assignment, servicing, and depreciation of your organization\'s IT hardware and accessories.',
        buttonText: 'Track IT Assets',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'server', content: 'Asset Register & Tagging' },
          { iconUrl: 'user-check', content: 'User Assignment Logs' },
          { iconUrl: 'calendar', content: 'Service & Warranty Alerts' },
          { iconUrl: 'bar-chart', content: 'Depreciation Schedules' },
          { iconUrl: 'audio-lines', content: 'Repair & Replacement Tracking' },
          { iconUrl: 'folder', content: 'Document & Certificate Storage' },
        ],
        dashboardStat: {
          value: '95%',
          description: 'Asset assignment visibility',
        },
      },
      lifecycle: {
        title: 'IT Asset Management Lifecycle',
        description:
          'Covers the process from asset acquisition to assignment, maintenance, and disposal.',
        steps: [
          {
            title: 'Acquisition',
            description: 'Procure and register new IT assets.',
            iconName: 'file-plus',
          },
          {
            title: 'Assignment',
            description: 'Assign assets to users or departments.',
            iconName: 'user-check',
          },
          {
            title: 'Maintenance & Support',
            description: 'Track servicing, repairs, and warranties.',
            iconName: 'wrench',
          },
          {
            title: 'Depreciation & Tracking',
            description: 'Monitor asset value and location.',
            iconName: 'bar-chart-2',
          },
          {
            title: 'Disposal & Replacement',
            description: 'Retire or replace assets as needed.',
            iconName: 'refresh-ccw',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Your Hardware, Tracked & Accounted For',
          description:
            'Never lose track of a laptop, monitor, or switch again — know where your assets are and how they\'re performing.',
        },
        mainDashboardImageUrl: '/images/assets/it-dashboard.png',
        sideSections: [
          {
            title: 'Warranty & Lifecycle Alerts',
            description:
              'Stay ahead of support expiry, replacements, and upgrade planning.',
            imageUrl: '/images/assets/lifecycle.png',
          },
          {
            title: 'User Handover Logs',
            description:
              'Auto-log handovers when employees join, leave, or switch departments.',
            imageUrl: '/images/assets/handover.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/assets/it-banner.jpg',
        title: 'Protect Your Tech Investment',
        description:
          'Organize IT equipment with confidence — reduce loss, increase accountability.',
        butttontext: 'Get Started',
        buttonLink: '/signup',
      },
    },

    'power-systems-asset-management': {
      hero: {
        slug: 'power-systems-asset-management',
        backgroundImageUrl: '/images/assets/software-hero.jpg',
        title: 'Power Systems Asset Management',
        description:
          'Track, maintain, and optimize power transmission and distribution assets, from towers and substations to meters and transformers.',
        buttonText: 'Manage Power Assets',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'activity', content: 'Real-Time Asset Monitoring' },
          { iconUrl: 'map-pin', content: 'GPS Mapping for Towers & Lines' },
          {
            iconUrl: 'clipboard-check',
            content: 'Maintenance Schedules & Alerts',
          },
          { iconUrl: 'package', content: 'Inventory & Spare Parts Management' },
          { iconUrl: 'bar-chart', content: 'Asset Performance Analytics' },
          { iconUrl: 'image', content: 'Asset Images & Documentation' },
        ],
        dashboardStat: {
          value: '99%',
          description: 'Improved asset visibility and uptime',
        },
      },
      lifecycle: {
        title: 'Power Asset Lifecycle',
        description:
          'Manage power system assets from acquisition and installation to maintenance, audits, and decommissioning.',
        steps: [
          {
            title: 'Asset Registration',
            description: 'Capture details for towers, substations, and lines.',
            iconName: 'file-plus',
          },
          {
            title: 'Tracking & Mapping',
            description: 'Monitor locations and status via integrated maps.',
            iconName: 'map',
          },
          {
            title: 'Preventive Maintenance',
            description: 'Schedule patrols and transformer maintenance.',
            iconName: 'clipboard-check',
          },
          {
            title: 'Performance Analysis',
            description: 'Review asset health, failures, and repair history.',
            iconName: 'bar-chart-2',
          },
          {
            title: 'Decommissioning',
            description: 'Retire or relocate assets with complete records.',
            iconName: 'archive',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Complete Power Asset Oversight',
          description:
            'Centralize all power system assets with tools for maintenance scheduling, performance reporting, and geographic tracking.',
        },
        mainDashboardImageUrl: '/images/assets/software-dashboard.png',
        sideSections: [
          {
            title: 'Maintenance & Alerts',
            description:
              'Receive automated notifications for transformer checks, tower patrols, and line inspections.',
            imageUrl: '/images/assets/license-timeline.png',
          },
          {
            title: 'Geographic Insights',
            description:
              'View and manage assets on Google Maps or OpenStreetMap with GPS-based precision.',
            imageUrl: '/images/assets/software-compliance.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/assets/software-banner.jpg',
        title: 'Smart Power Infrastructure Management',
        description:
          'Extend asset life, reduce downtime, and manage critical power infrastructure efficiently.',
        butttontext: 'Start Tracking',
        buttonLink: '/signup',
      },
    },
    'real-estate-management': {
      hero: {
        slug: 'real-estate-management',
        backgroundImageUrl: '/images/assets/real-estate-hero.jpg',
        title: 'Real Estate Management',
        description:
          'Digitally manage your organization’s buildings, leases, utility bills, maintenance, and occupancy records.',
        buttonText: 'View Properties',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'building', content: 'Property Register' },
          { iconUrl: 'file', content: 'Lease Document Tracking' },
          { iconUrl: 'calendar', content: 'Renewal Alerts' },
          { iconUrl: 'users', content: 'Occupancy Logs' },
          { iconUrl: 'scroll-text', content: 'Facility Maintenance Logs' },
          { iconUrl: 'bar-chart', content: 'Cost Allocation Reports' },
        ],
        dashboardStat: {
          value: '50+',
          description: 'Properties under management',
        },
      },
      lifecycle: {
        title: 'Real Estate Management Lifecycle',
        description:
          'Covers the process from property acquisition to lease, maintenance, and reporting.',
        steps: [
          {
            title: 'Acquisition',
            description: 'Register and document new properties.',
            iconName: 'file-plus',
          },
          {
            title: 'Leasing & Occupancy',
            description: 'Manage leases and occupancy records.',
            iconName: 'users',
          },
          {
            title: 'Maintenance',
            description: 'Schedule and track property maintenance.',
            iconName: 'wrench',
          },
          {
            title: 'Billing & Utilities',
            description: 'Track utility bills and payments.',
            iconName: 'wallet',
          },
          {
            title: 'Reporting',
            description: 'Generate property and cost reports.',
            iconName: 'bar-chart-2',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Manage Properties with Precision',
          description:
            'Track lease renewals, tenant info, utility bills, and building maintenance all in one place.',
        },
        mainDashboardImageUrl: '/images/assets/real-estate-dashboard.png',
        sideSections: [
          {
            title: 'Occupancy Tracker',
            description:
              'See which spaces are vacant, assigned, or due for renewal — by building or floor.',
            imageUrl: '/images/assets/occupancy.png',
          },
          {
            title: 'Maintenance Follow-Up',
            description:
              'Assign and track repairs, inspections, and monthly maintenance for each location.',
            imageUrl: '/images/assets/facility-maintenance.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/assets/real-estate-banner.jpg',
        title: 'Property Management, Simplified',
        description:
          'Track spaces, payments, utilities, and leases with full visibility — from one place.',
        butttontext: 'Explore Properties',
        buttonLink: '/demo',
      },
    },
  },
  'hr-management': {
    'human-resource-management': {
      hero: {
        slug: 'human-resource-management',
        backgroundImageUrl: '/images/hr/hr-management-hero.jpg',
        title: 'Human Resource Management',
        description:
          'Manage your entire workforce with ease and gain complete control over staff data, access rights, and organization-wide visibility.',
        buttonText: 'Explore HRMS',
        buttonLink: '/contact',
        dashboardFunctions: [
          {
            iconUrl: 'lock',
            content: 'Controlled Access Privileges',
          },
          { iconUrl: 'eye', content: 'Staff Overview at a Glance' },
          {
            iconUrl: 'users',
            content: 'Dynamic Grouping & Reporting',
          },
          { iconUrl: 'search', content: 'Advanced Filtering Tools' },
          { iconUrl: 'file-text', content: 'Real-time Staff Reports' },
          {
            iconUrl: 'bar-chart-2',
            content: 'Analytics & Visualizations',
          },
        ],
        dashboardStat: {
          value: '100+',
          description: 'Organizations transformed',
        },
      },
      lifecycle: {
        title: 'Employee Lifecycle',
        description:
          'Covers the full journey from recruitment to exit management.',
        steps: [
          {
            title: 'Recruitment',
            description: 'Attract and hire top talent.',
            iconName: 'user-plus',
          },
          {
            title: 'Onboarding',
            description: 'Seamless integration of new hires.',
            iconName: 'user-check',
          },
          {
            title: 'Attendance Management',
            description: 'Track and manage attendance.',
            iconName: 'calendar-check',
          },
          {
            title: 'Performance',
            description: 'Monitor and review employee performance.',
            iconName: 'bar-chart-2',
          },
          {
            title: 'Exit Management',
            description: 'Smooth offboarding process.',
            iconName: 'log-out',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Manage Workforce Seamlessly',
          description:
            'From hiring to offboarding, HR Management ensures centralized employee records, flexible workflows, and compliance tools to streamline HR operations.',
        },
        mainDashboardImageUrl: '/images/hr/hr-dashboard.png',
        sideSections: [
          {
            title: 'Access Control',
            description: 'Control who sees what with role-based permissions.',
            imageUrl: '/images/hr/access-control.png',
          },
          {
            title: 'Reporting Tools',
            description:
              'Generate reports by slicing and dicing employee data.',
            imageUrl: '/images/hr/reports.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/banner.jpg',
        title: 'Empower Your HR Teams',
        description: 'Automate the mundane and focus on strategic HR goals.',
        butttontext: 'Start Today',
        buttonLink: '/demo',
      },
    },

    recruitment: {
      hero: {
        slug: 'recruitment',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Recruitment',
        description:
          'Optimize your entire hiring process—from sourcing candidates to rolling out offer letters—with intelligent automations.',
        buttonText: 'Start Recruiting',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'filter', content: 'Smart Resume Filtering' },
          {
            iconUrl: 'user-plus',
            content: 'Candidate Sourcing Tools',
          },
          {
            iconUrl: 'send',
            content: 'Automated Offer Letters',
          },
          { iconUrl: 'notebook-pen', content: 'Track Hiring Journey' },
          { iconUrl: 'calendar', content: 'Interview Scheduling' },
          { iconUrl: 'bar-chart-2', content: 'Recruitment Analytics' },
        ],
        dashboardStat: {
          value: '85%',
          description: 'Faster time to hire',
        },
      },
      lifecycle: {
        title: 'Recruitment Lifecycle',
        description:
          'A step-by-step process to attract, assess, and hire the best candidates for your organization.',
        steps: [
          {
            title: 'Job Posting',
            description: 'Publish job openings on various platforms.',
            iconName: 'megaphone',
          },
          {
            title: 'Resume Screening',
            description: 'Filter and shortlist candidates based on criteria.',
            iconName: 'filter',
          },
          {
            title: 'Interview Scheduling',
            description: 'Arrange interviews with shortlisted candidates.',
            iconName: 'calendar',
          },
          {
            title: 'Assessment & Evaluation',
            description: 'Evaluate candidates through tests and interviews.',
            iconName: 'clipboard-check',
          },
          {
            title: 'Offer & Onboarding',
            description: 'Send offer letters and onboard selected candidates.',
            iconName: 'user-check',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Streamlined Hiring Funnel',
          description:
            'From job postings to onboarding, the recruitment module helps HR teams stay ahead in the war for talent.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Resume Screening',
            description:
              'AI-powered filtering based on skills, experience, and keywords.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Automated Communication',
            description:
              'Send emails, schedule interviews, and manage candidate pipelines.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Hire Smarter, Not Harder',
        description: 'Let your recruiters focus on people, not paperwork.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
    'time-attendance': {
      hero: {
        slug: 'time-attendance',
        backgroundImageUrl: '/images/hr/time-attendance-hero.jpg',
        title: 'Time & Attendance',
        description:
          'Monitor employee work hours, ensure punctuality, and automate disciplinary actions based on attendance rules.',
        buttonText: 'Track Attendance',
        buttonLink: '/contact',
        dashboardFunctions: [
          {
            iconUrl: 'clock',
            content: 'Clock-in/Clock-out Tracking',
          },
          { iconUrl: 'calendar-check', content: 'Attendance Logs' },
          { iconUrl: 'alarm-clock', content: 'Punctuality Reports' },
          { iconUrl: 'gavel', content: 'Automated Penalties' },
          { iconUrl: 'bar-chart-2', content: 'Work Hours Analytics' },
          { iconUrl: 'bell', content: 'Absence Notifications' },
        ],
        dashboardStat: {
          value: '97%',
          description: 'Improved attendance accuracy',
        },
      },
      lifecycle: {
        title: 'Attendance Lifecycle',
        description:
          'Tracks employee presence, punctuality, and manages exceptions for accurate payroll and compliance.',
        steps: [
          {
            title: 'Clock-In/Out',
            description: 'Employees record their work hours.',
            iconName: 'clock',
          },
          {
            title: 'Attendance Monitoring',
            description: 'Supervisors review attendance data.',
            iconName: 'eye',
          },
          {
            title: 'Exception Handling',
            description:
              'Manage late arrivals, absences, and early departures.',
            iconName: 'alert-circle',
          },
          {
            title: 'Leave Integration',
            description: 'Sync leave records with attendance.',
            iconName: 'calendar-check',
          },
          {
            title: 'Payroll Sync',
            description: 'Attendance data feeds into payroll calculations.',
            iconName: 'dollar-sign',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Automate Attendance Monitoring',
          description:
            'Reduce manual errors by automating attendance rules and integrating with payroll and HR workflows.',
        },
        mainDashboardImageUrl: '/images/hr/time-attendance-dashboard.png',
        sideSections: [
          {
            title: 'Auto Penalty System',
            description:
              'Set custom rules for lateness, absences, and early departures with automated deductions.',
            imageUrl: '/images/hr/penalty-config.png',
          },
          {
            title: 'Real-Time Clock System',
            description:
              'Live dashboards showing who is currently in and out of the office.',
            imageUrl: '/images/hr/live-clock.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/time-attendance-banner.jpg',
        title: 'Stay On Top of Time',
        description:
          'Make every second count. Empower teams with accountability.',
        butttontext: 'See How It Works',
        buttonLink: '/demo',
      },
    },

    'employee-self-service': {
      hero: {
        slug: 'employee-self-service',
        backgroundImageUrl: '/images/hr/ess-hero.jpg',
        title: 'Employee Self-Service (ESS)',
        description:
          'Give employees the ability to manage requests, documents, and performance from a single dashboard.',
        buttonText: 'Empower Staff',
        buttonLink: '/contact',
        dashboardFunctions: [
          { iconUrl: 'plane', content: 'Leave Requests' },
          {
            iconUrl: 'hand-coins',
            content: 'Loan & Advance Requests',
          },
          { iconUrl: 'award', content: 'Performance Submissions' },
          { iconUrl: 'folder', content: 'Document Uploads' },
          { iconUrl: 'check-square', content: 'Task Approvals' },
          {
            iconUrl: 'lock',
            content: 'User-Specific Access Rights',
          },
        ],
        dashboardStat: {
          value: '80%',
          description: 'HR workload reduced through automation',
        },
      },
      lifecycle: {
        title: 'ESS Lifecycle',
        description:
          'Empowers employees to manage their own requests, documents, and information efficiently.',
        steps: [
          {
            title: 'Profile Update',
            description:
              'Employees update their personal and contact information.',
            iconName: 'user',
          },
          {
            title: 'Request Submission',
            description: 'Submit leave, loan, or other requests.',
            iconName: 'file-text',
          },
          {
            title: 'Approval Tracking',
            description: 'Track the status of submitted requests.',
            iconName: 'activity',
          },
          {
            title: 'Document Management',
            description: 'Upload and access HR documents.',
            iconName: 'folder',
          },
          {
            title: 'Feedback & Support',
            description: 'Request support or provide feedback.',
            iconName: 'help-circle',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Self-Service Made Easy',
          description:
            'Reduce administrative overhead by allowing staff to submit, track, and manage their requests in real-time.',
        },
        mainDashboardImageUrl: '/images/hr/ess-dashboard.png',
        sideSections: [
          {
            title: 'Smart Approval Flows',
            description:
              'Route employee requests through multi-step approval processes.',
            imageUrl: '/images/hr/approval-flow.png',
          },
          {
            title: 'Document Submissions',
            description:
              'Enable staff to upload marriage certificates, awards, achievements, and more for review.',
            imageUrl: '/images/hr/document-upload.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/ess-banner.jpg',
        title: 'Let Employees Take the Lead',
        description:
          'Free HR to focus on strategy by giving staff the tools to manage themselves.',
        butttontext: 'Activate ESS',
        buttonLink: '/signup',
      },
    },

    //TODO
    'associations-management': {
      hero: {
        slug: 'associations-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Associations Management',
        description:
          'Manage associations, memberships, and organizational groups seamlessly with automated workflows and smart analytics.',
        buttonText: 'Explore Associations',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'users', content: 'Member Directory Management' },
          { iconUrl: 'layers', content: 'Group & Subgroup Organization' },
          { iconUrl: 'file-text', content: 'Membership Records & Reports' },
          { iconUrl: 'bell', content: 'Automated Notifications & Alerts' },
          { iconUrl: 'calendar', content: 'Event & Meeting Scheduling' },
          { iconUrl: 'bar-chart-2', content: 'Membership Analytics' },
        ],
        dashboardStat: {
          value: '95%',
          description: 'Improved association engagement',
        },
      },
      lifecycle: {
        title: 'Associations Lifecycle',
        description:
          'From registration to engagement, efficiently manage the lifecycle of members and associations.',
        steps: [
          {
            title: 'Registration',
            description: 'Enroll members and capture essential data.',
            iconName: 'user-plus',
          },
          {
            title: 'Grouping & Categorization',
            description: 'Organize members into groups and associations.',
            iconName: 'layers',
          },
          {
            title: 'Communication',
            description: 'Send updates, reminders, and notifications.',
            iconName: 'send',
          },
          {
            title: 'Events & Activities',
            description: 'Manage meetings, activities, and events.',
            iconName: 'calendar',
          },
          {
            title: 'Reporting',
            description: 'Generate insights and analytics on engagement.',
            iconName: 'bar-chart-2',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Smart Association Management',
          description:
            'Centralize membership data, track participation, and improve communication with a robust association management system.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Centralized Directory',
            description:
              'Keep all member details organized and accessible in one place.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Automated Notifications',
            description:
              'Send personalized alerts, emails, and event reminders.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Unify Your Associations',
        description:
          'Bring together members and associations for better collaboration.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },

    'staff-management': {
      hero: {
        slug: 'staff-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Staff Management',
        description:
          'Gain full control over employee data, roles, and access privileges with advanced staff management tools.',
        buttonText: 'Manage Staff',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'users', content: 'Employee Directory & Profiles' },
          { iconUrl: 'id-card', content: 'Access & Privilege Control' },
          { iconUrl: 'clock', content: 'Time & Attendance Tracking' },
          { iconUrl: 'award', content: 'Compensation & Benefits' },
          { iconUrl: 'bar-chart-2', content: 'Performance Insights' },
          { iconUrl: 'file-text', content: 'Reports & Analytics' },
        ],
        dashboardStat: {
          value: '90%',
          description: 'Improved HR efficiency',
        },
      },
      lifecycle: {
        title: 'Staff Management Lifecycle',
        description:
          'Handle employee onboarding, performance tracking, and offboarding seamlessly.',
        steps: [
          {
            title: 'Onboarding',
            description: 'Easily register and configure new employee profiles.',
            iconName: 'user-plus',
          },
          {
            title: 'Attendance & Time Tracking',
            description: 'Monitor punctuality and work hours automatically.',
            iconName: 'clock',
          },
          {
            title: 'Compensation',
            description: 'Manage salaries, benefits, and incentives.',
            iconName: 'dollar-sign',
          },
          {
            title: 'Performance Evaluation',
            description: 'Track staff productivity and achievements.',
            iconName: 'trending-up',
          },
          {
            title: 'Offboarding',
            description: 'Streamline exit processes and compliance.',
            iconName: 'user-check',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Comprehensive Staff Records',
          description:
            'Easily track and organize all staff-related data, attendance, and performance on one platform.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Employee Insights',
            description:
              'Access detailed employee information and generate analytics reports.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Attendance Automation',
            description:
              'Track check-ins, leaves, and working hours seamlessly.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Empower Your HR Team',
        description: 'Centralize and optimize staff data management.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
    'training-management': {
      hero: {
        slug: 'training-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Training Management',
        description:
          'Plan, track, and evaluate staff training programs to build a skilled and high-performing workforce.',
        buttonText: 'Plan Training',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'book', content: 'Training Program Scheduling' },
          { iconUrl: 'users', content: 'Employee Training Records' },
          { iconUrl: 'file-text', content: 'Assessment & Feedback' },
          { iconUrl: 'layers', content: 'Course & Resource Management' },
          { iconUrl: 'calendar', content: 'Workshops & Seminars' },
          { iconUrl: 'bar-chart-2', content: 'Training Analytics' },
        ],
        dashboardStat: {
          value: '88%',
          description: 'Improved employee skill development',
        },
      },
      lifecycle: {
        title: 'Training Lifecycle',
        description:
          'Manage the end-to-end process of employee training from planning to evaluation.',
        steps: [
          {
            title: 'Needs Analysis',
            description: 'Identify skill gaps and training requirements.',
            iconName: 'search',
          },
          {
            title: 'Course Design',
            description: 'Create tailored training programs.',
            iconName: 'book-open',
          },
          {
            title: 'Implementation',
            description: 'Schedule and deliver training sessions.',
            iconName: 'calendar',
          },
          {
            title: 'Assessment',
            description: 'Evaluate training effectiveness.',
            iconName: 'clipboard-check',
          },
          {
            title: 'Feedback & Reports',
            description: 'Collect feedback and generate performance reports.',
            iconName: 'bar-chart-2',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Effective Workforce Training',
          description:
            'Enhance employee skills with structured training programs and real-time performance tracking.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Custom Programs',
            description:
              'Develop training schedules based on employee skill needs.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Automated Tracking',
            description:
              'Monitor participation, progress, and training outcomes.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Upskill Your Team',
        description: 'Invest in employee growth with smart training solutions.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
    'travels-management': {
      hero: {
        slug: 'travels-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Travels Management',
        description:
          'Plan, approve, and manage employee travel requests, bookings, and associated costs effortlessly.',
        buttonText: 'Manage Travels',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'plane', content: 'Flight Booking Management' },
          { iconUrl: 'car', content: 'Vehicle Requisition & Allocation' },
          { iconUrl: 'file-text', content: 'Travel Requests & Approvals' },
          { iconUrl: 'calendar', content: 'Trip Scheduling' },
          { iconUrl: 'bar-chart-2', content: 'Cost Tracking & Analytics' },
          { iconUrl: 'clipboard-check', content: 'Travel Expense Reports' },
        ],
        dashboardStat: {
          value: '92%',
          description: 'Faster travel approvals and scheduling',
        },
      },
      lifecycle: {
        title: 'Travel Management Lifecycle',
        description:
          'Handle travel planning, bookings, approvals, and expense management seamlessly.',
        steps: [
          {
            title: 'Travel Requests',
            description: 'Employees submit trip and travel requirements.',
            iconName: 'file-text',
          },
          {
            title: 'Approval Workflow',
            description: 'Automated approvals for managers and HR.',
            iconName: 'check-circle',
          },
          {
            title: 'Booking & Allocation',
            description: 'Arrange flights, vehicles, and accommodations.',
            iconName: 'plane',
          },
          {
            title: 'Expense Management',
            description: 'Track costs and generate travel reports.',
            iconName: 'bar-chart-2',
          },
          {
            title: 'Post-Trip Reporting',
            description: 'Evaluate and document travel outcomes.',
            iconName: 'clipboard-check',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Seamless Travel Oversight',
          description:
            'Centralize travel planning, approvals, and budgeting to enhance staff mobility and efficiency.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Flight & Vehicle Tracking',
            description: 'Monitor travel resources and optimize usage.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Automated Travel Workflows',
            description:
              'Reduce manual effort with approval automation and integrated expense tracking.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Efficient Travel Coordination',
        description: 'Simplify and automate employee travel management.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
    'performance-management': {
      hero: {
        slug: 'performance-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Performance Management',
        description:
          'Set and track SMART goals, evaluate performance, and empower staff with continuous feedback.',
        buttonText: 'Improve Performance',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'trending-up', content: 'SMART Goal Setting' },
          { iconUrl: 'bar-chart-2', content: 'Performance Analytics' },
          { iconUrl: 'clipboard-check', content: '360-Degree Feedback' },
          { iconUrl: 'award', content: 'Performance Appraisal Tools' },
          { iconUrl: 'layers', content: 'Corporate & Staff Initiatives' },
          { iconUrl: 'file-text', content: 'Customizable Reports' },
        ],
        dashboardStat: {
          value: '96%',
          description: 'Enhanced goal achievement tracking',
        },
      },
      lifecycle: {
        title: 'Performance Lifecycle',
        description:
          'Track and optimize performance across corporate, departmental, and individual levels.',
        steps: [
          {
            title: 'Goal Setting',
            description: 'Define SMART goals and KPIs for teams.',
            iconName: 'target',
          },
          {
            title: 'Initiative Assignment',
            description: 'Assign initiatives from corporate to staff levels.',
            iconName: 'layers',
          },
          {
            title: 'Continuous Feedback',
            description: 'Encourage 360-degree staff feedback.',
            iconName: 'message-circle',
          },
          {
            title: 'Performance Analytics',
            description: 'Measure and visualize performance trends.',
            iconName: 'bar-chart-2',
          },
          {
            title: 'Review & Appraisal',
            description: 'Conduct appraisals with data-backed insights.',
            iconName: 'clipboard-check',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Drive Organizational Success',
          description:
            'Link employee performance to corporate goals with intelligent analytics and real-time progress tracking.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Performance Analytics',
            description:
              'Slice and visualize staff performance data with powerful dashboards.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Goal Alignment',
            description:
              'Align initiatives across departments, teams, and individuals.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Measure, Improve, Succeed',
        description: 'Empower staff and optimize performance outcomes.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
    'compensation-benefit-management': {
      hero: {
        slug: 'compensation-benefit-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Compensation & Benefits',
        description:
          'Manage staff salaries, incentives, and benefits with precision and transparency.',
        buttonText: 'Manage Compensation',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'dollar-sign', content: 'Salary Structure Management' },
          { iconUrl: 'gift', content: 'Incentives & Bonuses' },
          { iconUrl: 'layers', content: 'Benefits & Perks Tracking' },
          { iconUrl: 'file-text', content: 'Payroll Integration' },
          { iconUrl: 'bar-chart-2', content: 'Compensation Analytics' },
          { iconUrl: 'award', content: 'Talent Retention Tools' },
        ],
        dashboardStat: {
          value: '93%',
          description: 'Streamlined compensation planning',
        },
      },
      lifecycle: {
        title: 'Compensation Lifecycle',
        description:
          'From salary planning to benefits distribution, manage all compensation processes effectively.',
        steps: [
          {
            title: 'Salary Planning',
            description: 'Create and adjust pay structures based on roles.',
            iconName: 'dollar-sign',
          },
          {
            title: 'Benefits Management',
            description: 'Track perks, allowances, and non-financial benefits.',
            iconName: 'gift',
          },
          {
            title: 'Payroll Integration',
            description: 'Sync compensation with payroll systems.',
            iconName: 'file-text',
          },
          {
            title: 'Performance-Linked Rewards',
            description: 'Allocate bonuses based on employee performance.',
            iconName: 'award',
          },
          {
            title: 'Analytics & Reporting',
            description: 'Evaluate compensation trends and ROI.',
            iconName: 'bar-chart-2',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Transparent Compensation Management',
          description:
            'Ensure fair and data-driven decisions for salaries and benefits while boosting employee satisfaction.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Incentive Management',
            description:
              'Plan and distribute performance-based rewards effectively.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Benefits Tracking',
            description: 'Monitor employee benefits and allowances seamlessly.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Reward Excellence',
        description: 'Optimize compensation strategies for talent retention.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
    'exit-onboarding-management': {
      hero: {
        slug: 'exit-onboarding-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Exit & Off‑Boarding Management',
        description:
          'Track retirements, resignations, and terminations with structured checklists that ensure clearances, asset returns, and final approvals are completed on time.',
        buttonText: 'Manage Exits',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'log-out', content: 'Exit Request Initiation' },
          { iconUrl: 'check-square', content: 'Clearance & Approvals' },
          { iconUrl: 'archive', content: 'Document & Asset Return Tracking' },
          { iconUrl: 'file-text', content: 'Exit Forms & Letters' },
          { iconUrl: 'alert-triangle', content: 'Risk / Outstanding Flags' },
          { iconUrl: 'bar-chart-2', content: 'Exit Metrics & Reports' },
        ],
        dashboardStat: {
          value: '98%',
          description: 'Exits closed without pending items',
        },
      },
      lifecycle: {
        title: 'Exit Lifecycle',
        description:
          'Guide HR and managers through each step of the employee separation process to avoid surprises.',
        steps: [
          {
            title: 'Initiate Exit',
            description:
              'Start retirement, resignation, or termination workflow.',
            iconName: 'log-out',
          },
          {
            title: 'Clearance Checklist',
            description: 'Route tasks to departments for sign‑off.',
            iconName: 'check-square',
          },
          {
            title: 'Assets & Access',
            description: 'Confirm return of equipment and revoke access.',
            iconName: 'shield-off',
          },
          {
            title: 'Final Benefits & Pay',
            description: 'Reconcile benefits, leave balances, and payouts.',
            iconName: 'dollar-sign',
          },
          {
            title: 'Archive & Insights',
            description: 'Close record, capture exit notes, and report trends.',
            iconName: 'bar-chart-2',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'No‑Surprise Off‑Boarding',
          description:
            'Stay on track with automated reminders and consolidated status views across all departments during staff exits.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Multi‑Dept Clearance',
            description:
              'HR, IT, Finance, and Facilities update a single checklist—see what’s pending in real time.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Documentation Hub',
            description:
              'Store resignation letters, settlement forms, and compliance documents centrally.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Streamline Staff Exits',
        description:
          'Protect your org and wrap up departures cleanly and confidently.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
    'payroll-management': {
      hero: {
        slug: 'payroll-management',
        backgroundImageUrl: '/images/hr/recruitment-hero.jpg',
        title: 'Payroll Management',
        description:
          'Automate pay runs, apply allowances and deductions, and integrate with HR, Time & Attendance, and Compensation data for accurate payroll.',
        buttonText: 'Run Payroll',
        buttonLink: '/demo',
        dashboardFunctions: [
          { iconUrl: 'calculator', content: 'Payroll Processing Engine' },
          { iconUrl: 'percent', content: 'Taxes & Statutory Deductions' },
          { iconUrl: 'clock', content: 'Time & Attendance Sync' },
          { iconUrl: 'gift', content: 'Benefits & Allowances Import' },
          { iconUrl: 'file-text', content: 'Payslip Generation' },
          { iconUrl: 'bar-chart-2', content: 'Payroll Analytics & Export' },
        ],
        dashboardStat: {
          value: '99%',
          description: 'On‑time payroll completion',
        },
      },
      lifecycle: {
        title: 'Payroll Cycle',
        description:
          'From data capture through disbursement and reporting—manage the full payroll lifecycle in one place.',
        steps: [
          {
            title: 'Collect HR Data',
            description: 'Gather staff records, attendance, and comp changes.',
            iconName: 'database',
          },
          {
            title: 'Calculate Earnings',
            description: 'Apply salary grades, allowances, and benefits.',
            iconName: 'calculator',
          },
          {
            title: 'Apply Deductions',
            description: 'Process taxes, penalties, and other withholdings.',
            iconName: 'percent',
          },
          {
            title: 'Approve & Disburse',
            description: 'Route for approval and release payments.',
            iconName: 'check-circle',
          },
          {
            title: 'Report & Archive',
            description: 'Generate payslips and export to Finance/Accounting.',
            iconName: 'file-text',
          },
        ],
      },
      mainCenter: {
        header: {
          title: 'Integrated Payroll Control',
          description:
            'Leverage HR, Time, and Compensation data to reduce manual adjustments and payroll errors.',
        },
        mainDashboardImageUrl: '/images/hr/recruitment-dashboard.png',
        sideSections: [
          {
            title: 'Real‑Time Adjustments',
            description:
              'Attendance penalties and benefit updates flow in before payroll closes.',
            imageUrl: '/images/hr/screening.png',
          },
          {
            title: 'Payslips & Exports',
            description:
              'Deliver digital payslips and sync payroll summaries to Finance systems.',
            imageUrl: '/images/hr/communication.png',
          },
        ],
      },
      banner: {
        backgroundImageUrl: '/images/hr/recruitment-banner.jpg',
        title: 'Pay Accurately, Pay On Time',
        description: 'Confident, compliant, and connected payroll processing.',
        butttontext: 'Request Demo',
        buttonLink: '/contact',
      },
    },
  },
  'legal-management': {},
  'budget-management': {},

  'performance-management': {},
  'document-management': {},

  'financials-and-accounting': {},
  'project-management': {},
  'payroll-management': {},
  'software-management': {},
  purchasing: {},
  'incidence-management': {},
  'productivity-apps': {},
  'task-management': {},
  'safety-management': {},
} as const satisfies Record<string, Record<string, _ISubModulePageContent>>;

export type ModuleName = keyof typeof modulesContentData;

export type SubModuleLink<M extends ModuleName> =
  keyof (typeof modulesContentData)[M];
