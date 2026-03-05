import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';

const ModuleBanner = ({ data }: { data: _IModuleBanner }) => {
  return (
    <MotionWrapper variant="slideRight">
      <OverlaySection
        imageSrc="/assets/images/pages/hrm/hr-banner.png"
        heading={data.title}
        subheading={data.description}
        linkText={data.butttontext}
        href={data.buttonLink}
        direction="left"
        className="h-[300px] lg:h-[500px]"
        contentClassName="md:max-w-[300px]"
        subheadingClassName="text-lg md:text-2xl"
      />
    </MotionWrapper>
  );
};

export default ModuleBanner;
