import type { NavModule } from '@/lib/sanity';
import { slugify } from '@/utils/functions';

export interface NavigationSubModule {
  name: string;
  link: string;
  icon?: string;
}

export interface NavigationModule {
  name: string;
  link: string;
  icon?: string;
  contents: NavigationSubModule[];
}

export const normalizeIconName = (icon?: string): string | undefined => {
  if (!icon) return undefined;

  return icon.replace(/^lucide-/, '').trim();
};

export const resolveSlug = (slug?: string, name?: string): string => {
  const resolvedSlug = slug?.trim().replace(/^\/+/, '');

  if (resolvedSlug) return resolvedSlug;

  return slugify(name ?? '');
};

export const mapSanityModules = (
  modulesWithSubModules: NavModule[],
): NavigationModule[] => {
  const mappedModules: NavigationModule[] = [];

  for (const sanityModule of modulesWithSubModules) {
    const moduleName = sanityModule.name?.trim();

    if (!moduleName) continue;

    const subModules: NavigationSubModule[] = [];

    for (const subModule of sanityModule.subModules ?? []) {
      const subModuleName = subModule.name?.trim();

      if (!subModuleName) continue;

      subModules.push({
        name: subModuleName,
        link: resolveSlug(subModule.slug, subModuleName),
        icon: normalizeIconName(subModule.icon),
      });
    }

    mappedModules.push({
      name: moduleName,
      link: resolveSlug(sanityModule.slug, moduleName),
      icon: normalizeIconName(sanityModule.icon),
      contents: subModules,
    });
  }

  return mappedModules;
};
