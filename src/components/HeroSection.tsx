import { ChevronRight, Sparkles, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Decentralized<br />
                Multichain Mining<br />
                <span className="text-gradient">Platform</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                Maximize your mining potential across multiple blockchain networks. 
                Our advanced infrastructure delivers unparalleled efficiency, security, 
                and scalability for the modern crypto miner.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Start Mining Now
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="btn-outline">
                View Documentation
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Multichain enabled</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Based on a smart contract</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Phone Mockups Container */}
              <div className="relative flex items-center">
                {/* Back Phone */}
                <div className="relative -mr-20 z-10 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="w-48 h-96 rounded-3xl bg-gradient-to-b from-secondary to-card border border-border/50 overflow-hidden shadow-2xl">
                    <div className="h-full p-3">
                      <div className="h-full rounded-2xl bg-background/80 p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-muted-foreground">Open Staking</div>
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-xs">⚡</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-secondary rounded-full w-3/4" />
                          <div className="h-2 bg-secondary rounded-full w-1/2" />
                        </div>
                        <div className="flex gap-2 mt-4">
                          <div className="flex-1 h-20 rounded-lg bg-primary/10 border border-primary/20" />
                          <div className="flex-1 h-20 rounded-lg bg-secondary border border-border/30" />
                        </div>
                        <div className="space-y-2 mt-4">
                          <div className="h-8 bg-secondary rounded-lg" />
                          <div className="h-8 bg-secondary rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front Phone */}
                <div className="relative z-20 animate-float">
                  <div className="w-56 h-[420px] rounded-3xl bg-gradient-to-b from-secondary to-card border border-border/50 overflow-hidden shadow-2xl glow-primary">
                    <div className="h-full p-3">
                      <div className="h-full rounded-2xl bg-background/80 p-4 space-y-4">
                        {/* Status Bar */}
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                            <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                          </div>
                        </div>
                        
                        {/* Header */}
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-semibold">Dashboard</div>
                          <div className="w-8 h-8 rounded-full bg-primary/20" />
                        </div>

                        {/* Balance Card */}
                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                          <div className="text-xs text-muted-foreground mb-1">Total Balance</div>
                          <div className="text-2xl font-bold text-primary">$24,563.82</div>
                          <div className="text-xs text-primary/70 mt-1">+12.5% this week</div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-2">
                          <div className="p-3 rounded-lg bg-secondary border border-border/30">
                            <div className="text-xs text-muted-foreground">Hash Rate</div>
                            <div className="text-sm font-semibold">245 TH/s</div>
                          </div>
                          <div className="p-3 rounded-lg bg-secondary border border-border/30">
                            <div className="text-xs text-muted-foreground">Active</div>
                            <div className="text-sm font-semibold text-primary">5 Chains</div>
                          </div>
                        </div>

                        {/* Chart Placeholder */}
                        <div className="flex-1 rounded-lg bg-secondary border border-border/30 p-3">
                          <div className="flex items-end justify-between h-16 gap-1">
                            {[40, 65, 45, 80, 55, 70, 85, 60].map((h, i) => (
                              <div 
                                key={i} 
                                className="flex-1 bg-primary/30 rounded-t"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
