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

interface CaseStudyMotherSuperiorProps {
  onNavigate: (page: string) => void;
}

export function CaseStudyMotherSuperior({ onNavigate }: CaseStudyMotherSuperiorProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHero
        clientName="Sri Vani Girls High School"
        description="How we built our own signature brand voice, reel style, and trending content strategy that improved brand recall and positioned us as industry leaders."
        image="/images/image39.jpg"
        logo="🎬"
        category="Internal Branding / Content Strategy / Marketing"
        color="from-purple-500 to-pink-500"
      />

      <ClientOverview
        about="Mother Superior Media is our own digital branding and social media marketing agency. As creators and strategists, we needed to practice what we preach—building a distinctive brand presence that showcases our expertise, creativity, and results-driven approach in the competitive agency landscape."
        challenges={[
          "Establishing credibility in a saturated agency market",
          "Differentiating from countless other marketing agencies",
          "Balancing client work with our own brand building",
          "Creating content that demonstrates our expertise authentically",
          "Building a recognizable visual and narrative identity",
        ]}
      />

      <GoalAndStrategy
        goals={[
          "Develop a unique brand voice that stands out",
          "Create signature visual style and content formats",
          "Demonstrate expertise through valuable content",
          "Build trust and authority in the digital marketing space",
          "Attract high-quality clients through thought leadership",
          "Establish Mother Superior Media as a premium agency brand",
        ]}
        strategySteps={[
          "Deep brand positioning analysis and competitor research",
          "Defining our unique value proposition and brand personality",
          "Creating visual identity guidelines for consistency",
          "Developing content pillars: tips, case studies, trends, education",
          "Establishing tone of voice: confident, creative, data-driven",
          "Building a content calendar that showcases diverse skills",
        ]}
        strategyImages={[
          "/images/image40.jpg",
          "/images/image41.jpg",
        ]}
      />

      <CreativeProcess
        steps={[
          {
            title: "Discovery & Research",
            description: "Analyzed successful agency brands, identified gaps in the market, and defined what makes Mother Superior Media unique. Established our core values: creativity, strategy, results, and authenticity.",
            image: "/images/image42.jpg",
          },
          {
            title: "Visual Identity Development",
            description: "Created a bold gradient color palette (purple, pink, blue) that conveys creativity and premium quality. Developed typography system, icon library, and photography style that exudes modern professionalism.",
            image: "/images/image43.jpg",
          },
          {
            title: "Content Planning",
            description: "Mapped content series: Marketing Minute tips, Case Study Spotlights, Trend Analysis, Behind-the-Scenes agency life, and Educational carousels. Planned to demonstrate expertise while providing value.",
            image: "/images/image44.jpg",
          },
          {
            title: "Design & Production",
            description: "Produced high-quality reels with signature transitions and brand elements. Created carousel templates that are visually consistent yet versatile. Established motion graphics style for animated content.",
            image: "/images/image45.jpg",
          },
          {
            title: "Execution & Publishing",
            description: "Maintained consistent posting schedule across platforms. Engaged authentically with our community. Shared wins, learnings, and insights. Positioned ourselves as approachable experts.",
            image: "/images/image46.jpg",
          },
          {
            title: "Performance Tracking",
            description: "Monitored which content types resonated most with our target audience. Tracked inbound inquiries from social. Refined strategy based on engagement data and conversion metrics.",
            image: "/images/image47.jpg",
          },
        ]}
      />

      <VisualShowcase
        images={[
          "/images/image48.jpg",
          "/images/image49.jpg",
          "/images/image50.jpg",
        ]}
      />

      <VideoShowcase
        videos={[
          {
            title: "Marketing Tips Series",
            thumbnail: "/images/image51.jpg",
            type: "Educational Reel",
          },
          {
            title: "Behind the Agency",
            thumbnail: "/images/image52.jpg",
            type: "BTS Reel",
          },
          {
            title: "Client Success Stories",
            thumbnail: "/images/image53.jpg",
            type: "Case Study Reel",
          },
        ]}
      />

      <ResultsAchievements
        metrics={[
          {
            label: "Brand Recall",
            value: "210",
            increase: "+210% improvement",
            icon: TrendingUp,
            color: "from-purple-500 to-pink-500",
          },
          {
            label: "Content Reach",
            value: "450000",
            increase: "450K+ monthly reach",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "Agency Following",
            value: "25000",
            increase: "+25K followers",
            icon: Users,
            color: "from-emerald-500 to-teal-500",
          },
          {
            label: "Engagement Rate",
            value: "8",
            increase: "8.5% avg engagement",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
          },
        ]}
      />

      <ClientTestimonial
        quote="Practicing what we preach has been transformative. Building our own brand with the same rigor we apply to client work has not only attracted better clients but also pushed us to innovate constantly. We've become the agency we always wanted to work with."
        author="The Mother Superior Team"
        role="Internal Reflection"
      />

      <FinalOutcome
        outcomes={[
          "Distinctive brand identity recognized in the industry",
          "Consistent high engagement with target audience of business owners",
          "Premium positioning attracting quality clients",
          "Thought leadership established through valuable content",
          "Strong differentiation from commodity agencies",
          "Inbound lead quality and volume significantly increased",
        ]}
      />

      <MoreCaseStudies currentCaseStudyId="mothersuperiormedia" onNavigate={onNavigate} />
    </div>
  );
}
