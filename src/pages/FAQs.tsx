import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I join the ScriptoGeeks?",
      answer:
        "You can join by filling out the application form on our Join page. We accept new members at the beginning of each semester.",
    },
    {
      question: "What programming languages do you focus on?",
      answer:
        "We work with various languages including Python, JavaScript, Java, and C++. Our focus is on practical applications and modern development practices.",
    },
    {
      question: "Do I need prior coding experience?",
      answer:
        "No, we welcome members of all skill levels! We have programs and mentorship opportunities for beginners.",
    },
    {
      question: "How often do you organize events?",
      answer:
        "We organize weekly workshops, monthly hackathons, and several major events throughout the academic year.",
    },
    {
      question: "Can I participate in projects?",
      answer:
        "Yes! We encourage all members to participate in our ongoing projects. You can join existing projects or propose new ones.",
    },
    {
      question: "Is there a membership fee?",
      answer:
        "No, membership is free for all students. We believe in making coding accessible to everyone.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-on-scroll">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-on-scroll">
              Find answers to common questions about our ScriptoGeeks.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden animate-on-scroll"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <div className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-3 text-primary-dark" />
                    <span className="font-medium">{faq.question}</span>
                  </div>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary-dark" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary-dark" />
                  )}
                </button>
                <div
                  className={`px-6 pb-6 transition-all duration-300 ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-foreground/80 ml-8">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
