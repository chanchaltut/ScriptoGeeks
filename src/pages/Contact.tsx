
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-on-scroll">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-on-scroll">
              Get in touch with us for any inquiries or collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-card p-6 animate-on-scroll hover-scale">
                <h2 className="text-2xl font-bold mb-6 text-gradient">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-primary-dark" />
                    <p>contact@codingclub.com</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary-dark" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-primary-dark" />
                    <p>123 Tech Street, Innovation City, 12345</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 animate-on-scroll hover-scale">
                <h2 className="text-2xl font-bold mb-6 text-gradient">Office Hours</h2>
                <p className="mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6 text-gradient">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-dark focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2"
                >
                  Send Message
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

export default Contact;
