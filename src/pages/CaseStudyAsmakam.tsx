import { CaseStudyHero } from "../components/CaseStudyHero";
import { ClientOverview } from "../components/ClientOverview";
import { GoalAndStrategy } from "../components/GoalAndStrategy";
import { CreativeProcess } from "../components/CreativeProcess";
import { VisualShowcase } from "../components/VisualShowcase";
import { VideoShowcase } from "../components/VideoShowcase";
import { ResultsAchievements } from "../components/ResultsAchievements";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { FinalOutcome } from "../components/FinalOutcome";
import { MoreCaseStudies } from "../components/MoreCaseStudies";
import { TrendingUp, Users, Eye, Heart } from "lucide-react";

interface CaseStudyAsmakamProps {
  onNavigate: (page: string) => void;
}

export function CaseStudyAsmakam({ onNavigate }: CaseStudyAsmakamProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHero
        clientName="Asmakam Ayurveda Hospital"
        description="How we transformed their digital presence with creativity, strategy, and powerful storytelling rooted in traditional wellness."
        image="/images/image9.jpg"
        logo="🌿"
        category="Social Media / Branding / Content Strategy"
        color="from-emerald-500 to-teal-500"
      />

      <ClientOverview
        about="Asmakam Ayurveda Hospital is a traditional wellness center offering authentic Ayurvedic treatments and holistic healing. Their mission is to bring ancient healing practices to modern audiences while maintaining the essence of traditional medicine. They cater to health-conscious individuals seeking natural and sustainable wellness solutions."
        challenges={[
          "Low engagement on social media platforms",
          "Outdated visual identity that didn't resonate with younger demographics",
          "Lack of consistent content strategy",
          "Weak reel performance compared to competitors",
          "Difficulty communicating complex Ayurvedic concepts in simple terms",
        ]}
      />

      <GoalAndStrategy
        goals={[
          "Strengthen brand presence across Instagram and Facebook",
          "Increase engagement and follower growth organically",
          "Build a modern visual identity that honors tradition",
          "Create educational content that converts viewers into clients",
          "Establish thought leadership in the wellness space",
          "Improve monthly performance metrics by 50%+",
        ]}
        strategySteps={[
          "Competitor research to identify gaps in the wellness market",
          "Identifying target audience behavior and preferences",
          "Finding visual direction that blends tradition with modernity",
          "Trend research for wellness and Ayurveda content",
          "Crafting content pillars: education, testimonials, treatments, tips",
          "Monthly content calendar with strategic posting times",
        ]}
        strategyImages={[
          "/images/image10.jpg",
          "/images/image11.jpg",
        ]}
      />

      <CreativeProcess
        steps={[
          {
            title: "Discovery & Research",
            description: "Understanding brand voice, tone, competitor landscape, and audience persona. We deep-dived into Ayurvedic principles to ensure authenticity in every piece of content.",
            image: "/images/image12.jpg",
          },
          {
            title: "Visual Identity Development",
            description: "Moodboard creation, color study featuring earthy greens and golds, typography selection that balances modern readability with traditional aesthetics, and layout exploration.",
            image: "/images/image13.jpg",
          },
          {
            title: "Content Planning",
            description: "Drafting content pillars including wellness tips, treatment showcases, patient testimonials, Ayurvedic education, and behind-the-scenes content. Created reel formats and campaign ideas.",
            image: "/images/image14.jpg",
          },
          {
            title: "Design & Production",
            description: "Carousel design for educational content, video editing for treatment demonstrations, smooth transitions, reel scripts focused on storytelling, and capturing serene healing moments.",
            image: "/images/image15.jpg",
          },
          {
            title: "Execution & Publishing",
            description: "Scheduling posts for optimal engagement times, optimizing posting schedule based on audience activity, choosing relevant wellness hashtags, and adding clear CTAs for appointment booking.",
            image: "/images/image16.jpg",
          },
          {
            title: "Performance Tracking",
            description: "Tracking analytics weekly and monthly, monitoring engagement rates, reach, saves, shares, and conversion to appointments. Adjusting strategy based on performance data.",
            image: "/images/image17.jpg",
          },
        ]}
      />

      <VisualShowcase
        images={[
          "/images/image18.jpg",
          "/images/image19.jpg",
          "/images/image20.jpg",
        ]}
      />

      <VideoShowcase
        videos={[
          {
            title: "Ayurvedic Treatment Showcase",
            thumbnail: "/images/image21.jpg",
            type: "Reel",
          },
          {
            title: "Wellness Tips Series",
            thumbnail: "/images/image22.jpg",
            type: "Educational Reel",
          },
          {
            title: "Patient Success Stories",
            thumbnail: "/images/image23.jpg",
            type: "Testimonial Video",
          },
        ]}
      />

      <ResultsAchievements
        metrics={[
          {
            label: "Engagement Increased",
            value: "124",
            increase: "+124% from baseline",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
          },
          {
            label: "Monthly Reach",
            value: "85000",
            increase: "3x improvement",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "New Followers",
            value: "12500",
            increase: "+12.5K organic growth",
            icon: Users,
            color: "from-purple-500 to-pink-500",
          },
          {
            label: "Reel Views",
            value: "250000",
            increase: "250K+ per month",
            icon: TrendingUp,
            color: "from-emerald-500 to-teal-500",
          },
        ]}
      />

      <ClientTestimonial
        quote="Working with Mother Superior Media transformed our entire digital presence. Their creativity, discipline, and deep understanding of Ayurveda brought us consistent results and helped us reach a younger, more engaged audience."
        author="Dr. Rajesh Kumar"
        role="Director, Asmakam Ayurveda Hospital"
      />

      <FinalOutcome
        outcomes={[
          "Unique brand identity that honors tradition while appealing to modern audiences",
          "Consistent 100%+ higher audience engagement month-over-month",
          "Professional design consistency across all platforms",
          "Strong positioning as a thought leader in the wellness market",
          "Long-term brand value with sustainable growth strategy",
          "Increased appointment bookings by 45% through social media",
        ]}
      />

      <MoreCaseStudies currentCaseStudyId="asmakam" onNavigate={onNavigate} />
    </div>
  );
}
