'use client';

import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Headphones,
  Building2,
  Send,
  CheckCircle,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import FAQ from '@/components/sections/faq';
import { faqs } from '@/data';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    contact: 'hello@inova-hrms.com',
    action: 'mailto:hello@inova-hrms.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 8am to 5pm',
    contact: '+1 (555) 123-4567',
    action: 'tel:+15551234567',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    contact: 'Available 24/7',
    action: '#',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Come say hello',
    contact: '123 Market St, San Francisco',
    action: '#',
  },
];

const offices = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '123 Market Street, Suite 400',
    postalCode: 'CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@inova-hrms.com',
    flag: 'HQ',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '45 Fleet Street, 3rd Floor',
    postalCode: 'EC4Y 1BT',
    phone: '+44 20 7123 4567',
    email: 'london@inova-hrms.com',
    flag: 'EU',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '1 Raffles Place, Level 20',
    postalCode: '048616',
    phone: '+65 6123 4567',
    email: 'singapore@inova-hrms.com',
    flag: 'APAC',
  },
];

const supportOptions = [
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Get help with technical issues and product questions',
    email: 'support@inova-hrms.com',
  },
  {
    icon: Building2,
    title: 'Sales Inquiries',
    description: 'Learn more about our products and pricing',
    email: 'sales@inova-hrms.com',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section with Illustration */}
        <section className="relative overflow-hidden  lg:py-28">
          <div className="absolute inset-0 opacity-35 dark:opacity-70">
            <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-orange-300/50 blur-3xl dark:bg-orange-600/15"></div>
            <div className="absolute bottom-10 right-20 h-96 w-96 rounded-full bg-amber-300/50 blur-3xl dark:bg-amber-500/10"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-6">
                  Contact Us
                </span>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                  Let&apos;s Start a Conversation
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Have questions about InnoX? We&apos;d love to hear from you.
                  Our team is ready to help you find the perfect solution for
                  your business needs.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>24/7 Support Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Response within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Illustration Image */}
              <div className="relative">
                <div className="relative mx-auto aspect-square w-full max-w-md">
                  <Image
                    src="/assets/images/illustration.png"
                    alt="Contact Us Illustration"
                    fill
                    className="object-contain"
                  />
                  {/* Floating cards */}
                  <div className="absolute right-0 top-10 animate-bounce rounded-xl border border-border bg-card/90 p-4 shadow-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/15">
                        <Zap className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Quick Response
                        </p>
                        <p className="text-xs text-muted-foreground">
                          &lt; 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-20 left-0 animate-bounce rounded-xl border border-border bg-card/90 p-4 shadow-xl backdrop-blur-sm"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15">
                        <Target className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Dedicated Support
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Expert team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods with Icons */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group rounded-2xl border border-border bg-linear-to-br from-card to-orange-50/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl dark:to-orange-950/10"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-orange-400 to-orange-600 transition-transform group-hover:scale-110">
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <p className="text-sm font-semibold text-orange-600">
                    {method.contact}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info with Enhanced Design */}
        <section className="bg-linear-to-br from-muted/40 via-background to-orange-500/5 py-20 dark:from-muted/20 dark:to-orange-500/8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-br from-orange-400/20 to-amber-400/20 dark:from-orange-500/10 dark:to-amber-500/10"></div>
                <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-linear-to-br from-orange-400/10 to-amber-400/10 dark:from-orange-500/8 dark:to-amber-500/8"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-orange-500 to-amber-500">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      Send us a Message
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and our team will get back to you
                    within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We will get back to you
                        shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                name: e.target.value,
                              })
                            }
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                email: e.target.value,
                              })
                            }
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Company Name
                          </label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Acme Inc."
                            value={formState.company}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                company: e.target.value,
                              })
                            }
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-foreground mb-2"
                          >
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            type="text"
                            placeholder="How can we help?"
                            value={formState.subject}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                subject: e.target.value,
                              })
                            }
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your needs..."
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              message: e.target.value,
                            })
                          }
                          required
                          rows={6}
                          className="w-full resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-linear-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600  hover:shadow-xl transition-all duration-300 font-semibold"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </div>
              <div className="space-y-6">
                {/* Support Options */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    Support Options
                  </h3>
                  <div className="space-y-4">
                    {supportOptions.map((option, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-border bg-card p-6  transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-orange-400 to-amber-500">
                            <option.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground mb-1">
                              {option.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {option.description}
                            </p>
                            <a
                              href={`mailto:${option.email}`}
                              className="text-sm font-semibold text-orange-600 hover:underline"
                            >
                              {option.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="rounded-2xl border border-border bg-card p-6 ">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-orange-400 to-amber-500">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Monday - Friday
                      </span>
                      <span className="font-medium text-foreground">
                        8:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium text-foreground">
                        9:00 AM - 1:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium text-foreground">
                        Closed
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Live chat support available 24/7
                  </p>
                </div>

                {/* Response Time */}
                <div className="rounded-2xl border border-orange-200/60 p-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-amber-500">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">
                        Expected Response Time
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We typically respond to all inquiries within 24 business
                        hours. For urgent matters, please use our live chat or
                        call us directly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices with Enhanced Cards */}
        <section className="bg-linear-to-br from-muted/40 via-background to-orange-500/5 py-20 dark:from-muted/20 dark:to-orange-500/8">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-4">
                Our Locations
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Global Offices
              </h2>
              <p className="text-muted-foreground text-lg">
                With offices across the globe, we are always close by to support
                your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-border bg-card p-8  transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/30 hover:shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-orange-500 to-amber-500 transition-transform group-hover:scale-110">
                      <span className="text-white font-bold text-sm">
                        {office.flag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {office.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {office.country}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-foreground">{office.address}</p>
                        <p className="text-muted-foreground">
                          {office.postalCode}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="text-foreground hover:text-orange-500 transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-foreground hover:text-orange-500 transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <FAQ faqs={faqs} />
        </section>
      </main>
    </div>
  );
}
