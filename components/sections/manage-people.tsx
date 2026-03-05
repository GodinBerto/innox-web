'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const contentData = [
  {
    id: 1,
    title: 'Onboarding and Recruitment',
    description:
      'Manage job postings, applications, and onboarding tasks with ease.',
    content: (
      <Image
        height={400}
        width={640}
        src="https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Onboarding"
        className="rounded-md  h-[400px] object-cover "
      />
    ),
  },
  {
    id: 2,
    title: 'Employee Records',
    description:
      'Maintain secure, searchable staff profiles with role-based access.',
    content: (
      <Image
        src="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Employee Records"
        height={400}
        width={640}
        className="rounded-md  h-[400px] object-cover "
      />
    ),
  },
  {
    id: 3,
    title: 'Onboarding and Recruitment',
    description:
      'Manage job postings, applications, and onboarding tasks with ease.',
    content: (
      <Image
        src="https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Onboarding"
        height={400}
        width={640}
        className="rounded-md  h-[400px] object-cover "
      />
    ),
  },
  {
    id: 4,
    title: 'Employee Records',
    description:
      'Maintain secure, searchable staff profiles with role-based access.',
    content: (
      <Image
        src="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Employee Records"
        height={400}
        width={640}
        className="rounded-md  h-[400px] object-cover "
      />
    ),
  },
  {
    id: 5,
    title: 'Attendance and Time Tracking',
    description:
      'Monitor punctuality, working hours, and leave with real-time visibility.',
    content: (
      <Image
        src="https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Attendance"
        height={400}
        width={640}
        className="rounded-md  h-[400px] object-cover "
      />
    ),
  },
];

const ManagePeople = () => {
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
  }, []);

  const activeImage = contentData.find((item) => item.id === activeId)?.content;

  return (
    <section className="w-full min-h-screen p-10 container">
      <div className="flex gap-10">
        {/* Sticky image */}
        <div className="w-1/2 flex flex-col">
          <div className="sticky top-20 z-10 backdrop-blur rounded-md mb-6">
            <h1 className="text-4xl max-w-[600px] font-bold py-4">
              Manage People and Processes with Ease
            </h1>
            <p className="max-w-[500px]">
              From recruitment to retirement, InnoX helps HR teams streamline
              employee data
            </p>
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
