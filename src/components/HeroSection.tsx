import { ChevronRight, Shield, Zap, Layers } from "lucide-react";

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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Shield className="w-4 h-4" />
                Secure Starknet Wallet
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Your Gateway to<br />
                <span className="text-gradient">Starknet</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                A modern browser extension wallet with advanced transaction simulation, 
                multi-account support, and seamless dApp connectivity. Built for security 
                and designed for simplicity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Install for Chrome
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
                <Zap className="w-5 h-5 text-primary" />
                <span>Transaction Simulation</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Layers className="w-5 h-5 text-primary" />
                <span>Multi-Network Support</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Encrypted Storage</span>
              </div>
            </div>
          </div>

          {/* Right Content - Wallet Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              
              {/* Wallet Extension Mockup */}
              <div className="relative z-20 animate-float">
                <div className="w-80 h-[520px] rounded-3xl bg-gradient-to-b from-card to-background border border-border overflow-hidden shadow-2xl glow-primary">
                  <div className="h-full p-4">
                    <div className="h-full rounded-2xl bg-background p-4 space-y-4">
                      {/* Header */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-primary text-sm font-bold">K</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold">Main Account</div>
                            <div className="text-xs text-muted-foreground">0x1a2b...3c4d</div>
                          </div>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          Mainnet
                        </div>
                      </div>

                      {/* Balance Card */}
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
                        <div className="text-xs text-muted-foreground mb-1">Total Balance</div>
                        <div className="text-3xl font-bold text-foreground">$12,847.32</div>
                        <div className="text-xs text-primary mt-1">+5.2% (24h)</div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-4 gap-2">
                        {["Send", "Receive", "Swap", "Buy"].map((action) => (
                          <button key={action} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-primary" />
                            </div>
                            <span className="text-xs text-muted-foreground">{action}</span>
                          </button>
                        ))}
                      </div>

                      {/* Token List */}
                      <div className="space-y-2 flex-1">
                        <div className="text-xs text-muted-foreground mb-2">Assets</div>
                        {[
                          { name: "Ethereum", symbol: "ETH", balance: "2.45", value: "$4,234.12", color: "#627EEA" },
                          { name: "STRK", symbol: "STRK", balance: "1,250", value: "$875.00", color: "#EC796B" },
                          { name: "USDC", symbol: "USDC", balance: "5,420", value: "$5,420.00", color: "#2775CA" },
                        ].map((token) => (
                          <div key={token.symbol} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border/50">
                            <div className="flex items-center gap-3">
                              <div 
                                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                style={{ backgroundColor: `${token.color}20`, color: token.color }}
                              >
                                {token.symbol.charAt(0)}
                              </div>
                              <div>
                                <div className="text-sm font-medium">{token.name}</div>
                                <div className="text-xs text-muted-foreground">{token.balance} {token.symbol}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium">{token.value}</div>
                            </div>
                          </div>
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
    </section>
  );
};

export default HeroSection;
