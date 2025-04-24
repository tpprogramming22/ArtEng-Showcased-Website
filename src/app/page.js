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
      {/* Hero Section - Updated with white background */}
      <section className="bg-white text-arteng-dark py-16">
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
              <div>
                <Image 
                  src="/about-arteng-team.jpg" 
                  alt="ArtEng Team" 
                  width={600} 
                  height={400} 
                  className="rounded-md w-full"
                />
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <p className="mb-4 text-gray-800">
                ArtEng is an organisation dedicated to bridging the worlds of art and engineering together by fostering creativity, innovation, and collaboration. We aim to inspire and connect individuals and businesses to create unique solutions that enhance both fields.
              </p>
              <p className="mb-4 text-gray-800">
                Through networking, events and a programme of activities, ArtEng is striving to cultivate a dynamic space where imagination meets engineering, resulting in groundbreaking works that shape the future of both art and technology.
              </p>
              
              {/* Removed the 3 numbers boxes as requested */}
              
              {/* Button centered under the right column content */}
              <div className="flex justify-center mt-6">
                <Link href="/about-us" className="bg-arteng-dark text-white px-6 py-2 rounded inline-block hover:bg-opacity-90 transition-colors">
                  More Info
                </Link>
              </div>
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
              <p className="text-gray-600">Meet the team behind ArtEng, click here to find out more about us all</p>
            </div>
            <Link href="/about-us" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
              More Info
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <TeamMemberCard
              name="Adam Snelleksz"
              role="Marketing Director"
              imageUrl="/adam.png" 
              description="Adam is a marketing and communications expert with over 25 years of experience, including founding two successful agencies."
            />
            <TeamMemberCard
              name="Stephen Fletcher"
              role="Sales Director"
              imageUrl="/steve.png" 
              description="Stephen has over 45 years of experience in logistics, projects, sales, and the arts, focusing on supporting student career transitions."
            />
            <TeamMemberCard
              name="Wendy Bennet"
              role="Technical Lead"
              imageUrl="/wendy.png" 
              description="Wendy is a pioneering leader for women in engineering, with achievements in precision casting and leadership roles in industry."
            />
            <TeamMemberCard
              name="Joan Smith"
              role="Business Director"
              imageUrl="/jess-smith.jpg" 
              description="Joan is an experienced business advisor who connects companies with expert support to help them grow and succeed."
            />
          </div>
        </div>
      </section>
      
      {/* Latest News Section - Already had a gray background */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Latest News" 
            subtitle="Keep up to date with what's happening, what our partners have been up to and all our news" 
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
            subtitle="Events coming soon, to book and find out more click on each image" 
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
      
{/* Our Partners Section (renamed from Sponsors) */}
<section className="py-16 px-4 md:px-8 bg-gray-50">
  <div className="container mx-auto">
    <SectionHeader 
      title="Our Partners" 
      subtitle="Primary Partners" 
      viewAllLink="/partners" 
    />
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
        name="Tool Life" 
        logo="/nodejs-logo.jpg" 
        description="Powered by Node.js, enabling high-performance and scalable applications for our digital initiatives."
      />
      <SponsorCard 
        name="T3O Solutions" 
        logo="/tesla-logo.jpg" 
        description="Supported by Tesla, both companies share a vision for a sustainable future through innovation."
      />
    </div>
  </div>
</section>
    </div>
  );
}