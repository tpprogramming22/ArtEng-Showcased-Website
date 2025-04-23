import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';
import TeamMemberCard from '@/components/TeamMemberCard';

export default function AboutUsPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  // sample data
  const teamMembers = [
    {
      id: 1,
      name: "Adam Snelleksz",
      role: "Marketing Director",
      description: "Adam is a marketing and communications expert with over 25 years of experience, including founding two successful agencies.",
      imageUrl: "/adam.png"
    },
    {
      id: 2,
      name: "Stephen Fletcher",
      role: "Sales Director",
      description: "Stephen has over 45 years of experience in logistics, project management, sales, and the arts, with a strong focus on supporting student career transitions.",
      imageUrl: "/steve.png"
    },
    {
      id: 3,
      name: "Joan Smith",
      role: "Business Director",
      description: "Joan is an experienced business advisor who connects companies with expert support to help them grow and succeed.",
      imageUrl: "/jess-smith.jpg"
    },
    {
      id: 4,
      name: "Wendy Bennet",
      role: "Technical Lead",
      description: "Wendy is a pioneering leader for women in engineering, with groundbreaking achievements in precision casting and leadership roles in multiple industry organizations.",
      imageUrl: "/wendy.png"
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeader 
                title="Our Beginning" 
                subtitle="How We Started" 
              />
              <p className="mb-4">
                We are four individuals brought together by our expertise in our respective fields. ArtEng came from the idea that the diverse worlds of art and engineering could work together to offer innovative solutions in their own unique ways. To find out more about who we are, take a look at who are.
              </p>
            </div>
            <div className="relative h-80 bg-gray-200 rounded-md overflow-hidden">
              <Image 
                src="/team-photo.png" 
                alt="ArtEng History" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Meet The Team" 
            subtitle="Our Leaders" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                description={member.description}
                imageUrl={member.imageUrl}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white rounded-lg p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <Image 
                src={selectedMember.imageUrl} 
                alt={selectedMember.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h2 className="text-xl font-bold">{selectedMember.name}</h2>
              <p className="text-gray-600">{selectedMember.role}</p>
              <p className="mt-4 text-center">{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Our Values */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Story" 
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
            <div className="relative h-80 rounded-md overflow-hidden">
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
