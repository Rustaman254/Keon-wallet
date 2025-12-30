import { Shield, Zap, Eye, Wallet, Send, Bell, Key, Settings } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Transaction Simulation",
    description: "Preview exactly what will happen before you sign. See balance changes, detect approvals, and get warned about potential reverts.",
    gradient: "from-purple-500/15 via-purple-500/10 to-transparent",
    iconBg: "from-purple-500 to-pink-500"
  },
  {
    icon: Wallet,
    title: "Multi-Account Support",
    description: "Create and manage multiple accounts from a single seed phrase. Custom naming and quick switching between accounts.",
    gradient: "from-blue-500/15 via-blue-500/10 to-transparent",
    iconBg: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Encrypted seed phrase storage, auto-lock protection, and password-protected access to keep your assets safe.",
    gradient: "from-green-500/15 via-green-500/10 to-transparent",
    iconBg: "from-green-500 to-emerald-500"
  },
  {
    icon: Send,
    title: "Token Management",
    description: "View all your ERC20 tokens, add custom tokens by contract address, and easily hide tokens you don't want to see.",
    gradient: "from-orange-500/15 via-orange-500/10 to-transparent",
    iconBg: "from-orange-500 to-yellow-500"
  },
  {
    icon: Zap,
    title: "dApp Connectivity",
    description: "Seamlessly connect to any Starknet dApp. Approve transactions, sign messages, and manage connected applications.",
    gradient: "from-pink-500/15 via-pink-500/10 to-transparent",
    iconBg: "from-pink-500 to-rose-500"
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Stay informed with real-time notifications for transactions, contract deployments, and important wallet events.",
    gradient: "from-cyan-500/15 via-cyan-500/10 to-transparent",
    iconBg: "from-cyan-500 to-blue-500"
  },
  {
    icon: Key,
    title: "Seed Phrase Recovery",
    description: "Import existing wallets or create new ones. Your seed phrase is encrypted at rest and backed up securely.",
    gradient: "from-indigo-500/15 via-indigo-500/10 to-transparent",
    iconBg: "from-indigo-500 to-purple-500"
  },
  {
    icon: Settings,
    title: "Customizable Settings",
    description: "Light/dark theme, currency preferences, auto-lock timeout, and developer mode for advanced users.",
    gradient: "from-primary/15 via-primary/10 to-transparent",
    iconBg: "from-primary to-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            <span>Powerful Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
            Everything You Need to <br />
            <span className="text-gradient">Master Starknet</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed px-2">
            Keon Wallet combines robust security with an intuitive interface,
            giving you complete control over your digital assets.
          </p>
        </div>

        {/* Features Grid - No Borders */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{
                animationDelay: `${index * 100}ms`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`
              }}
            >
              {/* Gradient Overlay - No Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl`} />

              {/* Icon */}
              <div className="mb-3 md:mb-6 relative z-10">
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-sm md:text-lg font-bold mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
