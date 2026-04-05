import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';
import './ScrambledText.css';

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = '.:',
  className = '',
  style = {},
  children
}: ScrambledTextProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [chars, setChars] = useState<string[]>([]);
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const text = typeof children === 'string' ? children : children?.toString() || '';
    setChars(text.split(''));
  }, [children]);

  useEffect(() => {
    if (!rootRef.current || chars.length === 0) return;

    const charElements = Array.from(rootRef.current.querySelectorAll('.char')) as HTMLSpanElement[];
    charsRef.current = charElements;

    const handleMove = (e: PointerEvent) => {
      charsRef.current.forEach((c, i) => {
        const { left, top, width, height } = c.getBoundingClientRect();
        const dx = e.clientX - (left + width / 2);
        const dy = e.clientY - (top + height / 2);
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          const originalText = chars[i];
          const obj = { value: 0 };
          
          // Scramble animation: once hit, it scrambles for 'duration' seconds
          gsap.to(obj, {
            value: 1,
            duration: duration, // Fixed duration for a consistent effect
            ease: 'none',
            overwrite: true,
            onUpdate: () => {
              if (obj.value < 1) {
                // Scramble more intensely at the start, then settle
                const isScrambled = Math.random() > obj.value * (1 / speed);
                if (isScrambled) {
                  c.innerText = scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
                } else {
                  c.innerText = originalText;
                }
              } else {
                c.innerText = originalText;
              }
            },
            onComplete: () => {
              c.innerText = originalText;
            }
          });
        }
      });
    };

    const el = rootRef.current;
    el.addEventListener('pointermove', handleMove as any);

    return () => {
      el.removeEventListener('pointermove', handleMove as any);
    };
  }, [radius, duration, speed, scrambleChars, chars]);

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p className="m-0 p-0 leading-none inline-block">
        {chars.map((char, i) => (
          <span key={i} className="char inline-block whitespace-pre" data-content={char}>
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ScrambledText;
