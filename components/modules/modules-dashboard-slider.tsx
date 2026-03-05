'use client';

import DashboardSliderContext from '@/utils/contexts/dashboard-slider.context';
import { use } from 'react';
import { MotionWrapper } from '../hoc/motion-wrapper';
import Image from 'next/image';

export const ModulesDashboardMain = ({
  dashboards,
}: {
  dashboards: string[];
}) => {
  const { currentIndex } = use(DashboardSliderContext);

  if (dashboards.length === 0) {
    return null;
  }
  return (
    <MotionWrapper variant="slideDown" key={`current-${currentIndex}`}>
      <Image
        src={dashboards[currentIndex] || '/assets/images/dashboards/hrm.png'}
        alt="Current dashboard"
        width={531}
        height={391}
        className="rounded-md relative object-cover w-full h-auto max-w-[531px] mx-auto shadow-sm"
        priority
      />
    </MotionWrapper>
  );
};

export const ModulesDashboardOthers = ({
  dashboards,
}: {
  dashboards: string[];
}) => {
  const { getDashboardIndex } = use(DashboardSliderContext);

  if (dashboards.length === 0) {
    return null;
  }

  return (
    <>
      {/* Next Dashboard (preview) */}
      <div className="absolute -top-[25%] -right-10 opacity-60 blur-xs">
        <MotionWrapper variant="slideLeft">
          <Image
            src={dashboards[getDashboardIndex(1)]}
            alt="Next dashboard"
            width={531}
            height={391}
            className="rounded-md shadow-sm relative object-cover"
          />
        </MotionWrapper>
      </div>

      {/* Previous Dashboard (preview) */}
      <div className="absolute -bottom-[25%] -right-10 opacity-60 blur-xs">
        <MotionWrapper variant="slideLeft">
          <Image
            src={dashboards[getDashboardIndex(-1)]}
            alt="Previous dashboard"
            width={531}
            height={391}
            className="rounded-md shadow-sm relative object-cover"
          />
        </MotionWrapper>
      </div>
    </>
  );
};
