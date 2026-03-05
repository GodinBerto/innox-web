import { cn } from '@/utils';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { Typography } from '../ui/typography';
import Image from 'next/image';

interface IOnePlatform {
  height?: number;
  src?: string;
  text?: string;
  classname?: string;
}
const OnePlatformBanner = ({
  src = '/assets/images/one-platform.png',
  height = 417,
  text = 'One Integrated Platform Endless Possibilities',
  classname,
}: IOnePlatform) => {
  return (
    <section className="w-full overflow-x-hidden overflow-y-hidden relative">
      <MotionWrapper variant="slideLeft">
        <div
          className="w-full relative overflow-hidden"
          style={{
            backgroundPosition: 'center',
            height: `clamp(320px, 55vh, ${height}px)`,
          }}
        >
          <Image
            src={src}
            alt="module banner"
            fill
            className="object-cover bg-center bg-no-repeat overflow-x-hidden"
          />
          <div className="bg-black/40 absolute top-0 h-full w-full"></div>
          <div className="w-full h-[90px] sm:h-[120px] absolute bottom-0 bg-[linear-gradient(to_left,transparent_0%,rgba(75,85,99,0.3)_90%)] backdrop-blur-xs" />

          <Typography
            variant="subtitle"
            className={cn(
              'text-white absolute bottom-4 left-4 right-4 sm:right-auto max-w-[90%] sm:max-w-[374px] leading-tight text-2xl sm:text-3xl md:text-4xl h-auto',
              classname,
            )}
          >
            {text}
          </Typography>
        </div>
      </MotionWrapper>
    </section>
  );
};

export default OnePlatformBanner;
