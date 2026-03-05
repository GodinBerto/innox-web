'use client';

import Image from 'next/image';
import { InfiniteMovingContents } from '../ui/infinite-moving-content';
import { MODULES_GROUP_A, MODULES_GROUP_B } from '@/data/moving-modules.data';
import { cn } from '@/utils';
import { Typography } from '../ui/typography';

export function MovingModules() {
  return (
    <div className="relative space-y-0 md:space-y-0">
      <Typography
        variant="subtitle"
        className="text-center text-4xl md:text-5xl font-bold leading-tight"
      >
        Modules
      </Typography>
      <div className="rounded-md flex flex-col dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingContents className="py-0" direction="right" speed="slow">
          {(className, _, helperDiv) => (
            <>
              {MODULES_GROUP_B.map((module, idx) => (
                <li
                  className={cn(
                    className,
                    'w-fit md:w-fit !bg-transparent border-0 py-0',
                  )}
                  key={`${module.name}-${idx}`}
                >
                  <div>
                    {helperDiv}
                    <div className="relative z-20 flex flex-row items-center">
                      <div className="flex flex-col gap-1 justify-center items-center text-center">
                        <div className="font-normal text-neutral-500 dark:text-gray-400 h-[139px] w-[139px] shadow-xl shadow-gray-100 dark:shadow-gray-900 items-center rounded-full overflow-hidden flex justify-center">
                          <Image
                            width={module.image.width}
                            height={module.image.height}
                            src={`/assets/images/modules/${module.image.src}.png`}
                            alt={module.image.src}
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
              {MODULES_GROUP_A.map((module, idx) => (
                <li
                  className={cn(
                    className,
                    'w-fit md:w-fit !bg-transparent border-0 py-0',
                  )}
                  key={`${module.name}-${idx}`}
                >
                  <div>
                    {helperDiv}
                    <div className="relative z-20 mt-0 flex flex-row items-center">
                      <div className="flex flex-col gap-1 justify-center items-center text-center">
                        <div className="font-normal text-neutral-500 dark:text-gray-400 h-[139px] w-[139px] shadow-xl shadow-gray-100  dark:shadow-gray-900 items-center rounded-full overflow-hidden flex justify-center">
                          <Image
                            width={module.image.width}
                            height={module.image.height}
                            src={`/assets/images/modules/${module.image.src}.png`}
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
