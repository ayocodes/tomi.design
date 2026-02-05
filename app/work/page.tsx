"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

// Work data structure
interface Work {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl: string;
  category: string;
  featured?: boolean;
  hasCaseStudy: boolean;
  caseStudy?: {
    description: string;
    role: string;
    client?: string;
    tools: string[];
    year: string;
  };
}

// works data
const works: Work[] = [
  {
    id: "10",
    title: "Fast-Paced Video Portfolio Edit",
    youtubeId: "BHPnx1aP-Dc",
    thumbnailUrl: "https://img.youtube.com/vi/BHPnx1aP-Dc/maxresdefault.jpg",
    category: "Motion Design",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      description:
        "This personal project was created as a self-directed challenge to improve my speed, precision, and creative decision-making in fast-paced video editing. The goal was to produce a high-energy video portfolio piece that showcases my editing style and communicates my value as a video editor to potential clients. It served both as a technical exercise and a personal branding tool.",
      role: "Motion Designer",
      tools: ["DaVinci Resolve"],
      year: "2026",
    },
  },
  {
    id: "9",
    title: "Brand Structure Explainer – Corporate Motion Design",
    youtubeId: "YFwH5oOK_48",
    thumbnailUrl: "https://img.youtube.com/vi/YFwH5oOK_48/maxresdefault.jpg",
    category: "Motion Design",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      description:
        "This project was my first collaboration with a corporate client and focused on visually explaining the relationship between its parent brand and three subsidiary companies. I led the full creative process, from concept development and storyboard creation in Figma to final animation and sound design. The motion piece was designed to clearly communicate each subsidiary’s role while reinforcing the parent company’s identity through a cohesive visual system and licensed background music.",
      role: "Motion Designer",
      tools: ["DaVinci Resolve", "Figma"],
      year: "2026",
    },
  },

  {
    id: "8",
    title: "Talking Head Video Edit",
    youtubeId: "iDz1N-y4aI4",
    thumbnailUrl: "https://img.youtube.com/vi/iDz1N-y4aI4/maxresdefault.jpg",
    category: "Video Editing",
    featured: false,
    hasCaseStudy: true,
    caseStudy: {
      description:
        "This project focused on transforming a raw recorded talking-head video into a polished, engaging final product. I handled the full post-production process, including precise cutting, professional color grading, motion graphics, music selection, and subtitle design. The goal was to enhance clarity, visual appeal, and viewer retention while maintaining the speaker’s authenticity.",
      role: "Video Editor",
      tools: ["DaVinci Resolve"],
      year: "2026",
    },
  },

  {
    id: "7",
    title: "Crystalrohr - Pitch Deck",
    youtubeId: "mx1dCwpDK3A",
    thumbnailUrl: "thumbnails/crystalrohr.png",
    category: "Motion Design",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      description:
        "The challenge was to translate a complex 8-layer video infrastructure protocol into a clear, compelling narrative. I pivoted away from complex transitions to a clean, minimalist white aesthetic, allowing the data concepts to stand out without visual clutter. Once the direction was set, I executed the script, voiceover, and full animation in a single 24-hour sprint to meet a critical deadline.",
      role: "Motion Designer",
      tools: ["DaVinci Resolve", "Figma"],
      year: "2025",
    },
  },
  {
    id: "6",
    title: "ToothFairyAI",
    youtubeId: "6D4lGFs-bks",
    thumbnailUrl: "thumbnails/toothfairy.png",
    category: "Motion Design",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      description:
        "This project was a study in visual interpretation. Collaborating with a copywriter who provided the script, my role was to translate their narrative into a visual language. The challenge was to ensure the motion design elevated the message without overpowering it, demonstrating my ability to execute a specific vision within a creative team.",
      role: "Motion Designer",
      tools: ["DaVinci Resolve", "Figma"], // Add other tools if used
      year: "2025",
    },
  },
  {
    id: "5",
    title: "CodeXero",
    youtubeId: "FgS9KqyGbIs",
    thumbnailUrl: "/code/9.png",
    category: "Motion Design",
    featured: true,
    hasCaseStudy: true,
    caseStudy: {
      description:
        "The challenge was to explain a prompt-based dApp builder in under 90 seconds while keeping it energetic and accessible to both crypto natives and newcomers. We avoided typical Web3 aesthetics and leaned into CodeXero’s brand palette with dynamic motion design. After a week of styleframing to define the typography, glow effects, and transitions, we moved into full animation—aiming to make blockchain development feel immediate and exciting, not intimidating.",
      role: "Motion Designer",
      tools: ["Davinci Resolve", "Figma"],
      year: "2025",
    },
  },
  {
    id: "4",
    title: "BoundlessPay",
    youtubeId: "4ge2oFFlBbU?si",
    thumbnailUrl: "thumbnails/boundless.png",
    category: "Motion Design",
    hasCaseStudy: false,
  },
  {
    id: "3",
    title: "Verxio Protocol",
    youtubeId: "rj80YSt7v1I?si",
    thumbnailUrl: "thumbnails/verxio.png",
    category: "Motion Design",
    featured: true,
    hasCaseStudy: false,
  },
  {
    id: "2",
    title: "IkonShop",
    youtubeId: "DJKeT6liLFc?si",
    thumbnailUrl: "thumbnails/ikon.png",
    category: "Motion Design",
    hasCaseStudy: false,
  },
  {
    id: "1",
    title: "AmpPay",
    youtubeId: "PK3Pg2Tawqg?si",
    thumbnailUrl: "thumbnails/amppay.png",
    category: "Motion Design",
    hasCaseStudy: false,
  },
];

// Video Card Component
const VideoCard: React.FC<{ work: Work; onClick: () => void }> = ({
  work,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-lg bg-button-bg aspect-video"
      >
        {/* Thumbnail */}
        <img
          src={work.thumbnailUrl}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="bg-primary-accent rounded-full p-4"
          >
            <Play className="w-8 h-8 text-button-bg fill-button-bg" />
          </motion.div>
        </div>

        {/* Case Study Badge */}
        {work.hasCaseStudy && (
          <div className="absolute top-3 right-3 bg-primary-accent text-button-bg text-xs font-medium px-3 py-1 rounded-full">
            Case Study
          </div>
        )}
      </motion.div>

      {/* Title & Category */}
      <div className="mt-4">
        <h3 className="font-heading text-lg font-semibold text-text-primary group-hover:text-primary-accent transition-colors">
          {work.title}
        </h3>
        <p className="text-sm text-text-secondary mt-1">{work.category}</p>
      </div>
    </motion.div>
  );
};

// Case Study Modal Component
const CaseStudyModal: React.FC<{ work: Work; onClose: () => void }> = ({
  work,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-background rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-button-bg/80 hover:bg-button-bg text-button-text rounded-full p-2 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Embed */}
        <div className="aspect-video w-full bg-black rounded-t-2xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${work.youtubeId}`}
            title={work.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Title & Category */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
                {work.title}
              </h2>
              <span className="inline-block bg-primary-accent/20 text-primary-accent text-sm font-medium px-3 py-1 rounded-full">
                {work.category}
              </span>
            </div>
          </div>

          {work.caseStudy && (
            <>
              {/* Description */}
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold text-text-primary mb-3">
                  About This Project
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {work.caseStudy.description}
                </p>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-background border border-border rounded-lg">
                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-2">
                    Role
                  </h4>
                  <p className="text-text-secondary">{work.caseStudy.role}</p>
                </div>

                {work.caseStudy.client && (
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary mb-2">
                      Client
                    </h4>
                    <p className="text-text-secondary">
                      {work.caseStudy.client}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-2">
                    Year
                  </h4>
                  <p className="text-text-secondary">{work.caseStudy.year}</p>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-text-primary mb-2">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work.caseStudy.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-button-bg text-button-text text-xs px-3 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Work Page Component
const WorkPage: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Motion Design", "Video Editing"];

  const filteredWorks =
    activeFilter === "All"
      ? works
      : works.filter((work) => work.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4">
            Works
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl">
            A collection of video editing and motion design projects
          </p>
        </motion.div>
      </section>

      {/* Filter Tags */}
      <section className="pb-12 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-7xl mx-auto flex gap-3 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                ? "bg-button-bg text-button-text"
                : "bg-transparent text-text-secondary border border-border hover:border-primary-accent hover:text-primary-accent"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Work Grid */}
      <section className="pb-24 px-6 md:px-12 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredWorks.map((work, index) => (
            <VideoCard
              key={index}
              work={work}
              onClick={() => setSelectedWork(work)}
            />
          ))}
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <CaseStudyModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkPage;
