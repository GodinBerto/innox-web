// import { fetcher } from "@/app/utilities/fetch";

import Carousel from '@/components/ui/carousel';
import { ModulesCarousel as ModulesCarouselType } from '@/types/sanity/schema';
import { urlForImage } from '@/lib/sanity';

export async function ModulesCarousel({ slides = [] }: ModulesCarouselType) {
  const slideData = slides.map((s) => ({
    title: s.title,
    button: s.buttonText || 'Explore',
    src: s.imageUrl
      ? (urlForImage(s.imageUrl).width(1200).height(600).url() as string)
      : '/assets/images/pages/modules-bg.png',
  }));

  return (
    <div className="relative overflow-hidden w-full h-full -pt-10">
      <Carousel slides={slideData} />
    </div>
  );
}
