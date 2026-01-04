import { Linkedin, Twitter, Github, Wallet } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Security", href: "#security" },
      { name: "Networks", href: "#networks" },
      { name: "Roadmap", href: "#pricing" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    community: [
      { name: "Discord", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Blog", href: "#" },
    ],
  };

  return (
    <footer className="relative py-12 md:py-20 border-t border-white/10 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-8 mb-10 md:mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center mb-4 md:mb-6">
              <img src="/logo.png" alt="Keon Wallet Logo" className="h-8 md:h-10 w-auto" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-sm text-sm md:text-base">
              The most advanced Starknet wallet designed for the next generation of
              users and developers. Secure, seamless, and open source.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 md:gap-4">
              {[Twitter, Github, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-secondary hover:bg-primary/10 border border-white/5 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-start-6 md:col-span-2">
            <h4 className="font-bold mb-4 md:mb-6 text-foreground text-sm md:text-base">Product</h4>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4 md:mb-6 text-foreground text-sm md:text-base">Resources</h4>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className="md:col-span-2">
            <h4 className="font-bold mb-4 md:mb-6 text-foreground text-sm md:text-base">Community</h4>
            <ul className="space-y-3 md:space-y-4">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-muted-foreground font-medium text-center md:text-left">
            © 2025 Keon Wallet. Open source under MIT License.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
