import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, Users, Heart, Eye, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Glassmorphic Cards */}
      
      {/* Growth Analytics Card */}
      <motion.div
        className="absolute top-32 right-12 lg:right-24"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/60 shadow-xl shadow-blue-200/20"
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Monthly Growth</p>
              <p className="text-2xl text-gray-900">+247%</p>
            </div>
          </div>
          <div className="flex gap-1 h-10 items-end">
            {[30, 45, 35, 60, 50, 75, 85, 95].map((height, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-t from-emerald-400 to-cyan-300 w-3 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Engagement Metrics Card */}
      <motion.div
        className="absolute top-1/3 left-8 lg:left-20"
        initial={{ opacity: 0, x: -20, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 border border-white/60 shadow-xl shadow-purple-200/20"
          whileHover={{ x: 8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-white" fill="currentColor" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Engagement Rate</p>
              <p className="text-xl text-gray-900">12.4K</p>
              <p className="text-xs text-pink-500">↑ 156% increase</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Reach/Views Card */}
      <motion.div
        className="absolute bottom-40 left-16 lg:left-32"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 border border-white/60 shadow-xl shadow-orange-200/20"
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center shadow-lg">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Reach</p>
              <p className="text-xl text-gray-900">1.2M</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Audience Growth Card */}
      <motion.div
        className="absolute bottom-32 right-16 lg:right-28"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-3xl p-5 border border-white/60 shadow-xl shadow-blue-200/20"
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">New Followers</p>
              <p className="text-xl text-gray-900">50K+</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Target Success Rate */}
      <motion.div
        className="absolute top-1/2 right-8 lg:right-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <motion.div
          className="bg-white/70 backdrop-blur-xl rounded-full p-4 border border-white/60 shadow-xl shadow-purple-200/20"
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shadow-lg">
            <Target className="w-8 h-8 text-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-white/60 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700">Mother Superior Media</span>
            <Zap className="w-4 h-4 text-purple-600" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-6 max-w-5xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Turning Social Presence
            </motion.span>
            <br />
            <motion.span
              className="relative inline-block mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Into{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Powerful Brand Influence
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            We help businesses grow through data-driven strategies, creative
            storytelling, and content that converts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full shadow-lg shadow-purple-300/50 hover:shadow-purple-400/60 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-gray-400 px-8 py-6 rounded-full shadow-lg transition-all duration-300"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="mt-16 inline-flex gap-8 bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/60 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {[
              { label: "Active Clients", value: "50+" },
              { label: "Projects Delivered", value: "200+" },
              { label: "Success Rate", value: "98%" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <p className="text-2xl md:text-3xl text-gray-900">{stat.value}</p>
                <p className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Decorative Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-8"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-300/60 to-pink-300/60 backdrop-blur-sm" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-12"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-300/60 to-purple-300/60 backdrop-blur-sm" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1.5 h-1.5 bg-gray-600 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
