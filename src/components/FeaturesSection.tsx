import { Shield, Zap, Eye, Wallet, Send, Bell, Key, Settings } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Transaction Simulation",
    description: "Preview exactly what will happen before you sign. See balance changes, detect approvals, and get warned about potential reverts."
  },
  {
    icon: Wallet,
    title: "Multi-Account Support",
    description: "Create and manage multiple accounts from a single seed phrase. Custom naming and quick switching between accounts."
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Encrypted seed phrase storage, auto-lock protection, and password-protected access to keep your assets safe."
  },
  {
    icon: Send,
    title: "Token Management",
    description: "View all your ERC20 tokens, add custom tokens by contract address, and easily hide tokens you don't want to see."
  },
  {
    icon: Zap,
    title: "dApp Connectivity",
    description: "Seamlessly connect to any Starknet dApp. Approve transactions, sign messages, and manage connected applications."
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Stay informed with real-time notifications for transactions, contract deployments, and important wallet events."
  },
  {
    icon: Key,
    title: "Seed Phrase Recovery",
    description: "Import existing wallets or create new ones. Your seed phrase is encrypted at rest and backed up securely."
  },
  {
    icon: Settings,
    title: "Customizable Settings",
    description: "Light/dark theme, currency preferences, auto-lock timeout, and developer mode for advanced users."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Powerful Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Everything You Need to <br />
            <span className="text-gradient">Master Starknet</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Keon Wallet combines robust security with an intuitive interface,
            giving you complete control over your digital assets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Icon Container */}
              <div className="mb-8 relative">
                <div className="w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/20 transition-all duration-500">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
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
