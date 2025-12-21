import { useEffect, useState } from "react";

const walletScreens = [
    { id: 'home', image: '/wallet-home.png', label: 'Home' },
    { id: 'transactions', image: '/wallet-transactions.png', label: 'Transactions' },
    { id: 'send', image: '/wallet-send.png', label: 'Send' },
    { id: 'dapps', image: '/wallet-dapps.png', label: 'dApps' },
];

const WalletCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById('home');
            if (!heroSection) return;

            const rect = heroSection.getBoundingClientRect();
            const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.bottom / window.innerHeight)));

            // Rotate through all 4 screens as user scrolls through hero section
            const newRotation = scrollProgress * 360;
            setRotation(newRotation);

            // Determine active index based on rotation
            const index = Math.floor((newRotation % 360) / 90);
            setActiveIndex(index);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Compact cylinder radius for smaller 3D effect
    const radius = 200;

    return (
        <div className="relative w-full h-[380px] flex items-center justify-center">
            {/* 3D Carousel Container - Compact Cylinder Layout */}
            <div className="relative" style={{ perspective: '1000px', perspectiveOrigin: 'center' }}>
                <div
                    className="relative w-[190px] h-[380px] transition-transform duration-700 ease-out"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: `rotateY(${rotation}deg)`
                    }}
                >
                    {walletScreens.map((screen, index) => {
                        const angle = index * 90;
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={screen.id}
                                className={`absolute inset-0 rounded-3xl overflow-hidden transition-all duration-500 ${isActive ? 'shadow-2xl shadow-primary/30' : 'shadow-xl shadow-black/20'
                                    }`}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    backfaceVisibility: 'visible',
                                }}
                            >
                                {/* Phone Frame */}
                                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-2">
                                    {/* Screen */}
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                                        <img
                                            src={screen.image}
                                            alt={screen.label}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Label - Only show for active card */}
                                {isActive && (
                                    <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        <span className="text-sm font-bold text-primary animate-fade-in">
                                            {screen.label}
                                        </span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
                <span className="text-xs text-muted-foreground">Scroll to explore</span>
                <div className="flex gap-2">
                    {walletScreens.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary w-6' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WalletCarousel;
