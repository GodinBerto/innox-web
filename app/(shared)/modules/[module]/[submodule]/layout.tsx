import DividerContent from '@/components/sections/divider-content';
import FAQ from '@/components/sections/faq';
import { faqs } from '@/data';

const ModuleLayout = ({ children }: _IChildren) => {
  return (
    <div className="space-y-4 md:space-y-28">
      {children}
      <FAQ faqs={faqs} />

      <DividerContent text="Book Demo" link="/demo" />
    </div>
  );
};

export default ModuleLayout;
