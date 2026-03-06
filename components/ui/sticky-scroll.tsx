'use client';

import React, { useEffect, useRef, useState } from 'react';

const StickyScroll = ({
  content,
  position,
  mainTitle,
  mainDescription,
}: StickyScroll) => {
  const [activeId, setActiveId] = useState(content[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestId = content[0].id;
      let closestDistance = Infinity;

      content.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(centerY - elCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = section.id;
          }
        }
      });

      setActiveId(closestId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  const activeImage = content.find((item) => item.id === activeId)?.content;
  const mediaColumnOrderClass =
    position === 'left' ? 'lg:order-1' : 'lg:order-2';
  const contentColumnOrderClass =
    position === 'left' ? 'lg:order-2' : 'lg:order-1';

  return (
    <section className="w-full min-h-screen container px-4 py-10 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div
          className={`w-full flex flex-col ${mediaColumnOrderClass} lg:w-1/2`}
        >
          <div className="rounded-md mb-6 lg:sticky lg:top-20 lg:z-10 lg:backdrop-blur">
            <h1 className="text-3xl sm:text-4xl max-w-[600px] font-bold py-4">
              {mainTitle}
            </h1>
            <p className="max-w-[500px]">{mainDescription}</p>
          </div>
          <div className="flex items-center justify-center min-h-[240px] sm:min-h-[320px] lg:min-h-[400px] lg:sticky lg:top-64 lg:z-10">
            <div className="w-full max-w-[640px] overflow-hidden rounded-md [&_img]:h-[260px] [&_img]:w-full [&_img]:object-cover sm:[&_img]:h-[320px] lg:[&_img]:h-[400px]">
              {activeImage}
            </div>
          </div>
        </div>

        <div
          className={`w-full space-y-8 mt-0 lg:w-1/2 lg:space-y-20 lg:mt-[185px] ${contentColumnOrderClass}`}
        >
          {content.map((section) => (
            <div
              key={section.id}
              id={section.id.toString()}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[section.id] = el;
              }}
              className={`p-4 rounded-lg transition-colors duration-300  ${
                activeId === section.id
                  ? 'opacity-100'
                  : 'opacity-100 lg:opacity-10'
              }`}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                {section.title}
              </h2>
              <p className="dark:text-gray-500 text-gray-600">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyScroll;
