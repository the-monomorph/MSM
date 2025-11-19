import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  MessageSquare,
  Video,
  BarChart3,
  Palette,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "Social Media Management",
    description:
      "Crafting engaging posts, daily interactions, and long-term brand growth strategies.",
    color: "from-purple-500 to-pink-500",
    lightColor: "from-purple-100 to-pink-100",
  },
  {
    icon: Video,
    title: "Content Creation & Reels",
    description:
      "Premium design, video editing, motion graphics, and storytelling that stands out.",
    color: "from-blue-500 to-cyan-500",
    lightColor: "from-blue-100 to-cyan-100",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Targeted ads on Meta, Google, and YouTube to maximize leads and conversions.",
    color: "from-orange-500 to-red-500",
    lightColor: "from-orange-100 to-red-100",
  },
  {
    icon: Palette,
    title: "Branding & Creative Direction",
    description:
      "Brand identity, logo creation, moodboards, brand guidelines, and storytelling.",
    color: "from-emerald-500 to-teal-500",
    lightColor: "from-emerald-100 to-teal-100",
  },
  {
    icon: LineChart,
    title: "Digital Strategy & Analytics",
    description:
      "Data-driven insights, audience behavior tracking, and campaign optimization.",
    color: "from-violet-500 to-purple-500",
    lightColor: "from-violet-100 to-purple-100",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
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
              Our Services
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            What We Do Best
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 border border-gray-100/50 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.lightColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {/* Decorative circle */}
                      <motion.div
                        className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${service.color} opacity-60`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.6, 0.3, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>

                    {/* Hover Arrow */}
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm">Learn more</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Infographic */}
        <motion.div
          className="mt-16 md:mt-20 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-white/60"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Campaigns Launched" },
              { value: "10M+", label: "Total Reach" },
              { value: "5x", label: "Avg ROI Increase" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1 }}
                className="relative"
              >
                <motion.div
                  className="text-3xl md:text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
