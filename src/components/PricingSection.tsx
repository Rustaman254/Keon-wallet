import { Check, ChevronRight, Sparkles } from "lucide-react";

const roadmapItems = [
  {
    status: "completed",
    title: "Core Wallet",
    features: ["Account management", "Token balances", "Send & receive", "Network switching"]
  },
  {
    status: "completed",
    title: "Transaction Simulation",
    features: ["Balance previews", "Approval detection", "Revert warnings", "Fee estimation"]
  },
  {
    status: "completed",
    title: "dApp Integration",
    features: ["Connect requests", "Transaction signing", "Message signing", "Typed data (SNIP-12)"]
  },
  {
    status: "planned",
    title: "Coming Soon",
    features: ["Built-in DEX swap", "NFT support", "Hardware wallet", "WalletConnect v2"]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Roadmap & Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keon Wallet is free and open source. Here's what we've built 
            and what's coming next.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className={item.status === "planned" ? "pricing-card-featured" : "pricing-card"}
            >
              {/* Status Badge */}
              <div className="mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "completed" 
                    ? "bg-primary/10 text-primary" 
                    : "bg-amber-500/10 text-amber-500"
                }`}>
                  {item.status === "completed" ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <Sparkles className="w-3 h-3" />
                  )}
                  {item.status === "completed" ? "Completed" : "In Progress"}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>

              {/* Features */}
              <ul className="space-y-3">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      item.status === "completed" 
                        ? "bg-primary/20" 
                        : "bg-muted"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        item.status === "completed" ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View Full Roadmap
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
