
import { useEffect } from "react";
import { ArrowRight, Code, Users, Calendar, Star, Terminal, Rocket, Trophy, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/5" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-on-scroll">
            Welcome to Coding Club
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-on-scroll">
            Where innovation meets code. Join us in exploring the frontiers of
            technology and building the future together.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-colors duration-300 animate-on-scroll hover:scale-105 transform"
          >
            Join Our Community
            <ArrowRight className="ml-2 animate-bounce" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Code, label: "Projects", value: "50+" },
              { icon: Users, label: "Members", value: "200+" },
              { icon: Calendar, label: "Events", value: "24+" },
              { icon: Star, label: "Awards", value: "15+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-on-scroll hover-scale"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-dark animate-float" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-t from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient animate-on-scroll">
            Why Join Our Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Terminal,
                title: "Hands-on Learning",
                description: "Get practical experience with real-world projects and industry-standard tools.",
              },
              {
                icon: Rocket,
                title: "Innovation Hub",
                description: "Be part of a community that pushes the boundaries of technology.",
              },
              {
                icon: Trophy,
                title: "Competitions",
                description: "Participate in hackathons and coding competitions to showcase your skills.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 text-center animate-on-scroll hover-scale"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <feature.icon className="w-16 h-16 mx-auto mb-6 text-primary-dark animate-float" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 animate-on-scroll">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
                Global Impact
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                Our members are making waves in the tech industry, contributing to open-source
                projects, and building solutions that impact millions of users worldwide.
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 hover:scale-105 transform"
              >
                View Our Projects
                <Globe className="ml-2 animate-spin-slow" />
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-full bg-gradient-to-r from-primary-light via-accent to-primary-dark opacity-20 absolute inset-0 animate-pulse" />
              <div className="relative z-10">
                <Globe className="w-48 h-48 mx-auto text-primary-dark animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient animate-on-scroll">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 animate-on-scroll">
            Join our community of passionate developers and start building the future today.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 animate-on-scroll hover:scale-105 transform"
          >
            Apply Now
            <Rocket className="ml-2 animate-bounce" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
