import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import SponsorCard from '@/components/SponsorCard';

export default function PartnersPage() {
  // Primary sponsors data
  const primarySponsors = [
    {
      id: 1,
      name: "Forusall",
      logo: "/forusall.jpg",
      description: "Forusall is a company that is at the heart of connecting people, promoting product awareness, championing innovation and joining likeminded businesses. With a commitment to supporting and promoting engineering and manufacturing in its many forms, Forusall is passionate about the very shapes, designs and innovations that influence the everyday lives of each and everyone of us."
    },
    {
      id: 2,
      name: "Business Cube",
      logo: "/businesscube.jpg",
      description: "The Business Cube is a place where SMEs can connect, share knowledge and collaborate with trusted experts to accelerate growth. Our multi-dimensional support is free – the only charge to your business will be for any work that goes ahead with our experts to help your business grow."
    },
    {
      id: 3,
      name: "CMA Media",
      logo: "/cmamedia.png",
      description: "CMA Media provides marketing support to businesses who need assistance with digital marketing, websites, SEO, video and communications. Our experience of working with SMEs and large corporate organisations means that we can work to any particular requirements and circumstances."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
          <p className="text-lg">The organisations and companies that make our work possible.</p>
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
                className="object-cover grayscale"
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
              <Link href="/login">
                <button className="bg-arteng-dark text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Sponsors */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Partners" 
            subtitle="Primary Partners" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          <Link href="/login">
            <button className="bg-white text-arteng-dark px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}