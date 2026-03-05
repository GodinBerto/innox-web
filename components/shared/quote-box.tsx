import Image from 'next/image';
import { MotionWrapper } from '../hoc/motion-wrapper';

export default function QuoteBox() {
  return (
    <div
      className="relative w-full max-w-2xl mx-auto flex flex-col justify-center items-center p-6 text-center font-bold text-4xl h-72"
      style={{ fontFamily: '\'Comic Sans MS\', cursive' }}
    >
      {/* Top-left quote */}
      <MotionWrapper variant="fadeIn">
        <div className="absolute dark:hidden top-2 left-12 w-10 h-10 flex gap-1 transition-all duration-300">
          <Image
            src={'/assets/images/quote.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-1"
            className="dark:fill-white"
          />
          <Image
            src={'/assets/images/quote.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-1"
            className="dark:fill-white"
          />
        </div>
      </MotionWrapper>

      <MotionWrapper variant="fadeIn">
        <div className="absolute hidden dark:flex rotate-180 top-2 left-12 w-10 h-10 gap-1 transition-all duration-300">
          <Image
            src={'/assets/images/quote-dark.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-1"
            className="dark:fill-white"
          />
          <Image
            src={'/assets/images/quote-dark.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-1"
            className="dark:fill-white"
          />
        </div>
      </MotionWrapper>

      <MotionWrapper variant="slideLeft">
        <Image
          src={'/assets/svg/quote-upper-arm.svg'}
          height={222.46}
          width={504.62}
          alt="quote-upper-arm"
          className="absolute dark:hidden top-0 right-2"
        />
        <Image
          src={'/assets/svg/quote-upper-arm-dark.svg'}
          height={222.46}
          width={504.62}
          alt="quote-upper-arm"
          className="absolute hidden dark:block top-0 right-2"
        />
      </MotionWrapper>

      {/* Bottom-right quote */}
      <MotionWrapper variant="fadeIn">
        <div className="absolute dark:hidden bottom-2 right-12 rotate-180 flex gap-1 transition-all duration-300">
          <Image
            src={'/assets/images/quote.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-1"
            className=""
          />
          <Image
            src={'/assets/images/quote.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-2"
            className="fill-black"
          />
        </div>
        <div className="absolute hidden dark:flex bottom-2 right-12 gap-1 transition-all duration-300">
          <Image
            src={'/assets/images/quote-dark.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-1"
            className=""
          />
          <Image
            src={'/assets/images/quote-dark.png'}
            height={49.82}
            width={36.2}
            alt="quote-left-2"
            className="fill-black"
          />
        </div>
      </MotionWrapper>
      <MotionWrapper variant="slideRight">
        <Image
          src={'/assets/svg/quote-upper-arm.svg'}
          height={222.46}
          width={504.62}
          alt="quote-lower-arm"
          className="absolute dark:hidden bottom-0 left-2 rotate-180 "
        />
        <Image
          src={'/assets/svg/quote-upper-arm-dark.svg'}
          height={222.46}
          width={504.62}
          alt="quote-loweer-arm"
          className="absolute hidden dark:block bottom-0 left-2 rotate-180"
        />
      </MotionWrapper>

      {/* Custom border using a pseudo curved frame */}
      <MotionWrapper variant="fadeIn">
        <div className="p-6 relative z-10">
          <p>
            Digital transformation isn&apos;t a trend, it&apos;s a necessity.
            <span className="font-bold"> InnoX</span> gives your business the
            tools to <br />
            lead, not follow
          </p>
        </div>
      </MotionWrapper>
    </div>
  );
}
