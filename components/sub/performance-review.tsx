import {
  ClipboardCheck,
  Calendar,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';

export function PerformanceReview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Evaluation
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Performance Review
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Conduct comprehensive performance reviews with ease. Our system
              enables meaningful conversations that drive improvement and career
              growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Self Assessment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Enable employees to reflect on their performance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Review Cycles
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Automate quarterly and annual review schedules
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Feedback Loop
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Enable continuous two-way communication
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Growth Plans
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Create personalized development roadmaps
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mock UI Card */}
          <div className="bg-background rounded-2xl shadow-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">JD</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">John Doe</h4>
                <p className="text-sm text-muted-foreground">
                  Senior Developer
                </p>
              </div>
              <span className="ml-auto px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                Completed
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">
                    Technical Skills
                  </span>
                  <span className="font-medium text-foreground">92%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: '92%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Communication</span>
                  <span className="font-medium text-foreground">88%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: '88%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Leadership</span>
                  <span className="font-medium text-foreground">85%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: '85%' }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">
                    Goal Achievement
                  </span>
                  <span className="font-medium text-foreground">95%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: '95%' }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Overall Rating
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">4.5</span>
                  <span className="text-muted-foreground">/ 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
