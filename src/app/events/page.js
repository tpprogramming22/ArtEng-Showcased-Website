"use client"

import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import MailtoNotifyForm from '@/components/SignUp';
import { useState } from 'react';

export default function EventsPage() {

  const [showForm, setShowForm] = useState(false);

  const events = [
    {
      id: 1,
      title: "Annual CEO Innovation Award",
      description: "Join us for our prestigious ceremony recognizing outstanding leadership and innovation within the company, with keynote speeches from industry pioneers.",
      imageUrl: "/exhibition-opening.jpg",
      dateTime: "Friday 12th May - 7:00 PM - 10:00 PM",
      location: "Grand Ballroom",
      hostedBy: "Executive Board"
    },
    {
      id: 2,
      title: "ArtEng Innovation Awards",
      description: "Celebrating creative breakthroughs and technical excellence across disciplines, showcasing the most groundbreaking projects of the year.",
      imageUrl: "/engineering-forum.jpg",
      dateTime: "Saturday 20th May - 6:30 PM - 9:30 PM",
      location: "Innovation Gallery",
      hostedBy: "Dr. Sarah Chen"
    },
    {
      id: 3,
      title: "End of Year Celebration",
      description: "A festive gathering to reflect on our achievements, recognize team contributions, and unveil exciting new initiatives for the coming year.",
      imageUrl: "/digital-art-workshop.jpg",
      dateTime: "Friday 15th December - 8:00 PM - 12:00 AM",
      location: "Rooftop Garden",
      hostedBy: "Community Team"
    }
  ]

  const eventsMain = [
    {
      id: 1,
      title: "Annual CEO Innovation Award",
      description: "Join us for our prestigious ceremony recognizing outstanding leadership and innovation within the company, with keynote speeches from industry pioneers.",
      imageUrl: "/ceo-award.jpg",
      dateTime: "Friday 12th May - 7:00 PM - 10:00 PM",
      location: "Grand Ballroom",
      hostedBy: "Executive Board"
    },
    {
      id: 2,
      title: "ArtEng Innovation Awards",
      description: "Celebrating creative breakthroughs and technical excellence across disciplines, showcasing the most groundbreaking projects of the year.",
      imageUrl: "/innovation-awards.jpg",
      dateTime: "Saturday 20th May - 6:30 PM - 9:30 PM",
      location: "Innovation Gallery",
      hostedBy: "Dr. Sarah Chen"
    },
    {
      id: 3,
      title: "End of Year Celebration",
      description: "A festive gathering to reflect on our achievements, recognize team contributions, and unveil exciting new initiatives for the coming year.",
      imageUrl: "/eoy-celebration.jpg",
      dateTime: "Friday 15th December - 8:00 PM - 12:00 AM",
      location: "Rooftop Garden",
      hostedBy: "Community Team"
    }
  ]

  const cardComponents = events.map((event) => {
    if (event.isEmpty) {
      return (
        <Card
          key={event.id}
          imageUrl=""
          title="No Event Scheduled"
          description="There are no events scheduled for this day."
          dateTime=""
          location=""
          hostedBy=""
          link=""
          isEmpty={true}
        />
      );
    }
    
    return (
      <Card
        key={event.id}
        imageUrl={event.imageUrl}
        title={event.title}
        description={event.description}
        dateTime={event.dateTime}
        location={event.location}
        hostedBy={event.hostedBy}
        link={`/events/${event.id}`}
        isEmpty={false}
      />
    );
  });

  const toggleForm = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 relative">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Event Schedule</h1>
          <p className="text-lg">Browse our upcoming events and reserve your spot today.</p>
        </div>
      </section>
      
      <div className='relative'>
      
    


      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="This Week" 
            subtitle="Upcoming at ArtEng" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Carousel cards={cardComponents}/>
            </div>
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
            {eventsMain.map((event) => (
              <Card
                key={event.id}
                imageUrl={event.imageUrl}
                title={event.title}
                description={event.description}
                dateTime={event.dateTime}
                location={event.location}
                hostedBy={event.hostedBy}
                link={`/events/${event.id}`}
              />
            ))}
          </div>

          <div className="flex justify-center w-full mt-8">
            <Link href="/events" className="inline-block bg-arteng-dark text-white px-4 py-1 rounded text-sm hover:bg-opacity-90 transition-colors w-24 text-center">
              View All
            </Link>
        </div>
        </div>
      </section>
    </div>
    </div>
  );
}
