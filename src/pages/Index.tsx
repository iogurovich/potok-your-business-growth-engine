import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import FinancingSection from "@/components/FinancingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
import ClientStoriesSection from "@/components/ClientStoriesSection";
import TimelineSection from "@/components/TimelineSection";
import FAQSection from "@/components/FAQSection";
import ApplicationFormSection from "@/components/ApplicationFormSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <PainPointsSection />
    <FinancingSection />
    <HowItWorksSection />
    <WhyUsSection />
    <ClientStoriesSection />
    <TimelineSection />
    <FAQSection />
    <ApplicationFormSection />
    <FooterSection />
  </div>
);

export default Index;
