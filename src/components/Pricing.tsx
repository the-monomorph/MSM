import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹25000",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Social Media Management (2 platforms)",
      "10 Posts per month",
      "Basic Analytics",
      "Monthly Strategy Call",
      "Content Calendar",
    ],
    color: "from-blue-500 to-cyan-500",
    lightColor: "from-blue-100 to-cyan-100",
    icon: Sparkles,
    popular: false,
  },
  {
    name: "Growth",
    price: "₹50000",
    period: "/month",
    description: "For brands ready to scale their presence",
    features: [
      "Social Media Management (4 platforms)",
      "25 Posts + 10 Reels per month",
      "Advanced Analytics & Reporting",
      "Weekly Strategy Sessions",
      "Performance Marketing (₹10000 ad spend)",
      "Content Creation & Design",
    ],
    color: "from-purple-500 to-pink-500",
    lightColor: "from-purple-100 to-pink-100",
    icon: Zap,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-service solutions for established brands",
    features: [
      "Unlimited Platform Management",
      "Unlimited Content Creation",
      "Dedicated Account Manager",
      "Custom Strategy & Campaigns",
      "Performance Marketing (Custom budget)",
      "Brand Development",
      "24/7 Priority Support",
    ],
    color: "from-orange-500 to-red-500",
    lightColor: "from-orange-100 to-red-100",
    icon: Crown,
    popular: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          scale: [1.2, 1, 1.2],
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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 12
          }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              type: "spring",
              bounce: 0.5
            }}
          >
            <span className="text-purple-600 tracking-wider uppercase text-sm px-4 py-2 bg-purple-100/80 backdrop-blur-sm rounded-full">
              Pricing
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 180,
              bounce: 0.4
            }}
          >
            Flexible Plans for Every Brand
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              delay: 0.15,
              duration: 0.4,
              type: "spring",
              bounce: 0.4
            }}
          />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + index * 0.12,
                  type: "spring",
                  bounce: 0.55
                }}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -15,
                    scale: 1.05,
                    rotate: -0.5
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 10,
                    bounce: 0.7
                  }}
                  className={`relative h-full bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-200 border overflow-visible ${
                    plan.popular ? "border-purple-400 border-2" : "border-white/60"
                  }`}
                >
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <motion.div
                      className="absolute -top-5 left-1/2 -translate-x-1/2 z-30"
                      initial={{ scale: 0, y: -10 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 8,
                        bounce: 0.8
                      }}
                    >
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm shadow-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </span>
                    </motion.div>
                  )}

                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${plan.lightColor} rounded-3xl opacity-0 group-hover:opacity-80 transition-shadow`}
                    animate={{}}
                  />

                  {/* Inner Content */}
                  <div className="relative z-10">
                    
                    {/* Icon */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.25, rotate: 8 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 8,
                        bounce: 0.8 
                      }}
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <div className="mb-6">
                      <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <motion.span
                        className="text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 8,
                          delay: 0.2 + index * 0.1
                        }}
                      >
                        {plan.price}
                      </motion.span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -25, scale: 0.95 }}
                          animate={
                            isInView ? { opacity: 1, x: 0, scale: 1 } : {}
                          }
                          transition={{
                            delay: 0.25 + index * 0.1 + i * 0.06,
                            type: "spring",
                            stiffness: 260,
                            damping: 10,
                            bounce: 0.6
                          }}
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}
                          >
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.div 
                      whileHover={{ scale: 1.1 }} 
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        bounce: 0.7
                      }}
                    >
                      <Button
                        className={`w-full py-6 rounded-full shadow-lg transition-all duration-200 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-purple-300/50"
                            : "bg-gray-900 hover:bg-gray-800 text-white shadow-gray-300/50"
                        }`}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </div>

                  {/* Decorative Glow */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${plan.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          className="mt-16 md:mt-20 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-white/60 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 200,
            damping: 12,
            bounce: 0.5
          }}
        >
          <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss a tailored
            package that fits your specific needs and goals.
          </p>
          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
              bounce: 0.7
            }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full shadow-lg shadow-purple-300/50"
            >
              Contact Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
