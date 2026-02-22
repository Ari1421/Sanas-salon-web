import Layout from "@/components/Layout";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Contact & Location</h1>
            <p className="text-muted-foreground">We'd love to hear from you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden aspect-video md:aspect-auto md:min-h-[400px]">
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

            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">Get in Touch</h2>

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
                  <h4 className="font-heading font-semibold text-foreground mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">9:00 AM – 8:00 PM (All Days)</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Link to="/book" className="flex-1">
                  <Button className="w-full font-semibold">Book Appointment</Button>
                </Link>
                <a
                  href="https://wa.me/919363891261?text=Hi%2C%20I%20have%20a%20query%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
