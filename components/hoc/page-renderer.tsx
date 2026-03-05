/* eslint-disable @typescript-eslint/no-explicit-any */
import { sectionComponents } from '@/components/sections/migration';

export function PageRenderer({ sections }: { sections?: any[] }) {
  return (
    <>
      {sections?.map((section) => {
        const Component = sectionComponents[section._type];

        if (!Component) return null;

        return <Component key={section._key} {...section} />;
      })}
    </>
  );
}
