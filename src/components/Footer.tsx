import { Link } from "react-router-dom";
import { Code2, Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                <Code2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Kinetic Web Labs
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Building beautiful, high-converting websites and applications that
              help businesses grow. From concept to launch, we're your digital
              partner.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background flex items-center justify-center transition-smooth hover:bg-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background flex items-center justify-center transition-smooth hover:bg-primary hover:text-primary-foreground"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background flex items-center justify-center transition-smooth hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:hello@kineticweblabs.com"
                  className="hover:text-primary transition-smooth"
                >
                  hello@kineticweblabs.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+923204516454"
                  className="hover:text-primary transition-smooth"
                >
                  +92 320 4516454
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {currentYear} Kinetic Web Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
