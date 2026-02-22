import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Award, Shield, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img src={heroImage} alt="Salon Interior" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto">Where style meets perfection in the heart of Chennai</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2024, Sana's Unisex Salon has quickly become one of the most trusted and top-rated salons in Ashok Nagar, Chennai. We believe everyone deserves to feel beautiful, confident, and pampered.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team of certified professionals uses only premium products and the latest techniques to deliver exceptional results. From a simple haircut to a complete bridal transformation, we pour our heart into every service.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Award, title: "Certified Professionals", desc: "Our team is trained and certified in the latest beauty techniques." },
              { icon: Shield, title: "Hygiene & Safety", desc: "We maintain the highest standards of cleanliness and sanitization." },
              { icon: Users, title: "1200+ Happy Clients", desc: "Trusted by hundreds of clients across Chennai." },
              { icon: Heart, title: "Premium Products", desc: "We use only top-tier brands for all our treatments." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border flex gap-4">
                <item.icon className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background text-center">
        <Link to="/book">
          <Button size="lg" className="font-semibold px-8">Book Your Appointment</Button>
        </Link>
      </section>
    </Layout>
  );
};

export default About;
