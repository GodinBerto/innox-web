import { Shield, Zap, HeartHandshake, Award } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-level security with SOC 2 compliance and GDPR-ready infrastructure.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized performance ensuring quick load times and smooth user experience.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description:
      '24/7 customer support with dedicated success managers for enterprise clients.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description:
      'Trusted by 10,000+ companies worldwide with measurable performance improvements.',
  },
];

export function WhyInova() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Inova HRMS is Your Perfect Business Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of companies that trust Inova HRMS for their
              performance management needs. Experience the difference that comes
              with a purpose-built solution.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">2M+</div>
                <div className="text-sm text-muted-foreground">Employees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">98%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
