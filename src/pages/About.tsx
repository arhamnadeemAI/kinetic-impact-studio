import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Rocket, Users, Heart, ArrowRight } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Alex Thompson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Maria Garcia",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    },
    {
      name: "Sophie Chen",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Excellence in Code",
      description:
        "We write clean, maintainable code following industry best practices. Quality is never compromised.",
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "We stay ahead of the curve, using the latest technologies to build cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description:
        "Your success is our success. We work collaboratively to understand and exceed your expectations.",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "We love what we do, and it shows in every project we deliver. Your vision becomes our mission.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            About Kinetic Web Labs
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're a passionate team of developers and designers crafting
            exceptional digital experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in the heart of Lahore, Pakistan, Kinetic Web Labs was
                born from a simple idea: businesses deserve websites and
                applications that are as dynamic and ambitious as they are.
              </p>
              <p>
                We're a modern web development studio led by passionate
                developers who believe in the power of technology to transform
                businesses. Our team specializes in building beautiful,
                high-performing web and mobile applications using cutting-edge
                technologies like React, Next.js, Flutter, Firebase, Node.js,
                and Django.
              </p>
              <p>
                What sets us apart is our commitment to understanding your unique
                needs and translating them into digital solutions that not only
                look amazing but drive real business results. Whether you're a
                startup looking for your first website or an established business
                ready to scale, we're here to be your digital partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="shadow-medium">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented individuals passionate about creating amazing digital
              experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-medium">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-display font-semibold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Technologies We Love
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We use modern, proven technologies to build scalable and
              maintainable solutions
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Flutter",
                "Node.js",
                "Django",
                "Firebase",
                "Supabase",
                "Tailwind CSS",
                "WordPress",
                "Shopify",
                "PostgreSQL",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's turn your vision into reality. Get in touch to discuss your
            project.
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

export default About;
