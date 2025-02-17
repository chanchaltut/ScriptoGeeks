
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Hackathon 2024",
      date: "March 15-16, 2024",
      time: "48 Hours",
      location: "Main Campus",
      description: "Annual hackathon focused on solving real-world problems with innovative solutions.",
      image: "/placeholder.svg",
    },
    {
      title: "Web Development Workshop",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Tech Hub",
      description: "Learn modern web development with React and Node.js.",
      image: "/placeholder.svg",
    },
    {
      title: "AI/ML Bootcamp",
      date: "March 25, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Center",
      description: "Intensive bootcamp covering machine learning fundamentals.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-on-scroll">
              Events
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-on-scroll">
              Join us for exciting workshops, hackathons, and tech talks.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient animate-on-scroll">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden animate-on-scroll hover-scale"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-foreground/80">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-foreground/80">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-foreground/80">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-4">{event.description}</p>
                  <button className="w-full px-4 py-2 text-white bg-primary hover:bg-primary-dark rounded-full transition-colors duration-300 flex items-center justify-center gap-2">
                    Register Now
                    <Users className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
