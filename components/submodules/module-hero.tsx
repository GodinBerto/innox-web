import { cn } from '@/utils';
import { Typography } from '../ui/typography';
import Link from 'next/link';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { DynamicIcon } from 'lucide-react/dynamic';
import { memo } from 'react';
import Image from 'next/image';

const HeroCard = memo(
  ({ children, classname }: _IChildren & { classname?: string }) => {
    return (
      <div
        className={cn(
          'absolute rounded-2xl border border-white/70 bg-white/95 p-3 text-gray-900 shadow-lg shadow-black/5 backdrop-blur-sm transition-all duration-300 dark:border-neutral-700 dark:bg-neutral-900/95 dark:text-gray-100 dark:shadow-black/30 sm:p-4',
          classname,
        )}
      >
        {children}
      </div>
    );
  },
);

HeroCard.displayName = 'HeroCard';

const ModulesHero = ({ data }: { data: _ISubModulesPageHero }) => {
  const primaryFunctions = data.dashboardFunctions.slice(0, 3);
  const secondaryFunctions = data.dashboardFunctions.slice(3);

  return (
    <section className="relative flex min-h-[calc(100vh-72px)] w-full items-center justify-center overflow-hidden py-14 sm:py-16 lg:min-h-[calc(100vh-50px)] lg:py-20">
      <Image
        src={data.backgroundImageUrl}
        alt={data.title.trim().slice(0, 10)}
        fill
        className="absolute inset-0 h-full w-full object-cover dark:hidden"
        priority
      />
      <Image
        src={data.darkBackgroundImageUrl || data.backgroundImageUrl}
        alt=""
        aria-hidden
        fill
        className="absolute inset-0 hidden h-full w-full object-cover dark:block"
        priority
      />
      <div className="absolute inset-0 bg-white/85 dark:bg-black/65" />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,531px)] lg:gap-10">
        <div className="order-2 space-y-6 text-center sm:space-y-8 lg:order-1 lg:text-left">
          <MotionWrapper variant="slideRight">
            <Typography
              variant="span"
              className="inline-flex rounded-full border border-orange-500 bg-white px-3 py-1 text-xs font-semibold text-orange-500 dark:bg-black"
            >
              {data.slug.toUpperCase()}
            </Typography>
          </MotionWrapper>

          <MotionWrapper variant="slideRight">
            <Typography
              variant="title"
              className="mx-auto max-w-[560px] text-center text-3xl font-semibold text-black dark:text-white sm:text-4xl lg:mx-0 lg:text-left lg:text-6xl"
            >
              {data.title}
            </Typography>
          </MotionWrapper>

          <MotionWrapper variant="slideRight">
            <Typography
              variant="paragraph"
              className="mx-auto max-w-[520px] text-center font-semibold text-black/55 dark:text-gray-300 lg:mx-0 lg:text-left line-clamp-4"
            >
              {data.description}
            </Typography>
          </MotionWrapper>

          {data.buttonText && data.buttonLink && (
            <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <MotionWrapper variant="slideRight">
                <Link
                  href={data.buttonLink}
                  className="inline-flex w-full items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 sm:w-auto"
                >
                  Get Started
                </Link>
              </MotionWrapper>
            </div>
          )}
        </div>

        <div className="order-1 lg:flex w-full justify-center lg:order-2 lg:justify-end hidden">
          <MotionWrapper variant="slideLeft" className="w-full max-w-[531px]">
            <div className="relative mx-auto aspect-531/391 w-full max-w-[531px]">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/50 shadow-2xl shadow-black/10 dark:border-neutral-800 dark:shadow-black/40">
                <Image
                  src="/assets/images/dashboards/hrm.png"
                  alt={data.title.trim().slice(0, 10)}
                  fill
                  className="object-cover"
                />
              </div>

              {primaryFunctions.length > 0 && (
                <MotionWrapper variant="fadeIn">
                  <HeroCard classname="-bottom-8 left-2 w-[min(78%,260px)] sm:-bottom-10 sm:-left-8">
                    <div className="space-y-2">
                      {primaryFunctions.map((func) => (
                        <div
                          key={func.content}
                          className="flex items-center gap-2"
                        >
                          {func.iconUrl && (
                            <DynamicIcon
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              name={func.iconUrl as any}
                              className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                            />
                          )}
                          <Typography
                            variant="paragraph"
                            className="p-0 text-left text-sm font-semibold leading-6"
                          >
                            {func.content}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </HeroCard>
                </MotionWrapper>
              )}

              <MotionWrapper variant="fadeIn">
                <HeroCard classname="-right-1 bottom-2 w-28 text-left sm:-right-8 sm:-bottom-4 sm:w-32">
                  <Typography
                    variant="subtitle"
                    className="m-0 p-0 text-left font-bold text-[#E02475]"
                  >
                    {data.dashboardStat.value}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="p-0 text-left text-sm font-semibold leading-5"
                  >
                    {data.dashboardStat.description}
                  </Typography>
                </HeroCard>
              </MotionWrapper>

              {secondaryFunctions.length > 0 && (
                <MotionWrapper variant="fadeIn">
                  <HeroCard classname="-top-6 right-2 w-[min(72%,240px)] sm:-top-12 sm:-right-8">
                    <div className="space-y-2">
                      {secondaryFunctions.map((func) => (
                        <div
                          key={func.content}
                          className="flex items-center gap-2"
                        >
                          {func.iconUrl && (
                            <DynamicIcon
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              name={func.iconUrl as any}
                              className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                            />
                          )}
                          <Typography
                            variant="paragraph"
                            className="p-0 text-left text-sm font-semibold leading-6"
                          >
                            {func.content}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </HeroCard>
                </MotionWrapper>
              )}
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default ModulesHero;
