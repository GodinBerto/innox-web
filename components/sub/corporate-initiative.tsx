import { Building2, Briefcase, Award, TrendingUp } from 'lucide-react';

const initiatives = [
  {
    icon: Building2,
    title: 'Corporate Initiative',
    description:
      'Align company-wide initiatives with individual performance goals for maximum impact.',
    stats: '85% alignment rate',
  },
  {
    icon: Briefcase,
    title: 'Department Goals',
    description:
      'Break down corporate objectives into actionable department-level targets.',
    stats: '32 departments',
  },
  {
    icon: Award,
    title: 'Recognition Program',
    description:
      'Celebrate achievements and motivate teams with built-in recognition tools.',
    stats: '2.5k+ recognitions',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description:
      'Monitor progress in real-time with comprehensive tracking dashboards.',
    stats: 'Real-time updates',
  },
];

export function CorporateInitiative() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Enterprise Solutions
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Corporate Initiative Alignment
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Connect your strategic corporate initiatives directly to employee
              performance. Ensure every team member understands how their work
              contributes to organizational success.
            </p>

            <div className="bg-background rounded-2xl p-6 shadow-lg border border-border">
              <h4 className="font-semibold text-foreground mb-4">
                Initiative Progress
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">
                      Digital Transformation
                    </span>
                    <span className="text-primary font-medium">78%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: '78%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">Customer Excellence</span>
                    <span className="text-primary font-medium">92%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: '92%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground">
                      Sustainability Goals
                    </span>
                    <span className="text-primary font-medium">65%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: '65%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {item.stats}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
