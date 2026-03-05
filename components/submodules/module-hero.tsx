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
          'flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-xl hover:translate-x-0.5 transition-all duration-300 absolute shadow-neutral-200 dark:shadow-neutral-800',
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
  return (
    <div className="h-screen w-full rounded-md relative flex flex-row items-center justify-center">
      <Image
        src={'/assets/images/pages/hr.png'}
        alt={data.title.trim().slice(0, 10)}
        fill
        className="absolute w-full h-full object-cover"
        priority
      />
      <div className="container relative z-10 -mt-20 flex">
        <div className="flex-1 items-start space-y-8">
          <MotionWrapper variant="slideRight">
            <Typography
              variant="span"
              className="border border-orange-500 text-orange-500 font-semibold text-sm bg-white px-3 py-1 rounded-full"
            >
              {data.slug.toUpperCase()}
            </Typography>
          </MotionWrapper>
          <MotionWrapper variant="slideRight">
            <Typography
              variant="title"
              className="font-semibold text-center text-black sm:text-left max-w-[500px]"
            >
              {data.title}
            </Typography>
          </MotionWrapper>
          <MotionWrapper variant="slideRight">
            <Typography
              variant="paragraph"
              className=" text-black/50 font-semibold max-w-[440px]"
            >
              {data.description}
            </Typography>
          </MotionWrapper>
          {data.buttonText && data.buttonLink && (
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <MotionWrapper variant="slideRight">
                <Link
                  href={data.buttonLink}
                  className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-black rounded-full shadow-lg hover:bg-black/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
                >
                  Get Started
                </Link>
              </MotionWrapper>
              <MotionWrapper variant="slideRight">
                <Link
                  href={data.buttonLink}
                  className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
                >
                  {data.buttonText}
                </Link>
              </MotionWrapper>
            </div>
          )}
        </div>
        <div className="flex-1 relative">
          <MotionWrapper variant="slideLeft">
            <div
              className="rounded-md shadow-sm relative"
              style={{
                width: 531,
                height: 391,
              }}
            >
              <Image
                src={'/assets/images/dashboards/hrm.png'}
                alt={data.title.trim().slice(0, 10)}
                width={531}
                height={391}
                className="absolute object-cover bg-no-repeat"
              />
              <MotionWrapper variant="fadeIn">
                <HeroCard classname="-bottom-10 -left-20 items-start">
                  {data.dashboardFunctions.slice(0, 3).map((func) => (
                    <div key={func.content} className="flex items-center gap-2">
                      {func.iconUrl && (
                        <DynamicIcon
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          name={func.iconUrl as any}
                          className="h-4 w-4 text-blue-600"
                        />
                      )}
                      <Typography
                        variant="paragraph"
                        className="text-left font-semibold p-0"
                      >
                        {func.content}
                      </Typography>
                    </div>
                  ))}
                </HeroCard>
              </MotionWrapper>
              <MotionWrapper variant="fadeIn">
                <HeroCard classname="-bottom-4 -right-10 w-32">
                  <Typography
                    variant="subtitle"
                    className="max-w-2xl mx-auto m-0 p-0 text-left relative z-10 text-[#E02475] font-bold"
                  >
                    {data.dashboardStat.value}
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="text-left font-semibold p-0"
                  >
                    {data.dashboardStat.description}
                  </Typography>
                </HeroCard>
              </MotionWrapper>

              <MotionWrapper variant="fadeIn">
                <HeroCard classname="-top-18 -right-10 items-start">
                  {data.dashboardFunctions.slice(3).map((func) => (
                    <div
                      key={func.content}
                      className="flex justify-start items-center gap-2"
                    >
                      {func.iconUrl && (
                        <DynamicIcon
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          name={func.iconUrl as any}
                          className="h-4 w-4 text-blue-600"
                        />
                      )}
                      <Typography
                        variant="paragraph"
                        className="text-left font-semibold p-0"
                      >
                        {func.content}
                      </Typography>
                    </div>
                  ))}
                </HeroCard>
              </MotionWrapper>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};

export default ModulesHero;
