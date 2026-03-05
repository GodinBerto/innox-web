import Image from 'next/image';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

export function ResponsiveSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-4">
            Multi-Platform
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Responsive For Both Desktop and Mobile
          </h2>
          <p className="text-muted-foreground text-lg">
            Access your performance management tools from anywhere, on any
            device. Our platform adapts seamlessly to desktop, tablet, and
            mobile screens.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Image
            src="/images/dashboard-mockup.jpg"
            alt="Dashboard on multiple devices"
            width={1000}
            height={600}
            className="w-full h-auto rounded-2xl"
          />

          {/* Device indicators */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-lg border border-border">
              <Monitor className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-foreground">Desktop</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-lg border border-border">
              <Tablet className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-foreground">Tablet</span>
            </div>
            <div className="flex items-center gap-3 bg-background rounded-full px-6 py-3 shadow-lg border border-border">
              <Smartphone className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-foreground">Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
