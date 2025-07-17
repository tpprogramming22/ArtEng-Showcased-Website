"use client"

import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import MailtoNotifyForm from '@/components/SignUp';
import { useState, useEffect } from 'react';

export default function ArticlesPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to format date
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
      return dateString; // Fallback to original string if parsing fails
    }
  };

  // Helper function to determine if article is "featured" (recent)
  const isFeaturedArticle = (dateString) => {
    try {
      const articleDate = new Date(dateString);
      const now = new Date();
      const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
      
      return articleDate >= twoWeeksAgo;
    } catch (error) {
      return false;
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

  // Fetch articles from API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://arteng-be.onrender.com/api/v1/articles');
        
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        
        const data = await response.json();
        
        if (data.success && data.data) {
          const transformedArticles = data.data.map(transformArticle);
          setArticles(transformedArticles);
        } else {
          setArticles([]);
        }
        
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles. Please try again later.');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Separate articles into featured (recent) and other articles
  const featuredArticles = articles.filter(article => isFeaturedArticle(article.rawDate));
  const recentArticles = articles.filter(article => !isFeaturedArticle(article.rawDate));

  const toggleForm = () => {
    setShowForm(prevState => !prevState);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-arteng-dark text-white py-12 pt-24">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-5xl font-bold mb-4">News</h1>
            <p className="text-xl">Stay updated with the latest from ArtEng and the industry.</p>
          </div>
        </section>
        
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-arteng-dark mx-auto mb-4"></div>
            <p className="text-gray-600">Loading articles...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-arteng-dark text-white py-12 pt-24">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-5xl font-bold mb-4">News</h1>
            <p className="text-xl">Stay updated with the latest from ArtEng and the industry.</p>
          </div>
        </section>
        
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-arteng-dark text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-5xl font-bold mb-4">News</h1>
          <p className="text-xl">Stay updated with the latest from ArtEng and the industry.</p>
        </div>
      </section>

      <div className="relative">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-16 px-4 md:px-8">
            <div className="container mx-auto">
              <div>
                <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">Featured News</h2>
                <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">Latest Articles</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
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
            </div>
          </section>
        )}

        {/* All Articles / Recent Articles */}
        <section className={`py-16 px-4 md:px-8 ${featuredArticles.length > 0 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto">
            <div>
              <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">
                {featuredArticles.length > 0 ? 'All Articles' : 'News'}
              </h2>
              <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">
                {articles.length > 0 ? 'Stay Informed' : 'Articles'}
              </p>
            </div>
            
            {articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">No articles available at the moment.</p>
                <p className="text-gray-500">Check back later for the latest news and updates!</p>
              </div>
            ) : featuredArticles.length > 0 && recentArticles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">All recent articles are featured above!</p>
                <p className="text-gray-500">Check the "Featured News" section.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(featuredArticles.length > 0 ? recentArticles : articles).map((article) => (
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

                {(featuredArticles.length > 0 ? recentArticles : articles).length > 6 && (
                  <div className="mt-8 flex justify-center">
                    <Link href="/news" className="inline-block bg-arteng-dark text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors w-32 text-center">
                      Load More
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </div>

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
                    className="object-cover"
                  />
                  <button 
                    onClick={closeModal}
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
                  onClick={closeModal}
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
                    onClick={closeModal}
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