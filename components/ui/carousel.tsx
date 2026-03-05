'use client';
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselProps {
  slides: _ISlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback(
    (newDirection: number) => {
      setCurrent(([prev]) => {
        const newIndex = (prev + newDirection + slides.length) % slides.length;
        return [newIndex, newDirection];
      });
    },
    [slides.length],
  );

  useEffect(() => {
    timeoutRef.current = setTimeout(() => paginate(1), 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current, paginate]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      zIndex: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 10,
      scale: 1.1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      zIndex: 0,
    }),
  };

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute rounded-2xl shadow-2xl w-[80%] md:w-[60%] lg:w-[60%] h-[90%] z-10 overflow-hidden"
        >
          <img
            src={slides[current].src}
            className="w-full h-full object-cover"
          />
          {(slides[current].title || slides[current].button) && (
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
              {slides[current].title && (
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  {slides[current].title}
                </h2>
              )}
              {slides[current].button && (
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm md:text-base font-medium hover:bg-gray-200 transition">
                  {slides[current].button}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Overlaying side previews */}
      <img
        src={slides[(current - 1 + slides.length) % slides.length].src}
        className="absolute -left-14 w-[70%] h-[95%] object-cover rounded-xl opacity-80 scale-90 z-0 shadow-lg"
      />
      <img
        src={slides[(current + 1) % slides.length].src}
        className="absolute -right-14 w-[70%] h-[95%] object-cover rounded-xl opacity-80 scale-90 z-0 shadow-lg"
      />

      {/* Controls */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
