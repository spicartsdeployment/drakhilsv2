import React from 'react';

interface StableSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * StableSection - A wrapper component to prevent horizontal scrolling
 * and ensure stable, non-shifting layout
 */
export function StableSection({ children, className = '', style = {}, id }: StableSectionProps) {
  return (
    <section 
      id={id}
      className={className}
      style={{
        ...style,
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
        position: 'relative'
      }}
    >
      {children}
    </section>
  );
}
