import { ChevronRight, Shield, Zap, Layers } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-medium hover:bg-white/10 transition-colors cursor-default animate-fade-in">
                <Shield className="w-4 h-4 text-primary" />
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Secure Starknet Wallet</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Your Gateway to<br />
                <span className="text-gradient">Starknet</span>
              </h1>
              <p className="text-muted-foreground text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                A modern browser extension wallet with advanced transaction simulation,
                multi-account support, and seamless dApp connectivity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="btn-primary w-full sm:w-auto">
                Install for Chrome
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="btn-outline w-full sm:w-auto">
                View Documentation
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Fast Simulation</span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Multi-Network</span>
              </div>
              <div className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Content - Wallet Mockup */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative transform transition-transform duration-700 hover:scale-105">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full animate-pulse" />

              {/* Wallet Extension Mockup */}
              <div className="relative z-20 animate-float">
                <img
                  src="/wallet_mockup_dapps.png"
                  alt="Keon Wallet dApps Interface"
                  className="w-[340px] h-auto rounded-[2.5rem] shadow-2xl glow-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
