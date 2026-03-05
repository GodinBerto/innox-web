import { cn } from '@/utils';
import { ChevronDown, Rocket } from 'lucide-react';
// import Link from "next/link";
import { MotionWrapper } from '../hoc/motion-wrapper';
import { Typography } from '../ui/typography';

interface IProps {
  data: string[];
  name: string;
  asLinks?: boolean; // default true: render <Link> if href
  wrapLabels?: boolean; // default true: wrap labels in <span>
}

const FunctionalModules = ({
  data = [],
  name,
  // asLinks = false,
  wrapLabels = false,
}: IProps) => {
  return (
    <section className="w-full">
      <div className={cn(' space-y-4')}>
        <MotionWrapper>
          <Typography variant="subtitle" className="font-bold ">
            Dive Into Functional Features of {name}
          </Typography>
        </MotionWrapper>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {data.map((m, idx) => {
            const PillInner = (
              <>
                <Rocket className="w-4 h-4 shrink-0 text-green-600" />
                <span
                  className={cn(
                    'text-sm font-semibold text-gray-900',
                    wrapLabels ? 'whitespace-normal leading-snug' : 'truncate',
                  )}
                >
                  {m}
                </span>
                <ChevronDown className="w-4 h-4 ml-auto shrink-0 text-gray-600" />
              </>
            );

            const baseClasses =
              'group inline-flex h-10 md:h-11 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 ' +
              'shadow-sm hover:bg-gray-50 hover:border-gray-400 active:scale-[.98] transition';

            // if (asLinks && m.link) {
            //   return (
            //     <MotionWrapper variant="slideLeft" key={`${m.name}-${idx}`}>
            //       <Link href={m.link} className={baseClasses} prefetch={false}>
            //         {PillInner}
            //       </Link>
            //     </MotionWrapper>
            //   );
            // }

            return (
              <MotionWrapper variant="slideLeft" key={`${m}-${idx}`}>
                <button
                  type="button"
                  // onClick={m.onClick}
                  className={baseClasses}
                >
                  {PillInner}
                </button>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunctionalModules;
