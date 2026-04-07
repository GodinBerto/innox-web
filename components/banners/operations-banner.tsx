import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';

const OperationsBanner = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MotionWrapper variant="slideLeft">
        <OverlaySection
          imageSrc="/assets/images/operations.png"
          heading="Simplify Operations"
          subheading="Coordinate tasks and meetings across teams with connected tools that reduce clutter and boost efficiency"
          linkText="Streamline Admin Workflows"
          href="/modules/incident-management-system"
          direction="left"
          // eyebrow="Operations"
          // icon={Workflow}
          // featureTags={[
          //   'Task Coordination',
          //   'Meeting Workflows',
          //   'Cross-Team Visibility',
          // ]}
        />
      </MotionWrapper>
    </div>
  );
};

export default OperationsBanner;
