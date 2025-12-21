import { ChevronRight, Wallet } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-card to-secondary/50 border border-border overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg">
                Install Keon Wallet and experience the future of Starknet wallets. 
                Secure, fast, and built with developers in mind.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="btn-primary">
                  Install Extension
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="btn-outline">
                  View on GitHub
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Decorative Element - Wallet Icon */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center glow-primary">
                  <Wallet className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
