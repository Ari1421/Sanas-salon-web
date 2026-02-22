import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-wine text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-2">Sana's</h3>
            <p className="text-xs tracking-[0.3em] uppercase text-secondary mb-4">Unisex Salon</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium beauty services in the heart of Ashok Nagar, Chennai. Where style meets perfection.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Book Appointment", path: "/book" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-secondary">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <span>X-8/1 12th Avenue, Near KFC, Ashok Nagar, Chennai - 600083</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:+919363891261" className="hover:text-secondary transition-colors">+91 93638 91261</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                <span>9:00 AM – 8:00 PM (All Days)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} Sana's Unisex Salon. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
