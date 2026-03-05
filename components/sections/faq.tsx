'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';

interface _IFaq {
  question: string;
  answer: string;
}

const FaqContent = ({ faq }: { faq: _IFaq }) => (
  <>
    <motion.h3
      key={faq.question}
      className="text-4xl font-bold mb-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {faq.question}
    </motion.h3>

    <motion.p
      key={faq.answer}
      className="text-gray-800 leading-relaxed max-w-2xl mx-auto text-xl font-medium"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {faq.answer}
    </motion.p>
  </>
);

const FAQ = ({ faqs }: { faqs: _IFaq[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faqs.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [faqs.length]);

  return (
    <section>
      <div
        className="bg-white px-6 pt-12 text-center rounded-xl relative container"
        style={{ fontFamily: '\'Comic Sans MS\', cursive' }}
      >
        {/* Icons */}
        <Image
          src={'/assets/images/faq-chat.png'}
          alt="faq-chat"
          height={61}
          width={80}
          className="absolute -left-12 top-1/2 -translate-y-1/2"
        />

        <Image
          src={'/assets/images/faq-question.png'}
          alt="faq-chat"
          height={93}
          width={56}
          className="absolute -right-12 bottom-0 -translate-y-1/2"
        />

        {/* Heading */}
        <h1 className="gradient-text text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>

        {/* FAQ Slide Content */}
        <div className="min-h-60">
          <AnimatePresence mode="wait">
            <FaqContent
              key={faqs[currentIndex].question}
              faq={faqs[currentIndex]}
            />
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {faqs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
