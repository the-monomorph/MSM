import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

interface MoreCaseStudiesProps {
  currentCaseStudyId: string;
  onNavigate: (page: string) => void;
}

const allCaseStudies: CaseStudy[] = [
  {
    id: "asmakam",
    title: "Asmakam Ayurveda Hospital",
    description: "Digital storytelling + modern Ayurveda visual identity.",
    image: "/images/image5.jpg",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "truassist",
    title: "TruAssist Tech",
    description: "Human-centered design to highlight mobility technology.",
    image: "/images/image6.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "mothersuperiormedia",
    title: "Mother Superior Media",
    description: "Signature branding, marketing style, and content direction.",
    image: "/images/image7.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "businessfortune",
    title: "Business Fortune Magazine",
    description: "Premium editorial design and layout transformation.",
    image: "/images/image8.jpg",
    color: "from-orange-500 to-red-500",
  },
];

export function MoreCaseStudies({ currentCaseStudyId, onNavigate }: MoreCaseStudiesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const otherCaseStudies = allCaseStudies.filter(
    (study) => study.id !== currentCaseStudyId
  );

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            More Case Studies
          </h2>
          <p className="text-xl text-slate-400">
            Explore how we've helped other brands grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${study.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <Button
                    onClick={() => onNavigate(`case-study-${study.id}`)}
                    variant="ghost"
                    className="group/btn text-purple-400 hover:text-purple-300 p-0"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-6">
            Want results like this? Let's build your digital growth.
          </h3>
          <Button
            onClick={() => onNavigate("home")}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-7 rounded-full text-lg shadow-lg shadow-purple-500/50"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
