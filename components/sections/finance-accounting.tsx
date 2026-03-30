import { urlForImage } from '@/lib/sanity';
import type { FinanceAccounting as FinanceAccountingType } from '@/types/sanity/schema';
import Image from 'next/image';
import StickyScroll from '../ui/sticky-scroll';

const FinanceAccounting = ({
  mainTitle = 'Finance & Accounting Made Simple',
  mainDescription = 'InnoX helps businesses with real-time tracking, automation, and analytics.',
  content = [],
  position = 'right',
}: Partial<FinanceAccountingType>) => {
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
        alt={item.title || 'Finance and accounting item'}
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

export default FinanceAccounting;
