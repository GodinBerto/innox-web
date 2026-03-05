export const navItems: _INavbarLinks[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Modules',
    link: '/modules',
    notLink: true,
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
  // {
  //   name: "Pricing",
  //   link: "#contact",
  // },
];

export const menuData = {
  Modules: [
    {
      name: 'HR Management',
      icon: 'users',
      contents: [
        { name: 'Recruitment', link: 'recruitment', icon: 'user-plus' },
        {
          name: 'Associations Management',
          link: 'associations-management',
          icon: 'users',
        },
        {
          name: 'Staff Management',
          link: 'staff-management',
          icon: 'user-cog',
        },
        {
          name: 'Payroll Management',
          link: 'payroll-management',
          icon: 'graduation-cap',
        },
        {
          name: 'Travels Management',
          link: 'travels-management',
          icon: 'plane',
        },
        {
          name: 'Performance Management',
          link: 'performance-management',
          icon: 'bar-chart-4',
        },
        {
          name: 'Time & Attendance',
          link: 'time-attendance',
          icon: 'clock',
        },
        {
          name: 'Compensation & Benefit Management',
          link: 'compensation-benefit-management',
          icon: 'hand-coins',
        },
        {
          name: 'Exit & Onboarding Management',
          link: 'exit-onboarding-management',
          icon: 'door-open',
        },
        {
          name: 'Employee Self-Service',
          link: 'employee-self-service',
          icon: 'user-circle',
        },
        {
          name: 'Training & Management',
          link: 'training-management',
          icon: 'book-open',
        },
      ],
    },
    {
      name: 'Power Apps',
      icon: 'app-window',
      contents: [
        {
          name: 'ELog Book',
          link: 'elog-book',
          icon: 'book-text',
        },
        {
          name: 'Telemetry',
          link: 'telemetry',
          icon: 'radio',
        },
        {
          name: 'Transmission Service Bills',
          link: 'transmission-service-bills',
          icon: 'file-text',
        },
        {
          name: 'Outage Management',
          link: 'outage-management',
          icon: 'alert-octagon',
        },
      ],
    },
    {
      name: 'Assets Management',
      icon: 'truck',
      contents: [
        {
          name: 'Transport Management',
          link: 'transport-management',
          icon: 'truck',
        },
        {
          name: 'IT Asset Management',
          link: 'it-asset-management',
          icon: 'server',
        },
        {
          name: 'Real Estate Management',
          link: 'real-estate-management',
          icon: 'building',
        },
        {
          name: 'Power Systems Asset Management',
          link: 'power-systems-asset-management',
          icon: 'zap',
        },
      ],
    },
    {
      name: 'Legal Management',
      icon: 'gavel',
      contents: [
        // { name: "Case Scheduling", link: "case-scheduling", icon: "calendar" },
        // { name: "Document Control", link: "document-control", icon: "folder" }
      ],
    },
    {
      name: 'Budget Management',
      icon: 'pie-chart',
      contents: [
        // { name: "Budget Planning", link: "planning", icon: "bar-chart" },
        // { name: "Expense Tracking", link: "expenses", icon: "wallet" }
      ],
    },

    {
      name: 'Performance Management',
      icon: 'activity',
      contents: [
        // { name: "KPI Tracking", link: "kpi", icon: "bar-chart" },
        // { name: "Reviews", link: "reviews", icon: "star" }
      ],
    },
    {
      name: 'Document Management',
      icon: 'file-text',
      contents: [
        // { name: "gDocs", link: "gdocs", icon: "file-text" },
        // { name: "Archiving", link: "archiving", icon: "archive" }
      ],
    },

    {
      name: 'Financials & Accounting',
      icon: 'banknote',
      contents: [
        // { name: "Payroll Management", link: "payroll", icon: "wallet" },
        // { name: "Billing System", link: "billing", icon: "receipt" }
      ],
    },
    {
      name: 'Project Management',
      icon: 'clipboard-list',
      contents: [
        // { name: "Activity Reports", link: "activity-reports", icon: "file-bar-chart" },
        // { name: "Task Management", link: "task-management", icon: "check-square" }
      ],
    },
    {
      name: 'Payroll Management',
      icon: 'wallet',
      contents: [
        // { name: "Salary Processing", link: "salary", icon: "wallet" },
        // { name: "Payslips", link: "payslips", icon: "file-text" }
      ],
    },
    {
      name: 'Software Management',
      icon: 'code',
      contents: [
        // { name: "License Tracking", link: "license", icon: "timer" },
        // { name: "Usage Reports", link: "reports", icon: "bar-chart" }
      ],
    },
    {
      name: 'Purchasing',
      icon: 'shopping-cart',
      contents: [
        // { name: "Procurement", link: "procurement", icon: "shopping-cart" },
        // { name: "Supplier Management", link: "suppliers", icon: "users" }
      ],
    },
    {
      name: 'Incidence Management',
      icon: 'alert-triangle',
      contents: [
        // { name: "Accident Reporting", link: "accident", icon: "alert-circle" },
        // { name: "Incident Logs", link: "logs", icon: "file-text" }
      ],
    },
    {
      name: 'Productivity Apps',
      icon: 'activity',
      contents: [
        // { name: "Employee Self-Service", link: "self-service", icon: "user-check" },
        // { name: "Time Tracking", link: "time-tracking", icon: "calendar-clock" }
      ],
    },
    {
      name: 'Task Management',
      icon: 'check-square',
      contents: [
        // { name: "Task List", link: "list", icon: "check-square" },
        // { name: "Assignments", link: "assignments", icon: "user-cog" }
      ],
    },
    {
      name: 'Safety Management',
      icon: 'shield',
      contents: [
        // { name: "PPE Requests", link: "ppe", icon: "hard-hat" },
        // { name: "Safety Group Management", link: "group", icon: "boxes" }
      ],
    },
  ],
  Home: '/',
  'About Us': '/about-us',
};
export const navSheetSecondLinks = ['Contact Us', 'Pricing'];
