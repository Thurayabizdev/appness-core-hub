const MarqueeSkills = () => {
  const skills = [
    "ERP & Management",
    "AI/ML",
    "No-Code / Low-Code",
    "Data Analytics",
    "Chatbot (Generative AI)",
    "Construction Suite",
    "Cloud & Infrastructure",
    "Automation",
  ];

  return (
    <div className="py-6">
      <div className="marquee">
        <div className="marquee-track">
          {/* Duplicate skills for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-muted border border-border rounded-full text-sm font-medium text-muted-foreground whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSkills;