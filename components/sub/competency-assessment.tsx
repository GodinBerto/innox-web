import { Brain, Lightbulb, Users2, Rocket } from 'lucide-react';

const competencies = [
  { name: 'Technical Expertise', level: 4, maxLevel: 5 },
  { name: 'Problem Solving', level: 5, maxLevel: 5 },
  { name: 'Communication', level: 4, maxLevel: 5 },
  { name: 'Teamwork', level: 5, maxLevel: 5 },
  { name: 'Leadership', level: 3, maxLevel: 5 },
  { name: 'Innovation', level: 4, maxLevel: 5 },
];

export function CompetencyAssessment() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Competency Matrix */}
          <div className="bg-background rounded-2xl shadow-xl border border-border p-8 order-2 lg:order-1">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Competency Matrix
            </h3>

            <div className="space-y-5">
              {competencies.map((comp, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">
                      {comp.name}
                    </span>
                    <span className="text-muted-foreground">
                      {comp.level}/{comp.maxLevel}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: comp.maxLevel }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 flex-1 rounded-full ${
                          i < comp.level ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <div className="text-2xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">
                  Total Competencies
                </div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <div className="text-2xl font-bold text-primary">4.2</div>
                <div className="text-sm text-muted-foreground">Avg. Score</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Skills Assessment
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Competency Assessment
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Evaluate and track employee competencies across multiple
              dimensions. Identify skill gaps and create targeted development
              plans.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Skill Mapping
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Map skills to job requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Gap Analysis
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Identify areas for improvement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Peer Reviews
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    360-degree feedback system
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Career Paths
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Plan career progression
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
