'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

export default function AboutUsPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 4,
      name: "Wendy Bennett",
      role: "Managing Director",
      description: "Wendy is a trailblazer for women in industry and has a reputation for becoming the first female in a variety of positions across many engineering fields...",
      imageUrl: "/wendynew.png",
      long1: "Wendy is a trailblazer for women in industry...",
      long2: "In 2016 she visited Dresden...",
      long3: ""
    },
    {
      id: 2,
      name: "Stephen Fletcher",
      role: "Creative Director",
      description: "Stephen's career spans more than 45 years...",
      imageUrl: "/steve.png",
      long1: "Stephen's career spans more than 45 years...",
      long2: "Stephen's experience covers a broad range...",
      long3: "Stephen's experience has led to a passion..."
    },
    {
      id: 3,
      name: "Joan Smith",
      role: "Corporate Director",
      description: "With over 20 years of experience in business advice...",
      imageUrl: "/jess-smith.jpg",
      long1: "With over 20 years of experience...",
      long2: "As an impartial broker, she specialises...",
      long3: "Joan's philosophy is 'Let's Make a Difference Together'..."
    },
    {
      id: 1,
      name: "Adam Snelleksz",
      role: "Marketing Director",
      description: "Adam has a wide and varied work history...",
      imageUrl: "/adam.png",
      long1: "Adam has a wide and varied work history...",
      long2: "After working in sport, Adam took the step...",
      long3: ""
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Learn about our mission, values, and the team behind ArtEng.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold text-arteng-dark mb-4">Who We Are</h2>
              <p className="text-lg">
                ArtEng consists of four experienced business professionals who currently run successful businesses in their respective fields...
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-md overflow-hidden">
              <Image 
                src="/silverstatue.jpg" 
                alt="ArtEng History" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-md overflow-hidden">
              <Image 
                src="/aboutusnew.jpg" 
                alt="ArtEng History" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-arteng-dark mb-2">Our Story</h2>
              <p className="text-gray-600 text-lg mb-4">What We Stand For</p>
              <p className="mb-4 text-lg">
                ArtEng is an innovative concept that merges the worlds of art and engineering to encourage creativity and problem-solving...
              </p>
              <p className="mb-4 text-lg">
                Through networking, events and a programme of activities, ArtEng is striving to cultivate a dynamic space...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-arteng-dark mb-6">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-all transform hover:translate-y-[-3px] group relative"
              >
                <div className="relative w-56 h-56 mb-4">
                  <Image src={member.imageUrl} alt={member.name} fill className="object-cover rounded-md" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-arteng-dark transition-colors duration-300">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <p className="text-sm text-center mb-6">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Member Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white text-black rounded-lg p-4 md:p-8 max-w-5xl w-11/12 md:w-11/12 relative flex flex-col md:flex-row items-center gap-4 md:gap-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-2 right-2 md:top-4 md:right-4 text-black text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>

            <div className="flex flex-col items-center md:items-start md:flex-shrink-0">
              <div className="relative w-72 h-72 md:w-80 md:h-80 mb-4">
                <Image src={selectedMember.imageUrl} alt={selectedMember.name} fill className="object-cover rounded-md" />
              </div>
              {/* Icon row from fork */}
              <div className="flex space-x-4 mt-2">
                <div className="relative w-8 h-8">
                  <Image src="/linkedin.png" alt="LinkedIn" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-8 h-8">
                  <Image src="/whatsapp.jpg" alt="WhatsApp" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-8 h-8">
                  <Image src="/gmail.png" alt="Gmail" fill className="object-cover rounded-md" />
                </div>
                <div className="relative w-8 h-8">
                  <Image src="/x.png" alt="X (Twitter)" fill className="object-cover rounded-md" />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedMember.name}</h2>
              <p className="text-lg md:text-xl mb-4">{selectedMember.role}</p>
              <p className="text-base text-black mb-4">{selectedMember.long1}</p>
              <p className="text-base text-black mb-4">{selectedMember.long2}</p>
              {selectedMember.long3 && <p className="text-base text-black mb-4">{selectedMember.long3}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
