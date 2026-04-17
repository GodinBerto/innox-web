'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import FAQ from '@/components/sections/faq';
import { faqs } from '@/data';

const contactHighlights = [
  {
    title: 'Customer Support',
    description:
      'Our support team is available around the clock to address any concerns or answer your questions.',
  },
  {
    title: 'Feedback and Suggestions',
    description:
      'We value your feedback and are continuously working to improve InnoX for every team that uses it.',
  },
  {
    title: 'Media Inquiries',
    description:
      'For media-related questions or press inquiries, please contact our communications team.',
  },
] as const;

const offices = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '123 Tech Boulevard, Suite 456',
    postalCode: 'San Francisco, CA 94105',
    phone: '+1 (555) 231-1221',
    email: 'hello@innoxsystems.com',
    label: 'Headquarters',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '45 Fleet Street, 3rd Floor',
    postalCode: 'EC4Y 1BT',
    phone: '+44 20 7123 4567',
    email: 'london@innoxsystems.com',
    label: 'Europe',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Raffles Place, Level 20',
    postalCode: '048616',
    phone: '+65 6123 4567',
    email: 'apac@innoxsystems.com',
    label: 'APAC',
  },
] as const;

const defaultFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

function MapPreview() {
  return (
    <div className="relative aspect-[1.05/0.9] overflow-hidden rounded-[2rem] border border-border bg-muted/50 dark:bg-muted/25">
      <div className="absolute inset-0">
        <span className="absolute left-6 right-6 top-8 h-px bg-white/80 dark:bg-white/10" />
        <span className="absolute left-10 right-10 top-24 h-px bg-white/75 dark:bg-white/10" />
        <span className="absolute left-8 right-8 top-40 h-px bg-white/80 dark:bg-white/10" />
        <span className="absolute bottom-[4.5rem] left-10 right-12 h-px bg-white/70 dark:bg-white/10" />
        <span className="absolute bottom-8 left-6 right-6 h-px bg-white/80 dark:bg-white/10" />

        <span className="absolute bottom-6 top-6 left-16 w-px bg-white/70 dark:bg-white/10" />
        <span className="absolute bottom-8 top-10 left-[38%] w-px bg-white/80 dark:bg-white/10" />
        <span className="absolute bottom-8 top-8 left-[63%] w-px bg-white/75 dark:bg-white/10" />
        <span className="absolute bottom-6 top-12 right-14 w-px bg-white/70 dark:bg-white/10" />

        <span className="absolute left-4 top-14 h-px w-48 rotate-[28deg] bg-white/80 dark:bg-white/10" />
        <span className="absolute right-2 top-20 h-px w-52 rotate-[-22deg] bg-white/80 dark:bg-white/10" />
        <span className="absolute bottom-[4.5rem] left-[4.5rem] h-px w-56 rotate-[-18deg] bg-white/80 dark:bg-white/10" />
        <span className="absolute bottom-16 right-8 h-px w-44 rotate-[22deg] bg-white/80 dark:bg-white/10" />
      </div>

      <div className="absolute left-6 top-6 w-[15.5rem] rounded-[1.4rem] border border-border bg-card p-4 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#11356D]/10 text-[#11356D] dark:bg-[#11356D]/25 dark:text-blue-200">
            <MapPin className="h-4 w-4" />
          </div>
          <div className="space-y-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              InnoX Inc.
            </p>
            <p className="text-sm font-semibold text-foreground">
              San Francisco, USA
            </p>
            <p className="text-xs leading-5 text-muted-foreground">
              123 Tech Boulevard, Suite 456
            </p>
            <p className="text-xs font-medium text-[#11356D] dark:text-blue-200">
              Open Google Maps
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[63%] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-[#EF6411] shadow-[0_0_0_12px_rgba(239,100,17,0.14)] dark:border-card dark:shadow-[0_0_0_12px_rgba(239,100,17,0.12)]" />
    </div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState(defaultFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headquarter = offices[0];
  const regionalOffices = offices.slice(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormState(defaultFormState);
    window.setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="border-b border-border bg-muted/30">
          <div className="container py-12 lg:py-16">
            <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="space-y-10">
                <div className="space-y-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EF6411]">
                    Contact Us
                  </p>

                  <div className="space-y-4">
                    <h1 className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
                      Contact Us
                    </h1>
                    <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      Email, call, or complete the form to learn how InnoX can
                      help your team simplify operations and improve response
                      time across the business.
                    </p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <a
                      href="mailto:hello@innoxsystems.com"
                      className="block font-medium text-foreground transition hover:text-[#EF6411]"
                    >
                      hello@innoxsystems.com
                    </a>
                    <a
                      href="tel:+15552311221"
                      className="block font-medium text-foreground transition hover:text-[#EF6411]"
                    >
                      +1 (555) 231-1221
                    </a>
                    <p className="text-muted-foreground">Customer Support</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  {contactHighlights.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <h2 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h2>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                    Get in Touch
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    You can reach us anytime
                  </p>
                </div>

                <div className="mt-8">
                  {isSubmitted ? (
                    <div className="flex min-h-80 flex-col items-center justify-center text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
                        <CheckCircle className="h-8 w-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Message Sent
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                        Thanks for reaching out. Our team will get back to you
                        shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="First name"
                          value={formState.firstName}
                          onChange={(e) =>
                            setFormState((current) => ({
                              ...current,
                              firstName: e.target.value,
                            }))
                          }
                          required
                          className="h-11 rounded-xl bg-background"
                        />
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          value={formState.lastName}
                          onChange={(e) =>
                            setFormState((current) => ({
                              ...current,
                              lastName: e.target.value,
                            }))
                          }
                          required
                          className="h-11 rounded-xl bg-background"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState((current) => ({
                              ...current,
                              email: e.target.value,
                            }))
                          }
                          required
                          className="h-11 rounded-xl bg-background"
                        />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Phone number"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState((current) => ({
                              ...current,
                              phone: e.target.value,
                            }))
                          }
                          className="h-11 rounded-xl bg-background"
                        />
                      </div>

                      <Textarea
                        id="message"
                        placeholder="How can we help?"
                        value={formState.message}
                        onChange={(e) =>
                          setFormState((current) => ({
                            ...current,
                            message: e.target.value,
                          }))
                        }
                        required
                        rows={6}
                        className="min-h-[10rem] w-full resize-none rounded-xl bg-background"
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="h-11 w-full rounded-full bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Submit
                      </Button>

                      <p className="text-center text-xs leading-5 text-muted-foreground">
                        By contacting us, you agree to our terms of service and
                        privacy policy.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-16 lg:py-20">
          <div className="container">
            <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
              <MapPreview />

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#EF6411]">
                    Our Location
                  </p>
                  <h2 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
                    Connecting Near and Far
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {headquarter.label}
                    </p>
                    <div className="mt-3 space-y-1 text-sm leading-6 text-muted-foreground">
                      <p>{headquarter.city}</p>
                      <p>{headquarter.address}</p>
                      <p>{headquarter.postalCode}</p>
                      <p>{headquarter.country}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href={`tel:${headquarter.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 text-sm text-foreground transition hover:text-[#EF6411]"
                    >
                      <Phone className="h-4 w-4 text-[#EF6411]" />
                      {headquarter.phone}
                    </a>
                    <a
                      href={`mailto:${headquarter.email}`}
                      className="flex items-center gap-3 text-sm text-foreground transition hover:text-[#EF6411]"
                    >
                      <Mail className="h-4 w-4 text-[#EF6411]" />
                      {headquarter.email}
                    </a>
                    <p className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#EF6411]" />
                      Global support coverage across North America, Europe, and
                      Asia Pacific.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {regionalOffices.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-[1.4rem] border border-border bg-card p-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {office.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {office.city}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {office.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQ
          heading="Do you have any questions for us?"
          description="If there are questions you want to ask, we will answer all your questions."
          faqs={faqs}
        />
      </main>
    </div>
  );
}
