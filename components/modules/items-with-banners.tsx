import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Typography } from '../ui/typography';
import { ModulePageContent, SanityImageAsset } from '@/types/sanity/schema';
import { urlForImage } from '@/lib/sanity/sanity.image';

type SanityImageLike =
  | SanityImageAsset
  | NonNullable<ModulePageContent['subModuleBanner']>['image'];

const resolveImageUrl = (image?: SanityImageLike): string | null => {
  if (!image) return null;
  if (typeof image === 'string') return image;

  const assetUrl = (image as { asset?: { url?: string } }).asset?.url;
  if (assetUrl) return assetUrl;

  try {
    return urlForImage(image).width(1920).height(1080).url();
  } catch {
    return null;
  }
};

export interface _IItem {
  name: string;
  slug: string;
  description: string;
  link: string;
  image?: SanityImageLike;
}

export interface data {
  items: _IItem[];
  banner?: {
    title?: string;
    content: string;
    image?: SanityImageLike;
  };
}

type Props = {
  data: data;
  className?: string;
};

const ItemCard = ({ item }: { item: _IItem }) => {
  const itemImageSrc =
    resolveImageUrl(item.image) || '/assets/images/dashboards/hrm.png';

  return (
    <article className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full py-8 md:py-10">
      <div className="w-full md:w-1/2 gap-4 flex flex-col">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {item.description ||
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam labore temporibus qui dolorum! Iste dolores deserunt odio? Quidem, accusantium? Consequatur illo consectetur eum quidem? Blanditiis placeat dicta nemo quisquam iste repellat fuga vero voluptatibus esse voluptates vel aperiam ipsa, expedita ratione soluta veritatis neque facere numquam. Veritatis, atque quis'}{' '}
        </p>
        <div className="mt-3">
          <Link
            href={item?.link || '#'}
            className="px-4 py-2 rounded-md bg-orange-500 text-white"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 rounded overflow-hidden shrink-0">
        <Image
          src={itemImageSrc}
          width={1000}
          height={1000}
          alt={item.name}
          className="w-full h-auto md:h-[350px] rounded object-cover"
        />
      </div>
    </article>
  );
};

export const BannerCard = ({
  title,
  content,
  image,
}: {
  title?: string;
  content?: string;
  image?: SanityImageLike;
}) => {
  const bannerImageSrc =
    resolveImageUrl(image) || '/assets/images/modules/sub-banner.jpg';

  return (
    <div className="w-full flex items-center gap-6 bg-background">
      <div
        className="w-full min-h-[360px] h-[65vh] md:h-[400px] overflow-hidden shrink-0 bg-cover bg-no-repeat bg-center relative"
        style={{
          backgroundImage: `url(${bannerImageSrc})`,
        }}
      >
        <div className="bg-black/50 h-full w-full absolute top-0" />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6 flex items-center h-full">
          <div className="max-w-2xl flex flex-col gap-6">
            <Typography
              variant="subtitle"
              className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold"
            >
              {title || 'Discover More with InnoX'}
            </Typography>
            <p className="text-white/70 font-medium text-sm sm:text-base">
              {content}
            </p>
            <div className="mt-3">
              <Link href={'/contact'}>
                <button className="px-4 py-2 rounded-full bg-orange-600 text-white cursor-pointer hover:bg-orange-700 transition-colors duration-300">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ItemsWithBanners({ data, className = '' }: Props) {
  // Limit to 6 items as requested
  const items = (data?.items || []).slice(0, 6);

  // Split into chunks of 2
  const chunks: _IItem[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    chunks.push(items.slice(i, i + 2));
  }

  return (
    <section className={className}>
      {chunks.map((chunk, idx) => (
        <React.Fragment key={idx}>
          <div className="grid grid-cols-1 gap-6 mb-6 container">
            {chunk.map((it) => (
              <ItemCard key={it.slug} item={it} />
            ))}
          </div>

          {/* Insert banner only if there's a banner and this is not the last chunk */}
          {data?.banner && idx < chunks.length - 1 && (
            <div className="mb-6">
              <BannerCard
                content={data.banner.content}
                image={data.banner?.image}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
}
