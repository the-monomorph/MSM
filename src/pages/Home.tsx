import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { Services } from "../components/Services";
import { CaseStudies } from "../components/CaseStudies";
import { Testimonials } from "../components/Testimonials";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Pricing } from "../components/Pricing";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Services />
      <CaseStudies onNavigate={onNavigate} />
      <Testimonials />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}