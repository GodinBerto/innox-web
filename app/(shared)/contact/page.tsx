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
    city: 'Accra',
    country: 'Ghana',
    address: 'Osu Badu Ave, Accra',
    postalCode: 'Accra, Ghana 00000',
    phone: '+233 55 604 5811',
    phone2: '+1 855-221-9979',
    email: 'info@innorik.com',
    label: 'Headquarters',
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
    <div className="relative aspect-[1.05/0.9] overflow-hidden rounded-[2rem] border border-border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5246.309403983805!2d-0.19479480469490415!3d5.614849712866977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf85e6c000e74b%3A0xfac583f9c673f529!2sInnorik%20Ltd!5e0!3m2!1sen!2sgh!4v1777987874130!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState(defaultFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const headquarter = offices[0];
  const regionalOffices = offices.slice(1);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitError('');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? 'Could not send message.');
      }

      setIsSubmitted(true);
      setFormState(defaultFormState);
      window.setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
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
                      info@innorik.com
                    </a>
                    <a
                      href="tel:+15552311221"
                      className="block font-medium text-foreground transition hover:text-[#EF6411]"
                    >
                      +233 55 604 5811
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
                        className="min-h-40 w-full resize-none rounded-xl bg-background"
                      />

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="h-11 w-full rounded-full bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? 'Sending...' : 'Submit'}
                      </Button>

                      {submitError ? (
                        <p className="text-center text-xs leading-5 text-red-600 dark:text-red-400">
                          {submitError}
                        </p>
                      ) : null}

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
                    <div className="flex gap-3">
                      <a
                        href={`tel:${headquarter.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-sm text-foreground transition hover:text-[#EF6411]"
                      >
                        <Phone className="h-4 w-4 text-[#EF6411]" />
                        {headquarter.phone}
                      </a>{' '}
                      /
                      <a
                        href={`tel:${headquarter.phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-sm text-foreground transition hover:text-[#EF6411]"
                      >
                        {headquarter.phone2}
                      </a>
                    </div>
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
