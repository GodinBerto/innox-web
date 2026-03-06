import BackgroundImageCover from '../ui/background-image-cover';
import { Button } from '../ui/button';

export default function Streamline() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24 mb-20 lg:mb-40 mt-12 lg:mt-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="flex flex-col space-y-7 max-w-[600px] items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mt-0 lg:mt-40">
          Streamline Your Business Operations With
          <span className="bg-gradient-to-r from-[#11356D] to-[#EF6411] text-transparent px-2 rounded bg-clip-text">
            InnoX
          </span>
        </h1>
        <Button size={'lg'} className="w-fit bg-[#EF6411] p-4">
          Get Started
        </Button>
      </div>
      <div className="relative w-[290px] h-[260px] sm:w-[360px] sm:h-[300px] md:w-[420px] md:h-[340px]">
        <BackgroundImageCover
          imageUrl="https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="shadow-xl absolute right-20 sm:right-28 lg:right-40 top-0 bg-gray-200 rounded-lg w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rotate-[354deg] animate-shake"
        />
        <BackgroundImageCover
          imageUrl="https://images.unsplash.com/photo-1589927725301-dda06a332802?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="shadow-xl absolute left-0 top-8 sm:top-10 bg-gray-200 rounded-lg w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] rotate-6 animate-shake2"
        />
        <BackgroundImageCover
          imageUrl="https://plus.unsplash.com/premium_photo-1669324357773-a1ca561a4b72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="shadow-xl absolute right-0 top-20 sm:top-24 lg:top-40 bg-gray-200 rounded-lg w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px] animate-shake3"
        />
      </div>
    </div>
  );
}
