import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Rocket, MessageSquare } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      icon: Handshake,
      name: "Odoo",
      title: "Gold Partner",
      description: "Leverage Odoo's powerful ERP features with our certified expertise for comprehensive business management solutions.",
      capabilities: ["ERP Implementation", "Custom Modules", "Integration Services", "Training & Support"]
    },
    {
      icon: Rocket,
      name: "Builder.ai",
      title: "Technology Partner",
      description: "Accelerate app development with cutting-edge no-code/low-code platforms for rapid digital transformation.",
      capabilities: ["Rapid Prototyping", "Custom App Development", "AI-Powered Development", "Scalable Solutions"]
    },
    {
      icon: MessageSquare,
      name: "Yellow.ai",
      title: "AI Partner",
      description: "Provide intelligent chatbot capabilities with advanced conversational AI and automation technologies.",
      capabilities: ["Conversational AI", "Chatbot Development", "Customer Support Automation", "Integration Services"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Partners in Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Appness Technology has strategic partnerships with industry leaders like Odoo, Builder.ai, and Yellow.ai. These collaborations enable us to deliver comprehensive solutions that leverage cutting-edge technologies, accelerate app development, and provide intelligent chatbot capabilities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <Card
                key={partner.name}
                className="group hover:shadow-strong transition-all duration-300 border-primary/10 hover:border-primary/20 bg-background hover:bg-card-gradient"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-feature-gradient rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{partner.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{partner.title}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6 leading-relaxed">
                    {partner.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Capabilities:</h4>
                    <ul className="space-y-1">
                      {partner.capabilities.map((capability) => (
                        <li key={capability} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;