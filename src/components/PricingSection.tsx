import { Check, ChevronRight, Sparkles } from "lucide-react";

const roadmapItems = [
  {
    status: "completed",
    title: "Core Wallet",
    features: ["Account management", "Token balances", "Send & receive", "Network switching"],
    gradient: "from-green-500/15 via-emerald-500/10 to-transparent",
    badgeBg: "bg-green-500/15",
    badgeText: "text-green-400",
    checkBg: "bg-green-500/20",
    checkText: "text-green-400"
  },
  {
    status: "completed",
    title: "Transaction Simulation",
    features: ["Balance previews", "Approval detection", "Revert warnings", "Fee estimation"],
    gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
    badgeBg: "bg-blue-500/15",
    badgeText: "text-blue-400",
    checkBg: "bg-blue-500/20",
    checkText: "text-blue-400"
  },
  {
    status: "completed",
    title: "dApp Integration",
    features: ["Connect requests", "Transaction signing", "Message signing", "Typed data (SNIP-12)"],
    gradient: "from-purple-500/15 via-pink-500/10 to-transparent",
    badgeBg: "bg-purple-500/15",
    badgeText: "text-purple-400",
    checkBg: "bg-purple-500/20",
    checkText: "text-purple-400"
  },
  {
    status: "planned",
    title: "Coming Soon",
    features: ["Built-in DEX swap", "NFT support", "Hardware wallet", "WalletConnect v2"],
    gradient: "from-orange-500/15 via-yellow-500/10 to-transparent",
    badgeBg: "bg-orange-500/15",
    badgeText: "text-orange-400",
    checkBg: "bg-orange-500/20",
    checkText: "text-orange-400"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
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

        {/* Roadmap Cards - No Borders */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`
              }}
            >
              {/* Gradient Overlay - No Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                {/* Status Badge */}
                <div className="mb-6">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${item.badgeBg} ${item.badgeText}`}>
                    {item.status === "completed" ? (
                      <Check className="w-3 h-3" />
                    ) : (
                      <Sparkles className="w-3 h-3" />
                    )}
                    {item.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-6">{item.title}</h3>

                {/* Features */}
                <ul className="space-y-3">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${item.checkBg} ${item.checkText}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-muted-foreground font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
