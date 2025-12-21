import { Eye, AlertTriangle, Check, X } from "lucide-react";

const InfrastructureSection = () => {
  return (
    <section id="security" className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Transaction<br />
              Simulation
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Never sign a transaction blind again. Our advanced simulation engine shows you 
              exactly what will happen before you approve, protecting you from scams and mistakes.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                "Balance change preview before signing",
                "Token approval detection with amount warnings",
                "Multicall support with per-call results",
                "Revert detection with detailed error messages",
                "Estimated gas fees displayed upfront"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Simulation Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75" />
            
            <div className="relative z-10 rounded-2xl bg-card border border-border overflow-hidden shadow-xl">
              {/* Header */}
              <div className="p-4 border-b border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Transaction Simulation</div>
                  <div className="text-xs text-muted-foreground">Preview changes before signing</div>
                </div>
              </div>

              {/* Simulation Content */}
              <div className="p-4 space-y-4">
                {/* Balance Changes */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Balance Changes</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-destructive" />
                        <span className="text-sm">Send ETH</span>
                      </div>
                      <span className="text-sm font-medium text-destructive">-0.5 ETH</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm">Receive STRK</span>
                      </div>
                      <span className="text-sm font-medium text-primary">+125 STRK</span>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-amber-500">Token Approval Detected</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      This transaction will approve USDC spending. Amount: Unlimited
                    </div>
                  </div>
                </div>

                {/* Fee Estimate */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary border border-border">
                  <span className="text-sm text-muted-foreground">Estimated Fee</span>
                  <span className="text-sm font-medium">0.0012 ETH (~$2.34)</span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 border-t border-border flex gap-3">
                <button className="flex-1 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                  Reject
                </button>
                <button className="flex-1 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  Approve
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
