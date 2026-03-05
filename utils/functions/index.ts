import {
  ModuleName,
  SubModuleLink,
  modulesContentData,
} from '@/data/modules.data';
import { SearchParamKeys } from '@/types';

export function getInitials(input: string, isSlug: boolean = true): string {
  const separator = isSlug ? '-' : ' ';
  const words = input.split(separator).filter((word) => word.length > 0);

  if (words.length === 0) return '';
  if (words.length === 1) return words[0].charAt(0).toUpperCase();

  return words.map((word) => word.charAt(0).toUpperCase()).join('');
}

export const getDropdownStyles = (
  mobileLeft: string,
  mobileTop: string,
  desktopLeft: string,
  desktopTop: string,
  isMobile: boolean,
) =>
  isMobile
    ? { left: mobileLeft, top: mobileTop } // Mobile styles
    : { left: desktopLeft, top: desktopTop }; // Desktop styles

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

export function getModuleContent<
  M extends ModuleName,
  S extends SubModuleLink<M>,
>(module: M, submodule: S): _IModulePageContent {
  return modulesContentData?.[module]?.[submodule] as _IModulePageContent;
}

export function unslugify(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const getEntityType = <T extends SearchParamKeys>(
  pathname: string,
): _ISearchObj<T> => {
  const defaultPlaceholders = [
    'Search for entity 1',
    'Another Search for entity 2',
    'Search for entity 3',
  ];
  const entityType: T = 'QUERY' as T;
  let placeholders: string[];
  const pathnameArr = pathname.split('/');
  let resolvedPath: string;
  let type: 'module' | 'submodule' | undefined;

  switch (pathnameArr.length) {
    case 3:
      type = 'module';
      resolvedPath = pathnameArr[2];
      break;
    case 4:
      type = 'submodule';
      resolvedPath = pathnameArr[3];
      break;
    default:
      resolvedPath = '';
      type = undefined;
      break;
  }

  if (resolvedPath) {
    let matchedModule: string | undefined;

    if (type === 'module') {
      matchedModule = Object.keys(modulesContentData).find(
        (module) => module === resolvedPath,
      );
    } else if (type === 'submodule') {
      // Find the parent module and submodule key
      for (const [, submodules] of Object.entries(modulesContentData)) {
        if (Object.keys(submodules).includes(resolvedPath)) {
          matchedModule = resolvedPath;
          break;
        }
      }
    }

    if (matchedModule) {
      placeholders =
        type === 'module'
          ? [`Search for ${unslugify(matchedModule)}`, 'Search for Modules']
          : [
              'Search for Modules',
              `Search for ${unslugify(matchedModule)}`,
              'Search for Sub Modules',
            ];
    } else {
      placeholders = defaultPlaceholders;
    }
  } else {
    placeholders = defaultPlaceholders;
  }

  return {
    entityType,
    placeholders,
  };
};
