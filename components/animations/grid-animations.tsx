'use client';

import { RadioTower, TabletSmartphone } from 'lucide-react';

export function PopOutAnimations({ hovered }: { hovered: boolean }) {
  return (
    <div className="w-full h-full flex items-center justify-center  text-white ">
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Circular ripple animation */}
        <div
          className={`absolute w-96 h-96 transition-all ease-in-out duration-400 ${
            hovered ? 'scale-110' : 'scale-100'
          } rounded-full animate-ripple bg-gradient-to-r from-gray-400/10 to-transparent border border-gray-400/20`}
        />
        <div
          className={`absolute w-72 h-72 transition-all ease-in-out duration-200 ${
            hovered ? 'scale-110' : 'scale-100'
          } rounded-full animate-ripple bg-gradient-to-r from-gray-400/10 to-transparent border border-gray-400/10`}
        />
        <div
          className={`absolute w-52 h-52 transition-all ease-in-out duration-100 ${
            hovered ? 'scale-110' : 'scale-100'
          } rounded-full animate-ripple bg-gradient-to-r from-gray-400/10 to-transparent border border-gray-400/20`}
        />

        <div>
          <TabletSmartphone size={100} className="text-gray-200" />
        </div>
      </div>
    </div>
  );
}

export function TowerAnimation() {
  return (
    <div className="flex items-center justify-center h-full w-full relative">
      <div className="relative">
        {/* Land Pulse */}
        <div className="bg-gray-200 w-full h-full absolute top-[248] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-0" />

        {/* Signal Ripple */}
        <div className="signal-ring ring1" />
        <div className="signal-ring ring2" />
        <div className="signal-ring ring3" />
        <div className="signal-ring ring4" />

        {/* Tower */}
        <RadioTower
          size={120}
          className="relative z-10 tower-bounce"
          color="#e5e7eb"
        />
      </div>
    </div>
  );
}
