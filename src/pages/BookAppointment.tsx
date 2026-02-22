import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Ladies Haircut",
  "Gents Haircut",
  "Hair Spa",
  "Keratin Treatment",
  "Hair Color",
  "Facial",
  "Threading",
  "Manicure",
  "Pedicure",
  "Party Makeup",
  "Bridal Makeup",
  "Bridal Package",
  "Other",
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM",
];

const BookAppointment = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date ? format(date, "PPP") : "Not selected"}\nTime: ${time}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919363891261?text=${encodedText}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 text-center max-w-md">
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Thank You!</h1>
            <p className="text-muted-foreground mb-8">
              Your booking request has been sent via WhatsApp. We'll confirm your appointment shortly.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Book Another Appointment
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
              Book Appointment
            </h1>
            <p className="text-muted-foreground">
              Fill in your details and we'll confirm via WhatsApp
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-card border border-border rounded-lg p-6 md:p-8">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your full name" maxLength={100} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="+91 XXXXX XXXXX" maxLength={15} />
            </div>

            <div className="space-y-2">
              <Label>Service *</Label>
              <Select value={service} onValueChange={setService} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {serviceOptions.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Preferred Time</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message (optional)</Label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Any special requests..." maxLength={500} rows={3} />
            </div>

            <Button type="submit" size="lg" className="w-full font-semibold">
              Confirm Booking via WhatsApp
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default BookAppointment;
