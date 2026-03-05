import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  homePageQuery,
  modulePageContentBySlugQuery,
  allModulePageContentsQuery,
  footerDataQuery,
  functionalModulesListQuery,
  movingModulesDataQuery,
  modulesWithSubModulesQuery,
  subModulePageContentBySlugsQuery,
} from '.';
import { createClient, type SanityClient } from 'next-sanity';
import {
  FunctionalModulesList,
  HomePage,
  ModulePageContent,
} from '@/types/sanity/schema';

let client: SanityClient | undefined = undefined;
export function getClient(): SanityClient {
  if (client) {
    return client;
  }

  client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  });

  return client;
}

export const getSanityImageConfig = () => getClient();

export interface ModulePageSubModule {
  _id: string;
  name?: string;
  icon?: string;
  slug?: string;
  description?: string;
  imageUrl?: {
    asset?: {
      _id?: string;
      url?: string;
    };
  };
}

export type ModulePageContentWithSubModules = ModulePageContent & {
  subModules: ModulePageSubModule[];
};

export async function getHomePage(): Promise<HomePage> {
  const client = getClient();

  return await client.fetch(
    homePageQuery,
    {},
    {
      next: {
        tags: ['homepage'],
        revalidate: 60, // cache revalidation
      },
    },
  );
}

// Fetch module page content by slug
import groq from 'groq';
export async function getModulePageContent(
  slug: string,
): Promise<ModulePageContentWithSubModules | null> {
  const client = getClient();

  const data = await client.fetch<ModulePageContent | null>(
    modulePageContentBySlugQuery,
    { slug },
    {
      next: {
        tags: ['module-page', `module-page-${slug}`],
        revalidate: 60,
      },
    },
  );

  if (!data) return null;

  // Fetch submodules separately (reliable and avoids complex nested projections)
  const submodules = await client.fetch<ModulePageSubModule[]>(
    groq`*[_type == "subModule" && parentModule->slug.current == $slug] | order(order asc) {
      _id,
      icon,
      name,
      "slug": slug.current,
      imageUrl { asset->{ _id, url } },
      "description": mainCenter.header.description
    }`,
    { slug },
    {
      next: {
        tags: ['module-submodules', `module-submodules-${slug}`],
        revalidate: 60,
      },
    },
  );

  return { ...data, subModules: submodules };
}

// Fetch all module page contents
export async function getAllModulePageContents(): Promise<ModulePageContent[]> {
  const client = getClient();

  return await client.fetch<ModulePageContent[]>(
    allModulePageContentsQuery,
    {},
    {
      next: {
        tags: ['module-pages'],
        revalidate: 60,
      },
    },
  );
}

// Fetch footer data
export async function getFooterData() {
  const client = getClient();

  return await client.fetch(
    footerDataQuery,
    {},
    {
      next: {
        tags: ['footer'],
        revalidate: 60,
      },
    },
  );
}

// Fetch functional modules list
export async function getFunctionalModulesList(): Promise<FunctionalModulesList | null> {
  const client = getClient();

  return await client.fetch(
    functionalModulesListQuery,
    {},
    {
      next: {
        tags: ['functional-modules'],
        revalidate: 60,
      },
    },
  );
}

// Fetch moving modules data
export async function getMovingModulesData() {
  const client = getClient();

  return await client.fetch(
    movingModulesDataQuery,
    {},
    {
      next: {
        tags: ['moving-modules'],
        revalidate: 60,
      },
    },
  );
}

export interface NavSubModule {
  _id: string;
  name?: string;
  icon?: string;
  slug?: string;
}

export interface NavModule {
  _id: string;
  name?: string;
  icon?: string;
  slug?: string;
  order?: number;
  subModules?: NavSubModule[];
}

export async function getModulesWithSubModules(): Promise<NavModule[]> {
  const client = getClient();

  return await client.fetch(
    modulesWithSubModulesQuery,
    {},
    {
      next: {
        tags: ['modules', 'modules-with-submodules'],
        revalidate: 60,
      },
    },
  );
}

export interface SubModulePageHeroFunction {
  iconUrl?: string;
  content?: string;
}

export interface SubModulePageHero {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: {
    asset?: {
      _id?: string;
      url?: string;
    };
  };
  dashboardFunctions?: SubModulePageHeroFunction[];
  dashboardStat?: {
    value?: string;
    description?: string;
  };
}

export interface SubModuleImproveItem {
  _key: string;
  _type: 'lifecycleStep';
  title?: string;
  description?: string;
  iconName?: string;
}

export interface SubModuleImprove {
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _id?: string;
      url?: string;
    };
  };
  content?: SubModuleImproveItem[];
}

export interface SubModuleFunctionalFeature {
  _key?: string;
  _type?: 'functionalFeature';
  icon?: string;
  title?: string;
  content?: string;
}

export interface SubModuleMainCenterListItem {
  _key: string;
  _type: 'listItem';
  text?: string;
}

export interface SubModuleMainCenterSideSection {
  _key: string;
  _type: 'sideSection';
  span?: string;
  title?: string;
  description?: string;
  image?: {
    _type: 'image';
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
    };
    media?: unknown;
    hotspot?: unknown;
    crop?: unknown;
  };
  list?: SubModuleMainCenterListItem[];
}

export interface SubModuleMainCenter {
  sideSections?: SubModuleMainCenterSideSection[];
}

export interface SubModulePageContent {
  _id: string;
  name?: string;
  slug?: string;
  icon?: string;
  functionalFeatures?: Array<string | SubModuleFunctionalFeature>;
  improve?: SubModuleImprove;
  mainCenter?: SubModuleMainCenter;
  hero?: SubModulePageHero;
}

export async function getSubModulePageContent(
  moduleSlug: string,
  submoduleSlug: string,
): Promise<SubModulePageContent | null> {
  const client = getClient();

  return await client.fetch<SubModulePageContent | null>(
    subModulePageContentBySlugsQuery,
    { moduleSlug, submoduleSlug },
    {
      next: {
        tags: [
          'submodule-page',
          `submodule-page-${moduleSlug}-${submoduleSlug}`,
        ],
        revalidate: 60,
      },
    },
  );
}
