import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 bg-background relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-hero-background"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Proof Line */}
            <div className="inline-flex items-center space-x-3 bg-muted border border-border rounded-full px-4 py-2 shadow-soft">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-primary/20 rounded-full border-2 border-background"></div>
                <div className="w-6 h-6 bg-secondary/20 rounded-full border-2 border-background"></div>
                <div className="w-6 h-6 bg-primary/30 rounded-full border-2 border-background"></div>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 1,500+ businesses across 10 countries
              </span>
            </div>

            {/* Headlines */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">Project & Manager</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  perfectly aligned
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Welcome to Appness Technology, your premium technology solutions provider. We offer cutting-edge ERP systems, AI/ML applications, data science and analytics, construction management tools, and intuitive no code/low code platforms.
              </p>
              <p className="text-base text-muted-foreground max-w-2xl font-medium">
                Embark on your journey of Digital Transformation today!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <span className="text-xs text-primary-foreground/80 ml-2">It's free</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={16} />
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
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <img
                src={heroDashboard}
                alt="Project Management Dashboard - Appness Technology"
                className="w-full rounded-2xl shadow-strong border border-border/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-card border border-border rounded-2xl shadow-medium animate-float flex items-center justify-center">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-card border border-border rounded-2xl shadow-medium animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 bg-secondary rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;