import { ModuleName, SubModuleLink } from './modules.data';

export type ModulesSubModulesRecord = {
  [K in ModuleName]: Record<SubModuleLink<K>, _IModulesSubModules> | null;
};

export const modulesSubmodulesData: ModulesSubModulesRecord = {
  'power-apps': {
    'elog-book': {
      name: 'eLog Book',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Remote Shift Change',
        'Capture Midnight Conditions',
        'Templates for various logs',
        'Categorisation of logs',
        'Inbuilt SMS and Emails alerts',
        'eLog Dashboard',
        'Automatic Synchronisation of logs',
        'Privileges assignment',
        'User-Friendly Interface',
      ],
    },

    telemetry: {
      name: 'Telemetry',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Load Profiles',
        'Manage Customers',
        'Billing Data Profile',
        'Customer portal',
        'Automatically Pushing of Data to Billing Systems',
        'Built-In Audit Trail',
        'Connect with APN SIM Cards',
      ],
    },
    'transmission-service-bills': {
      name: 'Transmission Service Bills',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Capture Billing Data Manually',
        'Automatic Data Input',
        'Customer payment entries',
        'Submission/Retrieval of bills',
      ],
    },
    'outage-management': {
      name: 'Planned Outage Management System (POMS)',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Job Hazard Analysis',
        'Dashboard',
        'Application for Outage',
        'Protection Guarantee',
        'Stakeholder/Customer Portal',
      ],
    },
  },
  'assets-management': {
    'it-asset-management': {
      name: 'IT Asset Management ',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Computing Device Details',
        'Asset Assignments',
        'Maintenance Activities',
        'Software Asset Management (SAM)',
        'Work Order Management',
      ],
    },
    'power-systems-asset-management': {
      name: 'Power Systems Asset Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Substation Details',
        'Line Details',
        'Tower Details',
        'Transformer',
        'Meter Details',
        'Maintenance',
        'Warehousing',
        'Asset Documents',
      ],
    },
    //TODO Real Estate was not a sub module of assets management
    'real-estate-management': {
      name: 'Recruitment',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [''],
    },
    'transport-management': {
      name: 'Transport Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Vehicle Details',
        'Vehicle Assignments',
        'Vehicle Logbook',
        'Fuel Transactions Audit',
        'Vehicle Tracking',
        'Maintenance Requests',
        'Maintenance Activities',
        'Maintenance Scheduling',
        'Fuel Top-Up Requests',
        'Fuel Transactions Upload',
      ],
    },
  },
  'hr-management': {
    recruitment: {
      name: 'Recruitment',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Job Posting',
        'Applicant Tracking',
        'Interview Scheduling',
        'Offer Management',
        'Onboarding Workflow',
      ],
    },
    'human-resource-management': {
      name: 'Human Resource Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Employee Records',
        'Position Management',
        'Department Structure',
        'HR Analytics',
        'Policy Management',
      ],
    },
    'time-attendance': {
      name: 'Time & Attendance',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Clock-In/Clock-Out',
        'Absence Tracking',
        'Leave Requests',
        'Attendance Analytics',
        'Integration with Payroll',
      ],
    },
    'employee-self-service': {
      name: 'Employee Self-Service',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Profile Management',
        'Leave Application',
        'Payslip Access',
        'Personal Data Update',
        'Internal Requests',
      ],
    },
    'associations-management': {
      name: 'Associations Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Union Membership Tracking',
        'Association Dues',
        'Group Communications',
        'Event Scheduling',
        'Member Directory',
      ],
    },
    'compensation-benefit-management': {
      name: 'Compensation & Benefit Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Salary Structure',
        'Benefits Enrollment',
        'Bonus Calculation',
        'Compensation Analytics',
        'Allowance Management',
      ],
    },
    'exit-onboarding-management': {
      name: 'Exit & Onboarding Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Exit Interviews',
        'Clearance Workflow',
        'Onboarding Checklist',
        'Document Collection',
        'Role Assignment',
      ],
    },
    'payroll-management': {
      name: 'Payroll Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Salary Processing',
        'Payslip Generation',
        'Tax Deductions',
        'Payroll Reports',
        'Compliance Management',
      ],
    },
    'performance-management': {
      name: 'Performance Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Goal Setting',
        'Appraisal Cycles',
        'Feedback Collection',
        'Performance Analytics',
        'Improvement Plans',
      ],
    },
    'staff-management': {
      name: 'Staff Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Roster Planning',
        'Shift Assignment',
        'Staff Directory',
        'Role Management',
        'Team Analytics',
      ],
    },
    'training-management': {
      name: 'Training Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Course Catalog',
        'Training Scheduling',
        'Attendance Tracking',
        'Certification Management',
        'Training Analytics',
      ],
    },
    'travels-management': {
      name: 'Travels Management',
      imageUrl: '/assets/images/dashboards/hrm.png',
      functionalFeatures: [
        'Travel Requests',
        'Itinerary Planning',
        'Expense Tracking',
        'Approval Workflow',
        'Travel History',
      ],
    },
  },
  'legal-management': null,
  'budget-management': null,

  'performance-management': null,
  'document-management': null,

  'financials-and-accounting': null,
  'project-management': null,
  'payroll-management': null,
  'software-management': null,
  purchasing: null,
  'incidence-management': null,
  'productivity-apps': null,
  'task-management': null,
  'safety-management': null,
};
