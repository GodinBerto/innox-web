import * as Icons from 'lucide-react';
import { Target, type LucideIcon } from 'lucide-react';
import type { SubModule } from '@/types/sanity/schema';

type FunctionalFeatures = SubModule['functionalFeatures'];

type FeatureCard = {
  _key: string;
  title: string;
  description: string;
  icon?: string;
};

const DEFAULT_FEATURES: FeatureCard[] = [
  {
    _key: 'goal-management',
    icon: 'Target',
    title: 'Goal Management',
    description:
      'Set, track, and achieve organizational and individual goals effectively.',
  },
  {
    _key: 'feedback',
    icon: 'Users',
    title: '360° Feedback',
    description:
      'Gather comprehensive feedback from peers, managers, and direct reports.',
  },
  {
    _key: 'analytics',
    icon: 'BarChart3',
    title: 'Analytics Dashboard',
    description:
      'Visualize performance data with intuitive charts and reports.',
  },
  {
    _key: 'continuous-feedback',
    icon: 'MessageCircle',
    title: 'Continuous Feedback',
    description:
      'Enable real-time feedback and recognition throughout the year.',
  },
  {
    _key: 'automation',
    icon: 'Calendar',
    title: 'Review Automation',
    description: 'Automate review cycles and reminders for timely evaluations.',
  },
  {
    _key: 'security',
    icon: 'Shield',
    title: 'Data Security',
    description:
      'Enterprise-grade security to protect sensitive employee data.',
  },
  {
    _key: 'integration',
    icon: 'Zap',
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing HR tech stack.',
  },
  {
    _key: 'multilang',
    icon: 'Globe',
    title: 'Multi-language',
    description: 'Support for multiple languages for global teams.',
  },
];

function toPascalCase(value: string) {
  return value
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function getIconComponent(iconName?: string): LucideIcon {
  const key = toPascalCase(iconName || 'Target');
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  return iconMap[key] || Target;
}

export function Features({
  functionalFeatures,
  heading,
}: {
  functionalFeatures?: FunctionalFeatures;
  heading?: string;
}) {
  const normalizedHeading = heading?.trim();
  const featureHeading = normalizedHeading
    ? `${normalizedHeading.charAt(0).toUpperCase()}${normalizedHeading.slice(1)}`
    : 'Our Performance Management Software';

  const mappedFeatures: FeatureCard[] =
    (functionalFeatures ?? [])
      .filter((item) => item?.title?.trim() || item?.content?.trim())
      .map((item, idx) => ({
        _key: item._key || `feature-${idx}`,
        title: item.title?.trim() || `Feature ${idx + 1}`,
        description: item.content?.trim() || '',
        icon: item.icon,
      })) || [];

  const features =
    mappedFeatures.length > 0 ? mappedFeatures : DEFAULT_FEATURES;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Features Of {featureHeading}
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to manage performance effectively in one
            powerful platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(0, 8).map((feature) => {
            const Icon = getIconComponent(feature.icon);

            return (
              <div
                key={feature._key}
                className="group bg-background rounded-xl p-6 border border-border hover:border-orange-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-4">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
