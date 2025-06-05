"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RecordTurnoutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Carousel dimensions - these can be used for image preparation
  // The carousel is 100% width of the viewport
  // The height is fixed at 700px
  const carouselDimensions = {
    width: '100% viewport width',
    height: '700px'
  };

  // Updated carousel slide data with different background images
  const slides = [
    {
      title: "Bringing Art & Engineering Together",
      description: "ArtEng is dedicated to fostering creativity, innovation, and collaboration between artists and engineers.",
      link: "/news/record-turnout",
      linkText: "More Info",
      backgroundImage: "/carosel1.jpg"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with professionals from both art and engineering fields to create unique solutions.",
      link: "/news/new-partnerships",
      linkText: "Learn More",
      backgroundImage: "/carosel2.jpg"
    },
    {
      title: "Upcoming Events",
      description: "Join us for workshops, exhibitions, and forums that bring together creative minds and technical expertise.",
      link: "/news/innovation-award",
      linkText: "See Details",
      backgroundImage: "/carosel3.jpg"
    }
  ];

  // Preload all carousel images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = slides.map(
          (slide) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = slide.backgroundImage;
              img.onload = resolve;
              img.onerror = reject;
            })
        );
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Still set as loaded even if there's an error to avoid blocking UI
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // Auto-rotate slides every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative">
      {/* Height is responsive on mobile only, desktop remains the same */}
      <div className="relative h-[450px] md:h-[700px] w-full overflow-hidden">
        {/* Background image - dynamically selected based on current slide */}
        <Image 
          src={slides[currentSlide].backgroundImage}
          alt="Slide Background"
          fill
          priority={true}
          className="object-cover transition-opacity duration-300"
          style={{ objectPosition: "center center" }}
        />
        
        <div className="absolute inset-0 flex items-center">
          {/* Mobile-specific overlay */}
          {isMobile ? (
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          ) : (
            /* Desktop diagonal overlay exactly as before */
            <div className="absolute inset-0" style={{ 
              background: 'linear-gradient(75deg, transparent 50%, rgba(0,0,0,0.5) 50%)',
              transform: 'translateX(0)'
            }}></div>
          )}
          
                
                {/* Fixed width button with consistent positioning */}
                <div className="h-[80px] flex items-center justify-center">
                  <Link 
                    href={slides[currentSlide].link} 
                    className="bg-white text-arteng-dark px-8 py-3 rounded-md text-lg inline-block hover:bg-gray-100 transition-colors w-48 text-center font-medium"
                  >
                    {slides[currentSlide].linkText}
                  </Link>
                </div>
                
                {/* Navigation controls with fixed height */}
                <div className="flex justify-center items-center space-x-6 h-[60px]">
                  {/* Left arrow */}
                  <button 
                    onClick={goToPrevSlide}
                    className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {/* Indicators */}
                  <div className="flex space-x-3">
                    {slides.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-8 h-2 rounded-full transition-all ${
                          index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Right arrow */}
                  <button 
                    onClick={goToNextSlide}
                    className="bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecordTurnoutCarousel;
