import { Check, ChevronRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for individual miners getting started.",
    features: [
      "Mine up to 3 chains",
      "5 TH/s hash power",
      "Basic analytics dashboard",
      "Email support",
      "99.5% uptime guarantee"
    ],
    featured: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Ideal for serious miners seeking more power.",
    features: [
      "Mine up to 10 chains",
      "25 TH/s hash power",
      "Advanced analytics & reporting",
      "Priority support",
      "99.9% uptime guarantee",
      "Auto chain-switching"
    ],
    featured: true,
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale mining operations.",
    features: [
      "Unlimited chains",
      "Custom hash power",
      "White-label dashboard",
      "99.99% uptime SLA",
      "99.9% uptime guarantee",
      "API access",
      "Custom integrations"
    ],
    featured: false,
    cta: "Contact Sales"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Clear Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your mining needs. All plans 
            include our core features and can be upgraded anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={plan.featured ? "pricing-card-featured" : "pricing-card"}
            >
              {/* Plan Label */}
              <div className="mb-6">
                <span className="text-sm font-mono text-muted-foreground">[ {plan.name} ]</span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.featured 
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30" 
                    : "border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                {plan.cta}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
