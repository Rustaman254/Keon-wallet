import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ChromeBadge from "@/components/ChromeBadge";
import SupportedChains from "@/components/SupportedChains";
import InfrastructureSection from "@/components/InfrastructureSection";
import PricingSection from "@/components/PricingSection";
import HowToUse from "@/components/HowToUse";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ChromeBadge />
        <SupportedChains />
        <InfrastructureSection />
        <PricingSection />
        <HowToUse />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
