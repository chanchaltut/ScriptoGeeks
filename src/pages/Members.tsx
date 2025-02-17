
import { Users, Star, Code, Award } from "lucide-react";

const Members = () => {
  const coreTeam = [
    {
      name: "Alex Chen",
      role: "President",
      image: "/placeholder.svg",
      expertise: "Full Stack Development",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sarah Johnson",
      role: "Vice President",
      image: "/placeholder.svg",
      expertise: "AI/ML",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Michael Park",
      role: "Technical Lead",
      image: "/placeholder.svg",
      expertise: "Cloud Architecture",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Emily Rodriguez",
      role: "Event Coordinator",
      image: "/placeholder.svg",
      expertise: "Mobile Development",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-on-scroll">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-on-scroll">
              Meet the passionate individuals driving innovation and excellence in our coding community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient animate-on-scroll">
            Core Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-on-scroll hover-scale"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover animate-float"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-dark mb-2">{member.role}</p>
                <p className="text-sm text-foreground/80 mb-4">{member.expertise}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary-dark transition-colors"
                  >
                    <Code className="w-5 h-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary-dark transition-colors"
                  >
                    <Users className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient animate-on-scroll">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "National Champions",
                description: "Won multiple national-level coding competitions",
              },
              {
                icon: Code,
                title: "Open Source",
                description: "Contributing to major open source projects",
              },
              {
                icon: Award,
                title: "Innovation Awards",
                description: "Recognized for technical innovation excellence",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-on-scroll hover-scale"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary-dark animate-float" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-foreground/80">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
