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
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const { top, height } = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on how much of the section has been scrolled
            // We want the animation to start when the topline hits 0 (or slightly before)
            // and end when we've scrolled through the "extra" height.

            // The scrollable distance is the section height minus the sticky viewport height
            const scrollableDistance = height - windowHeight;

            if (scrollableDistance <= 0) return;

            // How far have we scrolled into the section?
            // "top" is negative as we scroll down. 
            const scrolled = -top;

            // Calculate progress from 0 to 1
            let progress = scrolled / scrollableDistance;

            // Clamp progress
            progress = Math.max(0, Math.min(1, progress));

            // Map progress to steps
            const totalSteps = steps.length;
            const currentStep = Math.min(
                Math.floor(progress * totalSteps),
                totalSteps - 1
            );

            setActiveStep(currentStep);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="how-to-use"
            className="relative h-[300vh]"
        >
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-20">
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

                    {/* Two Column Layout - Vertically Centered */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        {/* Left: Steps - Vertically Centered with Dots on Left */}
                        <div className="relative flex items-center min-h-[400px]">
                            {/* Step Indicators - On the Left */}
                            <div className="absolute left-0 flex flex-col gap-4 z-10">
                                {steps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            // Optional: Scroll to that position if we wanted to support clicking
                                            // For now we just keep the visual indicator logic or let it be purely display
                                        }}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeStep
                                                ? 'bg-primary scale-125 ring-4 ring-primary/20'
                                                : 'bg-white/20'
                                            }`}
                                        disabled // Disable clicking as it's scroll driven primarily now
                                        aria-label={`Step ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Steps Content - Only Active Visible */}
                            <div className="flex-1 ml-12">
                                {steps.map((step, index) => {
                                    const Icon = step.icon;
                                    const isActive = index === activeStep;

                                    return (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 ml-12 transition-all duration-500 flex items-center ${isActive
                                                    ? 'opacity-100 translate-x-0'
                                                    : 'opacity-0 pointer-events-none translate-x-8'
                                                }`}
                                        >
                                            <div className="w-full">
                                                <div className="flex gap-6 items-start">
                                                    {/* Number Circle - Highlighted */}
                                                    <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30 ring-4 ring-primary/20">
                                                        {index + 1}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1">
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

                                                {/* Progress Bar */}
                                                <div className="mt-8 flex items-center gap-2">
                                                    {steps.map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`h-1 rounded-full transition-all duration-300 ${i <= activeStep ? 'bg-primary flex-1' : 'bg-white/10 w-8'
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right: Image - Clean Presentation, Vertically Centered */}
                        <div className="flex items-center justify-center">
                            <div className="relative mx-auto w-full max-w-[280px]">
                                {/* Phone Mockup - Clean, No Background Card */}
                                <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
                                    <img
                                        src={steps[activeStep].image}
                                        alt={steps[activeStep].title}
                                        className="w-full h-full object-cover transition-opacity duration-500"
                                    />
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
            </div>
        </section>
    );
};

export default HowToUse;
