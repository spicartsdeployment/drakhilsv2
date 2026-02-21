import React from 'react';

interface RoundedArrowProps {
  size?: number;
  color?: string;
  className?: string;
}

export function RoundedArrow({ size = 24, color = 'currentColor', className = '' }: RoundedArrowProps) {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        fontFamily: 'wdt-ext',
        fontSize: size,
        color: color,
        lineHeight: 1,
      }}
    >
      →
    </span>
  );
}
