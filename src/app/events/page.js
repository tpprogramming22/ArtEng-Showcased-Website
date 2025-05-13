"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import MailtoNotifyForm from '@/components/SignUp';

// Modified Card component specifically for events
const EventCard = ({ 
  imageUrl, 
  title, 
  description, 
  dateTime, 
  location, 
  hostedBy, 
  onCardClick,
  aspectRatio = "aspect-video",
}) => {
  return (
    <div 
      className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200 flex flex-col h-full cursor-pointer hover:shadow-md transition-all"
      onClick={onCardClick}
    >
      <div className={`relative ${aspectRatio} bg-gray-200`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">Image placeholder</span>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2 text-arteng-dark">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{description}</p>
        
        <div className="mb-4 text-sm space-y-1 flex-grow">
          {dateTime && (
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{dateTime}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{location}</span>
            </div>
          )}
          {hostedBy && (
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Hosted by {hostedBy}</span>
            </div>
          )}
        </div>
        
        <div className="mt-auto flex justify-center w-full">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card's onClick from triggering
              onCardClick();
            }}
            className="inline-block bg-arteng-dark text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors w-32 text-center"
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Carousel events
  const carouselEvents = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "A hands-on workshop covering modern web development techniques and best practices.",
      imageUrl: "/exhibition-opening.jpg",
      dateTime: "Monday 15th May - 10:00 AM - 4:00 PM",
      location: "Tech Hub",
      hostedBy: "David Johnson",
      longDescription: "This intensive one-day workshop will cover the latest web development techniques, frameworks, and best practices. Participants will get hands-on experience building responsive websites using modern tools like React, Next.js, and Tailwind CSS. Whether you're a beginner looking to enter the field or an experienced developer wanting to update your skills, this workshop offers valuable insights and practical knowledge. All participants will receive a certificate of completion and follow-up resources to continue their learning journey."
    },
    {
      id: 2,
      title: "Creative Thinking Masterclass",
      description: "Learn how to unlock your creative potential and apply innovative thinking to technical challenges.",
      imageUrl: "/engineering-forum.jpg",
      dateTime: "Wednesday 17th May - 2:00 PM - 5:00 PM",
      location: "Innovation Studio",
      hostedBy: "Maria Chen",
      longDescription: "This masterclass focuses on unlocking your creative potential and applying innovative thinking to technical challenges. Led by design thinking expert Maria Chen, the session will guide participants through proven creativity techniques, brainstorming methods, and problem-solving frameworks used by leading innovators. You'll participate in collaborative exercises designed to break down mental barriers and discover new approaches to familiar problems. This session is ideal for engineers looking to incorporate more creative approaches into their work and artists seeking to understand how their skills can apply to technical domains."
    },
    {
      id: 3,
      title: "Networking Mixer",
      description: "Connect with professionals from both artistic and technical fields in this casual networking event.",
      imageUrl: "/digital-art-workshop.jpg",
      dateTime: "Friday 19th May - 6:00 PM - 9:00 PM",
      location: "Urban Lounge",
      hostedBy: "Community Team",
      longDescription: "Join us for a relaxed evening of meaningful connections at our Networking Mixer. This event brings together professionals from both artistic and technical fields, creating a unique environment for cross-disciplinary networking. Enjoy complimentary refreshments while meeting potential collaborators, mentors, and friends who share your interest in the intersection of art and engineering. The evening will include structured networking activities designed to facilitate genuine conversations and relationship-building. Whether you're looking for project partners, career opportunities, or simply to expand your professional circle, this mixer provides the perfect setting to connect with like-minded individuals."
    }
  ];

  // Featured events
  const featuredEvents = [
    {
      id: 4,
      title: "Annual CEO Innovation Award",
      description: "Join us for our prestigious ceremony recognizing outstanding leadership and innovation within the company, with keynote speeches from industry pioneers.",
      imageUrl: "/ceo-award.jpg",
      dateTime: "Friday 12th May - 7:00 PM - 10:00 PM",
      location: "Grand Ballroom",
      hostedBy: "Executive Board",
      longDescription: "The Annual CEO Innovation Award is our flagship event recognizing outstanding leadership, innovation, and transformative thinking within the company. The evening will feature keynote speeches from industry pioneers, networking opportunities with leaders in both art and engineering fields, and the much-anticipated award ceremony. This is an excellent opportunity to celebrate excellence, gain insights from successful innovators, and build valuable connections within the ArtEng community."
    },
    {
      id: 5,
      title: "ArtEng Innovation Awards",
      description: "Celebrating creative breakthroughs and technical excellence across disciplines, showcasing the most groundbreaking projects of the year.",
      imageUrl: "/innovation-awards.jpg",
      dateTime: "Saturday 20th May - 6:30 PM - 9:30 PM",
      location: "Innovation Gallery",
      hostedBy: "Dr. Sarah Chen",
      longDescription: "The ArtEng Innovation Awards celebrate creative breakthroughs and technical excellence across multiple disciplines. This prestigious event showcases the most groundbreaking projects of the year, highlighting the powerful results achieved when artistic vision meets engineering precision. Attendees will enjoy an interactive exhibition of nominated projects, panel discussions with award finalists, and a formal awards ceremony recognizing achievements in categories such as Sustainable Design, Digital Innovation, and Collaborative Excellence. Join us for an inspiring evening that showcases the best of interdisciplinary creativity."
    },
    {
      id: 6,
      title: "End of Year Celebration",
      description: "A festive gathering to reflect on our achievements, recognize team contributions, and unveil exciting new initiatives for the coming year.",
      imageUrl: "/eoy-celebration.jpg",
      dateTime: "Friday 15th December - 8:00 PM - 12:00 AM",
      location: "Rooftop Garden",
      hostedBy: "Community Team",
      longDescription: "Join us for our End of Year Celebration, a festive gathering where we'll reflect on this year's remarkable achievements, recognize outstanding team contributions, and unveil exciting new initiatives planned for the coming year. The evening will feature immersive artistic installations created in collaboration with our engineering teams, live performances that blend technology and creative expression, and opportunities to connect with fellow members of the ArtEng community. Refreshments and entertainment will be provided in a relaxed atmosphere designed to celebrate our collective successes and build excitement for future opportunities."
    }
  ];

  // Create carousel components with the proper event handlers
  const carouselCards = carouselEvents.map((event) => (
    <EventCard
      key={event.id}
      imageUrl={event.imageUrl}
      title={event.title}
      description={event.description}
      dateTime={event.dateTime}
      location={event.location}
      hostedBy={event.hostedBy}
      onCardClick={() => setSelectedEvent(event)}
    />
  ));

  const toggleForm = () => {
    setShowForm(prevState => !prevState);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Event Schedule</h1>
          <p className="text-lg">Browse our upcoming events and reserve your spot today.</p>
        </div>
      </section>
      
      <div className='relative'>
        {/* This Week's Events */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto">
            <SectionHeader 
              title="Featured Events" 
              subtitle="Upcoming at ArtEng" 
            />
            
            {/* Custom carousel implementation to avoid reloading issues */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {carouselEvents.map((event) => (
                <EventCard
                  key={event.id}
                  imageUrl={event.imageUrl}
                  title={event.title}
                  description={event.description}
                  dateTime={event.dateTime}
                  location={event.location}
                  hostedBy={event.hostedBy}
                  onCardClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <SectionHeader 
              title="Event Schedule" 
              subtitle="Featured Events" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  imageUrl={event.imageUrl}
                  title={event.title}
                  description={event.description}
                  dateTime={event.dateTime}
                  location={event.location}
                  hostedBy={event.hostedBy}
                  onCardClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>

            <div className="flex justify-center w-full mt-8">
              <Link href="/events" className="inline-block bg-arteng-dark text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors w-32 text-center">
                View All
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="h-64 relative">
                <Image 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title} 
                  fill 
                  className="object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-arteng-dark">{selectedEvent.title}</h2>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{selectedEvent.dateTime}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{selectedEvent.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>Hosted by {selectedEvent.hostedBy}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedEvent.longDescription}</p>
                
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
                  <Link href="/login" className="bg-arteng-dark text-white py-2 px-6 rounded hover:bg-opacity-90 transition-colors text-center">
                    Register Now
                  </Link>
                  
                  <button 
                    onClick={closeModal}
                    className="border border-gray-300 py-2 px-6 rounded hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
