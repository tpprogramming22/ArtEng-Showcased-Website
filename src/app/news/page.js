"use client"

import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import MailtoNotifyForm from '@/components/SignUp';
import { useState } from 'react';

export default function ArticlesPage() {
  const [showForm, setShowForm] = useState(false);

  // sample data
  const featuredArticles = [
    {
      id: 1,
      title: "ArtEng Acquires Tecla Studios",
      description: "Exciting news as we expand our capabilities with this new acquisition, providing greater opportunities for innovative projects and partnerships.",
      imageUrl: "/tecla-studios.jpg",
      date: "March 5, 2025"
    },
    {
      id: 2,
      title: "CEO named as finalist for Innovation Award",
      description: "Our leadership continues to be recognized in the industry with this prestigious nomination that highlights our commitment to pushing boundaries.",
      imageUrl: "/innovation-awards.jpg",
      date: "February 28, 2025"
    },
    {
      id: 3,
      title: "2024 - What a Year",
      description: "A look back at our achievements and milestones from the past year, celebrating the growth and success of our community and projects.",
      imageUrl: "/eoy-celebration.jpg",
      date: "January 15, 2025"
    }
  ];

  const recentArticles = Array(6).fill().map((_, i) => ({
    id: i + 4,
    title: `Recent Industry Development ${i + 1}`,
    description: "Exploring recent changes and innovations in the art and engineering intersection, with implications for future creative projects.",
    imageUrl: "/engineering-celebration.jpg",
    date: `March ${i + 1}, 2025`
  }));

  const toggleForm = () => {
    setShowForm(prevState => !prevState);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Articles</h1>
          <p className="text-lg">Stay updated with the latest from ArtEng and the industry.</p>
        </div>
      </section>

      <div className="relative">
        {/* Coming Soon overlay - fixed position to follow scrolling */}
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mt-[-100px]">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Coming Soon</h2>
            <p className="text-gray-600 mb-4">We're working hard to bring you our articles. Please check back later!</p>
            <button onClick={toggleForm} className="bg-arteng-dark text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
              {showForm ? 'Hide Form' : 'Notify Me'}
            </button>
            {showForm && (
              <div className="mt-6 border-t pt-6 border-gray-200">
                <MailtoNotifyForm />
              </div>
            )}
          </div>
        </div>

        {/* Featured Articles */}
        <section className="py-16 px-4 md:px-8">
          <div className="container mx-auto">
            <SectionHeader 
              title="Articles" 
              subtitle="Featured Articles" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
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
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
                Load More
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}