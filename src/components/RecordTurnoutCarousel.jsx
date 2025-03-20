"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RecordTurnoutCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Auto carousel every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

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
      <div className="relative h-[400px] overflow-hidden">
        {/* Background image - different selected image based on current slide */}
        <Image 
          src={slides[currentSlide].backgroundImage}
          alt="Slide Background"
          fill
          className="object-cover object-top transition-opacity duration-500"
          style={{ objectPosition: "center 30%" }}
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
                <h2 className="text-6xl font-bold mb-4">{slides[currentSlide].title}</h2>
                <p className="mb-6 h-16 flex items-center justify-center">{slides[currentSlide].description}</p>
              </div>
              
              {/* Fixed width button */}
              <Link 
                href={slides[currentSlide].link} 
                className="bg-white text-arteng-dark px-6 py-2 rounded inline-block hover:bg-gray-100 transition-colors mb-10 w-40 text-center"
              >
                {slides[currentSlide].linkText}
              </Link>
              
              {/* Nav controls */}
              <div className="flex justify-center items-center space-x-4">
                {/* Left Arrow */}
                <button 
                  onClick={goToPrevSlide}
                  className="bg-white bg-opacity-50 p-1 rounded hover:bg-opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* indicators */}
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-6 h-1 rounded-full transition-all ${
                        index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Right arrow */}
                <button 
                  onClick={goToNextSlide}
                  className="bg-white bg-opacity-50 p-1 rounded hover:bg-opacity-70 transition-opacity"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
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