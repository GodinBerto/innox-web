'use client';
import { usePathname } from 'next/navigation';
import { Typography } from '../ui/typography';
import { socialLinks, quickLinks } from '@/data/footer.data';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className="w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 py-12 px-4 relative"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Image
        src={'/assets/images/footer-bg.png'}
        alt={'footer background'}
        fill
        className="absolute w-full h-full object-cover z-0"
        priority={false}
        loading="lazy"
      />
      <div className="container flex flex-col md:flex-row gap-12 md:gap-8 justify-between relative z-10">
        {/* Left: Logo & Info */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <div className="text-3xl font-bold mb-2">LOGO HERE</div>
          <div className="mb-4 text-base text-black dark:text-white">
            InnoX is designed to automate workflows, unify business operations,
            and drive digital transformation across industries
          </div>
          <div className="mb-2 text-sm text-black dark:text-white">
            info@innorik.com
            <br />
            +1 855-221-9979
          </div>
          <div className="mb-4 text-sm text-black dark:text-white">
            80 Broad Street, 5th Floor, New York City, New York 10004, USA
          </div>
          <div className="flex items-center gap-3 mb-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon className="h-5 w-5" />
              </a>
            ))}
            <span className="ml-2 text-sm font-medium">Innorik_llc</span>
          </div>
          <div className="text-sm font-medium">Join Our Community</div>
        </div>

        {/* Center: Quick Links */}
        <div>
          <Typography variant="subtitle" className="text-xl font-bold ">
            Quick Links
          </Typography>
          <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {quickLinks.map((column, colIdx) => (
              <div key={colIdx}>
                <ul
                  className={
                    colIdx === 1 ? 'mt-10 sm:mt-0 space-y-2' : 'space-y-2'
                  }
                >
                  {column.map((item, idx) => {
                    const isActive =
                      item.href !== '#' && pathname === item.href;
                    return (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className={
                            isActive
                              ? 'gradient-text font-medium hover:underline'
                              : 'hover:underline'
                          }
                        >
                          <Typography
                            variant="span"
                            className={
                              idx === 0 && colIdx === 0
                                ? 'gradient-text font-medium'
                                : ''
                            }
                          >
                            &rsaquo;{' '}
                          </Typography>
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
