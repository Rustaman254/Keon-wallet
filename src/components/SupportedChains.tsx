const networks = [
  { name: "Mainnet", description: "Starknet production network", status: "active", icon: "🌐" },
  { name: "Sepolia", description: "Starknet testnet", status: "active", icon: "🧪" },
  { name: "Devnet", description: "Local development", status: "active", icon: "💻" },
  { name: "Custom RPC", description: "Add your own endpoints", status: "active", icon: "⚙️" },
];

const SupportedChains = () => {
  return (
    <section id="networks" className="relative py-32 overflow-hidden bg-white/5 md:bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Supported Networks
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            Connect to Starknet Mainnet, testnets, or your local development environment.
            Developer-ready with full custom RPC support.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
          {networks.map((network, index) => (
            <div key={index} className="chain-card group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {network.icon}
              </div>
              <div className="text-xl font-bold group-hover:text-primary transition-colors">{network.name}</div>
              <div className="text-sm text-muted-foreground text-center leading-relaxed px-4">{network.description}</div>
              <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-green-500 uppercase tracking-wide">{network.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* API Compatibility Section */}
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl animate-pulse" />
          <div className="relative glass-card rounded-[2.5rem] p-12 md:p-16 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  <span>Developer Ready</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Full <span className="text-gradient">API Compatibility</span>
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Complete support for all Starknet wallet API methods. Build with confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { method: "wallet_requestAccounts", desc: "Account access" },
                  { method: "wallet_getPermissions", desc: "Permission check" },
                  { method: "starknet_addInvokeTransaction", desc: "Execute tx" },
                  { method: "starknet_signTypedData", desc: "Sign data" },
                  { method: "starknet_addDeclareTransaction", desc: "Declare contract" },
                  { method: "wallet_switchStarknetChain", desc: "Switch network" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group px-5 py-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-primary/30 hover:from-primary/5 hover:to-accent/5 transition-all duration-500 cursor-default animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                      <div className="flex-1">
                        <code className="text-sm text-primary font-mono font-bold block mb-1 group-hover:text-accent transition-colors">
                          {item.method}
                        </code>
                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <a href="#docs" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium">
                  <span>View full API documentation</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedChains;
