import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

type QuickLink = { label: string; href: string };
type SocialLink = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
};

export const quickLinks: QuickLink[][] = [
  [
    { label: 'Take Me Home', href: '/' },
    { label: 'Power Apps', href: '/modules/power-apps' },
    {
      label: 'Performance Management',
      href: '/modules/performance-management',
    },
    { label: 'Legal Management', href: '/modules/legal-management' },
    { label: 'Task Management', href: '/modules/task-management' },
    { label: 'Payroll Management', href: '/modules/payroll-management' },
    { label: 'Budget Management', href: '/modules/budget-management' },
    { label: 'Productivity Apps', href: '/modules/productivity-apps' },
    { label: 'Asset Management', href: '/modules/assets-management' },
  ],
  [
    { label: 'Purchasing', href: '/modules/purchasing' },
    { label: 'Procurement', href: '/modules/purchasing' },
    { label: 'Financials', href: '/modules/financials-and-accounting' },
    { label: 'Security Management', href: '/modules/safety-management' },
    { label: 'Audit Management', href: '/modules/document-management' },
    { label: 'Hospital Management', href: '#' }, // No module found, keep as # or update if available
    { label: 'H.R Management', href: '/modules/hr-management' },
    { label: 'Integrations Management', href: '#' }, // No module found, keep as # or update if available
    { label: 'Incident Management', href: '/modules/incidence-management' },
  ],
];

export const socialLinks: SocialLink[] = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];
