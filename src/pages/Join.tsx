
import { useState } from "react";
import { ArrowRight, BookOpen, Users, Code, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    interests: "",
    experience: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to your backend
    toast({
      title: "Application Submitted!",
      description: "We'll get back to you soon.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-on-scroll">
              Join Our Community
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-on-scroll">
              Be part of a vibrant community of developers, innovators, and tech enthusiasts.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: BookOpen,
                title: "Learn & Grow",
                description: "Access workshops, tutorials, and mentorship opportunities",
              },
              {
                icon: Users,
                title: "Network",
                description: "Connect with like-minded individuals and industry professionals",
              },
              {
                icon: Code,
                title: "Build",
                description: "Work on real projects and strengthen your portfolio",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center animate-on-scroll hover-scale"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary-dark animate-float" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-foreground/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gradient text-center">
                Application Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Year of Study</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select Year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Fourth Year</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Areas of Interest</label>
                    <input
                      type="text"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      placeholder="Web Development, AI, Mobile Apps, etc."
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Coding Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select Experience Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Why do you want to join?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2"
                >
                  Submit Application
                  <Send className="w-5 h-5 animate-bounce" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
