import { Wallet } from 'lucide-react';
import { MotionWrapper } from '../hoc/motion-wrapper';
import { OverlaySection } from '../shared/overlay-section';

const FinanceBanner = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <MotionWrapper variant="slideLeft">
        <OverlaySection
          imageSrc="/assets/images/finance.png"
          heading="Take Control of Your Business Finances"
          subheading="Automate budgeting, payroll, and accounting processes to gain full visibility into your organization's financial health."
          linkText="See it in Action"
          href="#"
          direction="left"
          eyebrow="Finance and Accounting"
          icon={Wallet}
          featureTags={['Budgeting', 'Payroll', 'Accounting Automation']}
        />
      </MotionWrapper>
    </div>
  );
};

export default FinanceBanner;
