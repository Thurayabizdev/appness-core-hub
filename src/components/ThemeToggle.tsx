import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-10 h-6 rounded-full">
        <div className="w-4 h-4 rounded-full bg-muted animate-pulse" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-6 rounded-full border border-border bg-muted relative transition-all duration-300 hover:bg-accent"
    >
      <div
        className={`absolute inset-1 w-4 h-4 rounded-full bg-gradient-primary transition-transform duration-300 ${
          theme === "dark" ? "translate-x-4" : "translate-x-0"
        }`}
      />
      <Sun className="absolute left-1 w-3 h-3 text-foreground opacity-100 dark:opacity-0 transition-opacity" />
      <Moon className="absolute right-1 w-3 h-3 text-foreground opacity-0 dark:opacity-100 transition-opacity" />
    </Button>
  );
};

export default ThemeToggle;