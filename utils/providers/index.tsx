'use client';
import NavbarProvider from './navbar.provider';
import { ThemeProvider } from './theme-provider';

const Providers = ({ children }: _IChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NavbarProvider>{children}</NavbarProvider>
    </ThemeProvider>
  );
};

export default Providers;
