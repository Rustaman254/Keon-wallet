import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">✦</span>
            </div>
            <span className="text-xl font-bold text-foreground">Multichain</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="nav-link text-foreground">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#chains" className="nav-link">Supported Chains</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#docs" className="nav-link">Docs</a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-secondary/50 text-foreground font-medium hover:border-primary/50 transition-all duration-300">
            Get Started
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
