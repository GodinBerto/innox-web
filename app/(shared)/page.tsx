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
import VisualizedIllustration from '@/components/shared/illustration';
import { MovingModules } from '@/components/sections/moving-modules';
import OnePlatformBanner from '@/components/banners/one-platform-banner';
import DividerContent from '@/components/sections/divider-content';
import FAQ from '@/components/sections/faq';
import { faqs } from '@/data';
import Streamline from '@/components/sections/streamline';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ModulesCarousel />
      <div className="space-y-4 md:space-y-12 mt-8 md:mt-16">
        <BusinessSolutions />
        <Streamline />
        <ManagePeople />
        <HRBanner />
        <ManageAssets />
        <AssetsBanner />
        <DocumentManager />
        <LegalBanner />
        <FinanceAccounting />
        <FinanceBanner />
        <PowerAssets />
        <PowerBanner />
        <BusinessAdministration />
        <OperationsBanner />
        <QuoteBox />
        <VisualizedIllustration />
        <MovingModules />
        <OnePlatformBanner />
        <FAQ faqs={faqs} />
        <DividerContent text="Book Demo" link="/demo" />
      </div>
    </>
  );
}
