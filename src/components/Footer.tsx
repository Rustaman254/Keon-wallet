import { Linkedin, Twitter, Youtube, Github } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Supported Chains", href: "#chains" },
      { name: "Infrastructure", href: "#" },
      { name: "API Access", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "API Reference", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">✦</span>
              </div>
              <span className="text-xl font-bold">Multichain</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              The most advanced multichain<br />
              blockchain crypto mining platform today.<br />
              50+ thousand worldwide.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MultichainMine. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Legal Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
