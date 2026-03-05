'use client';

import { useEffect, useMemo, useState } from 'react';
import * as Icons from 'lucide-react';
import { Home, type LucideIcon } from 'lucide-react';
import Image from 'next/image';
import type {
  SubModuleFunctionalFeature,
  SubModuleImprove,
} from '@/lib/sanity/sanity.client';

interface ImproveOutcomesProps {
  title: string;
  improve?: SubModuleImprove;
  functionalFeatures?: Array<string | SubModuleFunctionalFeature>;
}

interface ImproveCard {
  _key: string;
  title: string;
  description: string;
  iconName?: string;
}

const DEFAULT_CARDS: ImproveCard[] = [
  {
    _key: 'boost-sales',
    title: 'Boost sales with impactful incentive compensation',
    description:
      'Accelerate business outcomes with better planning and tracking while reducing time-consuming disputes.',
    iconName: 'TrendingUp',
  },
  {
    _key: 'org-capacity',
    title: 'Organizational capacity',
    description:
      'Align teams with clear ownership and visibility so your operations scale without friction.',
    iconName: 'Building2',
  },
  {
    _key: 'performance-insights',
    title: 'Performance insights',
    description:
      'Track key indicators in one place and move faster with reliable, real-time decision support.',
    iconName: 'ChartNoAxesColumnIncreasing',
  },
];

function toPascalCase(value: string) {
  return value
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function getIconComponent(iconName?: string): LucideIcon {
  const key = toPascalCase(iconName || 'Home');
  const iconMap = Icons as unknown as Record<string, LucideIcon>;
  return iconMap[key] || Home;
}

export function ImproveOutcomes({
  title,
  improve,
  functionalFeatures,
}: ImproveOutcomesProps) {
  const cards = useMemo<ImproveCard[]>(() => {
    const fromImprove = (improve?.content ?? [])
      .filter((item) => item.title?.trim() || item.description?.trim())
      .map((item, idx) => ({
        _key: item._key || `improve-${idx}`,
        title: item.title?.trim() || `Feature ${idx + 1}`,
        description: item.description?.trim() || '',
        iconName: item.iconName,
      }));

    if (fromImprove.length > 0) return fromImprove;

    const fromFunctional = (functionalFeatures ?? [])
      .map((item, idx) => ({
        ...(typeof item === 'string'
          ? {
              _key: `functional-${idx}`,
              title: item.trim() || `Feature ${idx + 1}`,
              description: '',
              iconName: undefined,
            }
          : {
              _key: item._key || `functional-${idx}`,
              title: item.title?.trim() || `Feature ${idx + 1}`,
              description: item.content?.trim() || '',
              iconName: item.icon,
            }),
      }))
      .filter((item) => item.title || item.description);

    return fromFunctional.length > 0 ? fromFunctional : DEFAULT_CARDS;
  }, [improve?.content, functionalFeatures]);

  const visibleCards = useMemo(() => cards.slice(0, 3), [cards]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [visibleCards.length]);

  useEffect(() => {
    if (visibleCards.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visibleCards.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [visibleCards.length]);

  const activeCard = visibleCards[activeIndex] ?? visibleCards[0];
  const heading =
    improve?.title?.trim() ||
    `Improve business outcomes with ${title} management system`;
  const improveImageSrc = improve?.image?.asset?.url || '/hand-chart.png';

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              {heading}
            </h2>

            {improve?.description && (
              <p className="text-gray-600 mb-6 md:mb-8 max-w-xl">
                {improve.description}
              </p>
            )}

            {activeCard && (
              <div className="bg-gray-50 rounded-xl p-6 flex items-start gap-6 max-w-xl">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {activeCard.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {activeCard.description}
                  </p>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition">
                    Try it Out
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative w-full h-60 sm:h-[280px] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={improveImageSrc}
              alt="Performance illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
          {visibleCards.map((item, idx) => {
            const Icon = getIconComponent(item.iconName);
            const isActive = idx === activeIndex;

            return (
              <button
                key={item._key}
                type="button"
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`text-left rounded-xl p-6 shadow-sm border transition ${
                  isActive
                    ? 'bg-orange-50/40 border-orange-300'
                    : 'bg-white border-gray-100 hover:border-orange-200'
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>

                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
