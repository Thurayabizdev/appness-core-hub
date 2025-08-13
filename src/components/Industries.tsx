import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Building2, 
  Wrench, 
  DollarSign, 
  Factory, 
  Truck 
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Point of sale, inventory management, and customer analytics for retail businesses.",
      solutions: ["POS Systems", "Inventory Tracking", "Customer CRM", "Multi-channel Sales"]
    },
    {
      icon: Building2,
      title: "Construction",
      description: "Project management, resource allocation, and compliance tracking for construction projects.",
      solutions: ["Project Planning", "Resource Management", "Safety Compliance", "Progress Tracking"]
    },
    {
      icon: Wrench,
      title: "Services",
      description: "Service delivery optimization, scheduling, and customer relationship management.",
      solutions: ["Service Scheduling", "Field Service", "Customer Portal", "Billing Automation"]
    },
    {
      icon: DollarSign,
      title: "Finance",
      description: "Financial reporting, compliance management, and risk assessment solutions.",
      solutions: ["Financial Reporting", "Compliance", "Risk Management", "Audit Trails"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Production planning, quality control, and supply chain management systems.",
      solutions: ["Production Planning", "Quality Control", "Supply Chain", "Equipment Maintenance"]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Fleet management, route optimization, and delivery tracking solutions.",
      solutions: ["Fleet Management", "Route Planning", "Delivery Tracking", "Warehouse Management"]
    }
  ];

  return (
    <section id="industries" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Verticals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized solutions tailored for your industry's unique challenges and requirements across 29 sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <Card
                key={industry.title}
                className="group hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/20 bg-card-gradient cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-feature-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    {industry.solutions.map((solution) => (
                      <div key={solution} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{solution}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Serving 29 industries with specialized expertise
          </p>
          <a
            href="#contact"
            className="text-primary hover:text-primary-glow font-semibold underline-offset-4 hover:underline transition-colors duration-300"
          >
            View All Industries →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;