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

  return (
    <section className="w-full min-h-screen p-10 container">
      <div className="flex gap-10">
        {/* Sticky image */}
        {position === 'left' && (
          <div className="w-1/2 flex flex-col">
            <div className="sticky top-20 z-10 backdrop-blur rounded-md mb-6">
              <h1 className="text-4xl max-w-[600px] font-bold py-4">
                {mainTitle}
              </h1>
              <p className="max-w-[500px]">{mainDescription}</p>
            </div>
            <div className="sticky top-64 z-10 flex items-center justify-center min-h-[400px]">
              {activeImage}
            </div>
          </div>
        )}

        {/* Scrollable content */}
        <div className="w-1/2 space-y-20 mt-[185px]">
          {content.map((section) => (
            <div
              key={section.id}
              id={section.id.toString()}
              ref={(el: HTMLDivElement | null) => {
                sectionRefs.current[section.id] = el;
              }}
              className={`p-4 rounded-lg transition-colors duration-300  ${
                activeId === section.id ? 'opacity-100' : 'opacity-10'
              }`}
            >
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="dark:text-gray-500 text-gray-600">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sticky image */}
        {position === 'right' && (
          <div className="w-1/2 flex flex-col">
            <div className="sticky top-20 z-10 backdrop-blur rounded-md mb-6">
              <h1 className="text-4xl max-w-[600px] font-bold py-4">
                {mainTitle}
              </h1>
              <p className="max-w-[500px]">{mainDescription}</p>
            </div>
            <div className="sticky top-64 z-10 flex items-center justify-center min-h-[400px]">
              {activeImage}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StickyScroll;
