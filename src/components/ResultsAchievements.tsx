import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Eye, Heart, Share2, MessageCircle } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  increase: string;
  icon: any;
  color: string;
}

interface ResultsAchievementsProps {
  metrics: Metric[];
}

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    if (isNaN(numericValue)) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function ResultsAchievements({ metrics }: ResultsAchievementsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
            Results & Achievements
          </h2>
          <p className="text-xl text-slate-600">
            Data-driven results that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 shadow-lg border border-slate-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="text-5xl text-slate-900 mb-2">
                  {metric.value.includes("%") ? (
                    <>
                      <AnimatedCounter value={metric.value} />%
                    </>
                  ) : (
                    metric.value
                  )}
                </div>
                
                <div className="text-slate-600 mb-3">{metric.label}</div>
                
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${metric.color} bg-opacity-10 rounded-full`}>
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-600">{metric.increase}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Chart Representation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 border border-purple-100"
        >
          <h3 className="text-3xl text-slate-900 mb-8 text-center">
            Before vs After Performance
          </h3>
          
          <div className="space-y-6">
            {[
              { label: "Engagement Rate", before: 25, after: 85, color: "purple" },
              { label: "Monthly Reach", before: 30, after: 90, color: "blue" },
              { label: "Content Saves", before: 20, after: 75, color: "pink" },
              { label: "Follower Growth", before: 35, after: 95, color: "emerald" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700">{item.label}</span>
                  <div className="flex gap-4 text-sm">
                    <span className="text-slate-500">Before: {item.before}%</span>
                    <span className={`text-${item.color}-600`}>After: {item.after}%</span>
                  </div>
                </div>
                
                <div className="relative h-12 bg-white rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r from-slate-200 to-slate-300 rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.before}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                  <motion.div
                    className={`absolute left-0 top-0 h-full bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.after}%` } : {}}
                    transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
