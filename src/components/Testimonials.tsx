import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote:
      "Working with Mother Superior Media transformed our school's digital presence completely. We went from having almost no social media footprint to building a thriving online community that truly represents our values and achievements. The engagement we've seen has exceeded all our expectations.",
    author: "Smt. Kavitha K. Anishettar",
    role: "Head Mistress, Sri Vani Girls High School",
    image: "SJ",
    rating: 5,
  },
  {
    quote:
      "The Bharat helped me find my voice online. I went from random posts to a clear brand as a drag artist. My engagement doubled, and I now get booking requests through Instagram.",
    author: "Cologne Doll, Drag Performer, Bengaluru",
    role: "Marketing Director, GrowthLabs",
    image: "MC",
    rating: 5,
  },
  {
    quote:
      "Mother Bharat is one of the most talented and gifted digital marketing experts who is helping us build our fundind.com brand. We are proud and fortunate to have him as part of our team.",
    author: "Sanjeev Sinha",
    role: "Founder, Fund India",
    image: "PS",
    rating: 4,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-slate-100 via-purple-50/30 to-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
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

      <div className="relative max-w-5xl mx-auto z-10">
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
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            What Our Clients Say
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/60 shadow-2xl shadow-gray-300/20"
            >
              {/* Decorative Quote Icon */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Quote className="w-10 h-10 text-white" />
              </motion.div>

              {/* Stars Rating */}
              <motion.div
                className="flex gap-1 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Quote Text */}
              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-gray-800 mb-10 md:mb-12 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                "{testimonials[currentIndex].quote}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {testimonials[currentIndex].image}
                </motion.div>
                <div>
                  <div className="text-gray-900 text-lg md:text-xl">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-2xl" />
              <div className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-2xl" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-10 md:mt-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-gray-400 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-3"
                      : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-gray-400 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "50+", label: "Happy Clients" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
