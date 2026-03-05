'use client';
import { navItems } from '@/data/navbar.data';
import { cn } from '@/utils';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';

import React, { use, useCallback, useRef, useState } from 'react';
import { NavBody, NavbarLogo, NavItems, NavbarButton } from './desktop-navbar';
import {
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './mobile-navbar';
import Link from 'next/link';
import { ThemeToggleDropdown } from '../shared/toggle-theme';
import NavbarContext from '@/utils/contexts/navbar.context';
import NavbarSearch from './navbar-search';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

const CompleteNavbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const { navbarVisible, setNavbarVisibility } = use(NavbarContext);
  // const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setNavbarVisibility(true);
    } else {
      setNavbarVisibility(false);
    }
  });

  return (
    <div className="relative container">
      <motion.div
        ref={ref}
        className={cn(
          'z-40 w-full',
          navbarVisible
            ? 'fixed top-0 left-0 right-0 container'
            : 'sticky inset-x-0 top-20',
          className,
        )}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement)
            : child,
        )}
      </motion.div>
    </div>
  );
};

export default function Navbar() {
  const { navbarVisible, openSheet, sheetOpen } = use(NavbarContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const pathname = usePathname();
  const handleNavItemClick = useCallback(
    (showSheet: boolean) => {
      if (!sheetOpen && showSheet) {
        openSheet();
      }
    },
    [sheetOpen, openSheet],
  );

  return (
    <div className="relative">
      <CompleteNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center">
            <NavItems items={navItems} onItemClick={handleNavItemClick} />
            <div className="flex flex-row items-center gap-2 md:ml-6 transition-all duration-100">
              {!navbarVisible && (
                <div className="flex flex-row items-center gap-4 ml-4">
                  <NavbarSearch />
                  <ThemeToggleDropdown />
                  {/* <NavigationSheet selectedLink={pathname as NavLinks}/> */}
                </div>
              )}
              <NavbarButton
                variant="primary"
                href="/contact-us"
                className="text-white  rounded-full bg-orange-600 shadow-lg hover:bg-orange-700 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-600"
                aria-label="Book a demo of InnoX"
              >
                Book Demo
              </NavbarButton>
              <div className="flex-center flex-col sm:flex-row gap-4 mt-6 sm:mt-10 animate-fade-in-delay-more"></div>
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/contact-us"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </CompleteNavbar>
    </div>
  );
}
