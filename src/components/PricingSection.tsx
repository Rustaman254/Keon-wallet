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
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Wallet</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Roadmap & Features
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Keon Wallet is free and open source. Here's what we've built
            and what's coming next on our journey.
          </p>
        </div>

        {/* Roadmap Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`${item.status === "planned" ? "pricing-card-featured" : "pricing-card"} group hover:-translate-y-2 transition-transform duration-500`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

              {/* Status Badge */}
              <div className="mb-8">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${item.status === "completed"
                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                    : "bg-primary/10 text-primary border-primary/20"
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
              <h3 className="text-2xl font-bold mb-6">{item.title}</h3>

              {/* Features */}
              <ul className="space-y-4">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.status === "completed"
                        ? "bg-green-500/20 text-green-500"
                        : "bg-primary/20 text-primary"
                      }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
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
