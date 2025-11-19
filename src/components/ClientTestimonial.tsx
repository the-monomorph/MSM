import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface ClientTestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export function ClientTestimonial({ quote, author, role, image }: ClientTestimonialProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">
            What Our Client Says
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 md:p-16 border border-purple-100 shadow-xl"
        >
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center opacity-10">
            <Quote className="w-12 h-12" />
          </div>

          <Quote className="w-16 h-16 text-purple-500 mb-8 relative z-10" />

          <p className="text-2xl md:text-3xl text-slate-900 mb-12 leading-relaxed relative z-10">
            {quote}
          </p>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl">
              {image || author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="text-slate-900 text-xl">{author}</div>
              <div className="text-slate-600">{role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
