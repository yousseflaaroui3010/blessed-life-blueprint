/**
 * FadeInSection — scroll-triggered fade-in-up animation wrapper.
 * Uses IntersectionObserver, triggers once.
 */
import { useInView } from "@/hooks/useInView";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeInSection({ children, className = "", delay = 0 }: Props) {
  const { ref, isVisible } = useInView(0.08);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
