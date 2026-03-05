'use client';

import { useMemo, useState } from 'react';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { Button } from '../ui/button';
import Image from 'next/image';
import { modulesSubmodulesData } from '@/data/modules-submodules.data';
import { ModuleName, SubModuleLink } from '@/data/modules.data';
import FunctionalModules from './functional-modules';

export const ExploreSubModulesClient = ({ module }: { module: ModuleName }) => {
  const submoduleRecord = modulesSubmodulesData[module];

  const dashboards = useMemo(() => {
    return submoduleRecord
      ? (Object.entries(submoduleRecord).map(([key, value]) => ({
          key,
          ...value,
        })) as ({ key: SubModuleLink<ModuleName> } & _IModulesSubModules)[])
      : [];
  }, [submoduleRecord]);

  const [activeIndex, setActiveIndex] = useState(0);

  if (!submoduleRecord) {
    return (
      <div className="">
        <div className="text-center text-red-500">
          No submodules found for this module.
        </div>
        <div className="flex-1">
          <FunctionalModules data={[]} name={''} />
        </div>
      </div>
    );
  }

  return (
    <>
      {' '}
      <div className="flex justify-center items-center flex-wrap gap-6">
        <div className=" flex-2/3">
          <div className="flex flex-wrap gap-4 ">
            {dashboards.map(({ name }, idx) => (
              <MotionWrapper key={idx} variant="fadeIn" className="mb-4">
                <Button
                  variant={'outline'}
                  className="py-6 min-w-[195px] text-xl cursor-pointer duration-100"
                  aria-selected={activeIndex === idx}
                  onClick={() => setActiveIndex(idx)}
                >
                  {name}
                </Button>
              </MotionWrapper>
            ))}
          </div>
        </div>
        <div className="flex-1/3 flex ">
          <div className="flex-1">
            <FunctionalModules
              data={dashboards[activeIndex].functionalFeatures}
              name={dashboards[activeIndex].name}
            />
          </div>
          <div className="flex-1">
            <MotionWrapper variant="slideDown">
              <Image
                src={dashboards[activeIndex].imageUrl}
                alt="Current dashboard"
                width={531}
                height={391}
                className="rounded-md shadow-sm object-cover"
                priority
              />
            </MotionWrapper>
          </div>
        </div>
      </div>
    </>
  );
};

//TODO Use context to share props between individual components
