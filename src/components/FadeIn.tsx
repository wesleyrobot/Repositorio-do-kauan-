"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number; // ms
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const transforms: Record<string, string> = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0,0)" : transforms[direction],
        transition: `opacity 0.6s ease, transform 0.6s ease`,
      }}
    >
      {children}
    </div>
  );
}
