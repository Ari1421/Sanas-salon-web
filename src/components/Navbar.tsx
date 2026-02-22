import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-wine-light/30">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl md:text-2xl font-bold text-primary-foreground tracking-wide">
            Sana's
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-secondary">
            Unisex Salon
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm tracking-wider uppercase transition-colors hover:text-secondary ${
                location.pathname === link.path
                  ? "text-secondary font-semibold"
                  : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book">
            <Button variant="secondary" size="sm" className="font-semibold tracking-wide">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href="tel:+919363891261" className="text-secondary">
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-wine-light/30 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-sm tracking-wider uppercase ${
                  location.pathname === link.path
                    ? "text-secondary font-semibold"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="w-full font-semibold tracking-wide">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
