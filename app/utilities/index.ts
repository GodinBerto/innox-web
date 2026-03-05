import { modulesContentData } from '@/data/modules.data';

export function getSubModuleData(
  module: string,
  submodule: string,
): _ISubModulePageContent | undefined {
  const mod = modulesContentData[module as keyof typeof modulesContentData];
  if (!mod) return undefined;

  const sub = mod[submodule as keyof typeof mod];
  if (!sub) return undefined;

  return sub;
}
