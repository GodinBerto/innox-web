/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { cn } from '@/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const TypewriterEffectSmooth = ({
  staticText = 'Empowering modern businesses with',
  phrases,
  className,
  cursorClassName,
}: {
  staticText?: string;
  phrases: _ITypewriterPhrase[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [staticDisplay, setStaticDisplay] = useState('');
  const [dynamicDisplay, setDynamicDisplay] = useState('');
  const [isStaticDone, setIsStaticDone] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const currentPhrase = phrases[phraseIndex];

  useEffect(() => {
    if (!isStaticDone) {
      if (staticDisplay.length < staticText.length) {
        const timeout = setTimeout(() => {
          setStaticDisplay(staticText.slice(0, staticDisplay.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsStaticDone(true);
      }
    }
  }, [staticDisplay, staticText, isStaticDone]);

  useEffect(() => {
    if (!isStaticDone) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentPhrase.text.length) {
            setDynamicDisplay(currentPhrase.text.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setDynamicDisplay(currentPhrase.text.slice(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 70,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, isStaticDone, currentPhrase]);

  return (
    <div
      className={cn(
        'block w-full max-w-5xl leading-0.5 text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-center',
        className,
      )}
    >
      <span className="dark:text-white text-black leading-5">
        {staticDisplay}
      </span>
      <motion.span
        key={phraseIndex}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          'inline text-blue-500 bg-transparent! leading-5',
          currentPhrase.className,
        )}
      >
        {' '}
        {dynamicDisplay}
      </motion.span>
      <motion.span
        className={cn(
          'inline-block align-middle w-0.5 sm:w-[3px] h-4 sm:h-6 xl:h-12 ml-1 bg-blue-500',
          cursorClassName,
          currentPhrase.className,
        )}
        animate={{ opacity: [0, 1] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
};
