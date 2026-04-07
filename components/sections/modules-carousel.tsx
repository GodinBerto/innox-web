import { getHomePage, urlForImage } from '@/lib/sanity';
import type {
  HomePage,
  ModulesCarousel as ModulesCarouselType,
} from '@/types/sanity/schema';
import Carousel from '../ui/carousel';

type HomePageSection = NonNullable<HomePage['sections']>[number];
type ModulesCarouselSection = { _key: string } & ModulesCarouselType;

function isModulesCarouselSection(
  section: HomePageSection,
): section is ModulesCarouselSection {
  return section._type === 'modulesCarousel';
}

export async function ModulesCarousel() {
  const homePage = await getHomePage();
  const modulesCarouselSection = homePage.sections?.find(
    isModulesCarouselSection,
  );
  const slides = modulesCarouselSection?.slides ?? [];

  const slideData = slides.map((slide) => ({
    title: slide.title,
    button: slide.buttonText || 'Explore',
    href: slide.link || '/modules',
    src: slide.imageUrl
      ? (urlForImage(slide.imageUrl).width(1200).height(600).url() as string)
      : '/assets/images/pages/modules-bg.png',
  }));

  return (
    <div className="relative overflow-hidden w-full h-full -pt-10">
      <Carousel slides={slideData} />
    </div>
  );
}
