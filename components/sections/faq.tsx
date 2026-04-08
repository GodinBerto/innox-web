'use client';

import { useEffect, useState } from 'react';
import { MotionWrapper } from '../hoc/motion-wrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

type FAQItem = {
  _key?: string;
  question?: string;
  answer?: string;
};

type FAQProps = {
  heading?: string;
  description?: string;
  faqs?: FAQItem[];
};

const defaultDescription =
  'Explore answers to the most common questions from our trusted partners and clients.';

function getItemValue(faq: FAQItem, index: number) {
  return faq._key ?? faq.question ?? `faq-${index}`;
}

export default function FAQ({
  heading = 'Frequently asked questions',
  description = defaultDescription,
  faqs = [],
}: FAQProps) {
  const items = faqs.filter(
    (faq): faq is FAQItem & { question: string; answer: string } =>
      Boolean(faq?.question && faq?.answer),
  );

  const initialOpenItem = items[0] ? getItemValue(items[0], 0) : '';
  const [openItem, setOpenItem] = useState(initialOpenItem);

  useEffect(() => {
    setOpenItem(initialOpenItem);
  }, [initialOpenItem]);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <MotionWrapper
            variant="slideRight"
            className="space-y-8 text-center lg:text-left"
          >
            <div className="max-w-md space-y-4 mx-auto lg:mx-0">
              <h2 className="max-w-[10ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.5rem]">
                {heading}
              </h2>
              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                {description}
              </p>
            </div>

            <div className="mx-auto w-full max-w-[460px] lg:mx-0">
              <div className="relative aspect-[1.45/0.86] overflow-hidden rounded-[1.75rem] border border-[#d9e8ff] bg-[#eef5ff] dark:border-slate-800 dark:bg-slate-950">
                <span
                  aria-hidden
                  className="absolute -left-14 top-10 h-3 w-52 rotate-[35deg] bg-white/75 dark:bg-slate-800"
                />
                <span
                  aria-hidden
                  className="absolute -left-10 bottom-14 h-3 w-56 rotate-[35deg] bg-[#bdd8ff] dark:bg-slate-800"
                />
                <span
                  aria-hidden
                  className="absolute right-8 top-12 h-3 w-40 rotate-[35deg] bg-[#d7e7ff] dark:bg-slate-800"
                />

                <div className="absolute inset-x-10 bottom-8 h-20 rounded-[1.6rem] border border-white/80 bg-white/70 dark:border-slate-700 dark:bg-slate-900" />

                <div className="absolute bottom-16 left-[16%] h-16 w-16 rounded-[1.35rem] border border-[#7db4ff]/30 bg-[#4da1ff] dark:border-blue-400/20 dark:bg-blue-500" />

                <div className="absolute bottom-16 left-[37%] flex items-end gap-2">
                  <span className="h-10 w-7 rounded-xl border border-[#d3e4ff] bg-[#dce9ff] dark:border-slate-700 dark:bg-slate-800" />
                  <span className="h-14 w-8 rounded-xl border border-[#d3e4ff] bg-[#cadeff] dark:border-slate-700 dark:bg-slate-800" />
                  <span className="h-12 w-7 rounded-xl border border-[#d3e4ff] bg-[#dce9ff] dark:border-slate-700 dark:bg-slate-800" />
                </div>

                <div className="absolute right-10 top-6 flex h-40 w-36 rotate-[14deg] flex-col justify-between rounded-[1.75rem] border border-[#bfd7ff] bg-[#dcebff] px-4 py-5 dark:border-slate-700 dark:bg-slate-900">
                  <span className="h-2.5 w-14 rounded-full bg-white/80 dark:bg-slate-700" />
                  <div className="space-y-2">
                    <span className="block h-2 w-20 rounded-full bg-white/70 dark:bg-slate-700" />
                    <span className="block h-2 w-16 rounded-full bg-white/60 dark:bg-slate-700" />
                  </div>
                </div>

                <div className="absolute inset-x-14 bottom-10 h-3 rounded-full bg-white/80 blur-sm dark:bg-blue-400/20" />
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideLeft" className="w-full">
            <Accordion
              type="single"
              collapsible
              value={openItem}
              onValueChange={setOpenItem}
              className="space-y-3"
            >
              {items.map((faq, index) => {
                const value = getItemValue(faq, index);

                return (
                  <AccordionItem
                    key={value}
                    value={value}
                    className="overflow-hidden rounded-[1.15rem] border border-border bg-background px-0 last:border-b data-[state=open]:border-[#a9c7ff] dark:data-[state=open]:border-blue-500/40"
                  >
                    <AccordionTrigger className="px-5 py-5 text-left text-base font-medium text-foreground hover:no-underline sm:px-6 sm:text-[1.05rem]">
                      <span className="pr-6 leading-6">{faq.question}</span>
                    </AccordionTrigger>

                    <AccordionContent className="px-5 pb-5 text-sm leading-7 text-muted-foreground sm:px-6 sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
