interface IModule {
  name: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
}

export const MODULES_GROUP_A: IModule[] = [
  {
    name: 'Human Resource Management',
    image: { src: 'humanresourcemanagement', width: 63, height: 77 },
  },
  {
    name: 'Recruitment',
    image: { src: 'user-plus', width: 41, height: 55 },
  },
  {
    name: 'Performance Management',
    image: { src: 'performance-management', width: 63.5, height: 55 },
  },
  {
    name: 'Employee Self-Service',
    image: { src: 'user-check', width: 60, height: 44 },
  },
  {
    name: 'Financials & Accounting',
    image: { src: 'banknote', width: 43, height: 60 },
  },
  {
    name: 'Payroll Management',
    image: { src: 'payroll-management', width: 69, height: 76 },
  },
  {
    name: 'Budget Management',
    image: { src: 'budget-management', width: 65, height: 73 },
  },
  {
    name: 'Procurement',
    image: { src: 'shopping-cart', width: 55, height: 40 },
  },
  {
    name: 'Billing System',
    image: { src: 'receipt', width: 42, height: 56 },
  },
  {
    name: 'Task Management',
    image: { src: 'task-management', width: 67.14, height: 66 },
  },
  {
    name: 'Project Management',
    image: { src: 'clipboard-list', width: 53, height: 47 },
  },
  {
    name: 'Activity Reports',
    image: { src: 'file-bar-chart', width: 48, height: 59 },
  },
  {
    name: 'Document Management (gDocs)',
    image: { src: 'file-text', width: 60, height: 52 },
  },
  {
    name: 'Legal Management',
    image: { src: 'legal-management', width: 68, height: 68 },
  },
  {
    name: 'Justice Management',
    image: { src: 'badge-check', width: 57, height: 42 },
  },
  {
    name: 'Compliance Tracking',
    image: { src: 'list-checks', width: 46, height: 54 },
  },
];

export const MODULES_GROUP_B: IModule[] = [
  {
    name: 'Case Management',
    image: { src: 'folder-search', width: 44, height: 60 },
  },
  {
    name: 'Document Archiving',
    image: { src: 'archive', width: 43, height: 57 },
  },
  {
    name: 'Power Apps',
    image: { src: 'power-apps', width: 60, height: 85 },
  },
  {
    name: 'eLog Book',
    image: { src: 'book', width: 59, height: 41 },
  },
  {
    name: 'Telemetry (iTel)',
    image: { src: 'radio', width: 56, height: 44 },
  },
  {
    name: 'Planned Outage Management',
    image: { src: 'calendar-x', width: 45, height: 53 },
  },
  {
    name: 'PoSAM',
    image: { src: 'battery-charging', width: 48, height: 55 },
  },
  {
    name: 'Software Asset Management',
    image: { src: 'asset-management', width: 68, height: 84 },
  },
  {
    name: 'Safety Management',
    image: { src: 'shield', width: 52, height: 46 },
  },
  {
    name: 'Accident Reporting',
    image: { src: 'alert-circle', width: 41, height: 59 },
  },
  {
    name: 'PPE Requests',
    image: { src: 'hard-hat', width: 60, height: 43 },
  },
  {
    name: 'WASACO Audits',
    image: { src: 'clipboard-check', width: 47, height: 50 },
  },
  {
    name: 'Safety Group Management',
    image: { src: 'boxes', width: 54, height: 49 },
  },
  {
    name: 'Incident Management',
    image: { src: 'incident-management', width: 81, height: 68 },
  },
  {
    name: 'Preventive Maintenance',
    image: { src: 'productivity-management', width: 70, height: 69 },
  },
  {
    name: 'Predictive Maintenance',
    image: { src: 'activity', width: 51, height: 48 },
  },
  {
    name: 'Transport Management',
    image: { src: 'truck', width: 44, height: 45 },
  },
  {
    name: 'IT Asset Management',
    image: { src: 'asset-management', width: 68, height: 84 },
  },
  {
    name: 'Real Estate Management',
    image: { src: 'building', width: 53, height: 60 },
  },
  {
    name: 'Help Desk / Issue Reporting',
    image: { src: 'life-buoy', width: 46, height: 47 },
  },
  {
    name: 'Issue Classification & Routing',
    image: { src: 'git-branch', width: 59, height: 44 },
  },
];
