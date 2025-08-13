import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import WhoWeAre from "@/components/WhoWeAre";
import ServicesOverview from "@/components/ServicesOverview";
import ERPSection from "@/components/ERPSection";
import PartnersSection from "@/components/PartnersSection";
import HowItWorks from "@/components/HowItWorks";
import Industries from "@/components/Industries";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <TrustLogos />
        <WhoWeAre />
        <ServicesOverview />
        <ERPSection />
        <PartnersSection />
        <HowItWorks />
        <Industries />
      </main>
    </div>
  );
};

export default Index;