"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AboutPage = () => {
  const [activeImage, setActiveImage] = useState(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-16 md:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="font-heading text-5xl md:text-6xl font-bold text-text-primary"
            >
              Hi, I am Tomi ✨
            </motion.h1>

            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              I’m a motion designer and video editor with an eye for rhythm,
              emotion, and clean storytelling. I like turning ideas into visuals
              that feel intentional and alive.
            </motion.p>
            <motion.p
              variants={itemVariants}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed"
            >
              I got into motion design by experimenting out of curiosity, and it
              became something I genuinely enjoy shaping pacing, movement, and
              mood in a way people can feel.
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/me/tomi.png"
                alt="Tomi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

 

      {/* Beyond 9-5 Section */}
      <motion.section
        className="w-full px-6 py-16 pb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-12 max-w-6xl mx-auto"
        >
          beyond my 9-5
        </motion.h2>

        {/* Image Grid */}
        <div className="flex gap-3 md:gap-4 justify-center items-center overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setActiveImage(index)}
              className={`relative h-[400px] md:h-[500px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ${
                activeImage === index
                  ? "w-[200px] md:w-[280px]"
                  : "w-[120px] md:w-[140px]"
              }`}
            >
              <Image
                src={`/me/${index}.png`}
                alt={`Beyond 9-5 image ${index}`}
                fill
                className={`object-cover transition-all duration-500 ${
                  activeImage === index ? "" : "grayscale"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Optional: Add closing text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary text-lg italic">
            When I'm not editing or designing, you'll find me exploring new
            hobbies,
            <br />
            capturing moments, and living beyond the screen.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
