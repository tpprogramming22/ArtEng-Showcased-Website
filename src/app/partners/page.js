import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import SponsorCard from '@/components/SponsorCard';

export default function PartnersPage() {
  // random data that we'd pull from an API usually
  const primarySponsors = [
    {
      id: 1,
      name: "Honda",
      logo: "/honda-logo.jpg",
      description: "Proudly supported by Honda, committed to excellence in the field and pushing boundaries of innovation."
    },
    {
      id: 2,
      name: "Lloyd's Bank",
      logo: "/lloyds-logo.jpg",
      description: "In partnership with Lloyd's Bank, supporting innovation and creativity through financial expertise."
    },
    {
      id: 3,
      name: "KPMG",
      logo: "/kpmg-logo.jpg",
      description: "Proudly supported with professional and accounting services from KPMG, enabling our growth."
    },
    {
      id: 4,
      name: "Node.js",
      logo: "/nodejs-logo.jpg",
      description: "Powered by Node.js, enabling high-performance and scalable applications for our digital initiatives."
    },
    {
      id: 5,
      name: "Tesla",
      logo: "/tesla-logo.jpg",
      description: "Supported by Tesla, both companies share a vision for a sustainable future through innovation."
    }
  ];

  const supportingPartners = Array(8).fill().map((_, i) => ({
    id: i + 6,
    name: `Partner ${i + 1}`,
    logo: "/lloyds-logo.jpg",
    description: "Supporting ArtEng's mission to bring art and engineering together for innovative solutions."
  }));

  const communityPartners = Array(6).fill().map((_, i) => ({
    id: i + 14,
    name: `Community Org ${i + 1}`,
    logo: "/honda-logo.jpg",
    description: "Collaborating on community initiatives to expand access to art and technology education."
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Sponsors</h1>
          <p className="text-lg">The organizations and companies that make our work possible.</p>
        </div>
      </section>



      {/* Partnership Information */}
      <section className="py-16 px-4 md:px-8 ">
        <div className="container mx-auto">
          <SectionHeader 
            title="Partner With Us" 
            subtitle="Collaboration Opportunities" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 bg-gray-200 rounded-md overflow-hidden">
              <Image 
                src="/engineering-forum.jpg" 
                alt="Partnership Opportunities" 
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-arteng-dark mb-4">Why Partner With ArtEng?</h3>
              <p className="mb-4">
                Partnering with ArtEng offers a unique opportunity to support innovation at the intersection of art and technology. Our partners gain visibility among a diverse community of creators, access to cutting-edge projects, and the chance to participate in shaping the future of creative technology.
              </p>
              <p className="mb-6">
                We offer various partnership levels to accommodate organizations of all sizes and objectives, from financial sponsorship to in-kind support and collaborative projects.
              </p>
              <button className="bg-arteng-dark text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Primary Sponsors */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Sponsors" 
            subtitle="Primary Sponsors" 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {primarySponsors.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                name={sponsor.name}
                logo={sponsor.logo}
                description={sponsor.description}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Become a Partner */}
      <section className="py-16 px-4 md:px-8 bg-arteng-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Interested in supporting our mission to bring art and engineering together? We're always looking for new partners who share our vision.
          </p>
          <button className="bg-white text-arteng-dark px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
