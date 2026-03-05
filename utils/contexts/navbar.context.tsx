import { createContext } from 'react';

interface _INavbarContext {
  navbarVisible: boolean;
  setNavbarVisibility: (visibleState: boolean) => void;
  sheetOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
  onSheetOpenChange: (openState: boolean) => void;
}
const NavbarContext = createContext<_INavbarContext>({
  navbarVisible: false,
  setNavbarVisibility() {},
  sheetOpen: false,
  openSheet() {},
  closeSheet() {},
  onSheetOpenChange() {},
});

export default NavbarContext;
