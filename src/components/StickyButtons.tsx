import { Phone, MessageCircle } from "lucide-react";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href="https://wa.me/919363891261?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[hsl(142,70%,40%)] text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+919363891261"
        className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default StickyButtons;
