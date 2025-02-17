import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-background to-secondary/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">ScriptoGeeks</h3>
            <p className="text-foreground/80">
              Empowering students through coding education and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary-dark transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary-dark transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-foreground/80 hover:text-primary-dark transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-foreground/80 hover:text-primary-dark transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/members"
                  className="text-foreground/80 hover:text-primary-dark transition-colors"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="text-foreground/80 hover:text-primary-dark transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contact@scriptogeeks.com</span>
              </li>
              <li className="flex items-center space-x-2 text-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>123 Tech Street, Innovation City</span>
              </li>
            </ul>
          </div>

          {/* Join Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Join Us</h3>
            <p className="text-foreground/80">
              Become a part of our growing community.
            </p>
            <Link
              to="/join"
              className="inline-block px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-full transition-colors duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200/20 pt-8 text-center text-foreground/60">
          <p>© {currentYear} ScriptoGeeks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
