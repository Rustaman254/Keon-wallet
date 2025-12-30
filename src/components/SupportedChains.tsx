const networks = [
  { name: "Mainnet", description: "Starknet production network", status: "active", icon: "🌐" },
  { name: "Sepolia", description: "Starknet testnet", status: "active", icon: "🧪" },
  { name: "Devnet", description: "Local development", status: "active", icon: "💻" },
  { name: "Custom RPC", description: "Add your own endpoints", status: "active", icon: "⚙️" },
];

const SupportedChains = () => {
  return (
    <section id="networks" className="relative py-16 md:py-32 overflow-hidden bg-white/5 md:bg-transparent">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Supported Networks
          </h2>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed px-2">
            Connect to Starknet Mainnet, testnets, or your local development environment.
            Developer-ready with full custom RPC support.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-20">
          {networks.map((network, index) => (
            <div key={index} className="chain-card group">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-2xl md:text-4xl mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                {network.icon}
              </div>
              <div className="text-base md:text-xl font-bold group-hover:text-primary transition-colors">{network.name}</div>
              <div className="text-xs md:text-sm text-muted-foreground text-center leading-relaxed px-1 md:px-4">{network.description}</div>
              <div className="mt-2 md:mt-4 flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] md:text-xs font-semibold text-green-500 uppercase tracking-wide">{network.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* API Compatibility Section */}
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl animate-pulse" />
          <div className="relative glass-card rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  <span>Developer Ready</span>
                </div>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                  Full <span className="text-gradient">API Compatibility</span>
                </h3>
                <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto px-2">
                  Complete support for all Starknet wallet API methods. Build with confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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
                    className="group px-3 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-primary/30 hover:from-primary/5 hover:to-accent/5 transition-all duration-500 cursor-default animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="mt-1 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                      <div className="flex-1 min-w-0">
                        <code className="text-xs md:text-sm text-primary font-mono font-bold block mb-0.5 md:mb-1 group-hover:text-accent transition-colors truncate">
                          {item.method}
                        </code>
                        <span className="text-[10px] md:text-xs text-muted-foreground">{item.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-10 text-center">
                <a href="#docs" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm md:text-base">
                  <span>View full API documentation</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
