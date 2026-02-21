import React from 'react';
import { useGoBack } from '../App';

interface BackButtonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function BackButton({ className = '', style = {} }: BackButtonProps) {
  const goBack = useGoBack();

  return (
    <button
      onClick={goBack}
      className={`group flex items-center justify-center rounded-full transition-all duration-300 ${className}`}
      style={{
        backgroundColor: '#0f8987',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        width: '40px',
        height: '40px',
        fontSize: '20px',
        fontFamily: 'wdt-ext, sans-serif',
        ...style
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#33a9b1';
        e.currentTarget.style.transform = 'translateX(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#0f8987';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      ←
    </button>
  );
}