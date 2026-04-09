import { slugify, unslugify } from '@/utils/functions';
import { Metadata, ResolvingMetadata } from 'next';
// import { modulesPageContentData } from '@/data/modules-page.data';
import ModulesHero from '@/components/modules/module-hero';
import DashboardSliderProvider from '@/utils/providers/dashboard-slider.provider';
import MainCenterSection from '@/components/modules/main-center-section';
import OnePlatformBanner from '@/components/banners/one-platform-banner';
// import ExploreSubmodules from '@/components/modules/explore-submodules';
// import FAQ from '@/components/sections/faq';
// import { faqs } from '@/data';
// import DividerContent from '@/components/sections/divider-content';
// import SubModulesFunctional from '@/components/modules/submodules-Functional';
import { getModulePageContent, getModulesWithSubModules } from '@/lib/sanity';
import ItemsWithBanners from '@/components/modules/items-with-banners';
import IndustrySection from '@/components/modules/industries';
import GrowWithInnoX from '@/components/modules/grow-with-innox';
import { notFound } from 'next/navigation';

export const dynamicParams = false;
export async function generateStaticParams() {
  const modules = await getModulesWithSubModules();

  return modules
    .map((module) => module.slug?.trim())
    .filter((slug): slug is string => Boolean(slug))
    .map((module) => ({ module }));
}

export async function generateMetadata(
  { params }: _TPageProps<{ module: string }>,
  _: ResolvingMetadata,
): Promise<Metadata> {
  void _;
  const { module } = await params;
  return {
    title: `Modules: ${unslugify(module)}`,
    description: `Learn more about ${unslugify(
      module,
    )} module. Explore features, benefits, and best practices for effective management within ${unslugify(
      module,
    )}.`,
  };
}

const ModulesPage = async ({ params }: _TPageProps<{ module: string }>) => {
  const { module } = await params;
  const [modulePageData, modules] = await Promise.all([
    getModulePageContent(module),
    getModulesWithSubModules(),
  ]);
  const moduleDefinition = modules.find(
    (candidate) => candidate.slug?.trim() === module,
  );

  if (!moduleDefinition && !modulePageData) return notFound();

  // console.log('Module Page Data:', modulePageData);

  const resolvedSubModules = (
    modulePageData?.subModules?.length
      ? modulePageData.subModules.map((subModule) => ({
          name: subModule.name,
          slug: subModule.slug,
          icon: subModule.icon,
          description: subModule.description,
        }))
      : (moduleDefinition?.subModules ?? []).map((subModule) => ({
          name: subModule.name,
          slug: subModule.slug,
          icon: subModule.icon,
          description: '',
        }))
  ) as {
    name?: string;
    slug?: string;
    icon?: string;
    description?: string;
  }[];

  const heroDashboards = (modulePageData?.hero?.dashboards ?? [])
    .map(
      (dashboard) =>
        (dashboard as { asset?: { url?: string } }).asset?.url ?? '',
    )
    .filter((dashboard): dashboard is string => Boolean(dashboard));

  const heroBackgroundImage =
    (
      modulePageData?.hero?.backgroundImage as
        | { asset?: { url?: string } }
        | undefined
    )?.asset?.url ?? '/assets/images/modules/hero.jpg';

  const heroData: _IModulesPageHero = {
    backgroundImageUrl: heroBackgroundImage,
    slug: moduleDefinition?.slug?.replace(/-/g, ' ') || '',
    title: modulePageData?.hero?.title ?? '',
    description: modulePageData?.hero?.description ?? '',
    buttonText: modulePageData?.hero?.buttonText,
    buttonLink: modulePageData?.hero?.buttonLink ?? `/modules/${module}`,
    dashboards: heroDashboards,
  };

  const heroSubModules = resolvedSubModules
    .filter(
      (
        subModule,
      ): subModule is {
        name: string;
        slug: string;
        icon?: string;
        description?: string;
      } => Boolean(subModule.name && subModule.slug),
    )
    .map((subModule) => ({
      name: subModule.name,
      slug: subModule.slug,
      description: subModule.description,
      href: `/modules/${module}/${subModule.slug}`,
    }));

  const mainBannerImageSrc =
    (
      modulePageData?.mainModuleBanner?.image as
        | { asset?: { url?: string } }
        | undefined
    )?.asset?.url ?? '/assets/images/pages/hrbanner.png';

  const timelineData = resolvedSubModules
    .filter((subModule) => subModule.name && subModule.slug)
    .map((subModule) => ({
      icon: subModule.icon ?? 'square',
      name: subModule.name ?? '',
      slug: subModule.slug ?? '',
    }));

  const mainCenterItems = (modulePageData?.mainCenter?.contents ?? [])
    .filter((content) => content.title || content.description)
    .map((content, idx) => ({
      name: content.title?.trim() || `Content ${idx + 1}`,
      slug: content._key || slugify(content.title || `content-${idx + 1}`),
      description: content.description?.trim() || '',
      link: content.link
        ? `/modules/${module}/${content.link}`
        : `/modules/${module}`,
      image: content.image,
    }));

  // // Get submodules
  // const submodules = Object.entries(moduleData);

  // // Get other modules for "Similar Modules"
  // const similarModules = Object.entries(modulesContentData)
  //   .filter(([key]) => key !== module)
  //   .slice(0, 3);

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Module Hero/Banner */}
      <DashboardSliderProvider length={heroData.dashboards?.length || 0}>
        <ModulesHero hero={heroData} subModules={heroSubModules} />
      </DashboardSliderProvider>

      <MainCenterSection
        data={timelineData}
        introTitle={modulePageData?.mainCenter?.header?.title}
        introDescription={modulePageData?.mainCenter?.header?.description}
      />

      <OnePlatformBanner
        src={mainBannerImageSrc}
        height={662}
        text={
          modulePageData?.mainModuleBanner?.content ??
          'Every Department, One Platform. InnoX brings your entire organization together'
        }
        classname="max-w-[90%] sm:max-w-[500px] md:max-w-[700px] ml-0 sm:ml-4"
      />

      <ItemsWithBanners
        data={{
          items: mainCenterItems,
          banner: modulePageData?.subModuleBanner
            ? {
                title: modulePageData.subModuleBanner.title ?? '',
                content: modulePageData.subModuleBanner.content ?? '',
                image: modulePageData.subModuleBanner.image,
              }
            : undefined,
        }}
      />

      <GrowWithInnoX />

      <IndustrySection data={modulePageData?.industry} />
    </div>
  );
};

export default ModulesPage;
