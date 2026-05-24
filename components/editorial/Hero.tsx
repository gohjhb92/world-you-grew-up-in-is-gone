"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const routePaths = [
  "M105 272 C248 166 421 152 606 244",
  "M185 333 C342 241 528 260 720 148",
  "M118 174 C296 247 472 340 694 302",
  "M270 116 C390 190 512 198 638 150"
];

export function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden bg-[#050607]">
      <HeroBackground />

      <div className="editorial-container relative z-10 flex min-h-screen flex-col justify-between py-7 md:py-10">
        <motion.header
          className="flex items-center justify-between gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-paper/45" />
            <span className="micro-label">Geopolitical editorial</span>
          </div>
          <span className="micro-label hidden text-paper/45 sm:inline">Scroll to enter the new order</span>
        </motion.header>

        <div className="max-w-7xl py-16 md:py-24">
          <motion.p
            className="mb-8 max-w-2xl font-serif text-2xl leading-tight text-paper/84 md:text-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            You were told history had ended. It hadn&apos;t.
          </motion.p>

          <motion.h1
            className="hero-title max-w-6xl text-paper"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            The World You Grew Up In Is Gone
          </motion.h1>

          <motion.div
            className="mt-9 flex flex-col gap-5 md:mt-12 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-2xl font-serif text-2xl leading-snug text-paper/68 md:text-5xl">
              The End of the Liberal World Order
            </p>
            <div className="hidden max-w-sm border-l border-paper/18 pl-5 text-sm leading-6 text-muted md:block">
              <span className="micro-label mb-3 block text-amber/80">Opening frame</span>
              <span>
                Free trade, cheap goods, just-in-time supply chains, open markets, and American unipolar power were
                not the end of history. They were a temporary settlement.
              </span>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#world-comparison"
          className="group mb-2 flex w-fit items-center gap-4 text-sm text-paper/70 transition hover:text-paper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <span className="relative grid h-12 w-12 place-items-center rounded-full border border-paper/18">
            <span className="absolute h-12 w-12 animate-scroll-pulse rounded-full border border-paper/12" />
            <ArrowDown size={17} className="transition group-hover:translate-y-0.5" />
          </span>
          <span className="micro-label">Begin</span>
        </motion.a>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050607_0%,#080b0d_48%,#050607_100%)]" />
      <div className="absolute inset-0 hero-noise opacity-[0.18]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(238,242,237,.026)_1px,transparent_1px),linear-gradient(90deg,rgba(238,242,237,.026)_1px,transparent_1px)] bg-[size:86px_86px]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[76vw] max-h-[940px] min-h-[520px] w-[76vw] min-w-[520px] max-w-[940px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-paper/8"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[54vw] max-h-[700px] min-h-[360px] w-[54vw] min-w-[360px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 620" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="routeGradient" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(96,213,220,0)" />
            <stop offset="45%" stopColor="rgba(238,242,237,0.34)" />
            <stop offset="100%" stopColor="rgba(242,184,75,0)" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="rgba(238,242,237,.07)" strokeWidth="1">
          <ellipse cx="452" cy="315" rx="342" ry="170" />
          <ellipse cx="452" cy="315" rx="260" ry="128" />
          <ellipse cx="452" cy="315" rx="178" ry="86" />
          <path d="M452 82 C382 182 382 448 452 548" />
          <path d="M452 82 C522 182 522 448 452 548" />
          <path d="M154 315 H748" />
        </g>
        <g fill="none" stroke="url(#routeGradient)" strokeWidth="1.2">
          {routePaths.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              strokeDasharray="6 12"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2.2, delay: 0.4 + index * 0.22, ease: "easeOut" }}
            />
          ))}
        </g>
        <g>
          {[
            [184, 333],
            [606, 244],
            [720, 148],
            [270, 116],
            [694, 302]
          ].map(([cx, cy], index) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="3.5"
              fill={index % 2 ? "#f2b84b" : "#60d5dc"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0.35, 1, 0.45], scale: 1 }}
              transition={{ duration: 3.4, delay: 0.8 + index * 0.18, repeat: Infinity, repeatType: "reverse" }}
            />
          ))}
        </g>
      </svg>

      <motion.div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-paper/[.055] to-transparent"
        animate={{ y: ["-40%", "760%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_0%,rgba(5,6,7,.38)_48%,#050607_86%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050607] to-transparent" />
    </div>
  );
}
