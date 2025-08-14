import { Settings, Brain, Code, Building, MessageSquare, BarChart3, FileText } from "lucide-react";
import TiltCard from "./TiltCard";

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP & Management Software",
      subtitle: "Odoo Gold Partner",
      description: "End-to-end ERP implementation, customization, and optimization."
    },
    {
      icon: Code,
      title: "Appness Products",
      description: "Purpose-built modules and accelerators to speed up delivery."
    },
    {
      icon: Building,
      title: "Infrastructure & Financial Solutions",
      description: "Secure, scalable foundations for mission-critical workloads."
    },
    {
      icon: Brain,
      title: "No-Code / Low-Code (NC/LC)",
      description: "Rapid app development without heavy engineering overhead."
    },
    {
      icon: Building,
      title: "Construction Management Systems",
      description: "Plan, track, and deliver construction projects with clarity."
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Automations",
      description: "From dashboards to workflow automation for measurable ROI."
    },
    {
      icon: MessageSquare,
      title: "Chatbot with Generative AI",
      description: "Conversational AI that supports customers and teams 24/7."
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-muted border border-border rounded-full px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">What We Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Empowering businesses to leverage <span className="bg-gradient-primary bg-clip-text text-transparent">technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Appness Technology empowers businesses to leverage technology, optimize operations, and achieve their goals efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <TiltCard key={service.title} intensity={6}>
                <div
                  className="group p-8 rounded-2xl bg-gradient-card border border-border/50 hover:shadow-elegant transition-all duration-300 h-full relative overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-gradient-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft border border-primary/20">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;