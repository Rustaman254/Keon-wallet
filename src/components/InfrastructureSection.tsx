import { Eye, AlertTriangle, Check, X } from "lucide-react";

const InfrastructureSection = () => {
  return (
    <section id="security" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-top-left transform scale-110" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Eye className="w-4 h-4" />
              <span>Full Visibility</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Visualize Every <br />
              <span className="text-gradient">Transaction</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Never sign blind again. Our simulation engine decodes complex transactions
              into human-readable insights before you approve.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              {[
                "Balance change preview before signing",
                "Token approval detection with warnings",
                "Multicall support with detailed breakdown",
                "Revert detection with error explanation",
                "Estimated gas fees displayed upfront"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Check className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-muted-foreground text-lg group-hover:text-foreground transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Simulation Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-[100px] rounded-full" />

            <div className="relative z-10 rounded-3xl glass-card overflow-hidden shadow-2xl border-white/10 glow-card transition-transform duration-500 hover:scale-[1.02]">
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center gap-4 bg-white/5 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">Transaction Simulation</div>
                  <div className="text-sm text-muted-foreground">Preview changes before signing</div>
                </div>
              </div>

              {/* Simulation Content */}
              <div className="p-6 space-y-6 bg-background/40 backdrop-blur-sm">
                {/* Balance Changes */}
                <div className="space-y-3">
                  <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Balance Changes</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-destructive/5 border border-destructive/10 hover:bg-destructive/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-destructive" />
                        </div>
                        <span className="font-medium text-destructive">Send ETH</span>
                      </div>
                      <span className="font-bold text-destructive">-0.5 ETH</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-green-500/5 border border-green-500/10 hover:bg-green-500/10 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-green-500" />
                        </div>
                        <span className="font-medium text-green-500">Receive STRK</span>
                      </div>
                      <span className="font-bold text-green-500">+125 STRK</span>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5 animate-pulse" />
                  <div>
                    <div className="font-bold text-amber-500">Token Approval Detected</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      This transaction will approve USDC spending. Amount: <span className="text-foreground font-mono font-bold">Unlimited</span>
                    </div>
                  </div>
                </div>

                {/* Fee Estimate */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-sm text-muted-foreground font-medium">Estimated Network Fee</span>
                  <span className="font-mono font-bold">0.0012 ETH <span className="text-muted-foreground font-normal">(~$2.34)</span></span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-white/10 flex gap-4 bg-white/5 backdrop-blur-md">
                <button className="flex-1 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors font-semibold">
                  Reject
                </button>
                <button className="flex-1 py-3.5 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
                  Approve Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
