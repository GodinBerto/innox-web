import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';

const PowerBanner = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MotionWrapper variant="slideLeft">
        <OverlaySection
          imageSrc="/assets/images/power-banner.png"
          heading="Safer Power Operations"
          subheading="Manage assets, log system events, and capture live meter data on platform"
          linkText="View Power Modules"
          href="/modules/power-applications"
          direction="right"
          // eyebrow="Power and Utilities"
          // icon={Zap}
          // featureTags={[
          //   'Asset Monitoring',
          //   'Live Meter Data',
          //   'System Event Logs',
          // ]}
        />
      </MotionWrapper>
    </div>
  );
};

export default PowerBanner;
