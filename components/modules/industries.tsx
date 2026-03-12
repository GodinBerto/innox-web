'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ModulePageContent } from '@/types/sanity/schema';
import { urlForImage } from '@/lib/sanity/sanity.image';

const IndustrySection = ({
  data,
}: {
  data?: ModulePageContent['industry'];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = data?.industryItems || [];
  const currentItem = items[activeIndex];

  if (!items.length) return null;

  const finalSrc =
    typeof currentItem?.image === 'string'
      ? currentItem?.image
      : urlForImage(currentItem?.image).width(1920).height(1080).url();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 font-sans">
      {/* Header Section */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-300 mb-4">
          {data?.mainTitle || 'Find Your Industry'}
        </h2>
        <p className="text-gray-600 leading-relaxed dark:text-gray-400">
          {data?.mainnDescription}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image Container with Dots */}
        <div className="relative group">
          <div className="aspect-4/3 overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={finalSrc}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
                alt={currentItem.title}
              />
            </AnimatePresence>
          </div>

          {/* Navigation Dots - Overlaid on Image */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-white scale-125 shadow-md'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="flex flex-col justify-center space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-300 mb-6">
                {currentItem.title}
              </h3>
              <p className="text-md text-gray-600 leading-relaxed mb-8 dark:text-gray-400">
                {currentItem.description}
              </p>

              <button className="bg-[#F06A2D] hover:bg-[#d95a20] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-colors shadow-lg">
                Get Started Now
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
