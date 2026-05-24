"use client";

import { motion } from "framer-motion";

export function ClosingScaffold() {
  const lines = [
    "The world you grew up in taught you trade would bring peace.",
    "That borders would matter less.",
    "That supply chains would always optimize.",
    "That democracy would expand.",
    "That America would remain unchallenged.",
    "That history had ended."
  ];

  return (
    <section id="closing-manifesto" className="relative min-h-[320vh] border-t border-paper/8">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-[#050607]">
        <div aria-hidden className="absolute inset-0 cinematic-grid opacity-20" />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[70vw] max-h-[920px] min-h-[440px] w-[70vw] min-w-[440px] max-w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/8" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050607] to-transparent" />

        <div className="editorial-container relative z-10 py-24">
          <p className="micro-label mb-12 text-amber/80">11 / Closing manifesto</p>

          <div className="space-y-8 md:space-y-10">
            {lines.map((line, index) => (
              <motion.p
                key={line}
                className="max-w-5xl font-serif text-3xl leading-tight text-paper/72 md:text-5xl"
                initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.78 }}
                transition={{ duration: 0.9, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-20 border-t border-paper/14 pt-12 md:mt-28 md:pt-16"
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.72 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-serif text-5xl leading-none text-amber md:text-7xl">History has returned.</p>
          </motion.div>

          <motion.div
            className="mt-20 md:mt-28"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.72 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-6xl font-serif text-5xl leading-[0.92] text-paper md:text-[7.2rem]">
              The world you grew up in is gone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
