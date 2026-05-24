"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-50 h-px w-full origin-left bg-amber"
      style={{ scaleX }}
    />
  );
}
