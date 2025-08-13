import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, CheckCircle, BarChart3, Play } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Create Invoice",
      description: "Generate invoices automatically from your ERP system with all necessary details.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: CheckCircle,
      title: "Approve",
      description: "Streamlined approval workflow with automated notifications and digital signatures.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "View KPI Dashboard",
      description: "Real-time analytics and insights to track business performance and growth metrics.",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-feature-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See our ERP system in action with a simple workflow demonstration
          </p>
          <Button variant="outline" size="lg" className="group">
            <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={18} />
            Watch 30-Second Demo
          </Button>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center relative">
              <div className="absolute left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
              <div className="absolute right-1/4 w-1/4 h-0.5 bg-gradient-to-r from-green-300 to-purple-300"></div>
            </div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card
                  key={step.title}
                  className="relative group hover:shadow-medium transition-all duration-300 border-primary/10 hover:border-primary/20"
                >
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${step.color}`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            See Full Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;