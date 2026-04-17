'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { urlForImage } from '@/lib/sanity';
import type { QuoteBox as QuoteBoxSection } from '@/types/sanity/schema';

const AUTOPLAY_INTERVAL_MS = 6000;

type QuoteEntry = NonNullable<QuoteBoxSection['quotes']>[number];
type QuoteImage = NonNullable<QuoteEntry['image']>;

type LegacyQuoteBoxProps = {
  quote?: string;
  author?: string;
  authorTitle?: string;
  company?: string;
  companyUrl?: string;
  image?: QuoteImage;
  imageAlt?: string;
};

type QuoteBoxProps = Partial<QuoteBoxSection> & LegacyQuoteBoxProps;

type NormalizedQuote = {
  key: string;
  quote: string;
  author?: string;
  authorTitle?: string;
  company?: string;
  companyUrl?: string;
  image?: QuoteImage;
  imageAlt?: string;
};

const FALLBACK_QUOTES: NormalizedQuote[] = [
  {
    key: 'quote-default',
    quote: 'One platform for finance, HR, operations and legal.',
    author: 'InnoX Team',
    authorTitle: 'Enterprise Software Team',
    company: 'Innorik',
  },
];

function normalizeQuotes(props: QuoteBoxProps): NormalizedQuote[] {
  const cmsQuotes =
    props.quotes
      ?.filter((quoteItem): quoteItem is QuoteEntry =>
        Boolean(quoteItem?.quote),
      )
      .map((quoteItem, index) => ({
        key: quoteItem._key || `quote-${index}`,
        quote: quoteItem.quote || '',
        author: quoteItem.author,
        authorTitle: quoteItem.authorTitle,
        company: quoteItem.company,
        companyUrl: quoteItem.companyUrl,
        image: quoteItem.image,
        imageAlt: quoteItem.imageAlt,
      })) ?? [];

  if (cmsQuotes.length > 0) {
    return cmsQuotes;
  }

  if (props.quote) {
    return [
      {
        key: 'legacy-quote',
        quote: props.quote,
        author: props.author,
        authorTitle: props.authorTitle,
        company: props.company,
        companyUrl: props.companyUrl,
        image: props.image,
        imageAlt: props.imageAlt,
      },
    ];
  }

  return FALLBACK_QUOTES;
}

function getImageSrc(image?: QuoteImage): string | null {
  if (!image) {
    return null;
  }

  return urlForImage(image).width(960).height(1040).fit('crop').url() as string;
}

function QuoteMeta({ quote }: { quote: NormalizedQuote }) {
  const hasCompany = Boolean(quote.company);
  const hasTitle = Boolean(quote.authorTitle);

  return (
    <div className="mt-10">
      <p className="text-xl font-semibold text-foreground">
        {quote.author || quote.company || 'InnoX Team'}
      </p>

      {(hasCompany || hasTitle) && (
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground lg:justify-start">
          {quote.company &&
            (quote.companyUrl ? (
              <a
                href={quote.companyUrl}
                className="text-[#18A0FB] transition hover:text-[#0e7bc3] dark:text-blue-300 dark:hover:text-blue-200"
              >
                {quote.company}
              </a>
            ) : (
              <span>{quote.company}</span>
            ))}

          {hasCompany && hasTitle && (
            <span className="px-1 text-border">|</span>
          )}
          {quote.authorTitle && <span>{quote.authorTitle}</span>}
        </p>
      )}
    </div>
  );
}

function QuoteVisual({ quote }: { quote: NormalizedQuote }) {
  const imageSrc = getImageSrc(quote.image);

  if (!imageSrc) {
    return null;
  }

  return (
    <div className="relative aspect-[1.02/1] w-full max-w-[430px]">
      <div className="absolute inset-5 overflow-hidden rounded-full backdrop-blur-md ">
        <motion.div
          className="relative h-full w-full"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Image
            src={imageSrc}
            alt={
              quote.imageAlt ||
              `${quote.author || quote.company || 'Customer'} quote image`
            }
            fill
            sizes="(min-width: 1024px) 430px, (min-width: 640px) 380px, 85vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      <motion.span
        aria-hidden
        className="absolute left-5 top-[24%] h-5 w-24 rounded-full bg-background"
        animate={{ x: [0, 10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden
        className="absolute right-[10%] top-[7%] h-6 w-32 rounded-full bg-background"
        animate={{ x: [0, -12, 0], y: [0, 8, 0] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.span
        aria-hidden
        className="absolute bottom-[5%] left-[16%] h-7 w-28 rounded-full bg-background"
        animate={{ x: [0, 10, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 8.3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden
        className="absolute bottom-[20%] left-[4%] h-5 w-20 rounded-full bg-background"
        animate={{ x: [0, -8, 0], y: [0, 6, 0] }}
        transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function QuoteBox(props: QuoteBoxProps) {
  const quotes = normalizeQuotes(props);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex >= quotes.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, quotes.length]);

  useEffect(() => {
    if (quotes.length < 2) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % quotes.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, quotes.length]);

  const activeQuote = quotes[activeIndex] ?? quotes[0];
  const hasActiveImage = Boolean(getImageSrc(activeQuote?.image));

  if (!activeQuote) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-background px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[3.25rem]">
              Professional&apos;s Perspectives on
              <span className="block">Our Products Brilliance</span>
            </h2>
          </div>

          <div
            className={`mt-12 grid items-center gap-12 lg:mt-16 ${
              hasActiveImage
                ? 'lg:grid-cols-[1.02fr_0.98fr] lg:gap-10'
                : 'lg:grid-cols-1'
            }`}
          >
            <div className="max-w-[640px] text-center lg:text-left">
              <div className="mb-8 flex justify-center gap-1 lg:justify-start">
                <Image
                  src="/assets/images/quote.png"
                  alt=""
                  width={36}
                  height={50}
                  aria-hidden
                  className="h-10 w-auto opacity-20 grayscale dark:hidden sm:h-12"
                />
                <Image
                  src="/assets/images/quote-dark.png"
                  alt=""
                  width={36}
                  height={50}
                  aria-hidden
                  className="hidden h-10 w-auto opacity-25 dark:block sm:h-12"
                />
                <Image
                  src="/assets/images/quote.png"
                  alt=""
                  width={36}
                  height={50}
                  aria-hidden
                  className="h-10 w-auto opacity-20 grayscale dark:hidden sm:h-12"
                />
                <Image
                  src="/assets/images/quote-dark.png"
                  alt=""
                  width={36}
                  height={50}
                  aria-hidden
                  className="hidden h-10 w-auto opacity-25 dark:block sm:h-12"
                />
              </div>

              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={activeQuote.key}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.42, ease: 'easeOut' }}
                >
                  <blockquote className="text-base leading-[2.1] text-foreground sm:text-lg">
                    {activeQuote.quote}
                  </blockquote>
                  <QuoteMeta quote={activeQuote} />
                </motion.div>
              </AnimatePresence>

              {/* {quotes.length > 1 && (
                <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
                  {quotes.map((quote, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={quote.key}
                        type="button"
                        aria-label={`Show quote ${index + 1}`}
                        aria-pressed={isActive}
                        onClick={() => setActiveIndex(index)}
                        className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-medium transition ${
                          isActive
                            ? 'border-[#11356D] bg-[#11356D] text-white shadow-lg'
                            : 'border-border/70 bg-background text-muted-foreground hover:border-[#11356D]/25 hover:text-foreground'
                        }`}
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${
                            isActive ? 'bg-[#12C7E8]' : 'bg-muted-foreground/40'
                          }`}
                        />
                        <span>
                          {quote.author ||
                            quote.company ||
                            `Quote ${index + 1}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )} */}
            </div>

            {hasActiveImage && (
              <div className="flex justify-center lg:justify-end">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={activeQuote.key}
                    initial={{ opacity: 0, scale: 0.96, y: 18 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -14 }}
                    transition={{ duration: 0.48, ease: 'easeOut' }}
                    className="w-full max-w-[430px]"
                  >
                    <QuoteVisual quote={activeQuote} />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
