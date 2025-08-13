const TrustLogos = () => {
  const partners = [
    { name: "Odoo", subtitle: "Gold Partner" },
    { name: "Builder.ai", subtitle: "Technology Partner" },
    { name: "Yellow.ai", subtitle: "AI Partner" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Trusted Technology Partners
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex flex-col items-center space-y-3 group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-32 h-16 bg-card rounded-lg shadow-soft flex items-center justify-center border border-primary/10 group-hover:shadow-medium transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{partner.name}</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {partner.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;