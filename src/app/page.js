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
  // Featured news articles
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

  // Upcoming events
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
      {/* Hero Section - With responsive padding */}
      <section className="bg-white text-arteng-dark py-10 md:py-16 pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-5xl font-bold mb-4">Bringing Art &<br />Engineering Together</h1>
            </div>
            <div className="text-center">
              <p className="text-base md:text-2xl">Connecting, nurturing and developing the artistic and engineering worlds...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Record Turnout Carousel Section */}
      <RecordTurnoutCarousel />
      
      {/* About ArtEng Section - Now with white background and responsive layout */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">About ArtEng</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-6">
              <div>
                <Image 
                  src="/homepagefire.jpg" 
                  alt="ArtEng Team" 
                  width={600} 
                  height={400} 
                  className="rounded-md w-full"
                />
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <p className="mb-3 md:mb-4 text-gray-800 text-sm md:text-lg">
                ArtEng is an innovative concept that merges the worlds of art and engineering to encourage creativity and problem-solving in industry. It was established to bridge the gap between art and engineering, offering a platform for artists, engineers, and creators to collaborate and develop groundbreaking solutions.
              </p>
              <p className="mb-3 md:mb-4 text-gray-800 text-sm md:text-lg">
                Through networking, events and a programme of activities, ArtEng is striving to cultivate a dynamic space where imagination meets engineering, resulting in groundbreaking works that shape the future of both art and technology.
              </p>
              <p className="mb-3 md:mb-4 text-gray-800 text-sm md:text-lg">
                We want to foster a creative community that blurs the lines between art and engineering, providing the tools, resources and opportunities to experiment, collaborate, and develop projects that challenge traditional perspectives.
              </p>
              
              {/* Button centered under the right column content */}
              <div className="flex items-center justify-center mt-4 md:mt-6">
                <Link href="/about-us" className="bg-arteng-dark text-white px-4 md:px-6 py-1.5 md:py-2 rounded inline-block hover:bg-opacity-90 transition-colors text-sm md:text-base">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team Section - With responsive grid for team members */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">Meet The Team</h2>
              <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">Meet the team behind ArtEng</p>
            </div>
            <Link href="/about-us" className="mt-3 sm:mt-0 bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-800 transition-colors">
              More Info
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Team members arranged by surname alphabetical order */}
            <div 
              className="cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105 group relative"
              onClick={() => window.location.href = '/about-us'}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4">
                <Image 
                  src="/wendynew.png" 
                  alt="Wendy Bennett"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors">Wendy Bennett</h3>
              <p className="text-xs sm:text-sm">Managing Director</p>
              <p className="text-xs sm:text-sm text-center lg:min-h-[10rem] sm:min-h-[14rem] md:min-h-[14rem]">Wendy is a trailblazer for women in industry and has a reputation for becoming the first female in a variety of positions across many engineering fields. She worked within the precision investment casting industry for 26 years and was CEO and previous owner of Lost Wax Development Limited.</p>
              
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity ">
                <div className="flex items-center text-arteng-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            <div 
              className="cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105 group relative"
              onClick={() => window.location.href = '/about-us'}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4">
                <Image 
                  src="/steve.png" 
                  alt="Stephen Fletcher"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all "></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors ">Stephen Fletcher</h3>
              <p className="text-xs sm:text-sm">Creative Director</p>
              <p className="text-xs sm:text-sm text-center lg:min-h-[10rem] sm:min-h-[14rem] md:min-h-[14rem]">Stephen's career spans more than 45 years covering a range of roles including Logistics/Transport management, Project management, Key Account management and Sales Business Development.</p>
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center text-arteng-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            <div 
              className="cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105 group relative"
              onClick={() => window.location.href = '/about-us'}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4">
                <Image 
                  src="/jess-smith.jpg" 
                  alt="Joan Smith"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all "></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors">Joan Smith</h3>
              <p className="text-xs sm:text-sm">Corporate Director</p>
              <p className="text-xs sm:text-sm text-center lg:min-h-[10rem] sm:min-h-[14rem] md:min-h-[14rem]">With over 20 years of experience in business advice and guidance, Joan brings a wealth of knowledge in all areas of business support. Having worked with hundreds of companies across diverse sectors, Joan has always managed to understand their unique challenges and opportunities that businesses face.</p>
              
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center text-arteng-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
                
            <div 
              className="cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105 group relative"
              onClick={() => window.location.href = '/about-us'}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4">
                <Image 
                  src="/adam.png" 
                  alt="Adam Snelleksz"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors ">Adam Snelleksz</h3>
              <p className="text-xs sm:text-sm">Marketing Director</p>
              <p className="text-xs sm:text-sm text-center lg:min-h-[10rem] sm:min-h-[14rem] md:min-h-[14rem]">Adam has a wide and varied work history in marketing, communication and PR with over 25 years experience in many different roles and organisations. After graduating from university with a marketing degree, Adam moved to London and worked in a busy press office for the National Consumer Council.</p>
              
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity ">
                <div className="flex items-center text-arteng-dark">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">Latest News</h2>
            <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">Keep up to date with what's happening, what our partners have been up to and all our news</p>
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
            <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">Upcoming Events</h2>
            <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">Events coming soon, to book and find out more click on each image</p>
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
      
      {/* Our Partners Section (renamed from Sponsors) */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">Our Partners</h2>
            <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">Primary Partners</p>
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
