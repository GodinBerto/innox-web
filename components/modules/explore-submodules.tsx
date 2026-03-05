import { ModuleName } from '@/data/modules.data';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { Typography } from '../ui/typography';
import { ExploreSubModulesClient } from './clients';

const ExploreSubmodules = ({ module }: { module: ModuleName }) => {
  return (
    <section className="relative">
      <div className="container">
        <MotionWrapper variant="fadeIn">
          <Typography variant="subtitle" className="text-center mb-8 font-bold">
            Explore Dashboards by Submodule
          </Typography>
        </MotionWrapper>
        <ExploreSubModulesClient module={module} />
      </div>
    </section>
  );
};

export default ExploreSubmodules;
