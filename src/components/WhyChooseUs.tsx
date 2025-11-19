import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Lightbulb,
  Calendar,
  BarChart,
  Sparkles,
  Heart,
} from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Strategic + Creative Balance",
    description: "We merge data-driven insights with bold creative execution.",
    color: "from-yellow-500 to-orange-500",
    lightColor: "from-yellow-100/80 to-orange-100/80",
  },
  {
    icon: Calendar,
    title: "Consistent Monthly Support",
    description: "Reliable, ongoing partnership for sustained growth.",
    color: "from-blue-500 to-cyan-500",
    lightColor: "from-blue-100/80 to-cyan-100/80",
  },
  {
    icon: BarChart,
    title: "Results with Data Transparency",
    description: "Clear reporting and measurable outcomes every month.",
    color: "from-purple-500 to-pink-500",
    lightColor: "from-purple-100/80 to-pink-100/80",
  },
  {
    icon: Sparkles,
    title: "Unique Content Approach",
    description: "Stand out with original storytelling that resonates.",
    color: "from-emerald-500 to-teal-500",
    lightColor: "from-emerald-100/80 to-teal-100/80",
  },
  {
    icon: Heart,
    title: "Reliable, Professional, Dedicated Team",
    description: "We treat your brand like our own.",
    color: "from-red-500 to-pink-500",
    lightColor: "from-red-100/80 to-pink-100/80",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1.1, 1, 1.1],
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
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Why Brands Trust Us
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${reason.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Icon with Animation */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Pulse Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${reason.color}`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {reason.description}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      className={`mt-6 h-1 bg-gradient-to-r ${reason.color} rounded-full`}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          className="mt-16 md:mt-20 relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-10 md:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {/* Animated Background Orbs */}
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 text-center text-white">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-6 h-6" />
              <span className="text-sm uppercase tracking-wider">
                Ready to Transform Your Brand?
              </span>
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl mb-4">
              Let's Create Something Amazing Together
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              Join the brands that are already seeing exceptional results with
              our proven strategies and creative excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-white text-purple-600 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Today
                </button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                  View Our Work
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
