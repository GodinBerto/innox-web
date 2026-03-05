import Link from 'next/link';
import { cn } from '@/utils';
import { Typography } from '@/components/ui/typography';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { ArrowRight, Home, MessageCircleQuestion } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found - 404',
  description: 'The content you\'re looking for couldn\'t be located.',
};

async function getSiteData(domain: string | null) {
  void domain;
  return {
    contactEmail: 'support@innox.com',
    popularLinks: [
      { href: '/demo', label: 'Live Demo' },
      { href: '/docs', label: 'Documentation' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Request a Demo' },
      {
        href: '/modules/human-resource/human-resource-management',
        label: 'Explore HR Tools',
      },
      {
        href: '/modules/operations/project-management',
        label: 'Project Management',
      },
    ],
  };
}

export default async function NotFound() {
  const headersList = await headers();
  const domain = headersList.get('host');
  const { contactEmail, popularLinks } = await getSiteData(domain);
  const pathname = headersList.get('x-current-path');
  return (
    <div
      className={cn(
        'min-h-screen w-full flex flex-col items-center justify-center',
        'px-4 py-12 sm:py-16 md:py-24',
        'bg-linear-to-br from-white via-gray-100 to-gray-100',
        'dark:from-gray-900 dark:via-gray-800 dark:to-gray-900',
        'relative overflow-hidden',
      )}
    >
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-100/50 dark:bg-blue-900/40 rounded-full blur-3xl" />
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-100/50 dark:bg-purple-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 display */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] md:text-[14rem] rotate-350 font-black text-gray-200 dark:text-gray-600/30 select-none leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Typography
                variant="subtitle"
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
              >
                Lost in InnoX
              </Typography>
              <Typography
                variant="paragraph"
                className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto"
              >
                We couldn&apos;t find{' '}
                <span className="font-medium gradient-text">
                  {pathname || 'this page'}
                </span>
              </Typography>
            </div>
          </div>
        </div>

        {/* Dynamic path display */}
        {pathname && (
          <div className="mb-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full inline-block">
            <Typography variant="paragraph" className="text-sm gradient-text">
              {pathname}
            </Typography>
          </div>
        )}

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/"
            className={cn(
              'group relative inline-flex items-center justify-center',
              'px-6 py-3 rounded-full font-medium',
              'bg-white dark:bg-gray-800',
              'border border-gray-200 dark:border-gray-700',
              'text-gray-800 dark:text-gray-200',
              'hover:bg-gray-50 dark:hover:bg-gray-700',
              'transition-all duration-200',
              'shadow-sm hover:shadow-md',
              'overflow-hidden',
            )}
          >
            <span className="absolute inset-0 bg-linear-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <Home className="w-5 h-5" />
              Return Home
            </span>
          </Link>

          <Link
            href="/modules"
            className={cn(
              'group relative inline-flex items-center justify-center',
              'px-6 py-3 rounded-full font-medium',
              'bg-linear-to-r from-orange-600 to-yellow-600',
              'text-white',
              'hover:from-orange-700 hover:to-yellow-700',
              'transition-all duration-200',
              'shadow-lg hover:shadow-xl',
              'overflow-hidden',
            )}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              Explore Modules
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        {/* Popular links */}
        {popularLinks?.length > 0 && (
          <div className="my-8 sm:my-14">
            <Typography
              variant="paragraph"
              className="text-sm text-gray-500 dark:text-gray-400 mb-2"
            >
              Popular destinations:
            </Typography>
            <div className="flex flex-wrap justify-center gap-2">
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Contact support */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center gap-2',
                'px-4 py-2 rounded-full text-sm font-medium',
                'bg-gray-100 dark:bg-gray-800',
                'text-gray-700 dark:text-gray-300',
                'hover:bg-gray-200 dark:hover:bg-gray-700',
                'transition-colors duration-200',
              )}
            >
              <MessageCircleQuestion className="w-4 h-4" />
              Contact Support
            </Link>
            {contactEmail && (
              <Typography
                variant="paragraph"
                className="text-sm text-gray-500 dark:text-gray-400"
              >
                or email:{' '}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {contactEmail}
                </a>
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
