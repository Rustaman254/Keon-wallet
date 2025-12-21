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
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Keon Wallet combines powerful features with an intuitive interface, 
            giving you complete control over your Starknet assets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group"
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-full aspect-video rounded-xl bg-gradient-to-br from-secondary to-card border border-border flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-colors">
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-lg bg-border" />
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
