'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useTransition, useMemo, memo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { SearchIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { SearchParamKeys } from '@/types';
import { getEntityType } from '@/utils/functions';
import { VanishInput } from '../ui/vanish-input';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Typography } from '../ui/typography';
import Link from 'next/link';
import { getModulesWithSubModules } from '@/lib/sanity';
import {
  mapSanityModules,
  type NavigationModule,
} from './modules-navigation.utils';

interface IProps {
  disabled?: boolean;
}

const ModuleContent = memo(({ module }: { module: NavigationModule }) => {
  return (
    <div className="space-y-4 space-x-4">
      <div className="flex items-center gap-10">
        <Link
          href={`/modules/${module.link}`}
          // onClick={closeSheet}
          className="text-blue-600 hover:underline flex items-center gap-1 "
          prefetch={false}
        >
          <Typography variant="strong" className="text-start mt-10">
            {module.name}
          </Typography>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {module.contents?.map((content, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            {content.icon && (
              <DynamicIcon
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name={content.icon as any}
                className="h-4 w-4 text-blue-600"
              />
            )}
            <Link
              href={`/modules/${module.link}/${content.link}`}
              // onClick={closeSheet}
              className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors w-fit"
              prefetch={false}
            >
              <Typography variant="span">{content.name}</Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});

ModuleContent.displayName = 'ModuleContent';
export default function Search<T extends SearchParamKeys>({
  disabled,
}: IProps) {
  const [modules, setModules] = useState<NavigationModule[]>([]);
  const [filteredData, setFilteredData] = useState<NavigationModule[]>([]);
  const [isLoadingModules, setIsLoadingModules] = useState(true);

  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const { placeholders } = useMemo(
    () => getEntityType<T>(pathname),
    [pathname],
  );

  useEffect(() => {
    let isMounted = true;

    const loadModules = async () => {
      try {
        const modulesList = await getModulesWithSubModules();

        if (!isMounted) return;

        const mappedModules = mapSanityModules(modulesList);

        setModules(mappedModules);
        setFilteredData(mappedModules);
      } catch {
        if (!isMounted) return;

        setModules([]);
        setFilteredData([]);
      } finally {
        if (isMounted) {
          setIsLoadingModules(false);
        }
      }
    };

    void loadModules();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = useDebouncedCallback((term: string) => {
    if (!term.trim()) {
      setFilteredData(modules);
      return;
    }

    const resolvedTerm = term.toLowerCase();

    const filteredModules = modules
      .filter((module) => {
        // Check if module name matches
        const moduleNameMatch = module.name
          .toLowerCase()
          .includes(resolvedTerm);

        // Filter contents that match
        const filteredContents = module.contents.filter((content) =>
          content.name.toLowerCase().includes(resolvedTerm),
        );

        return moduleNameMatch || filteredContents.length > 0;
      })
      .map((module) => ({
        ...module,
        contents: module.name.toLowerCase().includes(resolvedTerm)
          ? module.contents
          : module.contents.filter((content) =>
              content.name.toLowerCase().includes(resolvedTerm),
            ),
      }));

    startTransition(() => {
      setFilteredData(filteredModules);
    });
  }, 300);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="">
          <SearchIcon className="flex cursor-pointer" />
        </div>
      </DialogTrigger>
      <DialogContent
        showClose={false}
        className="w-full sm:max-w-xl md:max-w-4xl h-auto sm:-mt-2 min-h-[300px] md:space-y-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90%]"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Use this dialog to search for modules and sub modules
          </DialogDescription>
        </DialogHeader>
        {/* Input */}

        <div className="relative shrink-0">
          <VanishInput
            placeholders={placeholders}
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={''}
            isPending={isPending}
            disabled={disabled}
          />
        </div>

        {/* Content */}
        <div className="grid gap-0 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] space-y-0">
          {isLoadingModules && (
            <Typography variant="paragraph" className="text-neutral-500">
              Loading modules...
            </Typography>
          )}

          {!isLoadingModules && filteredData.length === 0 && (
            <Typography variant="paragraph" className="text-neutral-500">
              {modules.length === 0
                ? 'No modules available.'
                : 'No matching modules or submodules found.'}
            </Typography>
          )}

          {!isLoadingModules &&
            filteredData.map((module, idx) => (
              <ModuleContent key={`${module.link}-${idx}`} module={module} />
            ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
