import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudyHeroProps {
  clientName: string;
  description: string;
  image: string;
  logo: string;
  category: string;
  color: string;
}

export function CaseStudyHero({
  clientName,
  description,
  image,
  logo,
  category,
  color,
}: CaseStudyHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pt-20">
      {/* Animated Background */}
      <motion.div
        className={`absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br ${color} opacity-30 rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br ${color} opacity-20 rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-300">{category}</span>
            </motion.div>

            <div className="mb-8 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 flex items-center justify-center">
              <span className="text-white text-4xl">{logo}</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              {clientName}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={image}
                alt={clientName}
                className="w-full h-[600px] object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${color} opacity-20`} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
