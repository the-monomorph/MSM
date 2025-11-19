import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Search, Palette, Calendar, Clapperboard, Send, LineChart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProcessStep {
  title: string;
  description: string;
  image?: string;
}

interface CreativeProcessProps {
  steps: ProcessStep[];
}

const stepIcons = [Search, Palette, Calendar, Clapperboard, Send, LineChart];
const stepColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-purple-500",
  "from-pink-500 to-rose-500",
];

export function CreativeProcess({ steps }: CreativeProcessProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
            Creative Process
          </h2>
          <p className="text-xl text-slate-600">
            Our step-by-step approach to bringing your brand to life
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-pink-200 to-blue-200" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${
                        stepColors[index % stepColors.length]
                      } rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? "md:text-right md:pr-24" : "md:pl-24 md:col-start-2"} pl-24 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100"
                    >
                      <div className={`inline-block px-4 py-1 bg-gradient-to-r ${
                        stepColors[index % stepColors.length]
                      } text-white rounded-full text-sm mb-4`}>
                        Step {index + 1}
                      </div>
                      <h3 className="text-2xl text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>

                  {/* Image */}
                  {step.image && (
                    <div className={`${isEven ? "md:pl-24" : "md:pr-24 md:col-start-1 md:row-start-1"} pl-24 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="rounded-3xl overflow-hidden shadow-xl"
                      >
                        <ImageWithFallback
                          src={step.image}
                          alt={step.title}
                          className="w-full h-64 object-cover"
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
