import { cn } from '@/utils';

const BackgroundImageCover = (props: {
  imageUrl: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative h-[300px] bg-cover bg-center w-[250px]',
        props.className,
      )}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    ></div>
  );
};
export default BackgroundImageCover;
