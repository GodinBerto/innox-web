interface _ISlideData {
  title?: string;
  button?: string;
  href?: string;
  src: string;
}

interface _IChildren {
  children: React.ReactNode;
}

interface _ISearchParams {
  QUERY: string;
}

interface _ISearchQuery {
  query?: string;
}

//NAVBAR
interface _INavbarLinks {
  name: string;
  link: string;
  icon?: string;
  notLink?: boolean;
}

interface _ITypewriterPhrase {
  text: string;
  className?: string;
}

interface _IApiResponse<T> {
  message?: string;
  code?: number;
  data: T | null;
}

interface _INavSheetLinks {
  [key: MenuKeys]: string | _IModules[];
  Modules: _IModules[];
  Home: string;
  'About Us': string;
}

interface _IModules {
  name: string;
  contents?: _INavbarLinks[];
}

//! BANNER
interface _IModuleDashboardFunction {
  iconUrl: string;
  content: string;
}

interface _IModuleDashboardStat {
  value: string;
  description: string;
}

interface _IPageHero {
  backgroundImageUrl: string;
  darkBackgroundImageUrl?: string;
  slug: string;
  title: string;
  description: string;
}
interface _IModulesPageHero extends _IPageHero {
  buttonText?: string;
  buttonLink?: string;
  dashboards: string[];
}

interface _ISubModulesPageHero extends _IPageHero {
  buttonText: string;
  buttonLink: string;
  dashboardFunctions: _IModuleDashboardFunction[];
  dashboardStat: _IModuleDashboardStat;
}

interface _IModuleSideSection {
  title: string;
  description: string;
  imageUrl: string;
}

interface _IMainCenter {
  header: {
    title: string;
    description: string;
  };
}

interface _IModuleMainCenter extends _IMainCenter {
  contents: {
    title: string;
    description: string;
  }[];
}
interface _ISubModuleMainCenter extends _IMainCenter {
  mainDashboardImageUrl: string;
  sideSections: _IModuleSideSection[];
}

interface _IModulesLIfecycle {
  title: string;
  description: string;
  steps: _IModuleLifecycleStep[];
}

interface _ISubModulePageContent {
  hero: _ISubModulesPageHero;
  mainCenter: _ISubModuleMainCenter;
  banner: _IModuleBanner;
  lifecycle: _IModulesLIfecycle;
}

interface _IModulePageContent {
  hero: _IModulesPageHero;
  keyFeatures: { iconName: string; content: string }[];
  mainCenter: _IModuleMainCenter;
}

interface _IModuleLifecycleStep {
  title: string;
  description: string;
  iconName: string;
  link?: string;
}

interface _IModuleBanner {
  backgroundImageUrl: string;
  title: string;
  description: string;
  butttontext: string;
  buttonLink: string;
}

interface IFunctionalModulesProps {
  name: string;
  link?: string;
  icon?: string; // lucide dynamic icon name
}

interface _IModulesSubModules {
  name: string;
  imageUrl: string;
  functionalFeatures: string[];
}

interface _ISearchObj<T extends SearchParamKeys> {
  entityType: T;
  placeholders: string[];
}

type NavLinks = '/' | '/about' | '/products';
type MenuKeys = 'Modules' | 'Home' | 'About Us';

type _TPageProps<T extends Record<string, string> = object> = {
  params: Promise<T>;
  searchParams?: Promise<_ISearchQuery>;
};

type StickyScroll = {
  mainTitle: string;
  mainDescription: string;
  content: {
    id: number;
    title: string;
    description: string;
    content?: React.ReactNode;
    image?: string; // Add image property for each content item
  }[];
  contentClassName?: string;
  position?: 'left' | 'right';
};
