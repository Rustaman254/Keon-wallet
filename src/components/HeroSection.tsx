import { ChevronRight, Shield, Zap, Layers } from "lucide-react";
import { useEffect, useState } from "react";
import WalletCarousel from "./WalletCarousel";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Effects with Parallax */}
      <div className="absolute inset-0 hero-gradient" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
      <div
        className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"
        style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.4}px)` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000"
        style={{ transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.3}px)` }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 backdrop-blur-sm text-xs md:text-sm font-medium hover:bg-white/10 transition-colors cursor-default animate-fade-in">
                <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Secure Starknet Wallet</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                Your Gateway to<br />
                <span className="text-gradient">Starknet</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                A modern browser extension wallet with advanced transaction simulation,
                multi-account support, and seamless dApp connectivity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
              <button className="btn-primary w-full sm:w-auto">
                Install for Chrome
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button className="btn-outline w-full sm:w-auto">
                View Documentation
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 pt-6 md:pt-8 border-t border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="font-medium text-xs md:text-sm">Fast Simulation</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                  <Layers className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="font-medium text-xs md:text-sm">Multi-Network</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="font-medium text-xs md:text-sm">Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Wallet Carousel */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <WalletCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
