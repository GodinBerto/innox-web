import { createContext } from 'react';

interface IDashboardSliderContext {
  currentIndex: number;
  getDashboardIndex: (offset: number) => number;
}

const DashboardSliderContext = createContext<IDashboardSliderContext>({
  currentIndex: 0,
  getDashboardIndex: () => 0,
});

export default DashboardSliderContext;
