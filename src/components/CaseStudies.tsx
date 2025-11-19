import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    id: "asmakam",
    title: "Asmakam Ayurveda Hospital",
    description:
      "Rebranding their digital presence with modern Ayurveda visuals, high-performing reels, and an improved engagement strategy.",
    image: "/images/image1.jpg",
    color: "from-emerald-500 to-teal-500",
    lightBg: "from-emerald-50 to-teal-50",
  },
  {
    id: "truassist",
    title: "TruAssist Tech",
    description:
      "Showcasing mobility-assist wheelchair technology with emotional storytelling and powerful themed visual design.",
    image: "/images/image2.jpg",
    color: "from-blue-500 to-cyan-500",
    lightBg: "from-blue-50 to-cyan-50",
  },
  {
    id: "srivanigirlshighschool",
    title: "Sri Vani Girls High School",
    description:
      "Building a signature brand voice, reel style, and trending content strategy that improved brand recall.",
    image: "/images/image3.jpg",
    color: "from-purple-500 to-pink-500",
    lightBg: "from-purple-50 to-pink-50",
  },
  {
    id: "View Other works",
    title: "view other works",
    description:
      "Designing premium magazine layouts, editorials, and digital assets that elevated reader experience.",
    image: "/images/image4.jpg",
    color: "from-orange-500 to-red-500",
    lightBg: "from-orange-50 to-red-50",
  },
];

interface CaseStudiesProps {
  onNavigate: (page: string) => void;
}

export function CaseStudies({ onNavigate }: CaseStudiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-slate-100 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 tracking-wider uppercase text-sm px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Case Studies
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Real brands. Real growth. Real results.
          </motion.p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 cursor-pointer border border-white/60"
                onClick={() => onNavigate(`case-study-${study.id}`)}
              >
                {/* Image Section */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  
                  {/* Decorative Corner */}
                  <motion.div
                    className={`absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs shadow-lg`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <span className={`bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                      Featured
                    </span>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 md:p-8">
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${study.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {study.description}
                    </p>
                    
                    {/* CTA Button */}
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ x: 5 }}
                    >
                      <Button
                        variant="ghost"
                        className="group/btn text-purple-600 hover:text-purple-700 p-0 hover:bg-transparent"
                      >
                        View Full Case Study
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${study.color}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
