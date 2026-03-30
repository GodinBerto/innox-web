import { urlForImage } from '@/lib/sanity';
import type { ManageAssets as ManageAssetsType } from '@/types/sanity/schema';
import Image from 'next/image';
import StickyScroll from '../ui/sticky-scroll';

const ManageAssets = ({
  mainTitle = 'Manage Assets and Operations Efficiently.',
  mainDescription = 'InnoX simplifies how organizations handle critical operational workflows.',
  content = [],
}: Partial<ManageAssetsType>) => {
  const sectionContent = content.map((item, index) => ({
    id: index + 1,
    title: item.title || '',
    description: item.description || '',
    content: (
      <Image
        height={400}
        width={640}
        src={
          item.image
            ? (urlForImage(item.image).width(640).height(400).url() as string)
            : '/assets/images/pages/modules-bg.png'
        }
        alt={item.title || 'Manage assets item'}
        className="rounded-md object-cover"
      />
    ),
  }));

  return (
    <section className="w-full">
      <StickyScroll
        mainTitle={mainTitle}
        mainDescription={mainDescription}
        content={sectionContent}
        position="right"
      />
    </section>
  );
};

export default ManageAssets;
