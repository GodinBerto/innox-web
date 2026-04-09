import DividerContent from '@/components/sections/divider-content';

const ModuleLayout = ({ children }: _IChildren) => {
  return (
    <div className="space-y-4 md:space-y-28">
      {children}

      <DividerContent text="Book Demo" link="/demo" />
    </div>
  );
};

export default ModuleLayout;
