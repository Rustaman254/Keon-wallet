import { ChevronRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "security", "networks", "docs"];
      const scrollPosition = window.scrollY + 100;

      // Check if scrolled past top (more than 100px)
      setIsScrolled(window.scrollY > 100);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#security", label: "Security" },
    { href: "#networks", label: "Networks" },
    { href: "#docs", label: "Docs" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'mx-4 mt-4' : 'mx-0 mt-0'
      }`}>
      <div className={`transition-all duration-500 ease-in-out ${isScrolled
        ? 'rounded-full backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg'
        : 'rounded-none bg-transparent border-transparent'
        }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary transform group-hover:scale-110 transition-transform duration-300">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.3"></circle>
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" opacity="0.5"></circle>
                <circle cx="20" cy="20" r="6" fill="currentColor"></circle>
                <path d="M20 2C20 2 32 8 32 20C32 32 20 38 20 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"></path>
                <path d="M20 8C20 8 28 12 28 20C28 28 20 32 20 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"></path>
              </svg>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Keon Wallet</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <button className="btn-primary py-2.5 px-6 text-sm">
                Install Extension
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-4">
              <ThemeToggle />
              <button className="text-foreground hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
