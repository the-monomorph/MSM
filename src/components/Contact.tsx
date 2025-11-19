import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    { name: "Instagram", icon: Instagram, color: "from-pink-500 to-purple-500" },
    { name: "LinkedIn", icon: Linkedin, color: "from-blue-600 to-blue-400" },
    { name: "Twitter", icon: Twitter, color: "from-cyan-500 to-blue-500" },
    { name: "Facebook", icon: Facebook, color: "from-blue-600 to-blue-800" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white via-purple-50/20 to-white overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Have a project in mind? We'd love to help you grow your online
            presence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-white/60"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <a
                      href="mailto:hello@mothersuperiormedia.com"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      hello@mothersuperiormedia.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Phone</div>
                    <a
                      href="tel:+91 99028 84945"
                      className="text-purple-600 hover:text-purple-700 transition-colors"
                    >
                      +91 99028 84945
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Location</div>
                    <div className="text-gray-600">
                      Bangalore, Karnataka
                      <br />
                      India
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-gray-900 mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {socials.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.button
                        key={social.name}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gradient-to-br text-gray-600 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                        style={{
                          background: `linear-gradient(to bottom right, transparent, transparent)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `linear-gradient(to bottom right, var(--tw-gradient-stops))`;
                          e.currentTarget.style.setProperty('--tw-gradient-from', social.color.split(' ')[0].replace('from-', ''));
                          e.currentTarget.style.setProperty('--tw-gradient-to', social.color.split(' ')[1].replace('to-', ''));
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '';
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-white/60"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-8">
                Start Your Project
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Naveen Kumar"
                    className="w-full px-4 py-6 rounded-xl border-gray-200 bg-white/50 focus:border-purple-500 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="naveenkumar@gmail.com"
                    className="w-full px-4 py-6 rounded-xl border-gray-200 bg-white/50 focus:border-purple-500 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </motion.div>

                {/* Company Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-6 rounded-xl border-gray-200 bg-white/50 focus:border-purple-500 focus:ring-purple-500 focus:bg-white transition-all"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <label className="block text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl border-gray-200 bg-white/50 focus:border-purple-500 focus:ring-purple-500 focus:bg-white resize-none transition-all"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-full shadow-lg shadow-purple-300/50 hover:shadow-purple-400/60 transition-all duration-300"
                  >
                    Start Your Project <Send className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
