import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import bridalImage from "@/assets/bridal-highlight.jpg";
import heroImage from "@/assets/hero-salon.jpg";
import galleryFacial from "@/assets/gallery-facial.jpg";
import galleryHaircolor from "@/assets/gallery-haircolor.jpg";
import galleryPedicure from "@/assets/gallery-pedicure.jpg";
import beforeAfter1 from "@/assets/gallery-before-after-1.jpg";
import beforeAfter2 from "@/assets/gallery-before-after-2.jpg";
import beforeAfter3 from "@/assets/gallery-before-after-3.jpg";

const images = [
  { src: gallery1, label: "Hair Styling" },
  { src: bridalImage, label: "Bridal Makeup" },
  { src: galleryFacial, label: "Facial Treatment" },
  { src: gallery2, label: "Premium Products" },
  { src: galleryHaircolor, label: "Hair Color & Highlights" },
  { src: gallery3, label: "Nail Art" },
  { src: galleryPedicure, label: "Pedicure & Grooming" },
  { src: heroImage, label: "Salon Interior" },
];

const beforeAfterItems = [
  { src: beforeAfter1, title: "Keratin Hair Treatment", desc: "From frizzy to silky smooth" },
  { src: beforeAfter2, title: "Bridal Makeup", desc: "Complete bridal transformation" },
  { src: beforeAfter3, title: "Facial Glow Treatment", desc: "Radiant, glowing skin" },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Gallery</h1>
            <p className="text-muted-foreground">A glimpse of our work and space</p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div key={i} className="group relative rounded-lg overflow-hidden break-inside-avoid">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-heading text-lg text-secondary font-semibold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Before & After</h2>
            <p className="text-muted-foreground">See the transformations our experts create</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfterItems.map((item, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-5 text-center">
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background text-center">
        <p className="text-muted-foreground mb-4">Love what you see?</p>
        <Link to="/book">
          <Button size="lg" className="font-semibold px-8">Book Your Appointment</Button>
        </Link>
      </section>
    </Layout>
  );
};

export default Gallery;
