import Link from 'next/link';
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import { getFooterData } from '@/lib/sanity';
import type { FooterData } from '@/types/sanity/schema';

type FooterGroup = NonNullable<FooterData['quickLinks']>[number];
type FooterGroupLink = NonNullable<FooterGroup['links']>[number];
type FooterSocialLink = NonNullable<FooterData['socialLinks']>[number];

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  x: Twitter,
  youtube: Youtube,
} as const;

const fallbackFooter: Partial<FooterData> = {
  brandPrimary: 'Inno',
  brandSecondary: 'X',
  brandLink: '/',
  quickLinks: [
    {
      _key: 'platform',
      _type: 'quickLinkColumn',
      title: 'Platform',
      links: [
        {
          _key: 'modules',
          _type: 'quickLink',
          label: 'Explore Modules',
          href: '/modules',
        },
        {
          _key: 'dashboards',
          _type: 'quickLink',
          label: 'Smart Dashboards',
          href: '/modules',
        },
        {
          _key: 'automation',
          _type: 'quickLink',
          label: 'Workflow Automation',
          href: '/modules',
        },
      ],
    },
    {
      _key: 'solutions',
      _type: 'quickLinkColumn',
      title: 'Solutions',
      links: [
        {
          _key: 'hr',
          _type: 'quickLink',
          label: 'Human Resource',
          href: '/modules/hr-management',
        },
        {
          _key: 'finance',
          _type: 'quickLink',
          label: 'Finance & Accounting',
          href: '/modules/financials-and-accounting',
        },
        {
          _key: 'legal',
          _type: 'quickLink',
          label: 'Legal Management',
          href: '/modules/legal-management',
        },
      ],
    },
    {
      _key: 'resources',
      _type: 'quickLinkColumn',
      title: 'Resources',
      links: [
        {
          _key: 'about',
          _type: 'quickLink',
          label: 'About Us',
          href: '/about',
        },
        {
          _key: 'contact',
          _type: 'quickLink',
          label: 'Contact Us',
          href: '/contact',
        },
        { _key: 'demo', _type: 'quickLink', label: 'Book Demo', href: '/demo' },
      ],
    },
  ],
  socialLinks: [
    {
      _key: 'instagram',
      _type: 'socialLink',
      icon: 'instagram',
      label: 'Instagram',
      href: 'https://instagram.com',
    },
    {
      _key: 'youtube',
      _type: 'socialLink',
      icon: 'youtube',
      label: 'YouTube',
      href: 'https://youtube.com',
    },
    {
      _key: 'twitter',
      _type: 'socialLink',
      icon: 'twitter',
      label: 'Twitter',
      href: 'https://x.com',
    },
    {
      _key: 'facebook',
      _type: 'socialLink',
      icon: 'facebook',
      label: 'Facebook',
      href: 'https://facebook.com',
    },
    {
      _key: 'linkedin',
      _type: 'socialLink',
      icon: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com',
    },
  ],
  legalDisclaimer:
    'InnoX is designed to support business operations with connected workflows, centralized data, and clear reporting across departments. Content, modules, and service availability may vary based on your organization’s setup and deployment requirements.',
  riskWarning:
    'Platform outcomes depend on implementation scope, data quality, and internal processes. Review your operational, compliance, and security requirements carefully before rollout, and confirm final project details through a guided demo with our team.',
};

function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}

function FooterMark() {
  return (
    <div aria-hidden className="relative h-8 w-9">
      <span className="absolute left-0 top-4 h-3 w-2.5 -skew-x-18 rounded-[2px] bg-primary" />
      <span className="absolute left-2.5 top-1 h-3 w-2.5 -skew-x-18 rounded-[2px] bg-orange-500" />
      <span className="absolute left-4.5 top-4 h-3 w-2.5 -skew-x-18 rounded-[2px] bg-orange-400" />
      <span className="absolute left-7 top-1 h-3 w-2.5 -skew-x-18 rounded-[2px] bg-orange-300" />
    </div>
  );
}

function FooterNavLink({ link }: { link: FooterGroupLink }) {
  if (!link.label || !link.href) {
    return null;
  }

  const className =
    'text-sm leading-6 text-zinc-800 transition-colors hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-400';

  if (isExternalHref(link.href)) {
    return (
      <a
        href={link.href}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function FooterSocialButton({ link }: { link: FooterSocialLink }) {
  const Icon =
    socialIconMap[
      (link.icon?.toLowerCase() ?? '') as keyof typeof socialIconMap
    ] ?? Globe;

  if (!link.href) {
    return null;
  }

  return (
    <a
      href={link.href}
      aria-label={link.label || 'Social link'}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

export default async function Footer() {
  const footerData = (await getFooterData()) ?? fallbackFooter;
  const brandPrimary = footerData.brandPrimary || fallbackFooter.brandPrimary;
  const brandSecondary =
    footerData.brandSecondary || fallbackFooter.brandSecondary;
  const brandLink = footerData.brandLink || fallbackFooter.brandLink || '/';
  const quickLinks =
    footerData.quickLinks?.filter(
      (group) => group?.title && group?.links?.length,
    ) ||
    fallbackFooter.quickLinks ||
    [];
  const socialLinks =
    footerData.socialLinks?.filter((link) => link?.icon && link?.href) ||
    fallbackFooter.socialLinks ||
    [];
  const legalDisclaimer =
    footerData.legalDisclaimer || fallbackFooter.legalDisclaimer;
  const riskWarning = footerData.riskWarning || fallbackFooter.riskWarning;

  return (
    <footer className="w-full border-t border-zinc-200/70 bg-[#faf7fb] text-zinc-950 dark:border-white/10 dark:bg-[#050505] dark:text-white">
      <div className="container py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-8 border-b border-zinc-200/80 pb-8 dark:border-white/10 sm:pb-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {isExternalHref(brandLink) ? (
              <a
                href={brandLink}
                className="inline-flex items-center gap-3 self-start"
                target="_blank"
                rel="noreferrer"
                aria-label={`${brandPrimary}${brandSecondary} home`}
              >
                <FooterMark />
                <span className="text-3xl font-semibold tracking-[-0.04em]">
                  <span>{brandPrimary}</span>
                  <span className="text-[#cf66c4]">{brandSecondary}</span>
                </span>
              </a>
            ) : (
              <Link
                href={brandLink}
                className="inline-flex items-center gap-3 self-start"
                aria-label={`${brandPrimary}${brandSecondary} home`}
              >
                <FooterMark />
                <span className="text-3xl font-semibold tracking-[-0.04em]">
                  <span>{brandPrimary}</span>
                  <span className="text-[#cf66c4]">{brandSecondary}</span>
                </span>
              </Link>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((link) => (
                <FooterSocialButton key={link._key} link={link} />
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {quickLinks.map((group) => (
              <div key={group._key} className="space-y-4">
                <h3 className="text-sm font-semibold text-[#cf66c4] dark:text-[#e38ccf]">
                  {group.title}
                </h3>

                <div className="space-y-2.5">
                  {group.links?.map((link) => (
                    <FooterNavLink key={link._key} link={link} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-8 text-xs leading-6 text-zinc-600 dark:text-zinc-400 sm:pt-10">
          {legalDisclaimer && <p>{legalDisclaimer}</p>}
          {riskWarning && <p>{riskWarning}</p>}
        </div>
      </div>
    </footer>
  );
}
