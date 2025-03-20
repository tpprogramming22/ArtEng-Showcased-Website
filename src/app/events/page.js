import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';

export default function EventsPage() {
  // sample data
  const events = Array(6).fill().map((_, i) => ({
    id: i + 1,
    title: "Why We Need Engineering",
    description: "Exploring the role of engineering in modern art and experience design, focusing on innovative approaches to problem-solving and creative execution.",
    imageUrl: "/engineering-exhibition.jpg",
    dateTime: "Saturday 5th April - 09:00 AM - 5:00 PM",
    location: "Main Auditorium",
    hostedBy: "John Smith"
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Event Schedule</h1>
          <p className="text-lg">Browse our upcoming events and reserve your spot today.</p>
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
            {events.map((event) => (
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

          <div className="mt-8 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Past Events" 
            subtitle="What You Missed" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => (
              <Card
                key={`past-${index}`}
                imageUrl={event.imageUrl}
                title={`Past Event: ${event.title}`}
                description={event.description}
                dateTime="March 10th, 2025 (Past)"
                location={event.location}
                hostedBy={event.hostedBy}
                link={`/events/past/${index + 1}`}
              />
            ))}
          </div>a
        </div>
      </section>
    </div>
  );
}