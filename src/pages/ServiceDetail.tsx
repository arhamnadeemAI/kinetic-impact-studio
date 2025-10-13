import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">{service.tagline}</p>
            <Button
              asChild
              size="lg"
              className="bg-white text-foreground hover:bg-white/90"
            >
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
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Service Overview
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="p-6 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <Card key={index} className="shadow-medium text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your
            goals. Book a free consultation call today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90"
          >
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

export default ServiceDetail;
