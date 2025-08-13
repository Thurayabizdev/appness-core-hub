import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import ServicesOverview from "@/components/ServicesOverview";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrustLogos />
        <ServicesOverview />
        <HowItWorks />
        <Industries />
      </main>
    </div>
  );
};

export default Index;