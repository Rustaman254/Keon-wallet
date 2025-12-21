const networks = [
  { name: "Mainnet", description: "Starknet production network", status: "active", icon: "🌐" },
  { name: "Sepolia", description: "Starknet testnet", status: "active", icon: "🧪" },
  { name: "Devnet", description: "Local development", status: "active", icon: "💻" },
  { name: "Custom RPC", description: "Add your own endpoints", status: "active", icon: "⚙️" },
];

const SupportedChains = () => {
  return (
    <section id="networks" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Network Support
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect to Starknet Mainnet, testnets, or your local development environment.
            Quick network switching with custom RPC support.
          </p>
        </div>

        {/* Networks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {networks.map((network, index) => (
            <div key={index} className="chain-card hover:border-primary/30 transition-all duration-300 hover:glow-card">
              <div className="text-4xl mb-3">{network.icon}</div>
              <div className="text-lg font-bold">{network.name}</div>
              <div className="text-sm text-muted-foreground text-center">{network.description}</div>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-primary capitalize">{network.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* API Compatibility Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Full API Compatibility</h3>
            <p className="text-muted-foreground">Supports all standard wallet methods for seamless dApp integration.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "wallet_requestAccounts",
              "wallet_getPermissions",
              "starknet_addInvokeTransaction",
              "starknet_signTypedData",
              "starknet_addDeclareTransaction",
              "wallet_switchStarknetChain",
            ].map((method, index) => (
              <div key={index} className="px-4 py-2 rounded-lg bg-secondary border border-border text-center">
                <code className="text-xs text-muted-foreground font-mono">{method}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedChains;
