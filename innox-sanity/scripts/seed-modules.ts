// /**
//  * Sanity Seed Script for Modules and SubModules
//  * 
//  * This script populates Sanity with Module and SubModule documents
//  * based on existing data files.
//  * 
//  * Usage:
//  *   cd innox-sanity
//  *   npx tsx scripts/seed-modules.ts
//  * 
//  * Requirements:
//  *   - SANITY_API_TOKEN environment variable with write access
//  *   - Or run: npx sanity dataset import
//  */

// import { createClient } from '@sanity/client'

// // Configure the Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'sj8cnv1f',
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: '2025-01-01',
//   token: process.env.SANITY_API_TOKEN,
//   useCdn: false,
// })

// // Module definitions with display names and icons
// const moduleDefinitions = [
//   {
//     slug: 'power-apps',
//     name: 'Power Apps',
//     description: 'Manage energy distribution, faults, switch controls, and outage logs from a single power dashboard.',
//     icon: 'zap',
//     order: 1,
//   },
//   {
//     slug: 'assets-management',
//     name: 'Assets Management',
//     description: 'Track the acquisition, assignment, servicing, and depreciation of all organizational assets.',
//     icon: 'box',
//     order: 2,
//   },
//   {
//     slug: 'hr-management',
//     name: 'HR Management',
//     description: 'Manage your entire workforce with ease and gain complete control over staff data and HR operations.',
//     icon: 'users',
//     order: 3,
//   },
//   {
//     slug: 'legal-management',
//     name: 'Legal Management',
//     description: 'Digitize and centralize all legal matters — from case tracking and documentation to client management.',
//     icon: 'gavel',
//     order: 4,
//   },
//   {
//     slug: 'budget-management',
//     name: 'Budget Management',
//     description: 'Plan, track, and manage organizational budgets with precision and transparency.',
//     icon: 'pie-chart',
//     order: 5,
//   },
//   {
//     slug: 'performance-management',
//     name: 'Performance Management',
//     description: 'Set and track SMART goals, evaluate performance, and empower staff with continuous feedback.',
//     icon: 'trending-up',
//     order: 6,
//   },
//   {
//     slug: 'document-management',
//     name: 'Document Management',
//     description: 'Centralize, organize, and secure all organizational documents with version control and access management.',
//     icon: 'file-text',
//     order: 7,
//   },
//   {
//     slug: 'financials-and-accounting',
//     name: 'Financials & Accounting',
//     description: 'Manage financial operations, accounting, and reporting with integrated tools.',
//     icon: 'dollar-sign',
//     order: 8,
//   },
//   {
//     slug: 'project-management',
//     name: 'Project Management',
//     description: 'Plan, execute, and monitor projects with task management, timelines, and team collaboration.',
//     icon: 'folder-kanban',
//     order: 9,
//   },
//   {
//     slug: 'payroll-management',
//     name: 'Payroll Management',
//     description: 'Automate pay runs, apply allowances and deductions, and integrate with HR data for accurate payroll.',
//     icon: 'calculator',
//     order: 10,
//   },
//   {
//     slug: 'software-management',
//     name: 'Software Management',
//     description: 'Track software licenses, subscriptions, and deployments across your organization.',
//     icon: 'code',
//     order: 11,
//   },
//   {
//     slug: 'purchasing',
//     name: 'Purchasing',
//     description: 'Streamline procurement processes from requisition to purchase order and vendor management.',
//     icon: 'shopping-cart',
//     order: 12,
//   },
//   {
//     slug: 'incidence-management',
//     name: 'Incidence Management',
//     description: 'Track, manage, and resolve incidents with automated workflows and escalation paths.',
//     icon: 'alert-triangle',
//     order: 13,
//   },
//   {
//     slug: 'productivity-apps',
//     name: 'Productivity Apps',
//     description: 'Boost team productivity with integrated tools for communication, scheduling, and collaboration.',
//     icon: 'rocket',
//     order: 14,
//   },
//   {
//     slug: 'task-management',
//     name: 'Task Management',
//     description: 'Organize and track tasks with assignments, deadlines, and progress monitoring.',
//     icon: 'check-square',
//     order: 15,
//   },
//   {
//     slug: 'safety-management',
//     name: 'Safety Management',
//     description: 'Ensure workplace safety with incident reporting, compliance tracking, and safety audits.',
//     icon: 'shield',
//     order: 16,
//   },
// ]

// // SubModule definitions organized by parent module
// const subModuleDefinitions: Record<string, Array<{
//   slug: string
//   name: string
//   functionalFeatures: string[]
// }>> = {
//   'power-apps': [
//     {
//       slug: 'elog-book',
//       name: 'eLog Book',
//       functionalFeatures: [
//         'Remote Shift Change',
//         'Capture Midnight Conditions',
//         'Templates for various logs',
//         'Categorisation of logs',
//         'Inbuilt SMS and Emails alerts',
//         'eLog Dashboard',
//         'Automatic Synchronisation of logs',
//         'Privileges assignment',
//         'User-Friendly Interface',
//       ],
//     },
//     {
//       slug: 'telemetry',
//       name: 'Telemetry',
//       functionalFeatures: [
//         'Load Profiles',
//         'Manage Customers',
//         'Billing Data Profile',
//         'Customer portal',
//         'Automatically Pushing of Data to Billing Systems',
//         'Built-In Audit Trail',
//         'Connect with APN SIM Cards',
//       ],
//     },
//     {
//       slug: 'transmission-service-bills',
//       name: 'Transmission Service Bills',
//       functionalFeatures: [
//         'Capture Billing Data Manually',
//         'Automatic Data Input',
//         'Customer payment entries',
//         'Submission/Retrieval of bills',
//       ],
//     },
//     {
//       slug: 'outage-management',
//       name: 'Planned Outage Management System (POMS)',
//       functionalFeatures: [
//         'Job Hazard Analysis',
//         'Dashboard',
//         'Application for Outage',
//         'Protection Guarantee',
//         'Stakeholder/Customer Portal',
//       ],
//     },
//   ],
//   'assets-management': [
//     {
//       slug: 'it-asset-management',
//       name: 'IT Asset Management',
//       functionalFeatures: [
//         'Computing Device Details',
//         'Asset Assignments',
//         'Maintenance Activities',
//         'Software Asset Management (SAM)',
//         'Work Order Management',
//       ],
//     },
//     {
//       slug: 'power-systems-asset-management',
//       name: 'Power Systems Asset Management',
//       functionalFeatures: [
//         'Substation Details',
//         'Line Details',
//         'Tower Details',
//         'Transformer',
//         'Meter Details',
//         'Maintenance',
//         'Warehousing',
//         'Asset Documents',
//       ],
//     },
//     {
//       slug: 'real-estate-management',
//       name: 'Real Estate Management',
//       functionalFeatures: [
//         'Property Register',
//         'Lease Document Tracking',
//         'Renewal Alerts',
//         'Occupancy Logs',
//         'Facility Maintenance Logs',
//         'Cost Allocation Reports',
//       ],
//     },
//     {
//       slug: 'transport-management',
//       name: 'Transport Management',
//       functionalFeatures: [
//         'Vehicle Details',
//         'Vehicle Assignments',
//         'Vehicle Logbook',
//         'Fuel Transactions Audit',
//         'Vehicle Tracking',
//         'Maintenance Requests',
//         'Maintenance Activities',
//         'Maintenance Scheduling',
//         'Fuel Top-Up Requests',
//         'Fuel Transactions Upload',
//       ],
//     },
//   ],
//   'hr-management': [
//     {
//       slug: 'recruitment',
//       name: 'Recruitment',
//       functionalFeatures: [
//         'Job Posting',
//         'Applicant Tracking',
//         'Interview Scheduling',
//         'Offer Management',
//         'Onboarding Workflow',
//       ],
//     },
//     {
//       slug: 'human-resource-management',
//       name: 'Human Resource Management',
//       functionalFeatures: [
//         'Employee Records',
//         'Position Management',
//         'Department Structure',
//         'HR Analytics',
//         'Policy Management',
//       ],
//     },
//     {
//       slug: 'time-attendance',
//       name: 'Time & Attendance',
//       functionalFeatures: [
//         'Clock-In/Clock-Out',
//         'Absence Tracking',
//         'Leave Requests',
//         'Attendance Analytics',
//         'Integration with Payroll',
//       ],
//     },
//     {
//       slug: 'employee-self-service',
//       name: 'Employee Self-Service',
//       functionalFeatures: [
//         'Profile Management',
//         'Leave Application',
//         'Payslip Access',
//         'Personal Data Update',
//         'Internal Requests',
//       ],
//     },
//     {
//       slug: 'associations-management',
//       name: 'Associations Management',
//       functionalFeatures: [
//         'Union Membership Tracking',
//         'Association Dues',
//         'Group Communications',
//         'Event Scheduling',
//         'Member Directory',
//       ],
//     },
//     {
//       slug: 'compensation-benefit-management',
//       name: 'Compensation & Benefit Management',
//       functionalFeatures: [
//         'Salary Structure',
//         'Benefits Enrollment',
//         'Bonus Calculation',
//         'Compensation Analytics',
//         'Allowance Management',
//       ],
//     },
//     {
//       slug: 'exit-onboarding-management',
//       name: 'Exit & Onboarding Management',
//       functionalFeatures: [
//         'Exit Interviews',
//         'Clearance Workflow',
//         'Onboarding Checklist',
//         'Document Collection',
//         'Role Assignment',
//       ],
//     },
//     {
//       slug: 'payroll-management',
//       name: 'Payroll Management',
//       functionalFeatures: [
//         'Salary Processing',
//         'Payslip Generation',
//         'Tax Deductions',
//         'Payroll Reports',
//         'Compliance Management',
//       ],
//     },
//     {
//       slug: 'performance-management',
//       name: 'Performance Management',
//       functionalFeatures: [
//         'Goal Setting',
//         'Appraisal Cycles',
//         'Feedback Collection',
//         'Performance Analytics',
//         'Improvement Plans',
//       ],
//     },
//     {
//       slug: 'staff-management',
//       name: 'Staff Management',
//       functionalFeatures: [
//         'Roster Planning',
//         'Shift Assignment',
//         'Staff Directory',
//         'Role Management',
//         'Team Analytics',
//       ],
//     },
//     {
//       slug: 'training-management',
//       name: 'Training Management',
//       functionalFeatures: [
//         'Course Catalog',
//         'Training Scheduling',
//         'Attendance Tracking',
//         'Certification Management',
//         'Training Analytics',
//       ],
//     },
//     {
//       slug: 'travels-management',
//       name: 'Travels Management',
//       functionalFeatures: [
//         'Travel Requests',
//         'Itinerary Planning',
//         'Expense Tracking',
//         'Approval Workflow',
//         'Travel History',
//       ],
//     },
//   ],
// }

// async function seedModules() {
//   console.log('🌱 Starting module seeding...\n')

//   const moduleIdMap: Record<string, string> = {}

//   // Create modules first
//   for (const moduleDef of moduleDefinitions) {
//     console.log(`📦 Creating module: ${moduleDef.name}`)

//     try {
//       const result = await client.createOrReplace({
//         _id: `module-${moduleDef.slug}`,
//         _type: 'module',
//         name: moduleDef.name,
//         slug: {
//           _type: 'slug',
//           current: moduleDef.slug,
//         },
//         description: moduleDef.description,
//         icon: moduleDef.icon,
//         order: moduleDef.order,
//       })

//       moduleIdMap[moduleDef.slug] = result._id
//       console.log(`   ✅ Created: ${result._id}`)
//     } catch (error) {
//       console.error(`   ❌ Error creating ${moduleDef.name}:`, error)
//     }
//   }

//   console.log('\n🌱 Starting submodule seeding...\n')

//   // Create submodules and link to parent modules
//   for (const [parentSlug, subModules] of Object.entries(subModuleDefinitions)) {
//     const parentId = moduleIdMap[parentSlug]

//     if (!parentId) {
//       console.log(`⚠️  Skipping submodules for ${parentSlug} - parent not found`)
//       continue
//     }

//     console.log(`\n📂 Creating submodules for: ${parentSlug}`)

//     const subModuleRefs: Array<{ _type: string; _ref: string }> = []

//     for (const subModuleDef of subModules) {
//       console.log(`   📄 Creating submodule: ${subModuleDef.name}`)

//       try {
//         const result = await client.createOrReplace({
//           _id: `submodule-${subModuleDef.slug}`,
//           _type: 'subModule',
//           name: subModuleDef.name,
//           slug: {
//             _type: 'slug',
//             current: subModuleDef.slug,
//           },
//           parentModule: {
//             _type: 'reference',
//             _ref: parentId,
//           },
//           functionalFeatures: subModuleDef.functionalFeatures,
//           order: subModules.indexOf(subModuleDef) + 1,
//         })

//         subModuleRefs.push({
//           _type: 'reference',
//           _ref: result._id,
//         })

//         console.log(`      ✅ Created: ${result._id}`)
//       } catch (error) {
//         console.error(`      ❌ Error creating ${subModuleDef.name}:`, error)
//       }
//     }

//     // Update parent module with submodule references
//     if (subModuleRefs.length > 0) {
//       try {
//         await client
//           .patch(parentId)
//           .set({ subModules: subModuleRefs })
//           .commit()
//         console.log(`   🔗 Linked ${subModuleRefs.length} submodules to ${parentSlug}`)
//       } catch (error) {
//         console.error(`   ❌ Error linking submodules to ${parentSlug}:`, error)
//       }
//     }
//   }

//   console.log('\n✨ Seeding complete!')
// }

// // Run the seed function
// seedModules().catch(console.error)
