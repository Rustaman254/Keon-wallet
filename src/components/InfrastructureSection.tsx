import { Zap, Activity, Snowflake } from "lucide-react";

const InfrastructureSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Enterprise-Grade<br />
              Infrastructure
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Our advanced mining infrastructure uses top hardware and optimized software for 
              peak performance. With global data centers, we guarantee low latency and high 
              availability for your mining operations.
            </p>

            {/* Feature Card - Real-Time Monitoring */}
            <div className="feature-card flex items-start gap-4 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Get instant access to monitor the performance of your GPU miners 
                  and machines, allows you to be data driven better.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {/* Redundant Power Systems */}
            <div className="feature-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Redundant Power Systems</h3>
                <p className="text-muted-foreground text-sm">
                  N+1 power redundancy, 2x Automatic bypass switch 
                  and UPS to back up guarantee your mining 
                  to run zero downtime.
                </p>
              </div>
            </div>

            {/* Advanced Cooling */}
            <div className="feature-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <Snowflake className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Advanced Cooling</h3>
                <p className="text-muted-foreground text-sm">
                  4 airflow cooling technology helps hardware stay 
                  cool that boosts its speed due to max performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
