'use client';
import React, { useEffect, useState } from 'react';

const COLORS = [
  'bg-blue-400/30',
  'bg-orange-300/30',
  'bg-purple-400/30',
  'bg-pink-300/30',
  'bg-green-300/30',
  'bg-yellow-300/30',
  'bg-cyan-300/30',
  'bg-red-300/30',
];

function getRandomBubble() {
  return {
    size: Math.floor(Math.random() * 60) + 60, // 60-120px
    left: `${Math.floor(Math.random() * 85) + 5}%`, // 5%-90%
    delay: `${(Math.random() * 3).toFixed(2)}s`,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    duration: `${(Math.random() * 4 + 6).toFixed(2)}s`, // 6-10s
  };
}

const BUBBLE_COUNT = 10;

type Bubble = {
  size: number;
  left: string;
  delay: string;
  color: string;
  duration: string;
};

export default function BgAnimation() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(Array.from({ length: BUBBLE_COUNT }, getRandomBubble));
  }, []);

  return (
    <div className="inset-0 -z-10 overflow-hidden pointer-events-none w-screen h-screen absolute top-0">
      {bubbles.map((bubble, idx) => (
        <span
          key={idx}
          className={`
            absolute
            ${bubble.color}
            rounded-full
            blur-md
            animate-bubble
          `}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: '-120px',
            animationDelay: bubble.delay,
            animationDuration: bubble.duration,
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
            filter: hue-rotate(0deg);
          }
          50% {
            opacity: 0.4;
            filter: hue-rotate(60deg);
            transform: translateY(-60vh) scale(1.1);
          }
          100% {
            transform: translateY(-100vh) scale(0.9);
            opacity: 0;
            filter: hue-rotate(120deg);
          }
        }
        .animate-bubble {
          animation-name: bubble;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
