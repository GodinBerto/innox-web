'use client';

import { Typography } from '../ui/typography';
import Link from 'next/link';
import { MotionWrapper } from '../hoc/motion-wrapper';
import Image from 'next/image';
import { ArrowUpRight, Layers3 } from 'lucide-react';
import {
  ModulesDashboardMain,
  ModulesDashboardOthers,
} from './modules-dashboard-slider';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

type ModuleHeroSubModule = {
  name: string;
  slug: string;
  description?: string;
  href: string;
};

const ModulesHero = ({
  hero,
  subModules = [],
}: {
  hero: _IModulesPageHero;
  subModules?: ModuleHeroSubModule[];
}) => {
  const hasSubModules = subModules.length > 0;

  return (
    <div className="min-h-[calc(100vh-50px)] lg:h-[calc(100vh-50px)] w-full rounded-md relative flex items-center justify-center overflow-hidden py-12 sm:py-16">
      <Image
        src="/assets/images/modules/hero.jpg"
        alt={hero.title}
        fill
        className="absolute w-full h-full object-cover dark:hidden"
        priority
      />
      <Image
        src="/assets/images/modules/dark-hero.jpg"
        alt=""
        aria-hidden
        fill
        className="absolute w-full h-full object-cover hidden dark:block"
        priority
      />
      <div className="bg-white/80 dark:bg-black/60 w-full h-full absolute top-0"></div>

      <div className="container relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-8">
        {/* Left side - Text content */}
        <div className="w-full lg:flex-1 items-center md:items-start space-y-6 sm:space-y-8">
          <MotionWrapper variant="slideRight">
            <Typography
              variant="span"
              className="border border-orange-500 text-orange-500 font-semibold text-xs  bg-white dark:bg-black px-3 py-1 rounded-full"
            >
              {hero.slug.toUpperCase()}
            </Typography>
          </MotionWrapper>
          <MotionWrapper variant="slideRight">
            <Typography
              variant="title"
              className="font-semibold text-center text-black lg:text-left max-w-[500px] text-3xl sm:text-4xl lg:text-6xl"
            >
              {hero.title ||
                'InnoX Modules: Tailored Solutions for Every Department'}
            </Typography>
          </MotionWrapper>
          <MotionWrapper variant="slideRight">
            <Typography
              variant="paragraph"
              className="text-black/50 dark:text-gray-300 max-w-[440px] text-center lg:text-left"
            >
              {hero.description}
            </Typography>
          </MotionWrapper>
          {(hero.buttonLink || hero.buttonText) && (
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
              {hero.buttonLink && (
                <MotionWrapper variant="slideRight">
                  <Link
                    href={hero.buttonLink}
                    className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-full shadow-lg hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
                  >
                    Get Started
                  </Link>
                </MotionWrapper>
              )}
              {hero.buttonText &&
                (hasSubModules ? (
                  <MotionWrapper variant="slideRight">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
                        >
                          {hero.buttonText}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl border-border bg-background p-0 sm:rounded-3xl">
                        <DialogHeader className="border-b border-border px-6 py-5 sm:px-8">
                          <DialogTitle className="text-2xl font-semibold text-foreground">
                            Explore {hero.slug || 'Module'} Submodules
                          </DialogTitle>
                          <DialogDescription className="text-sm leading-6 text-muted-foreground">
                            Select a submodule to see its workflows, tools, and
                            module-specific features.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="max-h-[70vh] overflow-y-auto px-6 py-6 sm:px-8">
                          <div className="mb-5 flex items-center gap-3 rounded-2xl border border-orange-500/15 bg-orange-500/5 px-4 py-3 text-sm text-muted-foreground dark:border-orange-500/20 dark:bg-orange-500/10">
                            <Layers3 className="h-4 w-4 text-orange-500" />
                            <span>
                              {subModules.length} submodule
                              {subModules.length > 1 ? 's' : ''} available under
                              this module
                            </span>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {subModules.map((subModule) => (
                              <Link
                                key={subModule.href}
                                href={subModule.href}
                                className="group rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/[0.03] dark:hover:bg-orange-500/[0.08]"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  <div className="space-y-2">
                                    <h3 className="text-base font-semibold text-foreground">
                                      {subModule.name}
                                    </h3>
                                    <p className="text-sm leading-6 text-muted-foreground line-clamp-3">
                                      {subModule.description?.trim() ||
                                        'Open this submodule to explore its focused tools and workflows.'}
                                    </p>
                                  </div>
                                  <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-orange-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </MotionWrapper>
                ) : (
                  hero.buttonLink && (
                    <MotionWrapper variant="slideRight">
                      <Link
                        href={hero.buttonLink}
                        className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
                      >
                        {hero.buttonText}
                      </Link>
                    </MotionWrapper>
                  )
                ))}
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
