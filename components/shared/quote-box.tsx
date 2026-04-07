import Image from 'next/image';

const testimonial =
  'Integrations and automations have transformed my WordPress website into a powerful tool. By connecting various software tools and automating workflows, I’ve eliminated redundant tasks and unlocked a world of new possibilities. Bit Integrations is an incredible plugin that has connected my WordPress site to hundreds of different software tools, revolutionizing my workflow. Highly recommended!';

export default function QuoteBox() {
  return (
    <section className="overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-black sm:text-4xl lg:text-[3.25rem]">
              Professional&apos;s Perspectives on
              <span className="block">Our Products Brilliance</span>
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
            <div className="max-w-[640px] text-center lg:text-left">
              <div className="mb-8 flex justify-center gap-1 lg:justify-start">
                <Image
                  src="/assets/images/quote.png"
                  alt=""
                  width={36}
                  height={50}
                  aria-hidden
                  className="h-10 w-auto opacity-20 grayscale sm:h-12"
                />
                <Image
                  src="/assets/images/quote.png"
                  alt=""
                  width={36}
                  height={50}
                  aria-hidden
                  className="h-10 w-auto opacity-20 grayscale sm:h-12"
                />
              </div>

              <blockquote className="text-base leading-[2.1] text-black sm:text-lg">
                {testimonial}
              </blockquote>

              <div className="mt-10">
                <p className="text-xl font-semibold text-black">Jeffrey</p>
                <p className="mt-2 text-sm text-[#7c7c84]">
                  <a
                    href="https://www.youtube.com/@Lytbox_Academy"
                    className="text-[#18A0FB]"
                  >
                    Jeffrey @ Lytbox
                  </a>
                  <span className="px-2 text-[#c1c1c7]">|</span>
                  Educator
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative aspect-[1.05/1] w-full max-w-[400px]">
                <span
                  aria-hidden
                  className="absolute left-2 top-[26%] h-5 w-24 -rotate-[42deg] rounded-full bg-[#12C7E8] sm:h-6 sm:w-32"
                />
                <span
                  aria-hidden
                  className="absolute right-[12%] top-[6%] h-5 w-28 -rotate-[42deg] rounded-full bg-[#12C7E8] sm:h-6 sm:w-36"
                />
                <span
                  aria-hidden
                  className="absolute right-[2%] top-[18%] h-4 w-20 -rotate-[42deg] rounded-full bg-[#12C7E8] sm:h-5 sm:w-24"
                />
                <span
                  aria-hidden
                  className="absolute right-[1%] top-[31%] h-6 w-16 -rotate-[42deg] rounded-full bg-[#12C7E8] sm:h-7 sm:w-20"
                />
                <span
                  aria-hidden
                  className="absolute left-[14%] top-[12%] h-[62%] w-[72%] rounded-[2.75rem] bg-[#12C7E8]"
                  style={{
                    clipPath:
                      'polygon(12% 18%, 42% 0%, 84% 6%, 100% 25%, 86% 42%, 100% 62%, 84% 78%, 100% 100%, 62% 95%, 44% 100%, 18% 86%, 0% 58%, 10% 38%, 0% 24%)',
                  }}
                />

                <div
                  className="absolute left-[14%] top-[12%] h-[78%] w-[72%] overflow-hidden"
                  style={{
                    clipPath:
                      'polygon(12% 18%, 42% 0%, 84% 6%, 100% 25%, 86% 42%, 100% 62%, 84% 78%, 100% 100%, 62% 95%, 44% 100%, 18% 86%, 0% 58%, 10% 38%, 0% 24%)',
                  }}
                >
                  <Image
                    src="/assets/images/quote-jeffrey.webp"
                    alt="Jeffrey from Lytbox"
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 360px, 80vw"
                    className="object-cover object-center"
                  />
                </div>

                <span
                  aria-hidden
                  className="absolute bottom-[4%] left-[16%] h-7 w-28 rotate-[139deg] rounded-full bg-white sm:h-8 sm:w-36"
                />
                <span
                  aria-hidden
                  className="absolute bottom-[20%] left-[4%] h-5 w-20 rotate-[139deg] rounded-full bg-white sm:h-6 sm:w-24"
                />
                <span
                  aria-hidden
                  className="absolute right-[20%] top-[20%] h-5 w-16 rotate-[139deg] rounded-full bg-white sm:h-6 sm:w-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
