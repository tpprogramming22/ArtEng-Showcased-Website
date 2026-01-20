import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from 'next/link';

export default function FAQPage() {
  // sample data
  const faqs = [
    {
      question: "What is ArtEng?",
      answer:
        "We are a membership organisation which will bring the art and engineering sectors together through business networking to introduce professionals, from both sectors, to join forces to share ideas and best practice. We also host events to our members to offer networking opportunities to engage with key businesses to help their businesses to grow.",
    },
    {
      question: "Who can become a member?",
      answer:
        "Membership is open to all businesses and individuals who are interested in meeting likeminded businesses and business owners.",
    },
    {
      question: "How do I join?",
      answer:
        "You can become a member by reaching out to either Wendy or Stephen, their LinkedIns can be found on the membership page.",
    },
    {
      question: "What are the benefits of membership?",
      answer:
        "Members enjoy a range of benefits, including access to exclusive events and networking opportunities, discounts on services, products, or events, access to member-only events and seminars and much more.",
    },
    {
      question: "How much does membership cost?",
      answer:
        "Our standard membership fee is £495 per annum. Under this membership options, access to member events will be limited to two per organisation. We also offer a partner package with the price available on application. Please contact us to find out more.",
    },
    {
      question: "How long does membership last?",
      answer:
        "Membership is valid for one year from the date of joining. You will receive a reminder before your membership expires so you can renew it on time.",
    },
    {
      question: "How can I renew my membership?",
      answer:
        "Renewal is simple. Log into your account on our website, navigate to the membership renewal section, and follow the prompts to make your payment.",
    },
    {
      question: "What if I need to cancel my membership?",
      answer:
        "You can cancel your membership at any time by contacting our team however, please note that membership fees are non-refundable.",
    },
    {
      question: "How can I get involved in the organisation?",
      answer:
        "We offer many opportunities for members to get involved, speaking and participating in events as well as sponsoring various elements of our events, the website and communications methods.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4 text-left">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-left">
            Have a question about ArtEng? Whether it's about membership,
            becoming a partner, one of our networking events or how to get the
            best out of ArtEng, your question could be answered here.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-md overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 font-medium text-arteng-dark text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  <p className="text-gray-700 text-left">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-arteng-dark mb-4 text-left">
            Still Have Questions?
          </h2>
          <p className="mb-8 text-left">
            If you couldn't find the answer to your question, feel free to
            contact us directly.
          </p>
          <div className="text-left">
            <Link href="/contact">
              <button className="text-white bg-arteng-dark px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
