import { Layers, Shield, Zap, Settings2 } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Multichain Support",
    description: "Mine across 25+ blockchain networks simultaneously with automatic chain switching for maximum profitability."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and multi-layer security protocols protect your mining operations 24/7."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized mining algorithms deliver superior hash rates with minimal latency across all supported chains."
  },
  {
    icon: Settings2,
    title: "Auto-Optimization",
    description: "AI-powered algorithms automatically switch between chains to maximize your mining rewards in real-time."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why MultichainMine?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for miners who demand the best. Our platform combines cutting-edge 
            technology with user-friendly tools to maximize your mining potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-secondary to-card border border-border/30 flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-colors">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 opacity-30">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-lg bg-border/50" />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
