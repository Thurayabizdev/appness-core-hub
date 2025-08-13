const TrustLogos = () => {
  const partners = [
    { name: "Odoo", icon: "⚙️" },
    { name: "Builder.ai", icon: "🏗️" },
    { name: "Yellow.ai", icon: "🤖" },
    { name: "AWS", icon: "☁️" },
    { name: "Microsoft", icon: "🔗" },
    { name: "Google", icon: "📊" }
  ];

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Indicator */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-card border border-border rounded-2xl px-6 py-4 shadow-soft">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background flex items-center justify-center text-xs">👥</div>
              <div className="w-8 h-8 bg-secondary/20 rounded-full border-2 border-background flex items-center justify-center text-xs">👤</div>
              <div className="w-8 h-8 bg-primary/30 rounded-full border-2 border-background flex items-center justify-center text-xs">👨‍💼</div>
              <div className="w-8 h-8 bg-primary/40 rounded-full border-2 border-background flex items-center justify-center text-xs">👩‍💼</div>
            </div>
            <div className="text-sm">
              <span className="font-medium text-foreground">Trusted by </span>
              <span className="font-semibold text-primary">1,500+</span>
              <span className="text-muted-foreground"> businesses for seamless digital transformation!</span>
            </div>
          </div>
        </div>
        
        {/* Partner Logos */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex flex-col items-center space-y-2 group hover:opacity-100 transition-all duration-300"
            >
              <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                {partner.icon}
              </div>
              <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;