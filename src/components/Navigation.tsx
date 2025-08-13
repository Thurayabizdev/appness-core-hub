import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Appness
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Contact Sales
            </Button>
            <Button variant="hero" size="sm">
              Book a Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Contact Sales
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;