import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  if (currentPage === "home") return null;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
          <Button
            onClick={() => onNavigate("home")}
            variant="ghost"
            className="text-gray-700 hover:bg-gray-100/80 hover:text-gray-900 transition-all duration-200 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </motion.div>
        
        <motion.div
          className="flex items-center gap-2 text-gray-900"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-5 h-5 text-purple-600" />
          <span>Mother Superior <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Media</span></span>
        </motion.div>
      </div>
    </motion.nav>
  );
}
