import { Download, Wallet, Shield, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const steps = [
    {
        title: "Install the Extension",
        description: "Add Keon Wallet to your Chrome browser from the Web Store. It takes just one click and installs in seconds.",
        icon: Download,
        image: "/wallet-home.png"
    },
    {
        title: "Create Your Wallet",
        description: "Set up a new wallet or import an existing one using your seed phrase. Your keys are encrypted and stored securely on your device.",
        icon: Wallet,
        image: "/wallet-send.png"
    },
    {
        title: "Secure Your Account",
        description: "Set a strong password and enable additional security features like auto-lock to protect your assets.",
        icon: Shield,
        image: "/wallet-transactions.png"
    },
    {
        title: "Start Using Starknet",
        description: "Connect to your favorite dApps, send transactions, and explore the Starknet ecosystem with confidence.",
        icon: Zap,
        image: "/wallet-dapps.png"
    }
];

const HowToUse = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [scrollLocked, setScrollLocked] = useState(true);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight;

            if (isInView && scrollLocked) {
                // Prevent page scroll while in this section
                window.scrollTo(0, window.scrollY);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!scrollLocked) return;

            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight;

            if (!isInView) return;

            if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
                e.preventDefault();
                if (activeStep < steps.length - 1) {
                    setActiveStep(activeStep + 1);
                } else {
                    setScrollLocked(false);
                }
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                if (activeStep > 0) {
                    setActiveStep(activeStep - 1);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: false });
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [activeStep, scrollLocked]);

    const handleStepClick = (index: number) => {
        setActiveStep(index);
        if (index === steps.length - 1) {
            setScrollLocked(false);
        }
    };

    return (
        <section ref={sectionRef} id="how-to-use" className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                        <Zap className="w-4 h-4" />
                        <span>Getting Started</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        How to Use <span className="text-gradient">Keon Wallet</span>
                    </h2>
                    <p className="text-muted-foreground text-xl">
                        Get started in minutes with our simple setup process
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left: Steps - Only Active Visible */}
                    <div className="relative min-h-[400px] flex items-center">
                        <div className="w-full">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                const isActive = index === activeStep;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleStepClick(index)}
                                        className={`absolute inset-0 transition-all duration-500 cursor-pointer ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-8'
                                            }`}
                                    >
                                        <div className="flex gap-6 items-start">
                                            {/* Number Circle - Highlighted */}
                                            <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 ring-4 ring-primary/20">
                                                {index + 1}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 pt-2">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Icon className="w-7 h-7 text-primary" />
                                                    <h3 className="text-3xl font-bold text-foreground">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-muted-foreground text-lg leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Navigation Hint */}
                                        <div className="mt-8 flex items-center gap-4">
                                            {index > 0 && (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleStepClick(index - 1);
                                                    }}
                                                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm transition-colors"
                                                >
                                                    ← Previous
                                                </button>
                                            )}
                                            {index < steps.length - 1 ? (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleStepClick(index + 1);
                                                    }}
                                                    className="px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors"
                                                >
                                                    Next →
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setScrollLocked(false);
                                                    }}
                                                    className="px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors"
                                                >
                                                    Continue Scrolling ↓
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Step Indicators */}
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                            {steps.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleStepClick(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeStep ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to step ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 p-8">
                            {/* Decorative Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />

                            {/* Phone Mockup */}
                            <div className="relative mx-auto w-full max-w-[320px]">
                                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-2xl">
                                    <img
                                        src={steps[activeStep].image}
                                        alt={steps[activeStep].title}
                                        className="w-full h-full object-cover transition-opacity duration-500"
                                    />
                                </div>
                            </div>

                            {/* Step Indicator */}
                            <div className="mt-6 text-center">
                                <span className="text-sm text-muted-foreground">
                                    Step {activeStep + 1} of {steps.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToUse;
