'use client';

import dynamic from 'next/dynamic';

const NavigationSheet = dynamic(
  () => import('./nav-sheet').then((mod) => mod.NavigationSheet),
  { ssr: false },
);

export default function ClientNavigationSheet() {
  return <NavigationSheet />;
}
