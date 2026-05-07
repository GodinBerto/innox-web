import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  CirclePlay,
  Eye,
  Gauge,
  Layers3,
  LineChart,
  Link2,
  ShieldCheck,
} from 'lucide-react';
import FAQ from '@/components/sections/faq';
import { MotionWrapper } from '@/components/hoc/motion-wrapper';

type HighlightCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ModulePreview = {
  title: string;
  description: string;
  image: string;
  link: string;
};

type StatCard = {
  value: string;
  label: string;
};

const ctaPrimaryClassName =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[#1f1f1f] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black';

const storyStats: StatCard[] = [
  { value: '1', label: 'Unified operations platform' },
  { value: '6', label: 'Core functions connected' },
  { value: '15+', label: 'Years of industry experience' },
  { value: 'Real-time', label: 'Visibility and insights' },
];

const platformHighlights: HighlightCard[] = [
  {
    icon: Layers3,
    title: 'Unified Performance Oversight',
    description:
      'Gain a 360° view of tasks, operations, and assignments across your organization for complete control and accountability.',
  },
  {
    icon: Eye,
    title: 'Instant Accessibility',
    description:
      'Access accurate, reliable information instantly, anytime and anywhere, enabling faster response and execution.',
  },
  {
    icon: Gauge,
    title: 'Operational Efficiency',
    description:
      'Streamline processes, reduce manual effort, and improve service delivery while minimizing human errors.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Insights',
    description:
      'Leverage up-to-the-minute data to eliminate duplication, prevent inconsistencies, and drive informed decisions.',
  },
  {
    icon: ShieldCheck,
    title: 'Data Security & Integrity',
    description:
      'Ensure secure data flow across systems while maintaining accuracy, consistency, and reliability at every level.',
  },
  {
    icon: Link2,
    title: 'Seamless Integration & Cost Optimization',
    description:
      'Integrate effortlessly with Oracle ERP, Computron Financials, SAP, and SCADA with minimal configuration.',
  },
];

const modulePreviews: ModulePreview[] = [
  {
    title: 'Human Resource Management',
    description:
      'Bring employee data, approvals, and workforce visibility into one connected operating view.',
    image: '/assets/images/smarter-hr.png',
    link: '/modules/human-resource-management-system-hrms',
  },
  {
    title: 'Asset Management',
    description:
      'Track physical infrastructure, fleet, and operational assets with clearer ownership and lifecycle control.',
    image: '/assets/images/manage-assets.png',
    link: '/modules/assets-management',
  },
  {
    title: 'Finance & Accounting',
    description:
      'Connect financial workflows, reduce duplicate handling, and improve reporting confidence across teams.',
    image: '/assets/images/finance.png',
    link: '/modules/financials-and-accounting',
  },
  {
    title: 'Operations & Power Apps',
    description:
      'Support field operations, outage workflows, and real-time coordination from one operational workspace.',
    image: '/assets/images/operations.png',
    link: '/modules/power-applications',
  },
];

const aboutFaqs = [
  {
    question: 'What is InnoX?',
    answer:
      'InnoX is a unified operations platform that integrates core business functions into a single system, enabling organizations to streamline processes, improve visibility, and make data-driven decisions.',
  },
  {
    question: 'Can InnoX integrate with existing systems?',
    answer:
      'Yes. InnoX is designed to integrate seamlessly with enterprise systems such as Oracle, SAP, SCADA, and other third-party platforms with minimal configuration.',
  },
  {
    question: 'Is InnoX scalable?',
    answer:
      'Absolutely. InnoX is built to scale with your organization, supporting growth, increased data volume, and expanding operational needs.',
  },
  {
    question: 'Is data secure on InnoX?',
    answer:
      'Yes. InnoX is built with enterprise-grade security measures to ensure data integrity, secure access, and protection against unauthorized use.',
  },
  {
    question: 'Can InnoX be customized?',
    answer:
      'Yes. InnoX is highly flexible and can be tailored to meet the specific requirements of different organizations and industries.',
  },
  {
    question: 'How can we get started with InnoX?',
    answer:
      'You can request a demo through our website or contact our team to discuss your requirements and explore how InnoX can support your operations.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-[1440px] space-y-6 px-4 py-4 sm:px-5 md:px-6 md:py-6 lg:px-8">
        <section>
          <MotionWrapper variant="slideLeft" className="overflow-hidden">
            <div className="flex min-h-[300px] items-center justify-center px-8 py-16 text-center text-forground sm:px-10 md:min-h-[360px] md:py-20">
              <div className="max-w-3xl space-y-4">
                <p className="text-sm text-foreground/70 sm:text-base">
                  About Us
                </p>
                <h2 className="text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                  Built to Simplify Complexity and Power Smarter Operations
                </h2>
              </div>
            </div>
          </MotionWrapper>
        </section>

        <section className="my-20">
          <div className="space-y-6">
            <MotionWrapper
              variant="slideUp"
              className="rounded-[2rem] p-7 md:p-8"
            >
              <div className="space-y-5">
                <span className="inline-flex px-3 py-1 text-[11px] font-medium text-slate-600 dark:text-white">
                  Our Story
                </span>
                <h3 className="max-w-[16ch] text-4xl font-semibold leading-none tracking-[-0.05em] text-[#1f1f1f] dark:text-white sm:text-5xl">
                  One connected platform for mission-critical operations
                </h3>
              </div>

              <div className="mt-7 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative overflow-hidden rounded-[1.7rem] bg-white">
                  <Image
                    src="/assets/images/modules/dark-hero.jpg"
                    alt="InnoX operational overview"
                    width={6000}
                    height={4000}
                    className="h-full min-h-80 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/15 text-white backdrop-blur">
                      <CirclePlay className="h-7 w-7" />
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-200 sm:text-base">
                    <p className="font-medium text-slate-900 dark:text-white">
                      Built on over 15 years of industry experience and
                      continuous refinement, InnoX combines operational insight
                      with reliable technology.
                    </p>
                    <p>
                      It brings together critical business functions including
                      Electronic Logging, Outage Management, Trouble Reporting,
                      Finance, HR, and Asset Management into a single,
                      intelligent system.
                    </p>
                    <p>
                      With InnoX, organizations eliminate silos, reduce manual
                      processes, and gain real-time insights to operate more
                      efficiently.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-black/10 pt-5 md:grid-cols-4">
                    {storyStats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-3xl font-semibold tracking-[-0.05em] text-[#1f1f1f] dark:text-white">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </section>

        <section className="">
          <div className="space-y-6">
            <div className="flex gap-3">
              <MotionWrapper
                variant="slideRight"
                className="rounded-[2rem] bg-background p-7 md:p-8 min-w-[500px] mx-auto"
              >
                <div className="space-y-5">
                  <span className="inline-flex rounded-full border border-forground/10 px-3 py-1 text-[11px] font-medium text-foreground">
                    About InnoX Platform
                  </span>
                  <h1 className="max-w-[10ch] text-4xl font-semibold leading-none tracking-[-0.06em] text-foreground sm:text-5xl">
                    Transforming How Organizations Operate
                  </h1>
                  <p className="max-w-md text-sm leading-7 text-foreground sm:text-base">
                    InnoX is a unified operations platform designed to
                    streamline processes, enhance visibility, and improve
                    decision-making across organizations.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className={ctaPrimaryClassName}>
                      Request Demo <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper
                variant="slideLeft"
                className="overflow-hidden rounded-[2rem] bg-white dark:bg-black border dark:border-stone-500/20 border-stone-200 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="relative">
                  <Image
                    src="/assets/images/cta-journey.jpg"
                    alt="Our mission at InnoX"
                    width={1400}
                    height={2100}
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-xl font-semibold text-[#1f1f1f] dark:text-white">
                    Our Mission
                  </p>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    To empower organizations across Africa and beyond with a
                    unified operations platform that simplifies complexity,
                    enhances visibility, and drives efficient, data-driven
                    decision-making.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper
                variant="slideLeft"
                className="overflow-hidden rounded-[2rem] bg-white dark:bg-black border dark:border-stone-500/20 border-stone-200 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="relative">
                  <Image
                    src="/assets/images/cta-journey.jpg"
                    alt="Our mission at InnoX"
                    width={1400}
                    height={2100}
                    className="h-60 w-full object-cover"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-xl font-semibold text-[#1f1f1f] dark:text-white">
                    Our Vision
                  </p>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    To become a leading global platform for enterprise
                    operations, transforming how organizations manage, automate,
                    and scale their processes through intelligent, integrated,
                    and reliable technology.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </section>

        <section className="my-20">
          <MotionWrapper variant="slideUp" className=" ">
            <div
              className="h-full w-full p-8 md:p-10 rounded-[2rem] text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] overflow-hidden relative"
              style={{
                backgroundImage: 'url(\'/assets/images/finance.png\')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="bg-black/50 h-full w-full absolute top-0 left-0" />
              <div className="max-w-xl space-y-5 relative">
                <h2 className="max-w-[12ch] text-4xl font-semibold leading-none tracking-[-0.06em] sm:text-5xl">
                  Built for scale, visibility, and smarter response.
                </h2>

                <p className="text-sm leading-7 text-white/75 sm:text-base">
                  Built for scalability and reliability, InnoX empowers teams to
                  work smarter, respond faster, and drive sustainable growth. It
                  reflects deep operational insight across mission-critical
                  environments.
                </p>

                <Link
                  href="/modules"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Explore Modules
                </Link>
              </div>
            </div>
          </MotionWrapper>
        </section>

        <section className="my-20">
          <MotionWrapper variant="slideRight" className=" ">
            <div className="space-y-4">
              <span className="inline-flex rounded-full px-3 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-200">
                Why Choose InnoX
              </span>
              <h2 className="max-w-[16ch] text-4xl font-semibold leading-none tracking-[-0.05em] text-[#1f1f1f] dark:text-white sm:text-5xl">
                The clarity teams need to work faster and smarter
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-200 sm:text-base">
                InnoX is built to automate and optimize organizational
                processes, providing instant access to critical information and
                enabling faster, smarter decision-making across all levels.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {platformHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={'rounded-[1.6rem] border border-black/8 p-5 group bg-white text-slate-950 dark:bg-black dark:text-white transition hover:bg-black/5 hover:text-slate-900 dark:hover:bg-white/5 dark:hover:text-slate-200'}
                  >
                    <div
                      className={'flex h-11 w-11 items-center justify-center rounded-2xl bg-black/5 text-slate-900 dark:bg-white/10 dark:text-white transition group-hover:bg-background/10 group-hover:text-slate-900 dark:group-hover:bg-white/20 dark:group-hover:text-slate-200'}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold leading-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-7 ${
                        index === 0 || index === 3
                          ? 'text-slate-600'
                          : 'text-slate-600'
                      }`}
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </MotionWrapper>
        </section>

        <section className="rounded-[2rem]  md:p-8 lg:p-10">
          <MotionWrapper variant="slideUp" className="text-center">
            <span className="inline-flex rounded-full border border-black/10 px-3 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-200">
              Modules Preview
            </span>
            <h2 className="mx-auto mt-5 max-w-[14ch] text-4xl font-semibold leading-none tracking-[-0.05em] text-[#1f1f1f] dark:text-white sm:text-5xl">
              Ready to see InnoX in action?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-200 sm:text-base">
              InnoX brings together critical business functions in one platform.
              Start with the modules your teams need most, then expand smoothly
              as operations grow.
            </p>
          </MotionWrapper>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {modulePreviews.map((module, index) => (
              <MotionWrapper
                key={module.title}
                variant={index % 2 === 0 ? 'slideUp' : 'slideLeft'}
              >
                <article className="overflow-hidden rounded-[1.7rem] border border-black/8 dark:border-white/8 bg-white dark:bg-black h-[460px]">
                  <div className="overflow-hidden">
                    <Image
                      src={module.image}
                      alt={module.title}
                      width={1440}
                      height={606}
                      className="h-[220px] w-full object-cover object-top"
                    />
                  </div>

                  <div className="flex h-60 flex-col justify-between p-5">
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight text-[#1f1f1f] dark:text-white">
                        {module.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-200">
                        {module.description}
                      </p>
                    </div>

                    <Link
                      href={module.link}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-black/30 w-fit"
                    >
                      Explore Module <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </MotionWrapper>
            ))}
          </div>
        </section>

        <FAQ
          heading="Frequently asked questions"
          description="Answers to the questions organizations usually ask when evaluating InnoX for integration, scale, security, and rollout."
          faqs={aboutFaqs}
        />
      </main>
    </div>
  );
}
