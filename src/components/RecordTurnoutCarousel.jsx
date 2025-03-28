"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RecordTurnoutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Carousel slide data with different background images
  const slides = [
    {
      title: "Record Turnout",
      description: "ArtEng is delighted to announce its busiest quarter yet, smashing targets by 12%.",
      link: "/news/record-turnout",
      linkText: "More Info",
      backgroundImage: "/backgroundforarteng.png"
    },
    {
      title: "New Partnerships",
      description: "We've established exciting new collaborations with industry leaders this month.",
      link: "/news/new-partnerships",
      linkText: "Learn More",
      backgroundImage: "/partnership-background.png" // Replace with actual image
    },
    {
      title: "Innovation Award",
      description: "Our team has been recognized for excellence in creative technology solutions.",
      link: "/news/innovation-award",
      linkText: "See Details",
      backgroundImage: "/award-background.png" // Replace with actual image
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
      {/* Significantly increased height for a much longer appearance */}
      <div className="relative h-[700px] w-full overflow-hidden">
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
          {/* Diagonal overlay with increased transparency */}
          <div className="absolute inset-0" style={{ 
            background: 'linear-gradient(75deg, transparent 50%, rgba(0,0,0,0.5) 50%)',
            transform: 'translateX(0)'
          }}></div>
          
          {/* Content positioned on the right */}
          <div className="absolute right-0 w-2/3 pr-12 text-white">
            <div className="flex flex-col items-center">
              {/* Fixed width container for title and description */}
              <div className="w-[500px] text-center">
                <h2 className="text-6xl font-bold mb-6">{slides[currentSlide].title}</h2>
                <p className="mb-8 h-16 flex items-center justify-center text-xl">{slides[currentSlide].description}</p>
              </div>
              
              {/* Fixed width button */}
              <Link 
                href={slides[currentSlide].link} 
                className="bg-white text-arteng-dark px-8 py-3 rounded-md text-lg inline-block hover:bg-gray-100 transition-colors mb-16 w-48 text-center font-medium"
              >
                {slides[currentSlide].linkText}
              </Link>
              
              {/* Navigation controls */}
              <div className="flex justify-center items-center space-x-6">
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
        </div>
      </div>
    </section>
  );
};

export default RecordTurnoutCarousel;