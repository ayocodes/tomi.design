"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="min-h-screen flex items-center justify-center px-12 lg:px-32 py-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">


        {/* Main content */}
        <div className="space-y-0 md:space-y-1">
          {/* TOMI - with cursive T and bouncing O */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading leading-none flex items-baseline relative">
              <span className="font-cursive text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-primary-accent italic absolute -left-4 sm:-left-6 md:-left-10 lg:-left-10 z-10">
                T
              </span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text-primary font-bold tracking-tight inline-block pl-12 sm:pl-16 md:pl-20 lg:pl-24"
              >
                O
              </motion.span>
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-text-primary font-bold tracking-tight">
                MI
              </span>
            </h1>
          </motion.div>

          {/* OMOTOLA and IS A on same line */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="flex items-baseline justify-between gap-4 flex-wrap"
          >
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary leading-none tracking-tight">
              OMOTOLA
            </h2>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary leading-none tracking-tight"
            >
              IS A
            </motion.h2>
          </motion.div>

          {/* MOTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex justify-end"
          >
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary leading-none tracking-tight">
              MOTION
            </h2>
          </motion.div>

          {/* DESIGNER with cursive R */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex justify-end items-baseline"
          >
            <h2 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-text-primary leading-none tracking-tight flex items-baseline">
              <span>DESIGNE</span>
              <span className="font-cursive text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] text-primary-accent italic -ml-2 md:-ml-3">
                R
              </span>
            </h2>
          </motion.div>

          {/* CTA Button - grows on hover with arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex justify-center pt-6 md:pt-10 rounded-full"
          >
            <Link
              href="/work"
              className="group relative inline-flex items-center bg-button-bg text-button-text px-8 py-4 font-heading font-semibold text-base md:text-lg transition-all duration-300 overflow-hidden hover:px-14 rounded-full"
            >
              <motion.div
                className="absolute inset-0 bg-primary-accent "
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <span className="relative z-10 whitespace-nowrap">VIEW MY WORK</span>
              <span className="relative z-10 text-xl ml-0 inline-block w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 overflow-hidden">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Decorative blur elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: 0.2 
          }}
          transition={{ 
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { delay: 0.8, duration: 1 }
          }}
          className="absolute top-1/4 left-0 w-32 h-32 md:w-48 md:h-48 bg-primary-accent rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: 0.15 
          }}
          transition={{ 
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            },
            opacity: { delay: 1.2, duration: 1 }
          }}
          className="absolute bottom-1/4 right-0 w-40 h-40 md:w-64 md:h-64 bg-primary-accent rounded-full blur-3xl pointer-events-none"
        />
      </div>
    </section>
  );
}