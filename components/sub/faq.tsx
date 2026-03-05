'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Inova HRMS Performance Management?',
    answer:
      'Inova HRMS Performance Management is a comprehensive solution that helps organizations track, evaluate, and improve employee performance. It includes goal setting, performance reviews, competency assessments, and continuous feedback tools.',
  },
  {
    question: 'How does the KPI setting feature work?',
    answer:
      'Our KPI setting feature allows you to create SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) for individuals and teams. You can define custom metrics, set targets, and track progress in real-time through intuitive dashboards.',
  },
  {
    question: 'Can I customize the performance review templates?',
    answer:
      'Yes, Inova HRMS offers fully customizable review templates. You can create templates based on roles, departments, or specific evaluation criteria. Our template builder includes drag-and-drop functionality for easy customization.',
  },
  {
    question: 'Is the system suitable for remote teams?',
    answer:
      'Absolutely! Inova HRMS is built for modern distributed teams. It works seamlessly across all devices and includes features specifically designed for remote performance management, including asynchronous feedback and virtual check-ins.',
  },
  {
    question: 'How secure is my employee data?',
    answer:
      'We take security seriously. Inova HRMS is SOC 2 Type II compliant, GDPR-ready, and uses bank-level encryption for all data. We perform regular security audits and offer enterprise-grade access controls.',
  },
  {
    question: 'What integrations are available?',
    answer:
      'Inova HRMS integrates with popular tools including Slack, Microsoft Teams, Google Workspace, Okta, and major HRIS systems. We also offer a robust API for custom integrations.',
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Got a question? We have got answers. If you have some other
            questions, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
