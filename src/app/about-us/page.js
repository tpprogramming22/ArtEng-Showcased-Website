"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export default function AboutUsPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 4,
      name: "Wendy Bennett",
      description:
        "Wendy is a trailblazer for women in industry and has a reputation for becoming the first female in a variety of positions across many engineering fields. She worked within the precision investment casting industry for 26 years and was CEO and previous owner of Lost Wax Development Limited.",
      imageUrl: "/wendynew.png",
      long1:
        "Wendy is a trailblazer for women in industry and has a reputation for becoming the first female in a variety of positions across many engineering fields. She worked within the precision investment casting industry for 26 years and was CEO and previous owner of Lost Wax Development Limited. Her achievements in the industry are far ranging and include recognition nationally and internationally. Wendy was the first female to be awarded a Fellowship to the Institute of Cast Metal Engineers (ICME) in 2012 and was also the first female Chair of the Cast Metal Federation (CMF) from 2015 to 2017 and is the current President of the West Midlands branch of the ICME.",
      long2:
        "In 2016 she visited Dresden for the International Foundry Forum and represented the UK Foundry Industry and has also been a Government advisor on industrial strategy on behalf of the Metals Council. She was invited to join the Council of 'Made in the Midlands' after being recognised as one of the only women within the region who was involved in industry and who owned a precision investment casting facility. Wendy has also been involved in the 'Advanced Engineering Cluster' which was set up to promote the use of students and under graduates for technical projects within the manufacturing sector, utilising the latest technologies available within the universities.",
      long3: "",
      linkedIn: "https://www.linkedin.com/in/wendy-bennett-8952631b/",
    },
    {
      id: 2,
      name: "Stephen Fletcher",
      description:
        "Stephen's career spans more than 45 years covering a range of roles including Logistics/Transport management, Project management, Key Account management and Sales Business Development.",
      imageUrl: "/steve.png",
      long1:
        "Stephen's career spans more than 45 years covering a range of roles including Logistics/Transport management, Project management, Key Account management and Sales Business Development. He has worked on behalf of a range of manufacturing and service suppliers including Metal fabrication, Flexible packaging, Precision Engineering and Commercial Heat Treatment",
      long2:
        "Stephen's experience covers a broad range of industrial sectors including Automotive, Agricultural, Aerospace, General Industrial [including tool making and precision engineering] and Defence across UK and Europe. In addition, Stephen's vast range of experience also incorporates a deep involvement in the arts and media. A long term involvement in theatre has seen him take on roles of acting, producing and directing in a variety of productions. This has led to a passion for promoting and supporting the theatre and creative media sector including writing, live performance, independent film making and production. Similarly, he has managed, overseen and facilitated creative media driven projects, awareness programmes and initiatives for the NHS and Schools. This has also extended to sales networking and training in the corporate sector.",
      long3:
        "Stephen's experience has led to a passion for supporting the transition of students in the move towards a career environment, allowing them access to as much information as they need to complete their studies, because anything is possible if you are supported by the right people.",
      linkedIn: "https://www.linkedin.com/in/steve-fletcher-46b097238/",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">
            Learn about our mission, values, and the team behind ArtEng.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div>
                <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">
                  Who We Are
                </h2>
              </div>
              <p className="mb-4 text-lg">
                ArtEng consists of four experienced business professionals who
                currently run successful businesses in their respective fields.
                The combination of experience across different sectors and
                industries means that between these four directors of the
                company, the contacts, knowledge, connections and overall work
                history creates a business that operates in and brings together
                different cultures.
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
              <div>
                <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left">
                  Our Story
                </h2>
                <p className="text-gray-600 text-center sm:text-left text-lg sm:text-lg">
                  What We Stand For
                </p>
              </div>
              <p className="mb-4 text-lg">
                ArtEng is an innovative concept that merges the worlds of art
                and engineering to encourage creativity and problem-solving in
                industry. It was established to bridge the gap between art and
                engineering, offering a platform for artists, engineers, and
                creators to collaborate and develop groundbreaking solutions.
              </p>
              <p className="mb-4 text-lg">
                Through networking, events and a programme of activities, ArtEng
                is striving to cultivate a dynamic space where imagination meets
                engineering, resulting in groundbreaking works that shape the
                future of both art and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="py-16 px-4 md:px-8">
  <div className="container mx-auto">
    <div>
      <h2 className="text-4xl sm:text-4xl font-bold text-arteng-dark text-center sm:text-left mb-8">
        Co-Founders
      </h2>
    </div>
    <div className="flex flex-row justify-evenly items-start">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          onClick={() => setSelectedMember(member)}
          className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:translate-y-[-3px] group relative max-w-[25%]"
        >
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-3 sm:mb-4 mt-2 flex-shrink-0">
            <Image
              src={member.imageUrl}
              alt={member.name}
              fill
              className="object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col items-center flex-grow p-3 sm:p-4 pt-0">
            <h3 className="text-base sm:text-lg font-bold group-hover:text-arteng-dark transition-colors duration-300 mb-2">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-center mb-4 flex-grow">
              {member.description}
            </p>
          </div>

          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-arteng-dark">
              <span className="text-sm font-medium mr-1">Click for more</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Member Modal - Mobile Responsive */}
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
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 relative flex-shrink-0">
              <div className="relative w-full md:w-96 h-64 md:h-96 flex-shrink-0">
                <Image
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 justify-center gap-2 relative flex-shrink-0">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" fill="#0077B5" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>

                  <a
                    href={selectedMember.linkedIn || "#"}
                    className="text-blue-600 hover:underline text-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full overflow-y-auto">
              <h2 className="text-xl md:text-3xl font-bold mb-2">
                {selectedMember.name}
              </h2>
              <p className="text-black mb-4 text-m md:text-base">
                {selectedMember.long1}
              </p>
              <p className="text-black mb-4 text-m md:text-base">
                {selectedMember.long2}
              </p>
              {selectedMember.long3 && (
                <p className="text-black mb-4 text-m md:text-base">
                  {selectedMember.long3}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
