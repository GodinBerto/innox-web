import StickyScroll from '@/components/ui/sticky-scroll';
import Image from 'next/image';
import { BusinessAdministration as BusinessAdministrationType } from '@/types/sanity/schema';
import { urlForImage } from '@/lib/sanity';

const BusinessAdministration = ({
  mainTitle,
  mainDescription,
  content = [],
  position = 'right',
}: BusinessAdministrationType) => {
  return (
    <section className="w-full">
      <StickyScroll
        mainTitle={mainTitle || ''}
        mainDescription={mainDescription || ''}
        content={content.map((item, idx) => ({
          id: idx + 1,
          title: item.title || '',
          description: item.description || '',
          content: (
            <Image
              height={400}
              width={640}
              src={
                item.image
                  ? (urlForImage(item.image)
                      .width(640)
                      .height(400)
                      .url() as string)
                  : '/assets/images/pages/modules-bg.png'
              }
              alt={item.title || ''}
              className="rounded-md  h-[400px] object-cover "
            />
          ),
        }))}
        position={position}
      />
    </section>
  );
};

export default BusinessAdministration;
