import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Brain, Code, Building } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP & Management Software",
      description: "Streamline business operations with Odoo-based ERP solutions tailored to your industry needs.",
      features: ["Inventory Management", "Financial Reporting", "CRM Integration", "Custom Workflows"]
    },
    {
      icon: Brain,
      title: "AI, Machine Learning & Automation",
      description: "Smarter processes and data-driven decisions through advanced AI and automation technologies.",
      features: ["Predictive Analytics", "Process Automation", "Intelligent Insights", "Machine Learning Models"]
    },
    {
      icon: Code,
      title: "No-Code & Low-Code Platforms",
      description: "Quick app development with Builder.ai integration for rapid digital transformation.",
      features: ["Rapid Prototyping", "Custom Applications", "API Integrations", "Scalable Solutions"]
    },
    {
      icon: Building,
      title: "Construction Management Tools",
      description: "Tailored solutions for construction projects with specialized tools and workflows.",
      features: ["Project Tracking", "Resource Management", "Quality Control", "Safety Compliance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/20 bg-card-gradient"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-feature-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="feature" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;