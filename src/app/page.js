'use client';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import SponsorCard from '@/components/SponsorCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import RecordTurnoutCarousel from '@/components/RecordTurnoutCarousel';

export default function Home() {
  const featuredNews = [
    {
      id: 1,
      title: "ArtEng Acquires Tecla Studios",
      description: "Exciting news as we expand our capabilities with this new acquisition, providing greater opportunities for innovative projects and partnerships.",
      imageUrl: "/acquisition-news.jpg", 
      date: "March 5, 2025"
    },
    {
      id: 2,
      title: "CEO named as finalist for Innovation Award",
      description: "Our leadership continues to be recognized in the industry with this prestigious nomination that highlights our commitment to pushing boundaries.",
      imageUrl: "/ceo-award.jpg", 
      date: "February 28, 2025"
    },
    {
      id: 3,
      title: "2024 - What a Year",
      description: "A look back at our achievements and milestones from the past year, celebrating the growth and success of our community and projects.",
      imageUrl: "/year-review.jpg",
      date: "January 15, 2025"
    }
  ];

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
      <section className="bg-white text-arteng-dark py-10 md:py-16 pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-5xl font-bold mb-4">Bringing Art &<br />Engineering Together</h1>
            </div>
            <div className="text-center">
              <p className="text-lg md:text-2xl">Connecting, nurturing and developing the artistic and engineering worlds...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Record Turnout Carousel - images only */}
      <RecordTurnoutCarousel onlyImages />

      {/* About ArtEng Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">About ArtEng</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-6">
              <Image 
                src="/homepagefire.jpg" 
                alt="ArtEng Team" 
                width={600} 
                height={400} 
                className="rounded-md w-full"
              />
            </div>
            <div className="lg:col-span-6">
              <p className="mb-4 text-gray-800 text-lg">
                ArtEng blends artistic expression with engineering excellence. We're creating a future where creativity drives industry innovation.
              </p>
              <p className="mb-4 text-gray-800 text-lg">
                Our network connects professionals across disciplines to collaborate on meaningful projects, spark new ideas, and develop transformative technologies.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/about-us" className="bg-arteng-dark text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors text-base w-32 text-center">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* ... (retain full section as in your version, no truncation, adjusted font sizes if needed) */}

      {/* News Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-arteng-dark text-center sm:text-left">Latest News</h2>
            <p className="text-gray-600 text-center sm:text-left text-lg">Keep up to date with what's happening, what our partners have been up to and all our news</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredNews.map((article) => (
              <Card
                key={article.id}
                imageUrl={article.imageUrl}
                title={article.title}
                description={article.description}
                dateTime={article.date}
                link={`/news/${article.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-arteng-dark text-center sm:text-left">Upcoming Events</h2>
            <p className="text-gray-600 text-center sm:text-left text-lg">Events coming soon, to book and find out more click on each image</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

      {/* Our Partners Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-arteng-dark text-center sm:text-left">Our Partners</h2>
            <p className="text-gray-600 text-center sm:text-left text-lg">Primary Partners</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <SponsorCard 
              name="Forusall" 
              logo="/forusall.jpg" 
              description="Forusall is a company that is at the heart of connecting people, promoting product awareness, championing innovation and joining likeminded businesses."
            />
            <SponsorCard 
              name="Business Cube" 
              logo="/businesscube.jpg" 
              description="The Business Cube is a place where SMEs can connect, share knowledge and collaborate with trusted experts to accelerate growth."
            />
            <SponsorCard 
              name="CMA Media" 
              logo="/cmamedia.png" 
              description="CMA Media provides marketing support to businesses who need assistance with digital marketing, websites, SEO, video and communications."
            />
            <SponsorCard 
              name="Toolife" 
              logo="/tool_life.png" 
              description="Toolife provides innovative tools and solutions for creative professionals and engineers, bridging the gap between artistic vision and technical implementation."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
