const timelineItems = [
  {
    quarter: 'Q1',
    title: 'Goal Setting',
    description: 'Define annual objectives and key results for all teams',
    status: 'completed',
  },
  {
    quarter: 'Q2',
    title: 'Mid-Year Review',
    description: 'Assess progress and make necessary adjustments',
    status: 'completed',
  },
  {
    quarter: 'Q3',
    title: 'Development Focus',
    description: 'Implement training and development initiatives',
    status: 'in-progress',
  },
  {
    quarter: 'Q4',
    title: 'Annual Review',
    description: 'Comprehensive year-end performance evaluation',
    status: 'upcoming',
  },
];

export function StrategicTimeline() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Annual Cycle
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Strategic Timeline
          </h2>
          <p className="text-muted-foreground text-lg">
            Plan and execute your performance management cycle with our
            strategic timeline framework.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                >
                  <div
                    className={`bg-background rounded-xl p-6 shadow-lg border border-border inline-block ${
                      item.status === 'in-progress' ? 'border-primary' : ''
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${
                        item.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : item.status === 'in-progress'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {item.status === 'completed'
                        ? 'Completed'
                        : item.status === 'in-progress'
                          ? 'In Progress'
                          : 'Upcoming'}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center z-10 flex-shrink-0 ${
                    item.status === 'completed'
                      ? 'bg-green-500 text-green-50'
                      : item.status === 'in-progress'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <span className="text-lg font-bold">{item.quarter}</span>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
