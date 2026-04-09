import ModulesHero from '@/components/submodules/module-hero';
import { unslugify } from '@/utils/functions';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import DashboardSliderProvider from '@/utils/providers/dashboard-slider.provider';
import { ImproveOutcomes } from '@/components/sub/improve-outcomes';
import SideSectionsWithBanner from '@/components/sub/side-sections-with-banner';
import { Features } from '@/components/sub/features';
import { ResponsiveSection } from '@/components/sub/responsive-section';
import type { SubModule } from '@/types/sanity/schema';
import {
  getModulePageContent,
  getModulesWithSubModules,
  getSubModulePageContent,
} from '@/lib/sanity';

export const dynamicParams = false;

export async function generateStaticParams() {
  const modules = await getModulesWithSubModules();

  return modules.flatMap((module) => {
    const moduleSlug = module.slug?.trim();

    if (!moduleSlug) return [];

    return (module.subModules ?? [])
      .map((submodule) => submodule.slug?.trim())
      .filter((submodule): submodule is string => Boolean(submodule))
      .map((submodule) => ({
        module: moduleSlug,
        submodule,
      }));
  });
}

export async function generateMetadata(
  { params }: _TPageProps<{ module: string; submodule?: string }>,
  _: ResolvingMetadata,
): Promise<Metadata> {
  void _;
  const { module, submodule } = await params;

  const submoduleLabel = submodule ? unslugify(submodule) : 'this section';
  return {
    title: `Sub Module: ${unslugify(module)}${submodule ? ' - ' + submoduleLabel : ''}`,
    description: 'Description',
  };
}

export default async function ModulePage({
  params,
}: _TPageProps<{ module: string; submodule?: string }>) {
  const { module, submodule } = await params;

  if (!submodule) return notFound();

  const [subModuleData, modulePageData] = await Promise.all([
    getSubModulePageContent(module, submodule),
    getModulePageContent(module),
  ]);

  if (!subModuleData) return notFound();

  const dashboardFunctions =
    (subModuleData.hero?.dashboardFunctions ?? [])
      .filter((item) => item.content?.trim())
      .map((item) => ({
        iconUrl: item.iconUrl ?? 'square',
        content: item.content ?? '',
      })) ?? [];

  const trimmedSlug = subModuleData.slug?.replace(/-/g, ' ');
  const heroBackgroundImage =
    subModuleData.hero?.backgroundImage?.asset?.url ??
    '/assets/images/pages/hr.png';
  const heroDarkBackgroundImage = '/assets/images/modules/dark-hero.jpg';
  const heroDashboardImage = subModuleData.imageUrl?.asset?.url ?? '';

  const heroData: _ISubModulesPageHero = {
    backgroundImageUrl: heroBackgroundImage,
    darkBackgroundImageUrl: heroDarkBackgroundImage,
    slug: trimmedSlug || '',
    title:
      subModuleData.hero?.title ?? subModuleData.name ?? unslugify(submodule),
    description: subModuleData.hero?.description ?? '',
    buttonText: subModuleData.hero?.buttonText ?? 'Learn More',
    buttonLink:
      subModuleData.hero?.buttonLink ?? `/modules/${module}/${submodule}`,
    dashboardFunctions,
    dashboardStat: {
      value: subModuleData.hero?.dashboardStat?.value ?? '24/7',
      description:
        subModuleData.hero?.dashboardStat?.description ??
        'Real-time process visibility',
    },
    imageUrl: heroDashboardImage,
  };

  const featureCards: SubModule['functionalFeatures'] = (
    subModuleData.functionalFeatures ?? []
  )
    .filter(
      (
        feature,
      ): feature is NonNullable<SubModule['functionalFeatures']>[number] => {
        return typeof feature !== 'string' && Boolean(feature?._key);
      },
    )
    .map((feature) => ({
      _key: feature._key,
      _type: 'functionalFeature',
      icon: feature.icon,
      title: feature.title,
      content: feature.content,
    }));

  return (
    <div className="space-y-4 md:space-y-28">
      <DashboardSliderProvider length={3}>
        <ModulesHero data={heroData} />
      </DashboardSliderProvider>

      <ImproveOutcomes
        title={trimmedSlug || 'this section'}
        improve={subModuleData?.improve}
        functionalFeatures={subModuleData?.functionalFeatures}
      />

      {((subModuleData.mainCenter?.sideSections?.length ?? 0) > 0 ||
        modulePageData?.subModuleBanner) && (
        <SideSectionsWithBanner
          sideSections={subModuleData.mainCenter?.sideSections ?? []}
          banner={
            modulePageData?.subModuleBanner
              ? {
                  title: modulePageData.subModuleBanner.title ?? '',
                  content: modulePageData.subModuleBanner.content ?? '',
                  image: modulePageData.subModuleBanner.image,
                }
              : undefined
          }
        />
      )}

      <Features
        functionalFeatures={featureCards}
        heading={trimmedSlug || 'this section'}
      />

      <ResponsiveSection heading={trimmedSlug || 'this section'} />
    </div>
  );
}
