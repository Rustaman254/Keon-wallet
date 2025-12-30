import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
    {
        quote: "Keon Wallet has completely transformed how I interact with Starknet. The transaction simulation feature alone has saved me from multiple costly mistakes.",
        name: "Sarah Chen",
        role: "DeFi Trader",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        quote: "The best Starknet wallet I've used. Clean interface, powerful features, and the security is top-notch. Highly recommended!",
        name: "Marcus Johnson",
        role: "Smart Contract Developer",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    {
        quote: "Finally, a wallet that doesn't compromise on either security or user experience. The multi-account support is exactly what I needed.",
        name: "Elena Rodriguez",
        role: "NFT Collector",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    },
    {
        quote: "Keon Wallet's dApp connectivity is seamless. I can interact with all my favorite protocols without any friction.",
        name: "David Kim",
        role: "Crypto Enthusiast",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    {
        quote: "The transaction previews give me confidence in every action I take. This is how all wallets should work.",
        name: "Aisha Patel",
        role: "Web3 Investor",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha"
    },
    {
        quote: "Switching from my old wallet to Keon was the best decision. The UX is miles ahead of the competition.",
        name: "Tom Anderson",
        role: "DAO Contributor",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom"
    }
];

const Testimonials = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        let scrollPosition = 0;

        const scroll = () => {
            scrollPosition += 0.5;
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section className="relative py-16 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
                        <Quote className="w-3 h-3 md:w-4 md:h-4" />
                        <span>Testimonials</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                        Loved by <span className="text-gradient">Thousands</span>
                    </h2>
                    <p className="text-muted-foreground text-base md:text-lg lg:text-xl px-2">
                        See what our community has to say about Keon Wallet
                    </p>
                </div>

                {/* Scrolling Testimonials */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                    {/* Testimonials Track */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-hidden pb-4"
                        style={{ scrollBehavior: 'auto' }}
                    >
                        {/* Duplicate testimonials for infinite scroll effect */}
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[280px] md:w-[400px] p-5 md:p-8 rounded-xl md:rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5 transition-all duration-300"
                            >
                                <Quote className="w-7 h-7 md:w-10 md:h-10 text-primary/30 mb-3 md:mb-4" />
                                <p className="text-sm md:text-lg mb-4 md:mb-6 leading-relaxed line-clamp-4 md:line-clamp-none">{testimonial.quote}</p>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10"
                                    />
                                    <div>
                                        <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                                        <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
