import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import SponsorCard from '@/components/SponsorCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import RecordTurnoutCarousel from '@/components/RecordTurnoutCarousel';

export default function Home() {
  // random
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Art Workshop",
      description: "Join us for an immersive workshop exploring the latest digital art techniques and technologies.",
      imageUrl: "/digital-art-workshop.jpg", 
      dateTime: "Saturday 12th April - 10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      hostedBy: "Jane Smith"
    },
    {
      id: 2,
      title: "Engineering Innovation Forum",
      description: "A panel discussion with industry leaders about the future of engineering and creative problem-solving.",
      imageUrl: "/engineering-forum.jpg", 
      dateTime: "Friday 18th April - 2:00 PM - 6:00 PM",
      location: "Conference Room A",
      hostedBy: "Michael Chang"
    },
    {
      id: 3,
      title: "Collaborative Exhibition Opening",
      description: "The unveiling of our new exhibition featuring works from artists and engineers who collaborated on innovative projects.",
      imageUrl: "/exhibition-opening.jpg", 
      dateTime: "Saturday 26th April - 7:00 PM - 10:00 PM",
      location: "Gallery Space",
      hostedBy: "Sarah Johnson"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Bringing Art &<br />Engineering Together</h1>
            </div>
            <div className="text-center">
              <p className="text-lg">Bringing creatives and innovators together to transform ideas into unforgettable experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Record Turnout Carousel Section */}
      <RecordTurnoutCarousel />
      
      {/* About ArtEng Section - Now with white background */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <SectionHeader title="About ArtEng" subtitle="Who We Are" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6">
              <div className="mb-8">
                <Image 
                  src="/about-arteng-team.jpg" 
                  alt="ArtEng Team" 
                  width={600} 
                  height={400} 
                  className="rounded-md"
                />
              </div>
              <div>
                <Image 
                  src="/about-arteng-vision.jpg" 
                  alt="ArtEng Vision" 
                  width={600} 
                  height={250} 
                  className="rounded-md"
                />
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <p className="mb-4 text-gray-800">
                At ArtEng, we're a group of creators and engineers who share a passion for blending art with technology. We've come together to build a space where artists and engineers can inspire each other.
              </p>
              <p className="mb-4 text-gray-800">
                Our events are all about connecting people so they can create something unforgettable — whether it's an interactive installation, a digital experience, or an innovative product. For us, it's all just about having fun and pushing boundaries in a space where imagination knows no limits.
              </p>
              
              <div className="grid grid-cols-3 gap-6 my-8">
                <div className="text-center bg-gray-50 p-4 rounded-md shadow-sm">
                  <h3 className="text-4xl font-bold text-arteng-dark">25+</h3>
                  <p className="text-gray-600">Years in Industry</p>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-md shadow-sm">
                  <h3 className="text-4xl font-bold text-arteng-dark">75+</h3>
                  <p className="text-gray-600">Events Successfully Hosted</p>
                </div>
                <div className="text-center bg-gray-50 p-4 rounded-md shadow-sm">
                  <h3 className="text-4xl font-bold text-arteng-dark">22+</h3>
                  <p className="text-gray-600">Speakers</p>
                </div>
              </div>
              
              <Link href="/about-us" className="bg-arteng-dark text-white px-6 py-2 rounded inline-block hover:bg-opacity-90 transition-colors">
                More Info
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section - Now with light gray background */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-arteng-dark">Meet The Team</h2>
              <p className="text-gray-600">Our Leaders</p>
            </div>
            <Link href="/about-us" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
              More Info
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TeamMemberCard
              name="Jane Smith"
              role="Creative Director"
              imageUrl="/jane-smith.jpg" 
              description="Leads our creative vision with over 15 years of experience in interactive design."
            />
            <TeamMemberCard
              name="John Smith"
              role="Marketing Director"
              imageUrl="/john-smith.jpg" 
              description="Drives our brand strategy with innovative approaches to engagement."
            />
            <TeamMemberCard
              name="Jess Smith"
              role="Events Director"
              imageUrl="/jess-smith.jpg" 
              description="Orchestrates our world-class events with precision and creativity."
            />
          </div>
        </div>
      </section>
      
      {/* Latest News Section - Already had a gray background */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Latest News" 
            subtitle="What's Happening" 
            viewAllLink="/news" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              imageUrl="/acquisition-news.jpg" 
              title="ArtEng Acquires Tecla Studios"
              description="Exciting news as we expand our capabilities with this new acquisition."
              link="/news/acquisition"
            />
            <Card
              imageUrl="/ceo-award.jpg" 
              title="CEO named as finalist for Innovation Award"
              description="Our leadership continues to be recognized in the industry."
              link="/news/ceo-award"
            />
            <Card
              imageUrl="/year-review.jpg" 
              title="2024 - What a Year"
              description="A look back at our achievements and milestones from the past year."
              link="/news/year-review"
            />
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section - Changed to white background */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <SectionHeader 
            title="Upcoming Events" 
            subtitle="What's Coming Soon" 
            viewAllLink="/events" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                imageUrl={event.imageUrl}
                title={event.title}
                description={event.description}
                dateTime={event.dateTime}
                location={event.location}
                hostedBy={event.hostedBy}
                link={`/events/event-${event.id}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Sponsors Section - Already had a gray background */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Sponsors" 
            subtitle="Primary Sponsors" 
            viewAllLink="/partners" 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <SponsorCard 
              name="Honda" 
              logo="/honda-logo.jpg" 
              description="Proudly supported by Honda, committed to excellence in the field."
            />
            <SponsorCard 
              name="Lloyd's Bank" 
              logo="/lloyds-logo.jpg" 
              description="In partnership with Lloyd's Bank, supporting innovation and creativity."
            />
            <SponsorCard 
              name="KPMG" 
              logo="/kpmg-logo.jpg" 
              description="Proudly supported with professional and accounting services from KPMG."
            />
            <SponsorCard 
              name="Node.js" 
              logo="/nodejs-logo.jpg" 
              description="Powered by Node.js, enabling high-performance and scalable applications."
            />
            <SponsorCard 
              name="Tesla" 
              logo="/tesla-logo.jpg" 
              description="Supported by Tesla, both companies share a vision for a sustainable future."
            />
          </div>
        </div>
      </section>
    </div>
  );
}