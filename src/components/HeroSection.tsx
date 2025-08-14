import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import MarqueeSkills from "./MarqueeSkills";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl dark:bg-brand-secondary/30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl dark:bg-primary/30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/5 to-transparent"></div>

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.04] tracking-tight">
                <span className="text-foreground">Transform your business</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-brand-secondary to-primary-glow bg-clip-text text-transparent">
                  Together, We Grow
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
              <Button size="lg" className="group bg-gradient-primary hover:opacity-90 text-white border-0">
                Start your Appness experience
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
              </Button>
              <Button variant="outline" size="lg" className="group border-border hover:bg-accent">
                <Play className="mr-2 group-hover:scale-110 transition-transform duration-200" size={16} />
                Get in touch
              </Button>
            </div>

            {/* Book Appointment CTA */}
            <p className="text-sm text-muted-foreground">
              Embark on your journey of Digital Transformation today! 
              <a href="#book" className="ml-2 text-primary hover:text-primary-glow underline font-medium">
                Book Appointment
              </a>
            </p>

            {/* Marquee Skills */}
            <MarqueeSkills />
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">29</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">10+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
          </div>

          {/* Enhanced Dashboard Mockup */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 bg-gradient-card border border-border/50 rounded-2xl p-6 shadow-elegant">
              {/* Mockup Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-3 bg-muted rounded-full w-1/3"></div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                  <div className="w-3 h-3 rounded-full bg-warning/60"></div>
                  <div className="w-3 h-3 rounded-full bg-success/60"></div>
                </div>
              </div>
              
              {/* Mockup Tabs */}
              <div className="flex space-x-3 mb-4">
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs border border-primary/20">Dashboard</div>
                <div className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs">Invoices</div>
                <div className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs">Automations</div>
              </div>
              
              {/* Mockup Content Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gradient-card border border-border/30 rounded-lg p-3 h-20 relative overflow-hidden shine">
                  <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-primary rounded opacity-60"></div>
                </div>
                <div className="bg-gradient-card border border-border/30 rounded-lg p-3 h-20 relative overflow-hidden shine">
                  <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-secondary rounded opacity-60"></div>
                </div>
                <div className="bg-gradient-card border border-border/30 rounded-lg p-3 h-20 relative overflow-hidden shine">
                  <div className="absolute top-2 left-2 w-4 h-4 bg-warning rounded opacity-60"></div>
                </div>
                <div className="bg-gradient-card border border-border/30 rounded-lg p-3 h-20 relative overflow-hidden shine">
                  <div className="absolute top-2 left-2 w-4 h-4 bg-info rounded opacity-60"></div>
                </div>
              </div>
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-card border border-border rounded-2xl shadow-medium animate-float flex items-center justify-center pulse-glow">
              <div className="text-xs font-medium text-muted-foreground">99.9%</div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-card border border-border rounded-2xl shadow-medium animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
              <div className="text-xs font-medium text-muted-foreground text-center">GDPR<br/>Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;