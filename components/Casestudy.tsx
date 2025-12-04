"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category?: string;
  thumbnail: string;
  youtubeId: string;
  role: string;
  client: string;
  year: string;
  tools: string[];
  description: string;
  styleframes?: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "CodeXero Introduction Video",
    category: "Motion Video",
    thumbnail: "/code/9.png",
    youtubeId: "FgS9KqyGbIs",
    role: "Illustrator, Animator",
    client: "CodeXero - Bounty",
    year: "2025",
    tools: ["Figma", "Davinci Resolve", "Lottie"],
    description:
      "The challenge was to explain a prompt-based dApp builder in under 90 seconds while keeping it energetic and accessible to both crypto natives and newcomers. We moved away from typical Web3 explainer aesthetics and leaned into CodeXero's brand palette with dynamic motion design to create visual momentum. The process involved 1 week of styleframing to establish the kinetic typography, glow effects, and transition system before moving into full animation. The goal was to make blockchain development feel immediate and exciting—not technical or intimidating.",
    styleframes: Array.from({ length: 28 }, (_, i) => `/code/${i + 1}.png`),
  },
  {
    id: "cs2",
    title: "BoundlessPay Hype Video",
    category: "Motion Design",
    thumbnail:
      "/thumbnails/boundless.png",
    youtubeId: "4ge2oFFlBbU?si",
    role: "Lead Animator",
    client: "BoundlessPay - Bounty",
    year: "2025",
    tools: ["Davinci Resolve", "Fusion", "Figma"],
    description:
      "I wanted the video to feel dynamic while clearly representing the problem the brand solves and the solution it provides. I showcased the app’s key features in a fast-paced, engaging way that keeps viewers interested while also educating them.",
  },
];

const ScrollLock = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return null;
};

export default function WorkSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section className="bg-background py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-heading text-5xl md:text-6xl text-text-primary mb-4">
            Featured Works
          </h2>
          <div className="h-1 w-24 bg-primary-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedStudy(study)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-border mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />

                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="text-black w-8 h-8" />
                  </div>
                </div>

                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  fill
                  unoptimized
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-heading text-3xl text-text-primary mb-2 group-hover:text-primary-accent transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-text-secondary font-body">
                    {study.category}
                  </p>
                </div>
                <span className="text-text-secondary text-sm border border-border px-3 py-1 rounded-full">
                  {study.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStudy && (
          <>
            <ScrollLock />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto"
              onClick={() => setSelectedStudy(null)}
            >
              <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="bg-background w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-black text-black hover:text-white border border-transparent hover:border-border p-2 rounded-full transition-all duration-300"
                  >
                    <X size={24} />
                  </button>

                  <div className="w-full aspect-video bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedStudy.youtubeId}?autoplay=1&mute=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="p-8 md:p-12">
                    <div className="border-b border-border pb-8 mb-8">
                      <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-8">
                        {selectedStudy.title} Case Study
                      </h2>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                          <h4 className="font-heading text-sm text-text-secondary uppercase tracking-wider mb-2">
                            Role
                          </h4>
                          <p className="text-text-primary font-medium">
                            {selectedStudy.role}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading text-sm text-text-secondary uppercase tracking-wider mb-2">
                            Client
                          </h4>
                          <p className="text-text-primary font-medium">
                            {selectedStudy.client}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading text-sm text-text-secondary uppercase tracking-wider mb-2">
                            Year
                          </h4>
                          <p className="text-text-primary font-medium">
                            {selectedStudy.year}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-heading text-sm text-text-secondary uppercase tracking-wider mb-2">
                            Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedStudy.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-xs bg-gray-100 px-2 py-1 rounded text-text-primary"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-12">
                      <h3 className="font-heading text-2xl text-text-primary mb-4">
                        The Process
                      </h3>
                      <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                        {selectedStudy.description}
                      </p>
                    </div>

                    {(selectedStudy?.styleframes?.length ?? 0) > 1 && (
                      <div>
                        <h3 className="font-heading text-2xl text-text-primary mb-6">
                          Styleframes
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {selectedStudy?.styleframes?.map((frame, index) => (
                            <div
                              key={index}
                              className="rounded-lg overflow-hidden bg-gray-100"
                            >
                              <Image
                                src={frame}
                                alt={`Styleframe ${index + 1}`}
                                width={800}
                                height={450}
                                unoptimized
                                className="w-full h-auto hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
