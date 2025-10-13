import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ExternalLink, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Home = () => {
  const contactFormRef = useRef<HTMLFormElement>(null);

  const portfolioWorks = [
    {
      title: "Future Fitz",
      url: "https://futurefitz.netlify.app/",
      description: "Modern fitness tracking application",
    },
    {
      title: "NFDC",
      url: "https://nfdc.netlify.app/",
      description: "Professional corporate website",
    },
    {
      title: "Kinetic Kube",
      url: "https://kinetickube.netlify.app/",
      description: "Creative agency showcase",
    },
    {
      title: "DOI E-Commerce",
      url: "https://doitecommerce.netlify.app/",
      description: "Full-featured online store",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "NexoriaTech transformed our online presence completely. The new website has increased our conversions by 150%. Highly recommended!",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthHub",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      text: "Professional, creative, and incredibly responsive. They delivered our Shopify store ahead of schedule and it's been performing amazingly.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Bloom Co",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      text: "The team's expertise in React development is outstanding. Our web app is fast, beautiful, and our users love it. Worth every penny!",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!contactFormRef.current) return;

    try {
      await emailjs.sendForm(
        "service_jcsxhae",
        "template_g81te17",
        contactFormRef.current,
        "y88glUlsupKxOZLz7"
      );

      toast.success("Message sent successfully! We'll get back to you soon.");
      contactFormRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-hero opacity-60"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-fade-in-up">
            We Build Beautiful Websites
            <br />
            <span className="gradient-accent bg-clip-text text-transparent">
              That Convert
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up">
            Transform your digital presence with custom web solutions. From
            stunning designs to powerful applications, we bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-white text-foreground hover:bg-white/90"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-foreground"
              asChild
            >
              <a
                href="https://calendly.com/arham786ch/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Our Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of our recent projects that showcase our
              expertise in web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioWorks.map((work, index) => (
              <Card
                key={index}
                className="group hover:shadow-large transition-smooth overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-xl mb-2">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {work.description}
                      </p>
                    </div>
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  >
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses we've
              helped succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive digital solutions to help your business thrive
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "Web Design & Development",
              "WordPress Development",
              "Shopify Stores",
              "React / Next.js Apps",
              "Mobile App Development",
              "SEO & Performance",
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-medium transition-smooth">
                <CardContent className="p-6">
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gradient-hero">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a free quote for your project. We'll respond within 24 hours.
            </p>
          </div>

          <Card className="shadow-large">
            <CardContent className="p-8">
              <form ref={contactFormRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="user_name"
                      required
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project..."
                    className="w-full min-h-32"
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
      </section>
    </div>
  );
};

export default Home;
