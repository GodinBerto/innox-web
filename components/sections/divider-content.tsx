import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Circle, Sparkles, Star } from 'lucide-react';

interface _IDividerContent {
  text: string;
  icon?: boolean;
  link?: string;
}

const checklist = [
  'Explore all features and decide if it’s right for you',
  'Upgrade your workflow and launch faster than before',
  'Join our community and start learning as you build',
] as const;

const trustMarks = [
  { label: 'InnoX', icon: Circle },
  { label: 'Innorik', icon: Sparkles },
  { label: 'Enterprise', icon: Circle },
] as const;

const DividerContent = ({ text, icon = true, link }: _IDividerContent) => {
  const buttonLabel = text || 'Start Your Journey';

  return (
    <section className="bg-background px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="container">
        <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="flex flex-col justify-between py-2">
            <div className="space-y-8">
              <div
                aria-hidden
                className="flex items-center justify-center lg:justify-start"
              >
                <div className="relative h-8 w-10">
                  <span className="absolute left-0 top-2 h-3 w-4 -skew-x-[24deg] rounded-sm bg-foreground" />
                  <span className="absolute left-3 top-0 h-3 w-4 -skew-x-[24deg] rounded-sm bg-foreground" />
                </div>
              </div>

              <div className="space-y-5 text-center lg:text-left">
                <h2 className="max-w-[9ch] text-4xl font-semibold leading-[0.92] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-[4.2rem]">
                  Experience the Difference for Yourself!
                </h2>

                <ul className="space-y-4 pt-2">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start justify-center gap-3 text-left lg:justify-start"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                      <span className="text-base leading-7 text-foreground/90 dark:text-foreground/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap lg:items-center lg:justify-start">
                {link ? (
                  <Link
                    href={link}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-colors hover:opacity-90"
                  >
                    {buttonLabel}
                    {icon && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Link>
                ) : (
                  <div className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background">
                    {buttonLabel}
                    {icon && <ArrowRight className="ml-2 h-4 w-4" />}
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                  <span className="font-medium text-foreground">4.7/5</span>
                  <span>based on 2k reviews</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                {trustMarks.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm font-semibold text-foreground/75 dark:text-foreground/70"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[640px]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-border sm:min-h-[520px] lg:min-h-[620px]">
              <Image
                src="/assets/images/cta-journey.jpg"
                alt="Two people moving forward together through a sunlit park"
                fill
                sizes="(min-width: 1280px) 640px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />

              <div className="absolute inset-0 bg-black/10 dark:bg-black/25" />

              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividerContent;
