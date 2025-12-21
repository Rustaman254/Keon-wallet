import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-secondary/80 to-card border border-border overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="relative p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Mining?
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of miners who trust MultichainMine for their 
                crypto mining needs. Get started in minutes and start earning 
                across multiple blockchains today.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="btn-primary">
                  Create Free Account
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="btn-outline">
                  Schedule Demo
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Decorative Element - Gear/Cog */}
            <div className="relative w-48 h-48 flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-muted-foreground/20"
                  fill="currentColor"
                >
                  <path d="M50,20 L55,25 L60,20 L65,30 L75,25 L75,35 L85,40 L80,45 L85,50 L80,55 L85,60 L75,65 L75,75 L65,70 L60,80 L55,75 L50,80 L45,75 L40,80 L35,70 L25,75 L25,65 L15,60 L20,55 L15,50 L20,45 L15,40 L25,35 L25,25 L35,30 L40,20 L45,25 Z" />
                  <circle cx="50" cy="50" r="15" fill="hsl(var(--background))" />
                </svg>
                {/* Inner glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30" />
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
