import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';

const HRBanner = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MotionWrapper variant="slideLeft">
        <OverlaySection
          imageSrc="/assets/images/smarter-hr.png"
          heading="Smarter HR Starts Here"
          subheading="Automate recruitment, payroll and performance tracking, all in one place."
          linkText="See it in Action"
          href="#"
          direction="right"
          // eyebrow="Human Resource"
          // icon={Users}
          // featureTags={['Recruitment', 'Payroll', 'Performance']}
        />
      </MotionWrapper>
    </div>
  );
};

export default HRBanner;
