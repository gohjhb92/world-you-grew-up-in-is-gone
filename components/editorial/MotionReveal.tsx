"use client";

import { motion } from "framer-motion";
import { editorialReveal } from "@/lib/motion";

export function MotionReveal({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={editorialReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
    >
      {children}
    </motion.div>
  );
}
