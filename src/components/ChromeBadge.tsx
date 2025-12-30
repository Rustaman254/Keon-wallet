import { Chrome, Star } from "lucide-react";

const ChromeBadge = () => {
    return (
        <section className="relative py-12 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl md:rounded-3xl p-6 md:p-12 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 text-center">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-blue-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            {/* Chrome Icon */}
                            <div className="inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 mb-4 md:mb-6">
                                <Chrome className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-0.5 md:gap-1 mb-3 md:mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-2 text-lg md:text-2xl font-bold">4.8/5</span>
                            </div>

                            {/* Text */}
                            <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-3">Available on Chrome Web Store</h3>
                            <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-2">
                                Join thousands of users who trust Keon Wallet for their Starknet transactions
                            </p>

                            {/* CTA Button */}
                            <button className="btn-primary">
                                <Chrome className="w-4 h-4 md:w-5 md:h-5" />
                                Add to Chrome - It's Free
                            </button>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">10K+</div>
                                    <div className="text-xs md:text-sm text-muted-foreground">Active Users</div>
                                </div>
                                <div>
                                    <div className="text-xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">500+</div>
                                    <div className="text-xs md:text-sm text-muted-foreground">5-Star Reviews</div>
                                </div>
                                <div>
                                    <div className="text-xl md:text-3xl font-bold text-primary mb-0.5 md:mb-1">99.9%</div>
                                    <div className="text-xs md:text-sm text-muted-foreground">Uptime</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChromeBadge;
