import { Target, Sliders, LineChart, Award } from 'lucide-react';

const kpiFeatures = [
  {
    icon: Target,
    title: 'SMART Goals',
    description:
      'Set Specific, Measurable, Achievable, Relevant, and Time-bound objectives.',
  },
  {
    icon: Sliders,
    title: 'Custom Metrics',
    description:
      'Define custom KPIs that align with your unique business requirements.',
  },
  {
    icon: LineChart,
    title: 'Progress Tracking',
    description:
      'Monitor real-time progress with intuitive dashboards and visual indicators.',
  },
  {
    icon: Award,
    title: 'Achievement Recognition',
    description:
      'Celebrate milestones and recognize top performers automatically.',
  },
];

export function KPISetting() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Goal Management
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Good KPI Setting
          </h2>
          <p className="text-muted-foreground text-lg">
            Create meaningful KPIs that drive performance and align teams with
            organizational goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {kpiFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-sm border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
