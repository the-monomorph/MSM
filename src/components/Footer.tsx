import { motion } from "motion/react";
import { Sparkles, Instagram, Linkedin, Twitter, Facebook, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-6 border-t border-gray-200">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-6 h-6 text-purple-600" />
              <div className="text-2xl md:text-3xl text-gray-900">
                Mother Superior <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Media</span>
              </div>
            </motion.div>
            <p className="text-gray-600 max-w-md leading-relaxed mb-6">
              A results-focused digital branding and social media marketing
              agency crafting campaigns that connect, engage, and scale.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="max-w-md">
              <p className="text-sm text-gray-700 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Case Studies", "Pricing", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-0 h-0.5 bg-purple-600 group-hover:w-4 transition-all duration-300" />
                      {link}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg text-gray-900 mb-4">Connect With Us</h4>
            <div className="space-y-4 mb-6">
              {[
                { name: "Instagram", icon: Instagram },
                { name: "LinkedIn", icon: Linkedin },
                { name: "Twitter", icon: Twitter },
                { name: "Facebook", icon: Facebook },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href="#"
                    className="flex items-center gap-3 text-gray-600 hover:text-purple-600 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-pink-500 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
                    </div>
                    <span>{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm text-center md:text-left">
              © 2025 Mother Superior Media. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Cookie Policy
              </a>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  );
}
