'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { ManageAssets as ManageAssetsType } from '@/types/sanity/schema';
import { urlForImage } from '@/lib/sanity';

const ManageAssets = ({
  mainTitle = 'Manage Assets and Operations Efficiently.',
  mainDescription = 'InnoX simplifies how organizations handle critical operational workflows.',
  content = [],
}: ManageAssetsType) => {
  const [activeId, setActiveId] = useState(content[0]?._key || 0);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestId = content[0]?._key || 0;
      let closestDistance = Infinity;

      content.forEach((section, index) => {
        const id = section._key || index;
        const el = sectionRefs.current[id as unknown as string];
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(centerY - elCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestId = id;
          }
        }
      });

      setActiveId(closestId as unknown as string);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content]);

  const activeImageSrc = content.find(
    (item) => (item._key || '') === (activeId || ''),
  )?.image;

  const activeImage = activeImageSrc ? (
    <Image
      height={400}
      width={640}
      src={urlForImage(activeImageSrc).width(640).height(400).url() as string}
      alt={''}
      className="rounded-md  h-[400px] object-cover "
    />
  ) : null;

  return (
    <section className="w-full min-h-screen p-10 container">
      <div className="flex gap-10">
        {/* Scrollable content */}
        <div className="w-1/2 space-y-20 mt-[185px]">
          {content.map((section, index) => {
            const id = section._key || index;
            return (
              <div
                key={id}
                id={String(id)}
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[String(id)] = el;
                }}
                className={`p-4 rounded-lg transition-colors duration-300  ${
                  activeId === id ? 'opacity-100' : 'opacity-10'
                }`}
              >
                <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
                <p className="dark:text-gray-500 text-gray-600">
                  {section.description}
                </p>
              </div>
            );
          })}
        </div>

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
      </div>
    </section>
  );
};

export default ManageAssets;
