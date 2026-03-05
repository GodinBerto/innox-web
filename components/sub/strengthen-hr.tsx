import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Automated performance tracking and reporting',
  'Real-time feedback and coaching tools',
  'Customizable evaluation templates',
  '360-degree feedback capabilities',
  'Integration with existing HR systems',
];

export function StrengthenHR() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/meeting.jpg"
                alt="Team meeting"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-primary text-sm font-medium rounded-full mb-4">
              HR Excellence
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Strengthen Your HR
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Empower your HR team with powerful tools that streamline
              performance management and drive employee engagement across your
              organization.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
