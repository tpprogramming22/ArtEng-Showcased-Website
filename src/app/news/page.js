"use client"

import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import MailtoNotifyForm from '@/components/SignUp';
import { useState } from 'react';

export default function ArticlesPage() {
  const [showForm, setShowForm] = useState(false);

  // Updated with different images
  const featuredArticles = [
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
      imageUrl: "/award-background.png", 
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

  // Updated with completely different images from events
  const recentArticles = [
    {
      id: 4,
      title: "The Intersection of Art and Engineering",
      description: "Exploring how creative vision and technical expertise can combine to create innovative solutions that serve both practical and aesthetic purposes.",
      imageUrl: "/artinhand.jpg",
      date: "March 1, 2025"
    },
    {
      id: 5,
      title: "Innovation Through Collaboration",
      description: "How partnerships between artists and engineers lead to groundbreaking projects that neither discipline could achieve alone.",
      imageUrl: "/partnership-background.png",
      date: "March 2, 2025"
    },
    {
      id: 6,
      title: "The Future of Creative Technology",
      description: "Examining emerging trends at the intersection of art and engineering that are shaping the next generation of experiences.",
      imageUrl: "/silverstatue.jpg",
      date: "March 3, 2025"
    },
    {
      id: 7,
      title: "Sustainability in Design",
      description: "How art and engineering collaborate to create sustainable solutions that address environmental challenges while maintaining aesthetic appeal.",
      imageUrl: "/aboutus2.jpg",
      date: "March 4, 2025"
    },
    {
      id: 8,
      title: "Art-Inspired Engineering Solutions",
      description: "Case studies of engineering projects that found inspiration and innovative approaches through artistic thinking and creative processes.",
      imageUrl: "/engineering-celebration.jpg",
      date: "March 5, 2025"
    },
    {
      id: 9,
      title: "Building Bridges Between Disciplines",
      description: "The importance of cross-disciplinary education and collaboration in fostering innovation across art and engineering sectors.",
      imageUrl: "/acquisition-news.jpg",
      date: "March 6, 2025"
    }
  ];

  const toggleForm = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">News</h1>
          <p className="text-lg">Stay updated with the latest from ArtEng and the industry.</p>
        </div>
      </section>

    
      <div className="relative">

        {/* Featured Articles */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <SectionHeader 
              title="News" 
              subtitle="Featured Articles" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => {


                const wordCount = article.description.split(' ').length;
                const gapClass = wordCount < 20 ? "mt-6" : "mt-2";

                <Card
                  key={article.id}
                  imageUrl={article.imageUrl}
                  title={article.title}
                  description={article.description}
                  gapClass={gapClass}
                  dateTime={article.date}
                  link={`/articles/${article.id}`}
                />
              })}
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="container mx-auto">
            <SectionHeader 
              title="Recent Articles" 
              subtitle="What's New" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <Card
                  key={article.id}
                  imageUrl={article.imageUrl}
                  title={article.title}
                  description={article.description}
                  dateTime={article.date}
                  link={`/articles/${article.id}`}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link href="/news" className="inline-block bg-arteng-dark text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors w-32 text-center">
                Load More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
