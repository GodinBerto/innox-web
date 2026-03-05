'use client';

import { Typography } from '../ui/typography';
import Link from 'next/link';
import { MotionWrapper } from '../hoc/motion-wrapper';
import Image from 'next/image';
import {
  ModulesDashboardMain,
  ModulesDashboardOthers,
} from './modules-dashboard-slider';

const ModulesHero = ({ hero }: { hero: _IModulesPageHero }) => {
  return (
    <div className="min-h-[calc(100vh-50px)] lg:h-[calc(100vh-50px)] w-full rounded-md relative flex items-center justify-center overflow-hidden py-12 sm:py-16">
      <Image
        src={'/assets/images/modules/hero.jpg'}
        alt={hero.title}
        fill
        className="absolute w-full h-full object-cover"
        priority
      />
      <div className="bg-white/80 w-full h-full absolute top-0"></div>

      <div className="container relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-8">
        {/* Left side - Text content */}
        <div className="w-full lg:flex-1 items-start space-y-6 sm:space-y-8">
          <MotionWrapper variant="slideRight">
            <Typography
              variant="span"
              className="border border-orange-500 text-orange-500 font-semibold text-xs sm:text-sm bg-white px-3 py-1 rounded-full"
            >
              {hero.slug.toUpperCase()}
            </Typography>
          </MotionWrapper>
          <MotionWrapper variant="slideRight">
            <Typography
              variant="title"
              className="font-semibold text-center text-black lg:text-left max-w-[500px] text-3xl sm:text-4xl lg:text-5xl"
            >
              {hero.title ||
                'InnoX Modules: Tailored Solutions for Every Department'}
            </Typography>
          </MotionWrapper>
          <MotionWrapper variant="slideRight">
            <Typography
              variant="paragraph"
              className="text-black/50 font-semibold max-w-[440px] text-center lg:text-left"
            >
              {hero.description}
            </Typography>
          </MotionWrapper>
          {hero.buttonText && hero.buttonLink && (
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center lg:items-start">
              <MotionWrapper variant="slideRight">
                <Link
                  href={hero.buttonLink}
                  className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-full shadow-lg hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
                >
                  Get Started
                </Link>
              </MotionWrapper>
              <MotionWrapper variant="slideRight">
                <Link
                  href={hero.buttonLink}
                  className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
                >
                  {hero.buttonText}
                </Link>
              </MotionWrapper>
            </div>
          )}
        </div>

        {/* Right side - Dashboard slider */}
        <div className="w-full lg:flex-1 relative flex justify-center lg:justify-end">
          {/* Current Dashboard */}
          <ModulesDashboardMain
            dashboards={
              hero?.dashboards || ['/assets/images/dashboards/hrm.png']
            }
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <ModulesDashboardOthers dashboards={hero?.dashboards || []} />
      </div>
    </div>
  );
};

export default ModulesHero;
