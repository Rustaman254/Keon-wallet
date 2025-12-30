import { ChevronRight, Wallet, Github, Shield, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="relative rounded-2xl md:rounded-[3rem] bg-gradient-to-r from-card to-background border border-white/10 overflow-hidden shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl opacity-50" />
          <div className="absolute -bottom-32 -left-32 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-[100px]" />

          <div className="relative p-6 md:p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Content */}
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 tracking-tight">
                Ready to Experience <br />
                <span className="text-gradient">The Future?</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-6 md:mb-10 leading-relaxed">
                Join thousands of users who trust Keon Wallet for their Starknet journey.
                Secure, fast, and built with developers in mind.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start">
                <button className="btn-primary shadow-xl shadow-primary/20">
                  <span className="relative z-10">Install Extension</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                </button>
                <button className="btn-outline">
                  View on GitHub
                  <Github className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Decorative Element - Wallet Icon */}
            <div className="relative w-40 h-40 md:w-64 md:h-64 flex-shrink-0 animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30 rotate-12 hover:rotate-6 transition-transform duration-500">
                  <Wallet className="w-16 h-16 md:w-24 md:h-24 text-white" />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-bounce delay-700">
                  <Shield className="w-5 h-5 md:w-8 md:h-8 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-bounce delay-300">
                  <Zap className="w-5 h-5 md:w-8 md:h-8 text-white" />
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
