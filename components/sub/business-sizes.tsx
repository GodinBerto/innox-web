import { Building, Building2, Factory, CheckCircle } from 'lucide-react';

const businessTypes = [
  {
    icon: Building,
    title: 'Small Business',
    employees: '1-50 employees',
    features: [
      'Basic performance tracking',
      'Goal management',
      'Simple reviews',
      'Email support',
    ],
  },
  {
    icon: Building2,
    title: 'Medium Business',
    employees: '51-500 employees',
    features: [
      'Advanced analytics',
      'Custom workflows',
      'API integrations',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    icon: Factory,
    title: 'Enterprise',
    employees: '500+ employees',
    features: [
      'Unlimited users',
      'Custom development',
      'Dedicated success manager',
      'SLA guarantee',
    ],
  },
];

export function BusinessSizes() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Scalable Solutions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            For you, for every size of business
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you are a startup or an enterprise, we have the right
            solution for your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {businessTypes.map((type, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                type.highlighted
                  ? 'bg-primary text-primary-foreground shadow-xl scale-105'
                  : 'bg-background border border-border shadow-lg'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  type.highlighted
                    ? 'bg-primary-foreground/20'
                    : 'bg-primary/10'
                }`}
              >
                <type.icon
                  className={`w-7 h-7 ${type.highlighted ? 'text-primary-foreground' : 'text-primary'}`}
                />
              </div>

              <h3
                className={`text-xl font-semibold mb-2 ${type.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}
              >
                {type.title}
              </h3>
              <p
                className={`text-sm mb-6 ${type.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}
              >
                {type.employees}
              </p>

              <ul className="space-y-3">
                {type.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle
                      className={`w-5 h-5 flex-shrink-0 ${
                        type.highlighted
                          ? 'text-primary-foreground'
                          : 'text-primary'
                      }`}
                    />
                    <span
                      className={`text-sm ${type.highlighted ? 'text-primary-foreground/90' : 'text-foreground'}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
