'use client';

import * as Icons from 'lucide-react';
import { Layers3, type LucideIcon } from 'lucide-react';
import { InfiniteMovingContents } from '../ui/infinite-moving-content';
import { cn } from '@/utils';
import { Typography } from '../ui/typography';
import type { MovingModules as MovingModulesType } from '@/types/sanity/schema';

type MovingModuleItem = NonNullable<MovingModulesType['modulesGroupA']>[number];

function toPascalCase(value: string) {
  return value
    .replace(/^lucide-/, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function getIconComponent(iconName?: string): LucideIcon {
  const key = toPascalCase(iconName || 'Layers3');
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  return iconMap[key] || Layers3;
}

export function MovingModules({
  title = 'Modules',
  groupA,
  groupB,
}: {
  title?: string;
  groupA?: MovingModulesType['modulesGroupA'];
  groupB?: MovingModulesType['modulesGroupB'];
}) {
  const safeGroupA = (groupA ?? []).filter(
    (module): module is MovingModuleItem =>
      Boolean(module?.name || module?.icon),
  );
  const safeGroupB = (groupB ?? []).filter(
    (module): module is MovingModuleItem =>
      Boolean(module?.name || module?.icon),
  );

  return (
    <div className="relative space-y-0 md:space-y-0">
      <Typography
        variant="subtitle"
        className="text-center text-4xl md:text-5xl font-bold leading-tight"
      >
        {title}
      </Typography>
      <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingContents
          className="py-0"
          direction="right"
          speed="normal"
        >
          {(className, _, helperDiv) => (
            <>
              {safeGroupA.map((module, idx) => {
                const Icon = getIconComponent(module.icon);

                return (
                  <li
                    className={cn(
                      className,
                      'w-fit md:w-fit bg-transparent! border-0 py-0',
                    )}
                    key={module._key ?? `${module.name}-${idx}`}
                  >
                    <div>
                      {helperDiv}
                      <div className="relative z-20 flex flex-row items-center">
                        <div className="flex flex-col gap-1 justify-center items-center text-center">
                          <div className="font-normal text-neutral-500 dark:text-gray-400 h-[139px] w-[139px] shadow-xl shadow-gray-100 dark:shadow-gray-900 items-center rounded-full overflow-hidden flex justify-center">
                            <Icon className="h-16 w-16 text-gray-300 dark:text-gray-700" />
                          </div>
                          <span className="text-base leading-[1.6] font-medium text-neutral-500 dark:text-gray-400 max-w-[173px] mt-2">
                            {module.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </>
          )}
        </InfiniteMovingContents>
      </div>
      <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingContents
          direction="left"
          speed="normal"
          className="py-0"
        >
          {(className, _, helperDiv) => (
            <>
              {safeGroupB.map((module, idx) => {
                const Icon = getIconComponent(module.icon);

                return (
                  <li
                    className={cn(
                      className,
                      'w-fit md:w-fit bg-transparent! border-0 py-0',
                    )}
                    key={module._key ?? `${module.name}-${idx}`}
                  >
                    <div>
                      {helperDiv}
                      <div className="relative z-20 mt-0 flex flex-row items-center">
                        <div className="flex flex-col gap-1 justify-center items-center text-center">
                          <div className="font-normal text-neutral-500 dark:text-gray-400 h-[139px] w-[139px] shadow-xl shadow-gray-100 dark:shadow-gray-900 items-center rounded-full overflow-hidden flex justify-center">
                            <Icon className="h-16 w-16 text-gray-300 dark:text-gray-700" />
                          </div>
                          <span className="text-base leading-[1.6] font-medium text-neutral-500 dark:text-gray-400 max-w-[173px] mt-2">
                            {module.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </>
          )}
        </InfiniteMovingContents>
      </div>
    </div>
  );
}
