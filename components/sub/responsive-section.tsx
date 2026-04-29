import Mockup1 from '../mockups/mockup1';

export function ResponsiveSection({
  heading,
  desktopImageUrl,
  mobileImageUrl,
}: {
  heading?: string;
  desktopImageUrl?: string;
  mobileImageUrl?: string;
}) {
  const normalizedHeading = heading?.trim();
  const featureHeading = normalizedHeading
    ? `${normalizedHeading.charAt(0)}${normalizedHeading.slice(1)}`
    : 'Our Performance Management Software';
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
            Access your {featureHeading} from anywhere, on any device. Our
            platform adapts seamlessly to desktop, tablet, and mobile screens.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Mockup1
            desktopImageUrl={desktopImageUrl}
            mobileImageUrl={mobileImageUrl}
          />
        </div>
      </div>
    </section>
  );
}
