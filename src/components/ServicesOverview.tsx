import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Brain, Code, Building } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP & Management Software",
      subtitle: "Odoo Gold Partner",
      description: "Streamline business operations with Odoo-based ERP solutions tailored to your industry needs.",
      features: ["Inventory Management", "Financial Reporting", "CRM Integration", "Custom Workflows"]
    },
    {
      icon: Brain,
      title: "Data Analytics and Automations",
      description: "Smarter processes and data-driven decisions through advanced AI and automation technologies.",
      features: ["Predictive Analytics", "Process Automation", "Intelligent Insights", "Machine Learning Models"]
    },
    {
      icon: Code,
      title: "No Code/Low Code Platforms",
      description: "Quick app development with Builder.ai integration for rapid digital transformation.",
      features: ["Rapid Prototyping", "Custom Applications", "API Integrations", "Scalable Solutions"]
    },
    {
      icon: Building,
      title: "Construction Management Systems",
      description: "Tailored solutions for construction projects with specialized tools and workflows.",
      features: ["Project Tracking", "Resource Management", "Quality Control", "Safety Compliance"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-muted border border-border rounded-full px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Built for <span className="text-primary">ERP</span>, styled with <span className="text-primary">AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Flexible components, consistent UI, quick development, easy integration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;