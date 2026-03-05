import { useCallback, useMemo, useState } from 'react';
import NavbarContext from '../contexts/navbar.context';

const NavbarProvider = ({ children }: _IChildren) => {
  const [navbarVisible, setNavbarVisibility] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const openSheet = useCallback(() => setSheetOpen(true), []);
  const closeSheet = useCallback(() => setSheetOpen(false), []);

  const onSheetOpenChange = useCallback((openState: boolean) => {
    setSheetOpen(openState);
  }, []);

  // Memoize the context value to avoid unnecessary re-renders
  const value = useMemo(
    () => ({
      navbarVisible,
      setNavbarVisibility,
      sheetOpen,
      openSheet,
      closeSheet,
      onSheetOpenChange,
    }),
    [navbarVisible, sheetOpen, openSheet, closeSheet, onSheetOpenChange],
  );
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

export default NavbarProvider;
