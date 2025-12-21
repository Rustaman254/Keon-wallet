import { Bitcoin, Circle } from "lucide-react";

const chains = [
  { name: "Bitcoin", symbol: "BTC", price: "$27,964.03", icon: "₿", color: "#F7931A" },
  { name: "Ethereum", symbol: "ETH", price: "$1,638.64", icon: "Ξ", color: "#627EEA" },
  { name: "Bitcoin", symbol: "BTC", price: "$861,403", icon: "₿", color: "#F7931A" },
  { name: "Dash", symbol: "DASH", price: "$1,036.43", icon: "D", color: "#008CE7" },
  { name: "Litecoin", symbol: "LTC", price: "$868,400", icon: "Ł", color: "#BFBBBB" },
  { name: "Dogecoin", symbol: "DOGE", price: "$845.00", icon: "Ð", color: "#C2A633" },
];

const chains2 = [
  { name: "Bitcoin Cash", symbol: "BCH", price: "$27,964.9", icon: "₿", color: "#8DC351" },
  { name: "Monero", symbol: "XMR", price: "$140,002", icon: "ɱ", color: "#FF6600" },
  { name: "Matic", symbol: "MATIC", price: "$265.32", icon: "M", color: "#8247E5" },
  { name: "Ethereum Classic", symbol: "ETC", price: "$945,332", icon: "Ξ", color: "#328332" },
];

const ChainCard = ({ chain }: { chain: typeof chains[0] }) => (
  <div className="chain-card hover:border-primary/30 transition-all duration-300 hover:glow-card">
    <div 
      className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
      style={{ backgroundColor: `${chain.color}20`, color: chain.color }}
    >
      {chain.icon}
    </div>
    <div className="text-lg font-bold">{chain.price}</div>
    <div className="text-sm text-muted-foreground">{chain.name}</div>
  </div>
);

const SupportedChains = () => {
  return (
    <section id="chains" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Supported Chains
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mine cryptocurrencies with our multichain infrastructure.
            Switch networks to maximize profitability.
          </p>
        </div>

        {/* Chains Grid - First Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          {chains.map((chain, index) => (
            <ChainCard key={index} chain={chain} />
          ))}
        </div>

        {/* Chains Grid - Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {chains2.map((chain, index) => (
            <ChainCard key={index} chain={chain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedChains;
