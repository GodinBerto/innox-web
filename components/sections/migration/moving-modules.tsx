'use client';

import Image from 'next/image';
import { cn } from '@/utils';
import { InfiniteMovingContents } from '@/components/ui/infinite-moving-content';
import { Typography } from '@/components/ui/typography';
import { MovingModules as MovingModulesType } from '@/types/sanity/schema';
import { urlForImage } from '@/lib/sanity';

export function MovingModules({
  title = 'Modules',
  modulesGroupA = [],
  modulesGroupB = [],
}: MovingModulesType) {
  return (
    <div className="relative space-y-0 md:space-y-0">
      <Typography
        variant="subtitle"
        className="text-center text-4xl md:text-5xl font-bold leading-tight"
      >
        {title}
      </Typography>
      <div className="rounded-md flex flex-col dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingContents className="py-0" direction="right" speed="slow">
          {(className, _, helperDiv) => (
            <>
              {modulesGroupB.map((module, idx) => (
                <li
                  className={cn(
                    className,
                    'w-fit md:w-fit bg-transparent! border-0 py-0',
                  )}
                  key={`${module.name}-${idx}`}
                >
                  <div>
                    {helperDiv}
                    <div className="relative z-20 flex flex-row items-center">
                      <div className="flex flex-col gap-1 justify-center items-center text-center">
                        <div className="font-normal text-neutral-500 dark:text-gray-400 h-[139px] w-[139px] shadow-xl shadow-gray-100 dark:shadow-gray-900 items-center rounded-full overflow-hidden flex justify-center">
                          <Image
                            // width={
                            //   module.image?.asset?.metadata?.dimensions
                            //     ?.width || 60
                            // }
                            width={60}
                            height={60}
                            src={
                              module.image
                                ? (urlForImage(module.image)
                                    .width(120)
                                    .height(120)
                                    .url() as string)
                                : ''
                            }
                            alt={module.name || ''}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-base leading-[1.6] font-medium text-neutral-500 dark:text-gray-400 max-w-[173px] mt-2">
                          {module.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </>
          )}
        </InfiniteMovingContents>
      </div>
      <div className="rounded-md flex flex-col items-center justify-center relative overflow-hidden">
        <InfiniteMovingContents direction="left" speed="slow" className="py-0">
          {(className, _, helperDiv) => (
            <>
              {modulesGroupA.map((module, idx) => (
                <li
                  className={cn(
                    className,
                    'w-fit md:w-fit bg-transparent! border-0 py-0',
                  )}
                  key={`${module.name}-${idx}`}
                >
                  <div>
                    {helperDiv}
                    <div className="relative z-20 mt-0 flex flex-row items-center">
                      <div className="flex flex-col gap-1 justify-center items-center text-center">
                        <div className="font-normal text-neutral-500 dark:text-gray-400 h-[139px] w-[139px] shadow-xl shadow-gray-100  dark:shadow-gray-900 items-center rounded-full overflow-hidden flex justify-center">
                          <Image
                            width={60}
                            height={60}
                            src={
                              module.image
                                ? (urlForImage(module.image)
                                    .width(120)
                                    .height(120)
                                    .url() as string)
                                : ''
                            }
                            alt="circleoflines"
                            className="object-cover"
                          />
                        </div>
                        <span className="text-base leading-[1.6] font-medium text-neutral-500 dark:text-gray-400 max-w-[173px] mt-2">
                          {module.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </>
          )}
        </InfiniteMovingContents>
      </div>
    </div>
  );
}
