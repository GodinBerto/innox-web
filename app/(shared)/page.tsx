import Hero from '@/components/sections/hero';
import { ModulesCarousel } from '@/components/sections/modules-carousel';
import BusinessSolutions from '@/components/sections/business-solutions';
import ManagePeople from '@/components/sections/manage-people';
import HRBanner from '@/components/banners/hr-banner';
import ManageAssets from '@/components/sections/manage-assets';
import AssetsBanner from '@/components/banners/assets-banner';
import DocumentManager from '@/components/sections/document-management';
import LegalBanner from '@/components/banners/legal-banner';
import FinanceAccounting from '@/components/sections/finance-accounting';
import FinanceBanner from '@/components/banners/finance-banner';
import PowerAssets from '@/components/sections/power-assets';
import PowerBanner from '@/components/banners/power-banner';
import BusinessAdministration from '@/components/sections/business-admin';
import OperationsBanner from '@/components/banners/operations-banner';
import QuoteBox from '@/components/shared/quote-box';
// import VisualizedIllustration from '@/components/shared/illustration';
import { MovingModules } from '@/components/sections/moving-modules';
import OnePlatformBanner from '@/components/banners/one-platform-banner';
import DividerContent from '@/components/sections/divider-content';
import FAQ from '@/components/sections/faq';
import Streamline from '@/components/sections/streamline';
import { getHomePage } from '@/lib/sanity';
import type { HomePage as HomePageType } from '@/types/sanity/schema';

type HomePageSection = NonNullable<HomePageType['sections']>[number];

function getSectionByType<TType extends HomePageSection['_type']>(
  sections: HomePageSection[],
  type: TType,
): Extract<HomePageSection, { _type: TType }> | undefined {
  return sections.find(
    (section): section is Extract<HomePageSection, { _type: TType }> =>
      section._type === type,
  );
}

export default async function HomePage() {
  const homePage = await getHomePage();
  const sections: HomePageSection[] = homePage.sections ?? [];
  const managePeopleSection = getSectionByType(sections, 'managePeople');
  const manageAssetsSection = getSectionByType(sections, 'manageAssets');
  const documentManagerSection = getSectionByType(sections, 'documentManager');
  const financeAccountingSection = getSectionByType(
    sections,
    'financeAccounting',
  );
  const powerAssetsSection = getSectionByType(sections, 'powerAssets');
  const businessAdministrationSection = getSectionByType(
    sections,
    'businessAdministration',
  );
  const faqSection = getSectionByType(sections, 'faqSection');
  const movingModulesSection = getSectionByType(sections, 'movingModules');
  const quoteBoxSection = getSectionByType(sections, 'quoteBox');

  return (
    <div className="overflow-x-clip">
      <Hero />
      <ModulesCarousel />
      <div className="space-y-8 md:space-y-12 mt-8 md:mt-16">
        <BusinessSolutions />
        <Streamline />
        <ManagePeople {...(managePeopleSection ?? {})} />
        <HRBanner />
        <ManageAssets {...(manageAssetsSection ?? {})} />
        <AssetsBanner />
        <DocumentManager {...(documentManagerSection ?? {})} />
        <LegalBanner />
        <FinanceAccounting {...(financeAccountingSection ?? {})} />
        <FinanceBanner />
        <PowerAssets {...(powerAssetsSection ?? {})} />
        <PowerBanner />
        <BusinessAdministration {...(businessAdministrationSection ?? {})} />
        <OperationsBanner />
        <QuoteBox {...(quoteBoxSection ?? {})} />
        {/* <VisualizedIllustration /> */}
        <MovingModules
          title={movingModulesSection?.title ?? 'Modules'}
          groupA={movingModulesSection?.modulesGroupA ?? []}
          groupB={movingModulesSection?.modulesGroupB ?? []}
        />
        <OnePlatformBanner />
        <FAQ {...(faqSection ?? {})} />
        <DividerContent text="Book Demo" link="/contact" />
      </div>
    </div>
  );
}
