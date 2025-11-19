import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, Award, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "5+",
    label: "Years of Expertise",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-100/80 to-pink-100/80",
  },
  {
    icon: Target,
    value: "200+",
    label: "Campaigns Delivered",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-100/80 to-cyan-100/80",
  },
  {
    icon: Users,
    value: "50+",
    label: "Trusted Clients",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-100/80 to-red-100/80",
  },
  {
    icon: TrendingUp,
    value: "1M+",
    label: "Audiences Reached",
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-100/80 to-teal-100/80",
  },
];

export function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden"
    >
      {/* Background Animated Elements */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
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
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-purple-600 tracking-wider uppercase text-sm px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full">
              About Us
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Who We Are
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Mother Superior Media is a results-focused digital branding and
            social media marketing agency. We blend creativity, design,
            strategy, and analytics to help brands build a powerful voice
            online. From startups to enterprises, we craft campaigns that
            connect, engage, and scale.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-300/50 transition-all duration-300 border border-white/60 overflow-hidden"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Icon with Pulse Effect */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Pulse Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color}`}
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

                    {/* Counter Value */}
                    <motion.div
                      className="text-4xl md:text-5xl text-gray-900 mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label */}
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {stat.label}
                    </p>

                    {/* Decorative Line */}
                    <motion.div
                      className={`mt-4 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature Cards */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            {
              title: "Creative Excellence",
              description: "Award-winning designs that capture attention",
              icon: "🎨",
            },
            {
              title: "Data-Driven Results",
              description: "Strategic campaigns backed by analytics",
              icon: "📊",
            },
            {
              title: "Full-Service Support",
              description: "From concept to execution and beyond",
              icon: "🚀",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3 + i * 0.1 }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
