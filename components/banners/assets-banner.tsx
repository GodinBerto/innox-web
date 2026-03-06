import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';
import { Boxes } from 'lucide-react';

const AssetsBanner = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MotionWrapper variant="slideLeft">
        <OverlaySection
          imageSrc="/assets/images/manage-assets.png"
          heading="Easily Track and Maintain Every Asset"
          subheading="From inventory tracking to preventive maintenance, manage all your assets seamlessly in one integrated platform."
          linkText="Explore Asset Module"
          href="#"
          direction="left"
          eyebrow="Asset Management"
          icon={Boxes}
          featureTags={[
            'Inventory Tracking',
            'Maintenance',
            'Lifecycle Visibility',
          ]}
        />
      </MotionWrapper>
    </div>
  );
};

export default AssetsBanner;
