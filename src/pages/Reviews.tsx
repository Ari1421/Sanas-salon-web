import Layout from "@/components/Layout";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const allReviews = [
  { name: "Priya S.", text: "Best salon in Ashok Nagar! The bridal package was absolutely amazing. My wedding day look was perfect. Highly recommend!", rating: 5 },
  { name: "Rahul M.", text: "Great haircut and styling. The staff is very professional and friendly. Will definitely come back.", rating: 5 },
  { name: "Anitha K.", text: "The hair spa treatment was wonderful. My hair feels so much healthier now. Love this place!", rating: 5 },
  { name: "Deepa R.", text: "Got my keratin treatment done here. The results are stunning! Best keratin service in Chennai.", rating: 5 },
  { name: "Suresh V.", text: "Professional service, great ambience. The gents haircut was perfect. Very reasonable pricing too.", rating: 4 },
  { name: "Meena L.", text: "The hydra facial was incredibly refreshing. My skin has never looked better. Thank you Sana's!", rating: 5 },
  { name: "Kavitha P.", text: "Amazing nail extensions! They look so natural and lasted really long. The artists here are very skilled.", rating: 5 },
  { name: "Arjun D.", text: "Clean and hygienic salon. The staff takes safety very seriously. Got a great haircut with perfect styling.", rating: 5 },
  { name: "Lakshmi N.", text: "The bridal glow facial made my skin look absolutely radiant for my engagement. Can't wait for the bridal package!", rating: 5 },
];

const Reviews = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-secondary text-secondary" />
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-2">4.8 Rating</h1>
            <p className="text-muted-foreground text-lg">430+ Happy Clients Love Us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allReviews.map((review, i) => (
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

          <div className="text-center mt-12">
            <Link to="/book">
              <Button size="lg" className="font-semibold px-8">Book Your Visit Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
