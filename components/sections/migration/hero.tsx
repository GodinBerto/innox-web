import Link from 'next/link';
import { Hero as HeroType } from '@/types/sanity/schema';
import BgAnimation from '@/components/animations/bg-animation';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { Typography } from '@/components/ui/typography';

const Hero = ({
  staticText,
  phrases,
  subtitle,
  primaryCtaText,
  primaryCtaLink,
}: HeroType) => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-x-hidden">
      <BgAnimation />
      <div className="container relative z-10 space-y-14 -mt-20">
        <div className="">
          <TypewriterEffectSmooth
            staticText={staticText}
            phrases={(phrases as unknown as _ITypewriterPhrase[]) || []}
          />
        </div>
        <div className="">
          <Typography
            variant="subtitle"
            className="max-w-2xl mx-auto my-2 text-2xl text-center relative z-10 px-6"
          >
            {subtitle}
          </Typography>
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-4">
          <Link
            href={primaryCtaLink || ''}
            className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
          >
            {primaryCtaText}
          </Link>
          {/* <Link
            href="/explore"
            className="px-8 py-3 text-sm font-semibold transition-all duration-300 bg-white rounded-full shadow-lg text-gray-900 hover:bg-gray-100  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 w-full sm:w-auto"
          >
            Explore Modules →
          </Link> */}
        </div>
      </div>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default Hero;
