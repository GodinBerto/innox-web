'use client';

import { ManagePeople as ManagePeopleType } from '@/types/sanity/schema';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { urlForImage } from '@/lib/sanity';

const ManagePeople = ({
  mainTitle,
  mainDescription,
  content = [],
}: ManagePeopleType) => {
  const contentData = content.map((item, index) => ({
    id: item._key || index,
    title: item.title,
    description: item.description,
    content: (
      <Image
        height={400}
        width={640}
        src={
          item.image
            ? (urlForImage(item.image).width(640).height(400).url() as string)
            : '/assets/images/pages/modules-bg.png'
        }
        alt={item.title || ''}
        className="rounded-md  h-[400px] object-cover "
      />
    ),
  }));
  const [activeId, setActiveId] = useState(contentData[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestId = contentData[0].id;
      let closestDistance = Infinity;

      contentData.forEach((section) => {
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
  }, [contentData]);

  const activeImage = contentData.find((item) => item.id === activeId)?.content;

  return (
    <section className="w-full min-h-screen p-10 container">
      <div className="flex gap-10">
        {/* Sticky image */}
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

        {/* Scrollable content */}
        <div className="w-1/2 space-y-20 mt-[185px]">
          {contentData.map((section) => (
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
      </div>
    </section>
  );
};

export default ManagePeople;
