'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import DashboardSliderContext from '../contexts/dashboard-slider.context';

const DashboardSliderProvider = ({
  children,
  length,
}: _IChildren & { length: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate dashboards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  // Get previous, current, and next dashboard images
  const getDashboardIndex = useCallback(
    (offset: number) => {
      const dashboardLength = length;
      return (currentIndex + offset + dashboardLength) % dashboardLength;
    },
    [currentIndex, length],
  );

  const value = useMemo(
    () => ({
      currentIndex,
      getDashboardIndex,
    }),
    [currentIndex, getDashboardIndex],
  );

  return (
    <DashboardSliderContext.Provider value={value}>
      {children}
    </DashboardSliderContext.Provider>
  );
};

export default DashboardSliderProvider;
