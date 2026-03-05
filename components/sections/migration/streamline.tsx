import BackgroundImageCover from '@/components/ui/background-image-cover';
import { Button } from '@/components/ui/button';
import { urlForImage } from '@/lib/sanity';
import { Streamline as StreamlineType } from '@/types/sanity/schema';

export default function Streamline({
  heading = '',
  highlightedText = '',
  buttonText = '',
  buttonLink = '#',
  images = [],
}: StreamlineType) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-40 mt-20 px-6 md:px-10">
      {/* Content */}
      <div className="flex flex-col space-y-7 max-w-[600px] items-center md:items-start text-center md:text-le/assets/images/modules/${module.image?.src || 'default'}.pngft">
        <h1 className="text-4xl font-bold mt-40">
          {heading}
          <span className="bg-linear-to-r from-[#11356D] to-[#EF6411] text-transparent px-2 rounded bg-clip-text">
            {highlightedText}
          </span>
        </h1>
        <Button
          size={'lg'}
          className="w-fit bg-[#EF6411] p-4"
          as={'a'}
          href={buttonLink}
        >
          {buttonText || 'Get Started'}
        </Button>
      </div>
      {/* Images */}
      <div className="flex items-center gap-8 relative">
        {images.map((img, idx) => (
          <BackgroundImageCover
            key={img._key || idx}
            imageUrl={
              img.asset
                ? (urlForImage(img).width(400).height(400).url() as string)
                : '/assets/images/pages/modules-bg.png'
            }
            className="shadow-xl absolute right-40 bg-gray-200 rounded-lg w-[200px] h-[200px] rotate-354 animate-shake"
          />
        ))}
      </div>
    </div>
  );
}
