import { heroTypewriterPhrases } from '@/data';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
import { Typography } from '../ui/typography';
import Link from 'next/link';
import BgAnimation from '../animations/bg-animation';

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex flex-col items-center justify-center overflow-x-hidden">
      <BgAnimation />
      <div className="container relative z-10 space-y-14 -mt-20">
        <div className="">
          <TypewriterEffectSmooth
            staticText={
              'Empowering  Businesses  with  Smart  Software  Solutions  Designed to '
            }
            phrases={heroTypewriterPhrases}
          />
        </div>
        <div className="">
          <Typography
            variant="subtitle"
            className="max-w-2xl mx-auto my-2 text-2xl text-center relative z-10 px-6"
          >
            Simplify your workflow and boost productivity with InnoX, the
            all-in-one platform for modern business automation.
          </Typography>
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-4">
          <Link
            href="/auth/sign-up"
            className="px-8 py-3 text-sm font-semibold text-white transition-all duration-300 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600 w-full sm:w-auto"
          >
            Book a Demo
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
