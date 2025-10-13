import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_jcsxhae",
        "template_g81te17",
        formRef.current,
        "y88glUlsupKxOZLz7"
      );

      toast.success("Message sent successfully! We'll get back to you soon.");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your
            vision to life
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Email Us
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Send us an email anytime
                  </p>
                  <a
                    href="mailto:hello@kineticweblabs.com"
                    className="text-primary hover:underline"
                  >
                    hello@kineticweblabs.com
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Call Us
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Available Mon-Fri, 9am-6pm PKT
                  </p>
                  <a
                    href="tel:+923204516454"
                    className="text-primary hover:underline"
                  >
                    +92 320 4516454
                  </a>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground">
                    Lahore, Punjab
                    <br />
                    Pakistan
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-large">
                <CardContent className="p-8">
                  <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">
                    Send Us a Message
                  </h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="user_name"
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="user_email"
                          type="email"
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="user_phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="Website Development Project"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your project, timeline, and budget..."
                        className="min-h-40"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full gradient-hero">
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="shadow-large overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435520.4185685425!2d74.00472!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kinetic Web Labs Location"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Prefer to Schedule a Call?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss your project in detail
          </p>
          <Button asChild size="lg" className="gradient-hero">
            <a
              href="https://calendly.com/arham786ch/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
