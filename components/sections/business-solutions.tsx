'use client';

import { MotionWrapper } from '../hoc/motion-wrapper';
import {
  BriefcaseBusiness,
  Building2,
  Calculator,
  Scale,
  ShieldCheck,
  Zap,
} from 'lucide-react';

const solutions = [
  {
    title: 'Human Resource',
    description:
      'Run hiring, employee records, and attendance from one connected workspace.',
    icon: BriefcaseBusiness,
    iconBg: 'bg-gradient-to-br from-[#11356D] to-[#2457A7]',
    features: [
      'Human Resource Management',
      'Recruitment',
      'Time & Attendance',
      'Employee Self-Service',
    ],
  },
  {
    title: 'Finance & Accounting',
    description:
      'Gain real-time control over budgets, payroll, procurement, and billing.',
    icon: Calculator,
    iconBg: 'bg-gradient-to-br from-[#EF6411] to-[#F7953D]',
    features: [
      'Financials & Accounting',
      'Payroll Management',
      'Budget Management',
      'Procurement and Billing',
    ],
  },
  {
    title: 'Administration',
    description:
      'Coordinate teams, projects, and reporting workflows without scattered tools.',
    icon: Building2,
    iconBg: 'bg-gradient-to-br from-[#0F7B6C] to-[#24A18B]',
    features: [
      'Task Management',
      'Project Management',
      'Activity Reports',
      'Document Management',
    ],
  },
  {
    title: 'Legal Compliance',
    description:
      'Track cases, documents, and obligations while keeping compliance evidence organized.',
    icon: Scale,
    iconBg: 'bg-gradient-to-br from-[#264653] to-[#3A6073]',
    features: [
      'Legal Management',
      'Compliance Tracking',
      'Case Management',
      'Document Archiving',
    ],
  },
  {
    title: 'Power and Utilities',
    description:
      'Improve field operations with outage planning, telemetry, and asset control.',
    icon: Zap,
    iconBg: 'bg-gradient-to-br from-[#1A759F] to-[#34A0A4]',
    features: [
      'Power Apps',
      'eLog Book',
      'Telemetry (iTel)',
      'Planned Outage Management',
    ],
  },
  {
    title: 'Safety and Risk',
    description:
      'Standardize safety workflows and keep incidents, audits, and requests actionable.',
    icon: ShieldCheck,
    iconBg: 'bg-gradient-to-br from-[#7A3E1D] to-[#B96530]',
    features: [
      'Safety Management',
      'Accident Reporting',
      'PPE Requests',
      'Safety Group Management',
    ],
  },
] as const;

export default function BusinessSolutions() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-8 -z-10 mx-auto h-56 w-full max-w-5xl bg-[radial-gradient(circle_at_center,rgba(17,53,109,0.15),rgba(239,100,17,0.08),transparent_70%)] blur-2xl" />
      <div className="container mx-auto px-4">
        <MotionWrapper
          variant="slideLeft"
          className="mx-auto max-w-3xl space-y-4 text-center"
        >
          <p className="inline-flex rounded-full border border-[#11356D]/20 bg-[#11356D]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#11356D] dark:text-blue-300">
            Solutions
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Business Solutions With <span className="gradient-text">InnoX</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Choose the modules your team needs today, then expand smoothly as
            operations grow.
          </p>
        </MotionWrapper>

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <MotionWrapper key={solution.title} variant="slideUp">
                <article className="group h-full p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#11356D]/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950/60">
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${solution.iconBg}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.2em] text-slate-400 dark:text-slate-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {solution.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#EF6411]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
