import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow. From web
            development to mobile apps, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group hover:shadow-large transition-smooth"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary mb-3 text-sm font-medium">
                      {service.tagline}
                    </p>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    >
                      <Link to={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life. Book a free
            consultation call today.
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

export default Services;
