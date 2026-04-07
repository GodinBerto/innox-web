import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';

const AssetsBanner = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MotionWrapper variant="slideLeft">
        <OverlaySection
          imageSrc="/assets/images/manage-assets.png"
          heading="Easily Track and Maintain Every Asset"
          subheading="From inventory tracking to preventive maintenance, manage all your assets seamlessly in one integrated platform."
          linkText="Explore Asset Module"
          href="/modules/assets-management"
          direction="left"
          // eyebrow="Asset Management"
          // icon={Boxes}
          // featureTags={[
          //   'Inventory Tracking',
          //   'Maintenance',
          //   'Lifecycle Visibility',
          // ]}
        />
      </MotionWrapper>
    </div>
  );
};

export default AssetsBanner;
