import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  Globe,
  Clock,
} from 'lucide-react';
import FAQ from '@/components/sections/faq';
import { faqs } from '@/data';

const values = [
  {
    icon: Target,
    title: 'Customer Focus',
    description:
      'We put our customers at the heart of everything we do, ensuring their success is our success.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We operate with transparency and honesty in all our business relationships.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We continuously push boundaries to deliver cutting-edge HR solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'We believe great things happen when talented people work together.',
  },
];

// const stats = [
//   { value: '2015', label: 'Founded' },
//   { value: '10K+', label: 'Companies' },
//   { value: '2M+', label: 'Users' },
//   { value: '150+', label: 'Countries' },
// ];

// const team = [
//   {
//     name: 'Sarah Chen',
//     role: 'CEO & Co-Founder',
//     bio: 'Former VP of HR at Fortune 500 company with 20+ years experience',
//     initials: 'SC',
//   },
//   {
//     name: 'Michael Roberts',
//     role: 'CTO & Co-Founder',
//     bio: 'Ex-Google engineer with expertise in scalable enterprise systems',
//     initials: 'MR',
//   },
//   {
//     name: 'Emily Watson',
//     role: 'VP of Product',
//     bio: 'Product leader who previously built HR tools at major tech companies',
//     initials: 'EW',
//   },
//   {
//     name: 'David Kim',
//     role: 'VP of Engineering',
//     bio: 'Engineering leader with experience at top SaaS companies',
//     initials: 'DK',
//   },
// ];

const milestones = [
  {
    year: '2015',
    event: 'Founded in San Francisco with a mission to transform HR',
  },
  {
    year: '2017',
    event: 'Reached 1,000 customers and raised Series A funding',
  },
  { year: '2019', event: 'Expanded globally with offices in Europe and Asia' },
  { year: '2021', event: 'Surpassed 1 million users worldwide' },
  { year: '2023', event: 'Launched AI-powered performance insights' },
  { year: '2025', event: 'Serving 10,000+ companies across 150+ countries' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-6">
                  About Innox Systems
                </span>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
                  Building the Future of Work
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We are on a mission to transform how organizations manage and
                  develop their most valuable asset - their people. Since 2015,
                  we have been helping companies of all sizes build
                  high-performing teams.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-500 text-white hover:bg-orange-500/90"
                  >
                    Join Our Team
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/team.jpg"
                  alt="Inova HRMS Team"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16 bg-orange-500">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/office.jpg"
                  alt="Our Office"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Empowering Organizations to Unlock Human Potential
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  We believe that when employees thrive, businesses succeed. Our
                  mission is to provide organizations with the tools they need
                  to create meaningful performance conversations, foster
                  continuous growth, and build cultures of excellence.
                </p>
                <p className="text-muted-foreground text-lg">
                  Every feature we build, every decision we make, is guided by
                  our commitment to helping companies and their people reach
                  their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-4">
                Our Values
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
              <p className="text-muted-foreground text-lg">
                Our values guide every aspect of how we work and interact with
                our customers, partners, and each other.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-8 shadow-sm border border-border text-center"
                >
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Key Milestones
              </h2>
              <p className="text-muted-foreground text-lg">
                From a small startup to a global HR technology leader, here is
                our story.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center gap-8 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div
                        className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                      >
                        <div className="bg-background rounded-xl p-6 shadow-lg border border-border inline-block">
                          <span className="text-orange-500 font-bold text-lg">
                            {milestone.year}
                          </span>
                          <p className="text-foreground mt-2">
                            {milestone.event}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-background" />
                      <div className="flex-1 hidden md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-4">
                  Global Reach
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Serving Customers Worldwide
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  With offices across North America, Europe, and Asia, we
                  provide localized support and solutions to companies around
                  the globe.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        150+ Countries
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Customers in every continent
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        24/7 Support
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Always here to help
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Industry Leader
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Recognized by Gartner
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        40% YoY Growth
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Sustainable expansion
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500 font-semibold">HQ</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        San Francisco, USA
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        123 Market Street, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500 font-semibold">EU</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        London, UK
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        45 Fleet Street, EC4Y 1BT
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500 font-semibold">
                        APAC
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Singapore
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        1 Raffles Place, 048616
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
