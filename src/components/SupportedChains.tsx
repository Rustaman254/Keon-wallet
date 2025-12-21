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
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
          <div className="relative glass-card rounded-3xl p-12 text-center border-white/10">
            <h3 className="text-3xl font-bold mb-8">Full API Compatibility</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                "wallet_requestAccounts",
                "wallet_getPermissions",
                "starknet_addInvokeTransaction",
                "starknet_signTypedData",
                "starknet_addDeclareTransaction",
                "wallet_switchStarknetChain",
              ].map((method, index) => (
                <div key={index} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default">
                  <code className="text-xs text-primary/80 font-mono font-semibold">{method}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedChains;
