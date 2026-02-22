import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Scissors, Sparkles, Hand, Heart } from "lucide-react";

const serviceCategories = [
  {
    id: "hair",
    icon: Scissors,
    title: "Hair Services",
    subcategories: [
      {
        name: "Haircut",
        items: [
          { service: "Ladies Haircut", price: "₹350" },
          { service: "Gents Haircut", price: "₹250" },
          { service: "Kids Haircut", price: "₹250" },
          { service: "Fringe / Step Cut", price: "₹300" },
        ],
      },
      {
        name: "Hair Spa",
        items: [
          { service: "Basic", price: "₹799" },
          { service: "Damage Repair", price: "₹1,499" },
          { service: "Dandruff Control", price: "₹1,299" },
        ],
      },
      {
        name: "Hair Treatment",
        items: [
          { service: "Keratin (Shoulder)", price: "₹3,500" },
          { service: "Keratin (Waist)", price: "₹5,500" },
          { service: "Botox (Shoulder)", price: "₹4,500" },
          { service: "Botox (Waist)", price: "₹6,500" },
        ],
      },
      {
        name: "Hair Color",
        items: [
          { service: "Root Touchup", price: "₹800" },
          { service: "Global Short", price: "₹1,499" },
          { service: "Global Long", price: "₹2,499" },
          { service: "Highlights", price: "₹300/streak" },
          { service: "Fashion Color", price: "₹3,500" },
        ],
      },
    ],
  },
  {
    id: "skin",
    icon: Sparkles,
    title: "Skin Services",
    subcategories: [
      {
        name: "Threading",
        items: [
          { service: "Eyebrows", price: "₹50" },
          { service: "Upper Lip", price: "₹50" },
          { service: "Full Face", price: "₹200" },
        ],
      },
      {
        name: "Detan",
        items: [
          { service: "Face & Neck", price: "₹450" },
          { service: "Full Body", price: "₹1,999" },
        ],
      },
      {
        name: "Facials",
        items: [
          { service: "Hydra Facial", price: "₹1,999" },
          { service: "Bridal Glow", price: "₹2,499" },
          { service: "Gold Facial", price: "₹1,499" },
          { service: "O3+ Brightening", price: "₹1,799" },
        ],
      },
    ],
  },
  {
    id: "nails",
    icon: Hand,
    title: "Nail & Grooming",
    subcategories: [
      {
        name: "Manicure",
        items: [{ service: "Manicure", price: "₹250 – ₹1,499" }],
      },
      {
        name: "Pedicure",
        items: [{ service: "Pedicure", price: "₹550 – ₹1,599" }],
      },
      {
        name: "Nail Extensions",
        items: [{ service: "Nail Extensions", price: "₹1,999 – ₹2,499" }],
      },
    ],
  },
  {
    id: "bridal",
    icon: Heart,
    title: "Makeup & Bridal",
    subcategories: [
      {
        name: "Makeup",
        items: [
          { service: "Party Makeup", price: "₹3,500" },
          { service: "Engagement Makeup", price: "₹7,000" },
          { service: "Bridal Makeup", price: "₹10,000" },
        ],
      },
      {
        name: "Bridal Packages",
        items: [
          { service: "Basic Package", price: "₹15,000" },
          { service: "Premium Package", price: "₹25,000" },
        ],
      },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Services & Pricing
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Explore our comprehensive range of beauty services crafted to perfection
            </p>
          </div>

          <div className="space-y-6">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center gap-3">
                  <category.icon className="w-6 h-6 text-secondary" />
                  <h2 className="font-heading text-xl font-semibold">{category.title}</h2>
                </div>
                <Accordion type="multiple" className="px-4 md:px-6">
                  {category.subcategories.map((sub, i) => (
                    <AccordionItem key={i} value={`${category.id}-${i}`}>
                      <AccordionTrigger className="font-heading font-semibold text-foreground hover:text-primary">
                        {sub.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {sub.items.map((item, j) => (
                            <div
                              key={j}
                              className="flex items-center justify-between py-2 px-3 rounded-md bg-muted/50"
                            >
                              <span className="text-foreground text-sm">{item.service}</span>
                              <span className="font-semibold text-primary text-sm">{item.price}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/book">
              <Button size="lg" className="font-semibold px-8">Book Appointment Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
