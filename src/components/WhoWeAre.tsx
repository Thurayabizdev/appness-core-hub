import { Button } from "@/components/ui/button";
import { Shield, Users, Target, Award } from "lucide-react";

const WhoWeAre = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We adhere to the highest ethical standards and value trust in all our interactions."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "We work closely with businesses to understand their unique needs and deliver tailored solutions."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Our team of experienced professionals is committed to ensuring customer satisfaction."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We leverage cutting-edge technology to help businesses thrive in the digital era."
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Appness Technology is a trusted advisor and provider of customized technological solutions. With a customer-centric approach and a focus on integrity, we work closely with businesses to understand their unique needs and deliver tailored strategies and solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experienced professionals is committed to ensuring customer satisfaction and building long-lasting partnerships. From software development to cloud computing, we offer a comprehensive range of services to help businesses thrive in the digital era.
              </p>
            </div>

            <Button variant="hero" size="lg" className="group">
              Join Our Journey
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 bg-background border border-primary/10 rounded-xl hover:shadow-medium transition-all duration-300 hover:border-primary/20"
                >
                  <div className="w-12 h-12 bg-feature-gradient rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;