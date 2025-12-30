import { ChevronRight, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "security", "networks", "docs"];
      const scrollPosition = window.scrollY + 100;

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or scrolling
  useEffect(() => {
    const handleClose = () => setIsMobileMenuOpen(false);
    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleClose);
      return () => window.removeEventListener("scroll", handleClose);
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#security", label: "Security" },
    { href: "#networks", label: "Networks" },
    { href: "#docs", label: "Docs" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className={`container mx-auto transition-all duration-500 ease-in-out ${isScrolled ? 'px-4 md:px-6 pt-3 md:pt-4' : 'px-0 pt-0'
        }`}>
        <div className={`transition-all duration-500 ease-in-out ${isScrolled
          ? 'rounded-full backdrop-blur-xl bg-background/80 border border-white/10 shadow-lg px-4 md:px-6 py-3 md:py-4'
          : 'rounded-none bg-transparent border-transparent px-4 md:px-6 py-3 md:py-4'
          }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-primary transform group-hover:scale-110 transition-transform duration-300">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.3"></circle>
                <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2" opacity="0.5"></circle>
                <circle cx="20" cy="20" r="6" fill="currentColor"></circle>
                <path d="M20 2C20 2 32 8 32 20C32 32 20 38 20 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"></path>
                <path d="M20 8C20 8 28 12 28 20C28 28 20 32 20 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"></path>
              </svg>
              <span className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Keon Wallet</span>
            </div>

            {/* Nav Links - Desktop */}
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

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <button className="btn-primary py-2 px-4 md:py-2.5 md:px-6 text-sm">
                Install Extension
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <ThemeToggle />
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors p-1"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 rounded-2xl backdrop-blur-xl bg-background/95 border border-border/50 shadow-lg overflow-hidden animate-fade-in">
            <div className="py-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="px-4 pt-3 pb-1 border-t border-border/50 mt-2">
                <button className="btn-primary w-full py-2.5 text-sm justify-center">
                  Install Extension
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
