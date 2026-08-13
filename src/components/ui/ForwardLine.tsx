'use client';

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';

export interface ForwardLineProps {
  d: string;
  viewBox?: string;
  className?: string;
  variant?: 'draw' | 'scroll' | 'interactive';
  progress?: MotionValue<number>;
  strokeWidth?: number;
  showEndArrow?: boolean;
  showNodes?: Array<{ x: number; y: number; active?: boolean }>;
  duration?: number;
  delay?: number;
}

export const ForwardLine: React.FC<ForwardLineProps> = ({
  d,
  viewBox = '0 0 1000 200',
  className = '',
  variant = 'draw',
  progress,
  strokeWidth = 1.5,
  showEndArrow = false,
  showNodes = [],
  duration = 1.2,
  delay = 0.2,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Internal scroll tracker if variant === 'scroll' and no external progress passed
  const { scrollYProgress: internalScrollProgress } = useScroll();
  const activeProgress = progress || internalScrollProgress;

  // Transform scroll progress to path length completion
  const scrollPathLength = useTransform(activeProgress, [0.1, 0.85], [0, 1]);

  return (
    <div className={`relative pointer-events-none w-full h-full ${className}`}>
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Subtle guide track behind the line */}
        <path
          d={d}
          stroke="#FF4B2B"
          strokeWidth={strokeWidth}
          strokeOpacity={0.12}
          strokeDasharray="4 6"
        />

        {/* Dynamic Living Orange Line */}
        {variant === 'scroll' ? (
          <motion.path
            d={d}
            stroke="#FF4B2B"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            style={{
              pathLength: shouldReduceMotion ? 1 : scrollPathLength,
            }}
          />
        ) : (
          <motion.path
            d={d}
            stroke="#FF4B2B"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: shouldReduceMotion ? 0 : duration,
              delay: shouldReduceMotion ? 0 : delay,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        )}

        {/* Strategic Vector Nodes */}
        {showNodes.map((node, idx) => (
          <g key={idx}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.active ? 4 : 2.5}
              fill="#FF4B2B"
              className="transition-all duration-300"
            />
            {node.active && (
              <circle
                cx={node.x}
                cy={node.y}
                r={8}
                stroke="#FF4B2B"
                strokeWidth={1}
                strokeOpacity={0.4}
                className="animate-ping origin-center"
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};