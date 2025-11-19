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

interface CaseStudyTruAssistProps {
  onNavigate: (page: string) => void;
}

export function CaseStudyTruAssist({ onNavigate }: CaseStudyTruAssistProps) {
  return (
    <div className="min-h-screen bg-white">
      <CaseStudyHero
        clientName="TruAssist Tech"
        description="How we transformed their digital presence with emotional storytelling and powerful themed visual design showcasing mobility-assist wheelchair technology."
        image="/images/image24.jpg"
        logo="♿"
        category="Branding / Video / Social Media"
        color="from-blue-500 to-cyan-500"
      />

      <ClientOverview
        about="TruAssist Tech is an innovative mobility solutions company specializing in advanced wheelchair technology. Their mission is to empower individuals with mobility challenges through cutting-edge assistive technology. They focus on independence, dignity, and quality of life for their users."
        challenges={[
          "Difficulty conveying the emotional impact of their technology",
          "Low brand awareness in a competitive assistive technology market",
          "Technical product features overshadowing human stories",
          "Limited social media presence and engagement",
          "Need to balance technical innovation with emotional connection",
        ]}
      />

      <GoalAndStrategy
        goals={[
          "Build brand awareness through emotional storytelling",
          "Showcase real-life impact on users' lives",
          "Create a visual identity that emphasizes empowerment",
          "Increase engagement with human-centered content",
          "Position TruAssist as an industry leader in innovation",
          "Drive inquiries and conversions through authentic stories",
        ]}
        strategySteps={[
          "User story research and documentation",
          "Identifying key emotional touchpoints in customer journey",
          "Developing visual language that emphasizes ability over disability",
          "Creating content pillars: innovation, empowerment, community, education",
          "Planning testimonial-driven campaigns",
          "Integrating technical features within human narratives",
        ]}
        strategyImages={[
          "/images/image25.jpg",
          "/images/image26.jpg",
        ]}
      />

      <CreativeProcess
        steps={[
          {
            title: "Discovery & Research",
            description: "Deep interviews with users and caregivers to understand real experiences. Documented personal journeys and identified powerful moments that showcase the transformative impact of mobility technology.",
            image: "/images/image27.jpg",
          },
          {
            title: "Visual Identity Development",
            description: "Created a bold, modern color palette using blues and teals to convey trust and innovation. Developed photography guidelines emphasizing action, independence, and joy rather than limitations.",
            image: "/images/image28.jpg",
          },
          {
            title: "Content Planning",
            description: "Mapped out user story arcs, feature highlights integrated with benefits, community celebration posts, educational content about mobility solutions, and behind-the-scenes innovation.",
            image: "/images/image29.jpg",
          },
          {
            title: "Design & Production",
            description: "Produced cinematic video content showcasing users in their daily lives. Created motion graphics explaining technical features. Designed carousels that tell complete user transformation stories.",
            image: "/images/image30.jpg",
          },
          {
            title: "Execution & Publishing",
            description: "Launched coordinated campaigns across platforms with consistent messaging. Optimized posting for maximum reach within disability advocacy and healthcare communities. Engaged with user comments authentically.",
            image: "/images/image31.jpg",
          },
          {
            title: "Performance Tracking",
            description: "Monitored engagement metrics with special attention to shares and saves indicating emotional resonance. Tracked conversion from social engagement to product inquiries and demo requests.",
            image: "/images/image32.jpg",
          },
        ]}
      />

      <VisualShowcase
        images={[
          "/images/image33.jpg",
          "/images/image34.jpg",
          "/images/image35.jpg",
        ]}
      />

      <VideoShowcase
        videos={[
          {
            title: "User Journey Documentary",
            thumbnail: "/images/image36.jpg",
            type: "Documentary",
          },
          {
            title: "Technology Innovation Reel",
            thumbnail: "/images/image37.jpg",
            type: "Product Reel",
          },
          {
            title: "Community Stories",
            thumbnail: "/images/image38.jpg",
            type: "Testimonial Series",
          },
        ]}
      />

      <ResultsAchievements
        metrics={[
          {
            label: "Engagement Rate",
            value: "156",
            increase: "+156% improvement",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
          },
          {
            label: "Video Views",
            value: "320000",
            increase: "320K+ monthly views",
            icon: Eye,
            color: "from-blue-500 to-cyan-500",
          },
          {
            label: "Community Growth",
            value: "18000",
            increase: "+18K new followers",
            icon: Users,
            color: "from-purple-500 to-pink-500",
          },
          {
            label: "Demo Requests",
            value: "67",
            increase: "+67% from social",
            icon: TrendingUp,
            color: "from-emerald-500 to-teal-500",
          },
        ]}
      />

      <ClientTestimonial
        quote="Mother Superior Media didn't just market our product—they told our users' stories with dignity and power. The emotional connection they created has transformed how people perceive mobility technology and our brand."
        author="Sarah Martinez"
        role="CEO, TruAssist Tech"
      />

      <FinalOutcome
        outcomes={[
          "Human-centered brand narrative that resonates emotionally",
          "300%+ increase in social media engagement and reach",
          "Strong positioning as an empowerment-focused technology leader",
          "Authentic community building with users and advocates",
          "Significant increase in product inquiries and demo requests",
          "Award-winning video content recognized in the industry",
        ]}
      />

      <MoreCaseStudies currentCaseStudyId="truassist" onNavigate={onNavigate} />
    </div>
  );
}
