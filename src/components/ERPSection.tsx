import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Workflow, BarChart3, Users, ShieldCheck, Zap } from "lucide-react";

const ERPSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "ERP systems configured to optimize your specific business operations"
    },
    {
      icon: Workflow,
      title: "Enhanced Collaboration",
      description: "Streamlined workflows that improve team coordination and productivity"
    },
    {
      icon: BarChart3,
      title: "Centralized Control",
      description: "Complete visibility and control across all business functions"
    },
    {
      icon: Users,
      title: "End-to-End Support",
      description: "Comprehensive implementation and ongoing maintenance services"
    },
    {
      icon: ShieldCheck,
      title: "Scalability",
      description: "Solutions that grow with your business needs and requirements"
    },
    {
      icon: Zap,
      title: "Sustained Growth",
      description: "Long-term support ensuring continuous business optimization"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ERP for Business Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Appness Technology specializes in ERP (Enterprise Resource Planning) solutions for streamlined business management. With our expertise and Odoo's powerful features, we configure a customized solution to optimize operations, enhance collaboration, and provide centralized control across various functions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/20 bg-card-gradient"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-feature-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="group">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ERPSection;