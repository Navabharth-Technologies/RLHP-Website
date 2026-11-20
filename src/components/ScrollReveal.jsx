import React, { useState, useEffect, useRef } from 'react';

/**
 * ScrollReveal:
 * Wraps any card, text block, or section to smoothly reveal it when scrolled into view.
 * Supports typewriter-like clip reveal or smooth staggered slide-up with custom delay.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 750,
  typewriter = false,
  tag = 'div',
  threshold = 0.05,
  rootMargin = '50px 0px 50px 0px',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    // Check if element is already in viewport or above it
    const rect = el.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const Tag = tag;

  if (typewriter) {
    return (
      <Tag
        ref={domRef}
        className={`scroll-reveal-typewriter ${isVisible ? 'revealed' : ''} ${className}`}
        style={{
          '--delay': `${delay}ms`,
          '--duration': `${duration}ms`,
          ...props.style
        }}
        {...props}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      ref={domRef}
      className={`scroll-reveal-item ${isVisible ? 'revealed' : ''} ${className}`}
      style={{
        '--delay': `${delay}ms`,
        '--duration': `${duration}ms`,
        ...props.style
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
