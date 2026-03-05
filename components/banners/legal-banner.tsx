import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';

const LegalBanner = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MotionWrapper variant="slideLeft">
        <OverlaySection
          imageSrc="/assets/images/legal-banner.png"
          heading="Stay Ahead of Every Case"
          subheading="Manage your entire legal
workflow in one secure,
organized system."
          linkText="View Legal Features"
          href="#"
          direction="right"
        />
      </MotionWrapper>
    </div>
  );
};

export default LegalBanner;
