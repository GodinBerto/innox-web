import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { BannerCard } from '@/components/modules/items-with-banners';
import { urlForImage } from '@/lib/sanity/sanity.image';
import type { SubModuleMainCenterSideSection } from '@/lib/sanity/sanity.client';
import type { ModulePageContent } from '@/types/sanity/schema';

type BannerData = {
  title?: string;
  content?: string;
  image?: ModulePageContent['subModuleBanner'] extends infer T
    ? T extends { image?: infer I }
      ? I
      : never
    : never;
};

type Props = {
  sideSections: SubModuleMainCenterSideSection[];
  banner?: BannerData;
  className?: string;
};

const resolveImageUrl = (
  image?: SubModuleMainCenterSideSection['image'],
): string | null => {
  if (!image) return null;

  const assetUrl = (image as { asset?: { url?: string } }).asset?.url;
  if (assetUrl) return assetUrl;

  try {
    return urlForImage(image).width(1600).height(1000).url();
  } catch {
    return null;
  }
};

const SideSectionBlock = ({
  section,
  index,
}: {
  section: SubModuleMainCenterSideSection;
  index: number;
}) => {
  const imageSrc =
    resolveImageUrl(section.image) || '/assets/images/dashboards/hrm.png';
  const listItems = (section.list ?? [])
    .map((item) => item.text?.trim())
    .filter((item): item is string => Boolean(item));
  const hasContent =
    section.title?.trim() ||
    section.description?.trim() ||
    listItems.length > 0;

  if (!hasContent) return null;

  return (
    <article
      className={`flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full py-6 md:py-10 ${
        index % 2 === 1 ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          width={1200}
          height={900}
          alt={section.title || 'Section image'}
          className="w-full h-auto md:h-[360px] rounded-xl object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {section.span && (
          <span className="inline-flex w-fit px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold">
            {section.span}
          </span>
        )}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
          {section.title || 'Section'}
        </h3>
        {section.description && (
          <p className="text-sm sm:text-base text-muted-foreground">
            {section.description}
          </p>
        )}

        {listItems.length > 0 && (
          <ul className="space-y-3">
            {listItems.map((item, idx) => (
              <li
                key={`${section._key}-list-${idx}`}
                className="flex items-start gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default function SideSectionsWithBanner({
  sideSections,
  banner,
  className = '',
}: Props) {
  const sections = (sideSections ?? [])
    .filter((section) => {
      const listText = (section.list ?? [])
        .map((item) => item.text?.trim())
        .filter((text): text is string => Boolean(text));
      return (
        section.title?.trim() ||
        section.description?.trim() ||
        listText.length > 0
      );
    })
    .slice(0, 6);

  const chunks: SubModuleMainCenterSideSection[][] = [];
  for (let i = 0; i < sections.length; i += 2) {
    chunks.push(sections.slice(i, i + 2));
  }

  return (
    <section className={className}>
      {chunks.map((chunk, chunkIndex) => (
        <React.Fragment key={`side-section-chunk-${chunkIndex}`}>
          <div className="container">
            {chunk.map((section, sectionIdx) => (
              <SideSectionBlock
                key={section._key || `${chunkIndex}-${sectionIdx}`}
                section={section}
                index={chunkIndex * 2 + sectionIdx}
              />
            ))}
          </div>

          {banner?.content && chunkIndex < chunks.length - 1 && (
            <div className="mb-6">
              <BannerCard
                title={banner.title}
                content={banner.content}
                image={banner.image}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
}
