import Image from 'next/image';
import { Typography } from '../ui/typography';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { cn } from '@/utils';

interface ISidebySideSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  position?: 'left' | 'right';
}
const SideBySideSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  position = 'left',
}: ISidebySideSectionProps) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row  items-center justify-between w-full space-y-6 md:space-y-4  gap-x-6',
        position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse',
      )}
    >
      <MotionWrapper variant="slideRight">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={584}
          height={369}
          className="rounded-lg shadow-lg"
        />
      </MotionWrapper>
      <MotionWrapper variant="slideLeft">
        <div className="flex-1 max-w-[400px]">
          <Typography variant="subtitle" className="font-bold max-w-[260px]">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className={cn('max-w-[360px] font-semibold text-xl')}
          >
            {description}
          </Typography>
        </div>
      </MotionWrapper>
    </div>
  );
};

const MainCenterSection = ({ data }: { data: _ISubModuleMainCenter }) => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="container space-y-6 md:space-y-10 flex flex-col items-center justify-center">
        <MotionWrapper variant="slideLeft">
          <div className="space-y-2 md:space-y-4">
            <Typography variant="title" className="font-extrabold">
              {data.header.title}
            </Typography>
            <Typography variant="paragraph" className="text-xl font-semibold">
              {data.header.description}
            </Typography>
          </div>
        </MotionWrapper>
        <MotionWrapper variant="slideRight">
          <Image
            src={'/assets/images/pages/hrm/main-sect-dashboard.png'}
            alt="main-sect-dashboard"
            width={1042}
            height={579}
          />
        </MotionWrapper>

        {data.sideSections.map((content, i) => (
          <SideBySideSection
            key={content.title.trim()}
            title={content.title}
            description={content.description}
            imageSrc={
              (i + 1) % 2 === 0
                ? '/assets/images/pages/hrm/sidebyside1.png'
                : '/assets/images/pages/hrm/sidebyside2.png'
            }
            imageAlt={content.title.trim().slice(0, 10)}
            position={(i + 1) % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
};

export default MainCenterSection;
