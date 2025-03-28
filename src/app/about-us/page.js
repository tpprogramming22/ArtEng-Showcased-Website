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
      imageUrl: "/adam.png"
    },
    {
      id: 2,
      name: "John Smith",
      role: "Marketing Director",
      description: "Drives our brand strategy with innovative approaches to engagement and audience development.",
      imageUrl: "/steve.png"
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
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="mb-4">
            <SectionHeader 
              title="Our Story" 
              subtitle="How We Started" 
            />
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeader 
                title="Our Story" 
                subtitle="How We Started" 
              />
              <p className="mb-4">
                We are four individuals brought together by our expertise in our respective fields. ArtEng came from the idea that the diverse worlds of art and engineering could work together to offer innovative solutions in their own unique ways. To find out more about who we are, take a look at who are.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4">
                ArtEng is an innovative initiative that merges the worlds of art and engineering to encourage creativity and problem-solving in industry. It was established to bridge the gap between art and engineering, offering a platform for artists, engineers, and creators to collaborate and develop groundbreaking solutions. The idea behind ArtEng is to recognise that art and engineering, when combined, can lead to fresh perspectives, new technologies and creative ideas.
              </p>
              <p className="mb-4">
                ArtEng was set up to address the need for cross-industry approaches to problem-solving in today’s evolving world. In a time where technology is shaping every aspect of life, ArtEng seeks to take artistic thinking and engineering expertise to create innovative solutions that are both functional and visually impactful. We want to promote an environment where diverse perspectives thrive, encouraging participants to think outside traditional boundaries.
              </p>
              <p className="mb-4">
                At ArtEng we want to foster a creative community that blurs the lines between art and engineering, providing the tools, resources and opportunities to experiment, collaborate, and develop projects that challenge traditional perspectives. In the long term, we want to inspire future generations to approach challenges with a balance of technical skill and artistic imagination.
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
    </div>
  );
}
