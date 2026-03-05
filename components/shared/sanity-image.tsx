import NextImage, { ImageProps } from 'next/image';
import { urlForImage } from '@/lib/sanity';
import { SanityImageAsset } from '@/types/sanity/schema';

type CustomImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: SanityImageAsset;
};

export const SanityImage = ({ src, ...rest }: CustomImageProps) => {
  const finalSrc =
    typeof src === 'string'
      ? src
      : urlForImage(src).width(1920).height(1080).url();

  return (
    <NextImage
      src={finalSrc as ImageProps['src']}
      alt={src.altText || ''}
      {...rest}
    />
  );
};
