import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-hero-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Proof Line */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                Trusted by over 100 businesses across 10 countries
              </span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform your business with{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  ERP, AI & Automation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Welcome to Appness Technology, your premium technology solutions provider. We offer cutting-edge ERP systems, AI/ML applications, data science and analytics, construction management tools, and intuitive no code/low code platforms.
              </p>
              <p className="text-base text-muted-foreground max-w-2xl">
                Embark on your journey of Digital Transformation today!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Book Appointment
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={18} />
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">29</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={heroDashboard}
                alt="ERP Dashboard Analytics"
                className="w-full rounded-2xl shadow-strong border border-primary/20"
              />
              <div className="absolute inset-0 bg-hero-gradient opacity-10 rounded-2xl"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full animate-pulse-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;