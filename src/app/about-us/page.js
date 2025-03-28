import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import TeamMemberCard from '@/components/TeamMemberCard';

export default function AboutUsPage() {
  // sample data
  const teamMembers = [
    {
      id: 1,
      name: "Jane Smith",
      role: "Creative Director",
      description: "Leads our creative vision with over 15 years of experience in interactive design and digital art installations.",
      imageUrl: "/jane-smith.jpg"
    },
    {
      id: 2,
      name: "John Smith",
      role: "Marketing Director",
      description: "Drives our brand strategy with innovative approaches to engagement and audience development.",
      imageUrl: "/john-smith.jpg"
    },
    {
      id: 3,
      name: "Jess Smith",
      role: "Events Director",
      description: "Orchestrates our world-class events with precision and creativity, ensuring memorable experiences.",
      imageUrl: "/jess-smith.jpg"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Technical Lead",
      description: "Oversees all technical aspects of our projects, bringing engineering excellence to creative concepts.",
      imageUrl: "/john-smith.jpg"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "Operations Manager",
      description: "Ensures seamless execution of all our initiatives, maintaining high standards across the organization.",
      imageUrl: "/jane-smith.jpg"
    },
    {
      id: 6,
      name: "Michael Chang",
      role: "Community Liaison",
      description: "Builds relationships with artists, engineers, and partners to foster a thriving creative ecosystem.",
      imageUrl: "/john-smith.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Learn about our mission, values, and the team behind ArtEng.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Story" 
            subtitle="How We Started" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4">
                ArtEng began as a small collective of artists and engineers who shared a passion for interdisciplinary collaboration. What started as informal meetups in 2000 has grown into a respected organization at the intersection of art and technology.
              </p>
              <p className="mb-4">
                We believe that the most innovative solutions emerge when diverse perspectives come together. By creating spaces where artists and engineers can collaborate, we've facilitated the development of groundbreaking projects that neither group could have accomplished alone.
              </p>
              <p>
                Today, ArtEng hosts events, workshops, and exhibitions worldwide, bringing together creative minds from various backgrounds to explore new possibilities in art and technology.
              </p>
            </div>
            
            <div className="relative h-80 bg-gray-200 rounded-md overflow-hidden">
              <Image 
                src="/award-background.png" 
                alt="ArtEng History" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Impact" 
            subtitle="What We've Achieved" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-5xl font-bold text-arteng-dark mb-2">25+</h3>
              <p className="text-gray-600">Years in Industry</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-5xl font-bold text-arteng-dark mb-2">75+</h3>
              <p className="text-gray-600">Events Successfully Hosted</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-5xl font-bold text-arteng-dark mb-2">22+</h3>
              <p className="text-gray-600">Speakers & Presenters</p>
            </div>
            <div className="bg-white p-8 rounded-md shadow-sm">
              <h3 className="text-5xl font-bold text-arteng-dark mb-2">50+</h3>
              <p className="text-gray-600">Collaborative Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Meet The Team" 
            subtitle="Our Leaders" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                description={member.description}
                imageUrl={member.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Values" 
            subtitle="What We Stand For" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-bold text-arteng-dark mb-3">Creativity Without Boundaries</h3>
              <p className="text-gray-600">
                We believe in pushing the limits of what's possible when art and technology combine, encouraging experimentation and bold ideas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-bold text-arteng-dark mb-3">Collaborative Excellence</h3>
              <p className="text-gray-600">
                We foster environments where diverse perspectives and skills can come together to create something greater than the sum of its parts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-bold text-arteng-dark mb-3">Accessible Innovation</h3>
              <p className="text-gray-600">
                We strive to make the intersection of art and engineering accessible to all, regardless of background or experience level.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}