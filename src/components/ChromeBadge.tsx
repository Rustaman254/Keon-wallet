import { Chrome, Star } from "lucide-react";

const ChromeBadge = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl p-12 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 text-center">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                            {/* Chrome Icon */}
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 mb-6">
                                <Chrome className="w-10 h-10 text-primary" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-2 text-2xl font-bold">4.8/5</span>
                            </div>

                            {/* Text */}
                            <h3 className="text-3xl font-bold mb-3">Available on Chrome Web Store</h3>
                            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                                Join thousands of users who trust Keon Wallet for their Starknet transactions
                            </p>

                            {/* CTA Button */}
                            <button className="btn-primary">
                                <Chrome className="w-5 h-5" />
                                Add to Chrome - It's Free
                            </button>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-1">10K+</div>
                                    <div className="text-sm text-muted-foreground">Active Users</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-1">500+</div>
                                    <div className="text-sm text-muted-foreground">5-Star Reviews</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                                    <div className="text-sm text-muted-foreground">Uptime</div>
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
