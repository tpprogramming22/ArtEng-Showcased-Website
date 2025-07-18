'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import SponsorCard from '@/components/SponsorCard';
import TeamMemberCard from '@/components/TeamMemberCard';
import RecordTurnoutCarousel from '@/components/RecordTurnoutCarousel';

export default function Home() {
  const [featuredNews, setFeaturedNews] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Helper function to format article date
  const formatArticleDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return date.toLocaleDateString('en-GB', options);
    } catch (error) {
      return dateString;
    }
  };

  // Helper function to format event date
  const formatEventDate = (dateString) => {
    try {
      const date = new Date(dateString);
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return date.toLocaleDateString('en-GB', options);
    } catch (error) {
      return dateString;
    }
  };

  // Helper function to extract plain text from Contentful rich text
  const extractPlainText = (richTextContent) => {
    if (!richTextContent || !richTextContent.content) return '';
    
    let text = '';
    const extractTextFromNode = (node) => {
      if (node.nodeType === 'text') {
        text += node.value;
      } else if (node.content) {
        node.content.forEach(extractTextFromNode);
      }
    };
    
    richTextContent.content.forEach(extractTextFromNode);
    return text;
  };

  // Helper function to render rich text content as JSX
  const renderRichText = (richTextContent) => {
    if (!richTextContent || !richTextContent.content) return '';
    
    const renderNode = (node, index) => {
      if (node.nodeType === 'text') {
        if (node.marks && node.marks.length > 0) {
          let text = node.value;
          node.marks.forEach(mark => {
            if (mark.type === 'italic') {
              text = <em key={index}>{text}</em>;
            } else if (mark.type === 'bold') {
              text = <strong key={index}>{text}</strong>;
            }
          });
          return text;
        }
        return node.value;
      } else if (node.nodeType === 'paragraph') {
        return (
          <p key={index} className="mb-4">
            {node.content.map((child, childIndex) => renderNode(child, childIndex))}
          </p>
        );
      } else if (node.content) {
        return node.content.map((child, childIndex) => renderNode(child, childIndex));
      }
      return null;
    };
    
    return richTextContent.content.map((node, index) => renderNode(node, index));
  };

  // Transform API article to match component expectations
  const transformArticle = (apiArticle) => {
    const imageUrl = apiArticle.fields.featuredImage?.fields?.file?.url 
      ? `https:${apiArticle.fields.featuredImage.fields.file.url}` 
      : null;

    return {
      id: apiArticle.sys.id,
      title: apiArticle.fields.title,
      slug: apiArticle.fields.slug,
      description: apiArticle.fields.excerpt || extractPlainText(apiArticle.fields.content).substring(0, 150) + '...',
      fullContent: apiArticle.fields.content,
      imageUrl: imageUrl,
      date: formatArticleDate(apiArticle.sys.createdAt),
      rawDate: apiArticle.sys.createdAt,
      author: apiArticle.fields.author,
      tags: apiArticle.fields.tags || []
    };
  };

  // Transform API event to match component expectations
  const transformEvent = (apiEvent) => ({
    id: apiEvent.id,
    title: apiEvent.title,
    subtitle: apiEvent.subtitle,
    description: apiEvent.description,
    imageUrl: apiEvent.bannerImage || apiEvent.thumbImage,
    thumbImage: apiEvent.thumbImage,
    dateTime: formatEventDate(apiEvent.date),
    rawDate: apiEvent.date,
    location: apiEvent.location,
    hostedBy: apiEvent.sponsor || 'ArtEng Community',
    capacity: apiEvent.capacity,
    price: apiEvent.price,
    sponsorLogo: apiEvent.sponsorLogo,
    publishDate: apiEvent.publishDate,
    longDescription: apiEvent.description
  });

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoadingNews(true);
        const response = await fetch('https://arteng-be.onrender.com/api/v1/articles');
        
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            const transformedArticles = data.data.map(transformArticle);
            // Take the first 3 articles for the homepage
            setFeaturedNews(transformedArticles.slice(0, 3));
          }
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        // Keep empty array on error
      } finally {
        setLoadingNews(false);
      }
    };

    fetchArticles();
  }, []);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoadingEvents(true);
        const response = await fetch('https://arteng-be.onrender.com/api/v1/events');
        
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data) {
            const transformedEvents = data.data.map(transformEvent);
            // Take the first 3 events for the homepage
            setUpcomingEvents(transformedEvents.slice(0, 3));
          }
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        // Keep empty array on error
      } finally {
        setLoadingEvents(false);
      }
    };

    fetchEvents();
  }, []);

  const closeArticleModal = () => {
    setSelectedArticle(null);
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
  };

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
              <p className="mb-3 md:mb-4 text-gray-800 text-base md:text-xl">
                ArtEng is an innovative concept that merges the worlds of art and engineering to encourage creativity and problem-solving in industry. It was established to bridge the gap between art and engineering, offering a platform for artists, engineers, and creators to collaborate and develop groundbreaking solutions.
              </p>
              <p className="mb-3 md:mb-4 text-gray-800 text-base md:text-xl">
                Through networking, events and a programme of activities, ArtEng is striving to cultivate a dynamic space where imagination meets engineering, resulting in groundbreaking works that shape the future of both art and technology.
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
              <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">Co-Founders</h2>
              <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">The team behind ArtEng</p>
            </div>
            <Link href="/about-us" className="mt-3 sm:mt-0 bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm hover:bg-gray-800 transition-colors">
              More Info
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
            {/* Team members arranged by surname alphabetical order */}
            <div 
              className="cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105 group relative"
              onClick={() => window.location.href = '/about-us'}
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 mt-2">
                <Image 
                  src="/wendynew.png" 
                  alt="Wendy Bennett"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors">Wendy Bennett</h3>
              <p className="text-sm sm:text-base text-center mb-4">Wendy is a trailblazer for women in industry and has a reputation for becoming the first female in a variety of positions across many engineering fields.</p>
              
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
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 mt-2">
                <Image 
                  src="/steve.png" 
                  alt="Stephen Fletcher"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all "></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors ">Stephen Fletcher</h3>
              <p className="text-sm sm:text-base text-center mb-4">Stephen's career spans more than 45 years covering a range of roles including Logistics/Transport management, Project management, Key Account management and Sales Business Development.</p>
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
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 mt-2">
                <Image 
                  src="/jess-smith.jpg" 
                  alt="Joan Smith"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all "></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors">Joan Smith</h3>
              <p className="text-sm sm:text-base text-center mb-4">With over 20 years of experience in business advice and guidance, Joan brings a wealth of knowledge in all areas of business support.</p>
              
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
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 mt-2">
                <Image 
                  src="/adam.png" 
                  alt="Adam Snelleksz"
                  fill 
                  className="object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors ">Adam Snelleksz</h3>
              <p className="text-sm sm:text-base text-center mb-4">Adam has a wide and varied work history in marketing, communication and PR with over 25 years experience in many different roles and organisations.</p>
              
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
          
          {loadingNews ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-arteng-dark"></div>
            </div>
          ) : featuredNews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {featuredNews.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="cursor-pointer"
                >
                  <Card
                    imageUrl={article.imageUrl}
                    title={article.title}
                    description={article.description}
                    dateTime={article.date}
                    link="#"
                    linkText="Read More"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No news articles available at the moment.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">Upcoming Events</h2>
            <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">Events coming soon, to book and find out more click on each image</p>
          </div>
          
          {loadingEvents ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-arteng-dark"></div>
            </div>
          ) : upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  onClick={() => setSelectedEvent(event)}
                  className="cursor-pointer"
                >
                  <Card
                    imageUrl={event.imageUrl}
                    title={event.title}
                    description={event.description}
                    dateTime={event.dateTime}
                    location={event.location}
                    hostedBy={event.hostedBy}
                    link="#"
                    linkText="More Info"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No upcoming events available at the moment.</p>
            </div>
          )}
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
              logo="/hello123.jpg" 
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

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {selectedArticle.imageUrl && (
                <div className="h-64 relative">
                  <Image 
                    src={selectedArticle.imageUrl} 
                    alt={selectedArticle.title} 
                    fill 
                    className="object-cover object-center"
                  />
                  <button 
                    onClick={closeArticleModal}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              
              {!selectedArticle.imageUrl && (
                <button 
                  onClick={closeArticleModal}
                  className="absolute top-4 right-4 bg-gray-100 rounded-full p-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-arteng-dark">{selectedArticle.title}</h2>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{selectedArticle.date}</span>
                  </div>
                  
                  {selectedArticle.author && (
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>By {selectedArticle.author}</span>
                    </div>
                  )}
                </div>

                {selectedArticle.tags && selectedArticle.tags.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedArticle.tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="text-gray-700 mb-6 leading-relaxed">
                  {renderRichText(selectedArticle.fullContent)}
                </div>
                
                <div className="flex justify-center">
                  <button 
                    onClick={closeArticleModal}
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

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Main Banner Image */}
              <div className="h-64 relative">
                <Image 
                  src={selectedEvent.imageUrl} 
                  alt={selectedEvent.title} 
                  fill 
                  className="object-cover object-center"
                />
                <button 
                  onClick={closeEventModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Main Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-arteng-dark">{selectedEvent.title}</h2>
                    {selectedEvent.subtitle && (
                      <h3 className="text-lg text-gray-600 mb-3">{selectedEvent.subtitle}</h3>
                    )}
                    
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

                      {selectedEvent.capacity && (
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span>Capacity: {selectedEvent.capacity}</span>
                        </div>
                      )}

                      {selectedEvent.price !== undefined && (
                        <div className="flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          <span>{selectedEvent.price === 0 ? 'Free' : `£${(selectedEvent.price / 100).toFixed(2)}`}</span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-6">{selectedEvent.longDescription}</p>
                  </div>

                  {/* Side Panel with Additional Images */}
                  <div className="lg:w-80 space-y-4">
                    {/* Thumbnail Image */}
                    {selectedEvent.thumbImage && selectedEvent.thumbImage !== selectedEvent.imageUrl && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Event Gallery</h4>
                        <div className="relative h-32 rounded-md overflow-hidden">
                          <Image 
                            src={selectedEvent.thumbImage} 
                            alt="Event thumbnail" 
                            fill 
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* Sponsor Logo */}
                    {selectedEvent.sponsorLogo && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Event Sponsor</h4>
                        <div className="relative h-20 bg-white rounded-md p-2 flex items-center justify-center">
                          <Image 
                            src={selectedEvent.sponsorLogo} 
                            alt="Sponsor logo" 
                            fill 
                            className="object-contain p-2"
                          />
                        </div>
                        <p className="text-xs text-gray-600 mt-2 text-center">Sponsored by {selectedEvent.hostedBy}</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mt-6 pt-6 border-t border-gray-200">
                  <Link href="/login" className="bg-arteng-dark text-white py-2 px-6 rounded hover:bg-opacity-90 transition-colors text-center">
                    Register Now
                  </Link>
                  
                  <button 
                    onClick={closeEventModal}
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