import { ChevronRight, Wallet } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/25">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">Keon Wallet</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#security" className="nav-link">Security</a>
            <a href="#networks" className="nav-link">Networks</a>
            <a href="#docs" className="nav-link">Docs</a>
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
    </nav>
  );
};

export default Navbar;
