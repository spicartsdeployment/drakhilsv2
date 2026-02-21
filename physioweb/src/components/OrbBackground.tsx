import React from 'react';
import { motion } from 'motion/react';

interface Orb {
  id: number;
  size: number;
  color: string;
  initialX: string;
  initialY: string;
  duration: number;
  delay: number;
  blur: number;
  opacity: number;
}

export function OrbBackground() {
  // Generate 12 orbs with varying properties
  const orbs: Orb[] = [
    // Large orbs - center torso (increased opacity for visibility)
    { id: 1, size: 180, color: 'rgba(193, 245, 241, 0.4)', initialX: '50%', initialY: '35%', duration: 8, delay: 0, blur: 30, opacity: 0.4 },
    { id: 2, size: 200, color: 'rgba(15, 137, 135, 0.3)', initialX: '48%', initialY: '40%', duration: 10, delay: 1, blur: 35, opacity: 0.3 },
    
    // Medium orbs - chest area
    { id: 3, size: 120, color: 'rgba(193, 245, 241, 0.45)', initialX: '45%', initialY: '30%', duration: 7, delay: 0.5, blur: 25, opacity: 0.45 },
    { id: 4, size: 140, color: 'rgba(0, 200, 200, 0.35)', initialX: '55%', initialY: '32%', duration: 9, delay: 1.5, blur: 28, opacity: 0.35 },
    { id: 5, size: 100, color: 'rgba(255, 255, 255, 0.25)', initialX: '52%', initialY: '28%', duration: 6, delay: 2, blur: 20, opacity: 0.25 },
    
    // Medium orbs - spine area
    { id: 6, size: 130, color: 'rgba(193, 245, 241, 0.35)', initialX: '50%', initialY: '45%', duration: 8.5, delay: 0.8, blur: 26, opacity: 0.35 },
    { id: 7, size: 110, color: 'rgba(15, 137, 135, 0.3)', initialX: '49%', initialY: '50%', duration: 7.5, delay: 1.2, blur: 24, opacity: 0.3 },
    
    // Small orbs - pelvic area
    { id: 8, size: 90, color: 'rgba(193, 245, 241, 0.4)', initialX: '48%', initialY: '55%', duration: 6.5, delay: 0.3, blur: 20, opacity: 0.4 },
    { id: 9, size: 80, color: 'rgba(0, 200, 200, 0.35)', initialX: '52%', initialY: '58%', duration: 7, delay: 1.8, blur: 18, opacity: 0.35 },
    
    // Accent orbs - small floaters
    { id: 10, size: 70, color: 'rgba(255, 255, 255, 0.2)', initialX: '46%', initialY: '38%', duration: 5.5, delay: 2.5, blur: 15, opacity: 0.2 },
    { id: 11, size: 85, color: 'rgba(193, 245, 241, 0.3)', initialX: '54%', initialY: '42%', duration: 6.8, delay: 1.3, blur: 18, opacity: 0.3 },
    { id: 12, size: 75, color: 'rgba(15, 137, 135, 0.25)', initialX: '51%', initialY: '48%', duration: 6.2, delay: 0.7, blur: 16, opacity: 0.25 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, overflow: 'hidden', width: '100%', maxWidth: '100%' }}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute"
          style={{
            left: orb.initialX,
            top: orb.initialY,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ 
            scale: 1,
            opacity: 0 
          }}
          animate={{
            scale: [1, 1.15, 0.95, 1],
            opacity: [orb.opacity * 0.5, orb.opacity, orb.opacity * 0.7, orb.opacity],
            x: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle at center, ${orb.color} 0%, transparent 70%)`,
              filter: `blur(${orb.blur}px)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}