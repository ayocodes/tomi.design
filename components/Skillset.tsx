"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const skills = [
  "Motion Graphics & Animation",
  // "Kinetic Typography",
  "Commercial & Promotional Video",
  "Explainer Videos",
  "Long & Short Form Editing",
  "Color Grading & Finishing",
];

const software = [
  { name: "DaVinci Resolve", logo: "/logo/davinci.png" },
  { name: "Blender", logo: "/logo/blender.png" },
  { name: "Figma", logo: "/logo/figma.png" },
];

export default function SkillsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="font-heading text-4xl md:text-6xl text-text-primary mb-4 text-center">
            Tools I Use
          </h2>

          <div className="flex justify-center items-center gap-12 md:gap-20 flex-wrap">
            {software.map((tool, index) => (
              <ToolCircle key={tool.name} tool={tool} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skills Section - Responsive Flexbox Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient background container */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-orange-400 via-pink-400 via-purple-400 to-blue-500 p-6 md:p-12 lg:p-16">
            {/* Floating stars/sparkles */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-8 left-8 text-white text-xl md:text-2xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-20 right-12 text-white text-lg md:text-xl"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-16 left-16 text-white text-base md:text-lg"
            >
              ✦
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute bottom-24 right-24 text-white text-sm"
            >
              ●
            </motion.div>

            {/* Heading - Top on mobile, center on large screens */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-8 lg:mb-12 relative z-10"
            >
              WHAT I DO
            </motion.h2>

            {/* Skills in flexbox container with space-between */}
            <div className="relative z-10 flex flex-wrap justify-between gap-4 md:gap-6 mx-4 md:mx-8">
              {skills.map((skill, index) => (
                <SkillBadge
                  key={skill}
                  skill={skill}
                  index={index}
                  isHovered={hoveredIndex === index}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ToolCircle({
  tool,
  index,
}: {
  tool: { name: string; logo: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ scale: 1.15 }}
      className="relative group cursor-pointer"
    >
      {/* Animated border gradient (shows on hover) */}
      {/* <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24, #ff6b6b)",
          padding: "3px",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-background rounded-full" />
      </motion.div> */}

      {/* Circle container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40  flex flex-col items-center justify-center overflow-hidden group-hover:border-transparent transition-colors duration-300">

        <Image
          src={tool.logo}
          alt={tool.name}
          width={80}
          height={80}
          className="object-contain"
        />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
        className="text-center mt-4 font-body text-sm md:text-base text-text-secondary group-hover:text-text-primary transition-colors duration-300"
      >
        {tool.name}
      </motion.p>
      </div>

      {/* Tool name below */}
    </motion.div>
  );
}

function SkillBadge({
  skill,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  skill: string;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="flex-shrink-0"
    >
      <motion.div
        whileHover={{
          scale: 1.1,
          rotateZ: Math.random() > 0.5 ? 2 : -2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        className="relative group cursor-default"
      >
        {/* Text container with black background */}
        <motion.div
          className="bg-black px-3 py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 relative overflow-hidden"
          animate={{
            backgroundColor: isHovered ? "#D4A373" : "#000000",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            className="font-heading font-bold text-white text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide relative z-10 block whitespace-nowrap"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.span>

          {/* Underline effect */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-white"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
          />

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Shadow effect */}
        <motion.div
          className="absolute inset-0 bg-black -z-10"
          animate={{
            x: isHovered ? 4 : 2,
            y: isHovered ? 4 : 2,
            opacity: isHovered ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
}