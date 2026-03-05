'use client';

import { useState } from 'react';
import {
  PopOutAnimations,
  TowerAnimation,
} from '../animations/grid-animations';

export default function GridLayout() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-3 max-w-6xl">
        <div
          className="col-span-1 bg-gray-100 h-72 rounded-md p-5 relative overflow-hidden group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1 className="text-gray-700 text-xl font-semibold">Mobile Ready</h1>
          <p>Access the system on all kinds of mobile devices</p>
          <div className="scale-50 mt-42 right-3 top-3 absolute ">
            <PopOutAnimations hovered={hovered} />
          </div>
        </div>
        <div className="col-span-2 bg-gray-100 h-72 rounded-md p-5 relative overflow-hidden group">
          <h1 className="text-gray-700 text-xl font-semibold">Self-Hosted</h1>
          <p>Host either on cloud or in your own data center</p>
          <div className=" mt-42 right-3 top-3 absolute ">
            <TowerAnimation />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-6xl">
        <div
          className="col-span-2 bg-gray-100 h-72 rounded-md p-5 relative overflow-hidden group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1 className="text-gray-700 text-xl font-semibold">
            Multi-factor Authentication
          </h1>
          <p>To lower the risk of impersonations</p>
          <div className="scale-50 mt-42 right-3 top-3 absolute ">
            <PopOutAnimations hovered={hovered} />
          </div>
        </div>
        <div className="col-span-1 bg-gray-100 h-72 rounded-md p-5 relative overflow-hidden group">
          <h1 className="text-gray-700 text-xl font-semibold">
            Security Baked-In
          </h1>
          <p>
            To ensure you can focus on the core business of your organization
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-6xl">
        <div
          className="col-span-1 bg-gray-100 h-72 rounded-md p-5 relative overflow-hidden group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h1 className="text-gray-700 text-xl font-semibold">
            Local/Cloud Hosting
          </h1>
          <p>
            Your data is safe with InnoX, either on the cloud or locally or both
          </p>
          <div className="scale-50 mt-42 right-3 top-3 absolute ">
            <PopOutAnimations hovered={hovered} />
          </div>
        </div>
        <div className="col-span-2 bg-gray-100 h-72 rounded-md p-5 relative overflow-hidden group">
          <h1 className="text-gray-700 text-xl font-semibold">
            Integrate With Other ERPs
          </h1>
          <p>
            Tap into data from Oracle EBS, Microsoft Dynamics, Computron
            Financials etc
          </p>
        </div>
      </div>
    </div>
  );
}
