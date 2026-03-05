import Image from 'next/image';
import { MotionWrapper } from '../hoc/motion-wrapper';

export default function VisualizedIllustration() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top headline */}
      <MotionWrapper variant="slideDown">
        <div className="text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your All-in-One <br />
            Platform, <span className="gradient-text">Visualized</span>
          </h1>
        </div>
      </MotionWrapper>

      {/* Centered dashboard image */}
      <div className="relative mt-4">
        <MotionWrapper variant="slideLeft">
          <div className="max-w-5xl mx-auto relative z-10 overflow-hidden">
            <Image
              src="/assets/images/illustration.png" // make sure to update this path
              alt="Dashboard Preview"
              width={1042}
              height={590}
              className="w-full rounded-2xl shadow-xl bg-transparent"
            />
          </div>
        </MotionWrapper>
        {/* Wavy background */}
        <div className="absolute dark:hidden right-0 -top-10 w-full z-0">
          <Image
            src="/assets/images/wave.png"
            alt="Dashboard Preview"
            width={1400}
            height={656}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
