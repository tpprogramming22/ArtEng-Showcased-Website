import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function FAQPage() {
  // sample data
  const faqs = [
    {
      question: "What is ArtEng?",
      answer: "ArtEng is an organization dedicated to bringing together artists and engineers to collaborate on innovative projects. We host events, workshops, and exhibitions that explore the intersection of art and technology."
    },
    {
      question: "How can I participate in ArtEng events?",
      answer: "Most of our events are open to the public and can be found on our Events page. Some specialized workshops may require registration. You can sign up for our newsletter to stay informed about upcoming opportunities."
    },
    {
      question: "Do I need a technical background to attend your events?",
      answer: "Not at all! Our events are designed to be accessible to people with diverse backgrounds. Whether you're an artist curious about technology or an engineer interested in creative applications, you'll find something valuable in our programming."
    },
    {
      question: "Can my organization partner with ArtEng?",
      answer: "Yes, we're always interested in new partnerships. Please visit our Partners page for more information on collaboration opportunities, or contact us directly to discuss potential partnerships."
    },
    {
      question: "Are there opportunities to volunteer with ArtEng?",
      answer: "Absolutely! We rely on volunteers for many of our events and initiatives. If you're interested in volunteering, please reach out to us through the contact form on this website."
    },
    {
      question: "How can I exhibit my work at an ArtEng event?",
      answer: "We regularly put out calls for proposals for our exhibitions. These are announced on our website and social media channels. You can also contact us directly if you have a specific project you'd like to propose."
    },
    {
      question: "Does ArtEng offer funding for collaborative projects?",
      answer: "We occasionally offer grants and financial support for projects that align with our mission. Check our News section for announcements about funding opportunities."
    },
    {
      question: "Can I book ArtEng for a private event or workshop?",
      answer: "Yes, we offer custom workshops and presentations for private events, educational institutions, and corporate settings. Please contact us with details about your needs, and we'll work with you to create a tailored experience."
    },
    {
      question: "How did ArtEng start?",
      answer: "ArtEng began in 2000 as informal meetups between artists and engineers interested in interdisciplinary collaboration. Over the years, it has grown into a formal organization with a global presence, but we maintain our commitment to fostering creative connections across disciplines."
    },
    {
      question: "I have more questions. How can I contact ArtEng?",
      answer: "You can reach us through the contact form on this website, or email us directly at info@arteng.org. We aim to respond to all inquiries within 2-3 business days."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg">Find answers to common questions about ArtEng and our programs.</p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-md overflow-hidden">
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 font-medium text-arteng-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-arteng-dark mb-4">Still Have Questions?</h2>
          <p className="mb-8">
            If you couldn't find the answer to your question, feel free to contact us directly.
          </p>
          <button className="bg-arteng-dark text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}