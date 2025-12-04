"use client";

import { motion } from "framer-motion";

export default function ShowreelSection() {
  return (
    <section className="w-full bg-background py-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-21/9 md:aspect-21/8 rounded-2xl overflow-hidden bg-black shadow-2xl"
        >
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
             <h2 className="font-heading text-white/80 text-4xl md:text-6xl font-bold tracking-tighter mix-blend-overlay">
               SHOWREEL 2024
             </h2>
          </div>
          
          {/* NOTE: Put your video file in the public folder, e.g., public/videos/showreel.mp4
            Then change src below to "/videos/showreel.mp4"
          */}
          <video 
            className="w-full h-full object-cover opacity-80"
            autoPlay 
            muted 
            loop 
            playsInline
            // src="/videos/showreel.mp4" 
            poster="https://placehold.co/1920x800/111/333?text=Showreel+Placeholder"
          />
        </motion.div>
      </div>
    </section>
  );
}