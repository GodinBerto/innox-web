/* eslint-disable @typescript-eslint/no-explicit-any */

import { Typography } from '../ui/typography';
import { MotionWrapper } from '../hoc/motion-wrapper';
import * as Icons from 'lucide-react';

interface _ITest {
  icon: string;
  name: string;
  slug: string;
}

interface MainCenterSectionProps {
  data: _ITest[];
  introTitle?: string;
  introDescription?: string;
}

const PALETTE = [
  '#8B205F', // Deep Plum
  '#EF4444', // Red
  '#F97316', // Orange
  '#F59E0B', // Amber
  '#10B981', // Emerald
  '#06B6D4', // Cyan
  '#3B82F6', // Blue
  '#6366F1', // Indigo
  // '#1F2937', // Dark Slate
];

function toPascalCase(name: string) {
  return name
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

function getIconComponent(name?: string) {
  const pascal = toPascalCase(name || 'Square');
  return ((Icons as any)[pascal] as any) || (Icons as any).Square;
}

const DiamondTimeline = ({ data }: { data: _ITest[] }) => {
  return (
    <div className="w-full py-28 md:py-44 overflow-x-auto">
      {/* Container for the whole timeline */}
      <div className="relative flex items-center justify-center min-w-max px-6 md:px-20">
        {/* THE CENTER LINE */}
        {/* <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600/30 -translate-y-1/2 z-0" /> */}

        {/* DIAMOND ITEMS */}
        <div className="flex -space-x-4 md:-space-x-6">
          {data.slice(0, 10).map((item, idx) => {
            const isEven = idx % 2 === 0;
            const bg = PALETTE[idx % PALETTE.length];
            const Icon = getIconComponent(item.icon);

            return (
              <div
                key={item.slug}
                className={`relative flex flex-col items-center transition-transform hover:scale-105 duration-300 px-2 ${
                  isEven ? '-translate-y-12' : 'translate-y-12'
                }`}
              >
                {/* LABEL: Positioned opposite to the diamond's offset */}
                <div
                  className={`absolute w-32 text-center transition-all ${
                    isEven
                      ? 'top-[calc(100%+5.5rem)]'
                      : 'bottom-[calc(100%+5.5rem)]'
                  }`}
                >
                  <p
                    className="text-sm font-bold tracking-tight leading-tight"
                    style={{ color: bg }}
                  >
                    {item.name}
                  </p>
                </div>

                {/* THE DIAMOND */}
                <div className="relative flex flex-col items-center">
                  {/* The Dot on the center line */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#0B1120] z-30 ${
                      isEven ? '-bottom-20' : ' -top-20'
                    }`}
                    style={{ backgroundColor: bg }}
                  />

                  {/* Dotted connector to the line */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-px border-l-2 border-dotted border-gray-500/50 ${
                      isEven ? 'h-24 -bottom-20' : 'h-24  -top-20'
                    }`}
                  />

                  {/* Diamond Shape */}
                  <div
                    className="w-24 h-24 md:w-28 md:h-28 rounded-xl flex items-center justify-center shadow-xl z-10 transition-shadow hover:shadow-2xl"
                    style={{
                      backgroundColor: bg,
                      transform: 'rotate(45deg)',
                    }}
                  >
                    <div
                      style={{ transform: 'rotate(-45deg)' }}
                      className="text-white"
                    >
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const MainCenterSection = ({
  data,
  introTitle,
  introDescription,
}: MainCenterSectionProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative overflow-hidden py-16 md:py-20">
      <div className="container relative z-10 space-y-12 flex flex-col items-center justify-center">
        <MotionWrapper variant="slideLeft">
          <div className="max-w-3xl text-center px-6 ">
            {introTitle && (
              <h1 className="mb-4 text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900">
                {introTitle}
              </h1>
            )}
            <Typography
              variant="paragraph"
              className="text-base sm:text-lg md:text-xl leading-relaxed"
            >
              {introDescription ||
                'Experience our streamlined vehicle management workflow. From initial assignments to comprehensive fuel audits, our system ensures every diamond in your fleet shines with operational excellence.'}
            </Typography>
          </div>
        </MotionWrapper>

        <MotionWrapper variant="slideRight" className="w-full">
          <DiamondTimeline data={data} />
        </MotionWrapper>
      </div>

      {/* BACKGROUND DECORATIONS (as requested) */}
      <div className="absolute top-10 left-0 opacity-40 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/circleoflines2.png" alt="" className="w-48" />
      </div>
      <div className="absolute bottom-10 right-0 opacity-40 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/images/squares.png" alt="" className="w-48" />
      </div>
    </section>
  );
};

export default MainCenterSection;
