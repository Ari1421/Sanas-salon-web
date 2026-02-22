import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Award, Sparkles, Heart, Scissors, Droplet, Gem, Hand, MapPin, Phone, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-salon.jpg";
import bridalImage from "@/assets/bridal-highlight.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const services = [
  { icon: Scissors, label: "Haircut & Styling", desc: "Expert cuts for all" },
  { icon: Droplet, label: "Hair Spa & Keratin", desc: "Deep nourishment" },
  { icon: Sparkles, label: "Facials & Cleanup", desc: "Radiant glow" },
  { icon: Heart, label: "Bridal Makeup", desc: "Your perfect day" },
  { icon: Hand, label: "Manicure & Pedicure", desc: "Pamper yourself" },
  { icon: Gem, label: "Waxing & Threading", desc: "Smooth perfection" },
];

const reviews = [
  { name: "Priya S.", text: "Best salon in Ashok Nagar! The bridal package was absolutely amazing. Highly recommend!", rating: 5 },
  { name: "Rahul M.", text: "Great haircut and styling. The staff is very professional and friendly. Will definitely come back.", rating: 5 },
  { name: "Anitha K.", text: "The hair spa treatment was wonderful. My hair feels so much healthier now. Love this place!", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Sana's Unisex Salon Interior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-secondary text-sm md:text-base tracking-[0.4em] uppercase mb-4 animate-fade-in-up">
            Welcome to
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Sana's Unisex Salon
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Premium Unisex Salon in Ashok Nagar, Chennai
          </p>
          <p className="text-secondary/80 text-sm md:text-base mb-8 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            Where Style Meets Perfection – Hair • Skin • Nails • Bridal
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <Link to="/book">
              <Button size="lg" variant="secondary" className="text-base font-semibold px-8 shadow-gold">
                Book Appointment
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Star, label: "4.8 Rating", sub: "430+ Reviews" },
              { icon: Award, label: "Est. 2024", sub: "Trusted Brand" },
              { icon: Sparkles, label: "Premium Products", sub: "Top Brands" },
              { icon: Heart, label: "Bridal Specialists", sub: "Experts" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1 py-2">
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="font-heading text-sm font-semibold">{item.label}</span>
                <span className="text-[11px] text-primary-foreground/60">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-primary">Sana's</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Sana's Unisex Salon is one of the top-rated salons in Ashok Nagar, Chennai, known for exceptional customer service and premium beauty treatments. From haircuts to bridal makeovers, we ensure perfection in every service.
          </p>
          <Link to="/about">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Read More
            </Button>
          </Link>
        </div>
      </section>

      {/* Signature Services */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Our Signature Services
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
            Experience world-class beauty services crafted just for you
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <Link
                key={i}
                to="/services"
                className="group bg-card rounded-lg p-6 text-center border border-border hover:border-secondary hover:shadow-gold transition-all duration-300"
              >
                <service.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-secondary transition-colors" />
                <h3 className="font-heading text-sm md:text-base font-semibold text-foreground mb-1">{service.label}</h3>
                <p className="text-xs text-muted-foreground">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="default" className="font-semibold">View All Services & Prices</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Bridal Highlight */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={bridalImage}
          alt="Bridal Makeup"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-secondary tracking-[0.3em] uppercase text-sm mb-3">Exclusive</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Premium Bridal Makeup & Packages
          </h2>
          <p className="text-primary-foreground/80 text-xl mb-8">Starting ₹15,000</p>
          <Link to="/book">
            <Button size="lg" variant="secondary" className="font-semibold px-8 shadow-gold">
              Book Bridal Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { img: gallery1, label: "Hair Styling" },
              { img: gallery2, label: "Premium Products" },
              { img: gallery3, label: "Nail Art" },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-heading text-lg text-primary-foreground font-semibold">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">4.8 Rating</h2>
            <p className="text-muted-foreground">430+ Happy Clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-heading font-semibold text-foreground">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8!2d80.21!3d13.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI0LjAiTiA4MMKwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sana's Unisex Salon Location"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground text-sm">X-8/1 12th Avenue, Near KFC, Ashok Nagar, Chennai - 600083</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Phone</h4>
                  <a href="tel:+919363891261" className="text-muted-foreground text-sm hover:text-primary transition-colors">+91 93638 91261</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Timings</h4>
                  <p className="text-muted-foreground text-sm">9:00 AM – 8:00 PM (All Days)</p>
                </div>
              </div>
              <Link to="/book">
                <Button className="w-full md:w-auto font-semibold">Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
