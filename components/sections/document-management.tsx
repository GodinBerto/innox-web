import { urlForImage } from '@/lib/sanity';
import type { DocumentManager as DocumentManagerType } from '@/types/sanity/schema';
import Image from 'next/image';
import StickyScroll from '../ui/sticky-scroll';

const DocumentManager = ({
  mainTitle = 'Simplify Legal Case and Document Management.',
  mainDescription = 'InnoX empowers legal teams to manage cases, track timelines, and organize documents with ease.',
  content = [],
  position = 'left',
}: Partial<DocumentManagerType>) => {
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
        alt={item.title || 'Document management item'}
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
        position={position}
      />
    </section>
  );
};

export default DocumentManager;
