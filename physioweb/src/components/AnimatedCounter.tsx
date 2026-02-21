import React from 'react';

interface AnimatedCounterProps {
  start?: number;
  end?: number;
  value?: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export function AnimatedCounter({ 
  start, 
  end, 
  value,
  duration = 2000, 
  suffix = '',
  decimals = 0
}: AnimatedCounterProps) {
  // Support both old API (start/end) and new API (value)
  const startValue = start !== undefined ? start : 0;
  const endValue = end !== undefined ? end : (value !== undefined ? value : 0);
  
  const [count, setCount] = React.useState(startValue);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = startValue;
          const increment = (endValue - startValue) / (duration / 50);
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 50);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, startValue, endValue, duration]);

  // Format the number based on decimals
  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return <div ref={ref}>{formattedCount}{suffix}</div>;
}
