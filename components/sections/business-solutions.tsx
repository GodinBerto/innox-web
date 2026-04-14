'use client';

import { MotionWrapper } from '../hoc/motion-wrapper';
import {
  Boxes,
  Fingerprint,
  MessagesSquare,
  Printer,
  Scale,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: 'Power Apps',
    description:
      'Coordinate utility operations, field visibility, and outage workflows from one connected platform.',
    icon: Zap,
    iconBg: 'bg-gradient-to-br from-red-500 via-red-500 to-black',
    features: [
      'eLog Book',
      'Telemetry (iTel)',
      'Transmission Service Bills',
      'Planned Outage Management System (POMS)',
    ],
  },
  {
    title: 'Asset Management System',
    description:
      'Track assignments, maintenance, and asset performance across infrastructure, fleet, and IT resources.',
    icon: Boxes,
    iconBg: 'bg-gradient-to-br from-yellow-500 via-yellow-500 to-black',
    features: [
      'IT Asset Management',
      'Power Systems Asset Management',
      'Transport Management',
      'Real Estate Management',
    ],
  },
  {
    title: 'Legal Management System',
    description:
      'Centralize legal records, references, and matter workflows in one secure operational workspace.',
    icon: Scale,
    iconBg: 'bg-gradient-to-br from-green-500 via-green-500 to-black',
    features: [
      'Case Management',
      'Legal Research & Reference',
      'Document Archiving',
      'Laws & Judgement Catalogues',
    ],
  },
  {
    title: 'Automated Biometric Identification System',
    description:
      'Support biometric enrollment, identity verification, and traceable review workflows with stronger security.',
    icon: Fingerprint,
    iconBg: 'bg-gradient-to-br from-blue-500 via-blue-500 to-black',
    features: [
      'Biometric Enrollment',
      'Identity Verification',
      'Watchlist Screening',
      'Audit & Reporting',
    ],
  },
  {
    title: 'Print Management System',
    description:
      'Manage print requests, device usage, and output tracking from one controlled print workflow.',
    icon: Printer,
    iconBg: 'bg-gradient-to-br from-orange-500 via-orange-500 to-black',
    features: [
      'Print Job Requests',
      'Queue Monitoring',
      'Device Management',
      'Usage Reports',
    ],
  },
  {
    title: 'Central Messaging System',
    description:
      'Deliver coordinated alerts, campaigns, and transactional updates across a single communication hub.',
    icon: MessagesSquare,
    iconBg: 'bg-gradient-to-br from-cyan-500 via-cyan-500 to-black',
    features: [
      'Bulk SMS',
      'Email Notifications',
      'Contact Groups',
      'Delivery Reports',
    ],
  },
] as const;

export default function BusinessSolutions() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-8 -z-10 mx-auto h-56 w-full max-w-5xl bg-[radial-gradient(circle_at_center,rgba(17,53,109,0.15),rgba(239,100,17,0.08),transparent_70%)] blur-2xl" />
      <div className="container mx-auto px-4 justify-center flex flex-col items-center text-center">
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
                <article className="group h-full p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#11356D]/40 hover:shadow-xl">
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

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 text-start">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300 text-start">
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
        <div className="w- mx-auto mt-10 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#11356D]/90 focus:outline-none focus:ring-2 focus:ring-[#11356D]/50 focus:ring-offset-2"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
