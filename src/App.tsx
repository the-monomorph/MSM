import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { CaseStudyAsmakam } from "./pages/CaseStudyAsmakam";
import { CaseStudyTruAssist } from "./pages/CaseStudyTruAssist";
import { CaseStudyMotherSuperior } from "./pages/CaseStudyMotherSuperior";
import { CaseStudyBusinessFortune } from "./pages/CaseStudyBusinessFortune";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "case-study-asmakam":
        return <CaseStudyAsmakam onNavigate={handleNavigate} />;
      case "case-study-truassist":
        return <CaseStudyTruAssist onNavigate={handleNavigate} />;
      case "case-study-mothersuperiormedia":
        return <CaseStudyMotherSuperior onNavigate={handleNavigate} />;
      case "case-study-businessfortune":
        return <CaseStudyBusinessFortune onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}