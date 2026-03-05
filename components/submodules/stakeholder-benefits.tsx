import { MotionWrapper } from '../hoc/motion-wrapper';
import BenefitCard from '../shared/benefit-card';
import { Typography } from '../ui/typography';

interface IBenefit {
  title: string;
  description: string;
}

const StakeholderBenefits = ({ benefits }: { benefits: IBenefit[] }) => {
  return (
    <div className="container relative space-y-8 md:space-y-16 mb-8">
      <MotionWrapper>
        <Typography variant="title">Stakeholder Benefits</Typography>
      </MotionWrapper>

      <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(276px,1fr))]">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            number={index + 1}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};
export default StakeholderBenefits;
