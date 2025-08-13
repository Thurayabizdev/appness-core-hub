import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigationSections = [
    {
      title: "Solutions",
      links: ["ERP Systems", "AI & Automation", "Data Analytics", "Construction Management"]
    },
    {
      title: "Industries", 
      links: ["Manufacturing", "Construction", "Retail", "Healthcare"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Case Studies", "Blog", "Support"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Partners"]
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-soft">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-semibold text-foreground">Appness</span>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full font-medium">V11</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Your premium technology solutions provider for digital transformation. 
                Empowering businesses with cutting-edge ERP, AI, and automation solutions.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Azaiba Street, Muscat, Oman</p>
                <p>📞 +968 9230 3473, +968 9592 6119</p>
                <p>✉️ Sales@appness.net</p>
              </div>
            </div>

            {/* Navigation Links */}
            {navigationSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Appness Technology. All rights reserved.</span>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;