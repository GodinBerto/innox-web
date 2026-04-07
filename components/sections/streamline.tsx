'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Layers3,
  Workflow,
} from 'lucide-react';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';

const highlightPoints = [
  'Automate repetitive approvals and handoffs',
  'Unify HR, finance, legal, and operations data',
  'Track progress with real-time team visibility',
  'Launch new workflows without switching tools',
] as const;

export default function Streamline() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Layers3 className="absolute left-10 top-24 h-40 w-40 text-[#11356D]/5" />
        <Workflow className="absolute -right-20 md:right-14 top-[600px] md:top-40 h-56 w-56 text-[#EF6411]/5" />
      </div>

      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <MotionWrapper
            variant="slideRight"
            className="space-y-6 text-center lg:text-left"
          >
            <span className="inline-flex rounded-full border border-[#11356D]/20 bg-[#11356D]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#11356D] dark:text-blue-300">
              Operations Suite
            </span>

            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Streamline Your Business Operations With
              <span className="bg-linear-to-r from-[#11356D] to-[#EF6411] bg-clip-text px-2 text-transparent">
                InnoX
              </span>
            </h2>

            <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base lg:mx-0">
              Coordinate teams, documents, and mission-critical workflows from a
              single control center built for growing organizations.
            </p>

            <div className="grid gap-3 text-left sm:grid-cols-2">
              {highlightPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-2p-3 backdrop-blur-sm "
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#EF6411]" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center pt-2 lg:justify-start">
              <Link href={'/Modules'}>
                <Button
                  size="lg"
                  className="h-11 rounded-full bg-[#EF6411] px-8 text-white hover:bg-[#d9570e]"
                >
                  Get Started
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </MotionWrapper>

          <MotionWrapper
            variant="slideLeft"
            className="flex w-full items-center justify-center"
          >
            <div className="relative w-full max-w-[560px] pb-14 pt-12 sm:pb-16 sm:pt-16">
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 -z-10 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-[#11356D]/25 to-[#EF6411]/20 blur-2xl"
                animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="pointer-events-none absolute right-6 top-10 z-30 rounded-2xl border border-white/40 bg-white/70 p-2 text-[#11356D]/75 shadow-lg backdrop-blur-md dark:border-slate-700/50 dark:bg-slate-900/60 dark:text-blue-300/80">
                <BarChart3 className="h-5 w-5" />
              </div>

              <div className="relative z-20 overflow-hidden rounded-3xl border border-white/40 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
                  alt="Operations team monitoring business workflows"
                  width={1200}
                  height={800}
                  className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[380px]"
                />
                <div className="absolute max-w-[200px] md:max-w-[300px] inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                    Unified Dashboard
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Live operational visibility across departments
                  </p>
                </div>
              </div>

              <motion.div
                className="absolute -left-2 top-0 z-30 w-[45%] max-w-[220px] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl sm:-left-8"
                animate={{ y: [0, 10, 0], rotate: [-2, 1.5, -2] }}
                transition={{
                  duration: 7.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
                  alt="Professional planning workflow tasks"
                  width={500}
                  height={600}
                  className="h-[150px] w-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-1 right-0 z-30 w-[44%] max-w-[210px] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-xl sm:-right-6"
                animate={{ y: [0, -9, 0], rotate: [2, -1, 2] }}
                transition={{
                  duration: 7.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop"
                  alt="Team discussing business analytics"
                  width={500}
                  height={600}
                  className="h-[170px] w-full object-cover"
                />
              </motion.div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
