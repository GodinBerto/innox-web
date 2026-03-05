/* eslint-disable @typescript-eslint/no-explicit-any */

import Hero from './hero';
import BusinessSolutions from './business-solutions';
import Streamline from './streamline';
import ManagePeople from './manage-people';
import HRBanner from '@/components/banners/hr-banner';
import ManageAssets from './manage-assets';
import AssetsBanner from '@/components/banners/assets-banner';
import DocumentManager from './document-management';
import LegalBanner from '@/components/banners/legal-banner';
import FinanceAccounting from './finance-accounting';
import FinanceBanner from '@/components/banners/finance-banner';
import PowerAssets from './power-assets';
import PowerBanner from '@/components/banners/power-banner';
import BusinessAdministration from './business-admin';
import OperationsBanner from '@/components/banners/operations-banner';
import QuoteBox from '@/components/shared/quote-box';
import VisualizedIllustration from '@/components/shared/illustration';
import { MovingModules } from './moving-modules';
import OnePlatformBanner from '@/components/banners/one-platform-banner';
import DividerContent from './divider-content';
import FAQ from './faq';
import { ModulesCarousel } from './modules-carousel';

// Map Sanity `_type` → React Component
export const sectionComponents: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  modulesCarousel: ModulesCarousel,
  businessSolutions: BusinessSolutions,
  streamline: Streamline,
  managePeople: ManagePeople,
  hrBanner: HRBanner,
  manageAssets: ManageAssets,
  assetsBanner: AssetsBanner,
  documentManager: DocumentManager,
  legalBanner: LegalBanner,
  financeAccounting: FinanceAccounting,
  financeBanner: FinanceBanner,
  powerAssets: PowerAssets,
  powerBanner: PowerBanner,
  businessAdministration: BusinessAdministration,
  operationsBanner: OperationsBanner,
  quoteBox: QuoteBox,
  visualizedIllustration: VisualizedIllustration,
  movingModules: MovingModules,
  onePlatformBanner: OnePlatformBanner,
  faqSection: FAQ,
  dividerContent: DividerContent,
};
