import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Get in touch with the ArtEng team.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-arteng-dark mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p><a href="mailto:info@arteng.co.uk" className="text-blue-600 hover:underline">info@arteng.co.uk</a></p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p><a href="tel:+441234567890" className="text-blue-600 hover:underline">+44 (0) 1234 567890</a></p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Social Media</h3>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.linkedin.com/company/arteng-uk" className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-2">Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-arteng-dark mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-arteng-dark focus:border-arteng-dark"
                    required
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit" 
                    className="bg-arteng-dark text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-arteng-dark mb-4">Have Questions?</h2>
          <p className="mb-8">
            Check out our frequently asked questions for quick answers to common queries.
          </p>
          <Link href="/faq">
            <button className="bg-arteng-dark text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors">
              View FAQ
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}