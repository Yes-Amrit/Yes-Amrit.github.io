import React, { useRef, useCallback, useEffect, type ReactNode } from 'react';
import './BorderGlow.css';

interface BorderGlowProps {
  children?: ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
}

const BorderGlow = ({
  children,
  className = '',
  edgeSensitivity = 30,
  glowColor = '40 80 80',
  backgroundColor = '#060010',
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ['#c084fc', '#f472b6', '#38bdf8'],
}: BorderGlowProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={`border-glow-container ${className} ${animated ? 'animated' : ''}`}
      style={{
        '--glow-color': glowColor,
        '--bg-color': backgroundColor,
        '--border-radius': `${borderRadius}px`,
        '--glow-radius': `${glowRadius}px`,
        '--glow-intensity': glowIntensity,
        '--cone-spread': `${coneSpread}px`,
        '--colors': colors.join(', '),
      } as React.CSSProperties}
    >
      <div className="border-glow-content">{children}</div>
    </div>
  );
};

export default BorderGlow;
