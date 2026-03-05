import BackgroundImageCover from '../ui/background-image-cover';
import { Button } from '../ui/button';

export default function Streamline() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-40 mt-20 px-6 md:px-10">
      {/* Content */}
      <div className="flex flex-col space-y-7 max-w-[600px] items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold mt-40">
          Streamline Your Business Operations With
          <span className="bg-gradient-to-r from-[#11356D] to-[#EF6411] text-transparent px-2 rounded bg-clip-text">
            InnoX
          </span>
        </h1>
        <Button size={'lg'} className="w-fit bg-[#EF6411] p-4">
          Get Started
        </Button>
      </div>
      {/* Images */}
      <div className="flex items-center gap-8 relative">
        <BackgroundImageCover
          imageUrl="https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="shadow-xl absolute right-40 bg-gray-200 rounded-lg w-[200px] h-[200px] rotate-[354deg] animate-shake"
        />
        <BackgroundImageCover
          imageUrl="https://images.unsplash.com/photo-1589927725301-dda06a332802?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="shadow-xl bg-gray-200 top-10 rounded-lg w-[200px] h-[200px] rotate-6 animate-shake2"
        />
        <BackgroundImageCover
          imageUrl="https://plus.unsplash.com/premium_photo-1669324357773-a1ca561a4b72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="shadow-xl absolute right-20 top-40 bg-gray-200 rounded-lg w-[200px] h-[200px] animate-shake3"
        />
      </div>
    </div>
  );
}
