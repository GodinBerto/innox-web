'use client';

import { memo, use, useCallback, useEffect, useMemo, useState } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetSeparator,
  SheetTitle,
} from '@/components/ui/sheet';
import { ChevronRight, ExternalLink, X } from 'lucide-react';
import { Typography } from '../ui/typography';
import { navSheetSecondLinks } from '@/data/navbar.data';
import { DropdownMenuSeparator } from '../ui/dropdown';
import Link from 'next/link';
import { cn } from '@/utils';
import { DynamicIcon } from 'lucide-react/dynamic';
import { NavbarSheetTheme } from '../shared/toggle-theme';
import NavbarContext from '@/utils/contexts/navbar.context';
import { getModulesWithSubModules } from '@/lib/sanity';
import {
  mapSanityModules,
  type NavigationModule,
} from './modules-navigation.utils';

const navSheetPrimaryLinks: Record<MenuKeys, string | null> = {
  Modules: '/modules',
  Home: '/',
  'About Us': '/about-us',
};

const ModuleContent = memo(({ module }: { module: NavigationModule }) => {
  const { closeSheet } = use(NavbarContext);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <Typography variant="strong" className="text-start">
          {module.name}
        </Typography>
        <Link
          href={`/modules/${module.link}`}
          onClick={closeSheet}
          className="text-blue-600 hover:underline flex items-center gap-1 "
          prefetch={false}
        >
          <ExternalLink className="h-4 w-4 text-blue-600 hover:text-blue-800 transition-colors" />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {module.contents.map((content, i) => (
          <div
            key={`${content.link}-${i}`}
            className="flex items-center gap-2 text-sm"
          >
            {content.icon && (
              <DynamicIcon
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name={content.icon as any}
                className="h-4 w-4 text-blue-600"
              />
            )}
            <Link
              href={`/modules/${module.link}/${content.link}`}
              onClick={closeSheet}
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

export function NavigationSheet() {
  const { sheetOpen, onSheetOpenChange, closeSheet } = use(NavbarContext);
  const [selectedKey, setSelectedKey] = useState<MenuKeys>('Modules');
  const [modules, setModules] = useState<NavigationModule[]>([]);
  const [isLoadingModules, setIsLoadingModules] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadModules = async () => {
      try {
        const modulesList = await getModulesWithSubModules();

        if (!isMounted) return;

        setModules(mapSanityModules(modulesList));
      } catch {
        if (!isMounted) return;

        setModules([]);
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

  const primaryNavEntries = useMemo(
    () => Object.entries(navSheetPrimaryLinks) as [MenuKeys, string | null][],
    [],
  );

  const handleKeySelect = useCallback((key: MenuKeys) => {
    setSelectedKey(key);
  }, []);

  return (
    <Sheet open={sheetOpen} onOpenChange={onSheetOpenChange}>
      <SheetContent
        showClose={false}
        side="top"
        className="w-full sm:max-w-full flex flex-col p-0 gap-0 bg-background h-[85vh]"
      >
        {/* Close Button */}
        <SheetClose
          className="absolute right-0 top-0 bg-current/20 transition-opacity hover:bg-current/10 focus:outline-none disabled:pointer-events-none cursor-pointer p-2"
          asChild
        >
          <div>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </div>
        </SheetClose>

        <SheetHeader className="m-0 space-y-0">
          <SheetTitle className="sr-only">Edit profile</SheetTitle>
          <SheetDescription className="sr-only">Side Navbar</SheetDescription>
        </SheetHeader>

        {/* Main Content */}
        <div className="flex flex-row w-full h-full">
          {/* Left Content - Modules */}
          <div className="w-3/4 h-full p-8 overflow-y-auto ">
            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(350px,1fr))] space-y-5">
              {isLoadingModules && (
                <Typography variant="paragraph" className="text-neutral-500">
                  Loading modules...
                </Typography>
              )}

              {!isLoadingModules && modules.length === 0 && (
                <Typography variant="paragraph" className="text-neutral-500">
                  No modules available.
                </Typography>
              )}

              {modules.map((module, idx) => (
                <ModuleContent key={`${module.link}-${idx}`} module={module} />
              ))}
            </div>
          </div>

          {/* Separator */}
          <SheetSeparator className="border-3 dark:border-neutral-800" />

          {/* Right Content - Navigation */}
          <div className="w-1/4 h-full flex flex-col bg-neutral-200 dark:bg-neutral-800 p-10">
            <div className="flex flex-col flex-grow h-full space-y-4 sm:space-y-8">
              {/* Main Navigation Links */}
              <div>
                {primaryNavEntries.map(([key, value], idx) => {
                  const isLink = typeof value === 'string';
                  return (
                    <div
                      key={`nav-${idx}`}
                      className={cn(
                        'w-full text-left flex items-center hover:translate-x-1 cursor-pointer',
                        selectedKey === key && 'text-blue-700 font-semibold',
                      )}
                      onClick={() => handleKeySelect(key)}
                    >
                      {isLink ? (
                        <Link
                          href={value}
                          className="flex items-center gap-1 "
                          prefetch={false}
                          onClick={closeSheet}
                        >
                          <Typography variant="paragraph" className="font-bold">
                            {key}
                          </Typography>
                        </Link>
                      ) : (
                        <Typography variant="paragraph" className="font-bold">
                          {key}
                        </Typography>
                      )}
                      {selectedKey === key && (
                        <ChevronRight className="h-4 w-4 text-blue-700 ml-1" />
                      )}
                    </div>
                  );
                })}
              </div>

              <DropdownMenuSeparator className="border-gray-400" />

              {/* Secondary Links */}
              <div>
                {navSheetSecondLinks.map((link, idx) => (
                  <Link
                    href={link.link}
                    key={`second-link-${idx}`}
                    className="w-full text-left hover:translate-x-0.5 flex items-center py-1"
                    prefetch={false}
                    onClick={closeSheet}
                  >
                    <Typography
                      variant="span"
                      className="cursor-pointer hover:text-blue-600"
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <NavbarSheetTheme />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
