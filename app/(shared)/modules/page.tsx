import Link from 'next/link';
import Image from 'next/image';
import * as Icons from 'lucide-react';
import { Circle, ArrowRight, type LucideIcon } from 'lucide-react';
import {
  getAllModulePageContents,
  getModulesWithSubModules,
} from '@/lib/sanity';
import { unslugify } from '@/utils/functions';

function toPascalCase(value: string) {
  return value
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function getIconComponent(iconName?: string): LucideIcon {
  const key = toPascalCase(iconName || 'Circle');
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  return iconMap[key] || Circle;
}

function getSanityImageUrl(image?: unknown): string | undefined {
  return (image as { asset?: { url?: string } } | undefined)?.asset?.url;
}

export default async function ModulesIndexPage() {
  const [modules, modulePages] = await Promise.all([
    getModulesWithSubModules(),
    getAllModulePageContents(),
  ]);

  const pageBySlug = new Map(
    modulePages
      .map((page) => [page.moduleSlug?.trim(), page] as const)
      .filter(([slug]) => Boolean(slug)),
  );

  const moduleCards = modules
    .filter((module) => module.slug?.trim())
    .map((module) => {
      const slug = module.slug!.trim();
      const page = pageBySlug.get(slug);
      const image =
        getSanityImageUrl(page?.hero?.backgroundImage) ||
        getSanityImageUrl(page?.mainModuleBanner?.image) ||
        getSanityImageUrl(page?.mainCenter?.contents?.[0]?.image) ||
        '/assets/images/modules/hero.jpg';

      return {
        id: module._id,
        slug,
        name: module.name?.trim() || unslugify(slug),
        icon: module.icon,
        description:
          page?.hero?.description?.trim() ||
          page?.mainCenter?.header?.description?.trim() ||
          `Explore ${module.name?.trim() || unslugify(slug)} tools built for operational excellence.`,
        image,
        subModules: (module.subModules ?? [])
          .map((subModule) => subModule.name?.trim())
          .filter((name): name is string => Boolean(name)),
      };
    });

  const heroImages = moduleCards.slice(0, 3).map((card) => card.image);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_45%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-5">
                InnoX Modules
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-5">
                One Platform.
                <br />
                Every Department.
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                Discover all modules available on InnoX. Each module is crafted
                to solve real business workflows, with built-in submodules for
                specialized teams.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {heroImages.map((src, idx) => (
                <div
                  key={`hero-module-image-${idx}`}
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${
                    idx === 1 ? 'translate-y-6' : ''
                  }`}
                >
                  <Image
                    src={src}
                    alt="Module preview"
                    width={500}
                    height={400}
                    className="w-full h-[170px] sm:h-[220px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {moduleCards.map((card) => {
              const Icon = getIconComponent(card.icon);

              return (
                <Link
                  key={card.id}
                  href={`/modules/${card.slug}`}
                  className="group rounded-2xl overflow-hidden border border-border bg-background hover:border-orange-500/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-52">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute left-4 top-4 w-10 h-10 rounded-lg bg-white/95 text-orange-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="absolute right-4 top-4 px-2.5 py-1 rounded-full bg-black/45 text-white text-xs">
                      {card.subModules.length} Submodules
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      {card.name}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {card.description}
                    </p>

                    {card.subModules.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {card.subModules.slice(0, 4).map((name) => (
                          <span
                            key={`${card.slug}-${name}`}
                            className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {name}
                          </span>
                        ))}
                        {card.subModules.length > 4 && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-600">
                            +{card.subModules.length - 4} more
                          </span>
                        )}
                      </div>
                    )}

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:text-orange-700">
                      Explore Module <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
