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
      description: "Wendy is a trailblazer for women in industry and has a reputation for becoming the first female in a variety of positions across many engineering fields. She worked within the precision investment casting industry for 26 years and was CEO and previous owner of Lost Wax Development Limited.",
      imageUrl: "/wendynew.png",
      long1: "Wendy is a trailblazer for women in industry and has a reputation for becoming the first female in a variety of positions across many engineering fields. She worked within the precision investment casting industry for 26 years and was CEO and previous owner of Lost Wax Development Limited. Her achievements in the industry are far ranging and include recognition nationally and internationally. Wendy was the first female to be awarded a Fellowship to the Institute of Cast Metal Engineers (ICME) in 2012 and was also the first female Chair of the Cast Metal Federation (CMF) from 2015 to 2017 and is the current President of the West Midlands branch of the ICME.",
      long2: "In 2016 she visited Dresden for the International Foundry Forum and represented the UK Foundry Industry and has also been a Government advisor on industrial strategy on behalf of the Metals Council. She was invited to join the Council of 'Made in the Midlands' after being recognised as one of the only women within the region who was involved in industry and who owned a precision investment casting facility. Wendy has also been involved in the 'Advanced Engineering Cluster' which was set up to promote the use of students and under graduates for technical projects within the manufacturing sector, utilising the latest technologies available within the universities.",
      long3: ""
    },
    {
      id: 2,
      name: "Stephen Fletcher",
      role: "Creative Director",
      description: "Stephen's career spans more than 45 years covering a range of roles including Logistics/Transport management, Project management, Key Account management and Sales Business Development.",
      imageUrl: "/steve.png",
      long1: "Stephen's career spans more than 45 years covering a range of roles including Logistics/Transport management, Project management, Key Account management and Sales Business Development. He has worked on behalf of a range of manufacturing and service suppliers including Metal fabrication, Flexible packaging, Precision Engineering and Commercial Heat Treatment",
      long2: "Stephen's experience covers a broad range of industrial sectors including Automotive, Agricultural, Aerospace, General Industrial [including tool making and precision engineering] and Defence across UK and Europe. In addition, Stephen's vast range of experience also incorporates a deep involvement in the arts and media. A long term involvement in theatre has seen him take on roles of acting, producing and directing in a variety of productions. This has led to a passion for promoting and supporting the theatre and creative media sector including writing, live performance, independent film making and production. Similarly, he has managed, overseen and facilitated creative media driven projects, awareness programmes and initiatives for the NHS and Schools. This has also extended to sales networking and training in the corporate sector.",
      long3: "Stephen's experience has led to a passion for supporting the transition of students in the move towards a career environment, allowing them access to as much information as they need to complete their studies, because anything is possible if you are supported by the right people."
    },
    {
      id: 3,
      name: "Joan Smith",
      role: "Corporate Director",
      description: "With over 20 years of experience in business advice and guidance, Joan brings a wealth of knowledge in all areas of business support. Having worked with hundreds of companies across diverse sectors, Joan has always managed to understand their unique challenges and opportunities that businesses face.",
      imageUrl: "/jess-smith.jpg",
      long1: "With over 20 years of experience in business advice and guidance, Joan brings a wealth of knowledge in all areas of business support. Having worked with hundreds of companies across diverse sectors, Joan has always managed to understand their unique challenges and opportunities that businesses face. Her approach is centred around learning about each business, analysing their needs, and providing tailored solutions to help them achieve their goals.",
      long2: "As an impartial broker, she specialises in connecting businesses with the right experts and resources, ensuring they receive the guidance needed to thrive. Past experience includes managing members for the Chamber of Commerce and successfully fostering a thriving business community in the Solihull area. This included organising and hosting prestigious business awards evenings - celebrating local success stories, recognising outstanding achievements, and creating opportunities for businesses to showcase their impact on the local, national and global stage. These events not only strengthened connections within the business community but also inspired growth and collaboration.",
      long3: "Joan's philosophy is 'Let's Make a Difference Together' and she genuinely believes that every business deserves access to expert advice and guidance in all areas. By working together, any business can thrive, achieving goals with clarity, expertise, and a shared purpose."
    },
    {
      id: 1,
      name: "Adam Snelleksz",
      role: "Marketing Director",
      description: "Adam has a wide and varied work history in marketing, communication and PR with over 25 years experience in many different roles and organisations. After graduating from university with a marketing degree, Adam moved to London and worked in a busy press office for the National Consumer Council.",
      imageUrl: "/adam.png",
      long1: "Adam has a wide and varied work history in marketing, communication and PR with over 25 years experience in many different roles and organisations. After graduating from university with a marketing degree, Adam moved to London and worked in a busy press office for the National Consumer Council. Following two years in the capital, Adam returned to Birmingham as head of communications for Birmingham City Football Club. The role included hosting and organising manager and player press conferences, dealing with media enquiries and setting up the club's first online TV channel, Blues TV. Adam then stayed in the sports industry when he became head of marketing for Birmingham City Council's sports events department. Responsible for the commercial partnerships, ticket sales, marketing and promotion of world and European championships including the World BMX Championships, European Gymnastics Championships, Diamond League Athletics and many more held at the National Indoor Arena and Birmingham Alexander Stadium.",
      long2: "After working in sport, Adam took the step of setting up his own company - a video production company called CMA Video. He built the company into a widely recognised video agency which produced TV and cinema adverts for Sea Life Centre, Lego Land, Brooks running shoes and many more. After 12 years of successful trading, Adam sold the business and set up an off-shoot marketing company called CMA Media which specialises in digital marketing, social media and website services. Current clients include Aston University and Birmingham based charity, Help Harry Help Others",
      long3: ""
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-arteng-dark text-white py-12 pt-24">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Learn about our mission, values, and the team behind ArtEng.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeader 
                title="Who We Are" 
              />
              <p className="mb-4">
                ArtEng consists of four experienced business professionals who currently run successful businesses in their respective fields.  The combination of experience across different sectors and industries means that between these four directors of the company, the contacts, knowledge, connections and overall work history creates a business that operates in and brings together different cultures.
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
            <div className="relative h-80 rounded-md overflow-hidden">
              <Image 
                src="/aboutus2.jpg" 
                alt="ArtEng History" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div>
                <SectionHeader 
                  title="Our Story" 
                  subtitle="What We Stand For" 
                />
              </div>
              <p className="mb-4">
                ArtEng is an innovative concept that merges the worlds of art and engineering to encourage creativity and problem-solving in industry. It was established to bridge the gap between art and engineering, offering a platform for artists, engineers, and creators to collaborate and develop groundbreaking solutions. 
              </p>
              <p className="mb-4">
                Through networking, events and a programme of activities, ArtEng is striving to cultivate a dynamic space where imagination meets engineering, resulting in groundbreaking works that shape the future of both art and technology.
              </p>
              <p className="mb-4">
                We want to foster a creative community that blurs the lines between art and engineering, providing the tools, resources and opportunities to experiment, collaborate, and develop projects that challenge traditional perspectives. 
              </p>
              <p className="mb-4">
                Arteng is especially relevant in today's innovation-driven world, where many designs often require both technical skill and imaginative vision. It encourages engineers to think creatively and artists to embrace technology, breaking down traditional barriers between the two fields. In education, Arteng can foster interdisciplinary learning, helping students develop both problem-solving abilities and artistic sensibility.  Our work with universities and educational institutions means that we can develop and ensure that the two industries can gain new entrants to continue, develop and innovate for decades to come. 
              </p>
            </div>
            
          </div>
        </div>
      </section>


      {/* Meet the Team - Enhanced with hover effects */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            title="Meet The Team" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all transform hover:scale-105 group relative h-[420px]"
              >
                <div className="relative w-56 h-56 mb-4 overflow-hidden">
                  <Image src={member.imageUrl} alt={member.name} fill className="object-cover rounded-md" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-arteng-dark transition-colors duration-300">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
                <p className={`text-sm text-center ${member.id === 2 ? 'mb-4' : ''}`}>{member.description}</p>
                
                {/* Click indicator - Fixed position at bottom */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-arteng-dark">
                    <span className="text-sm font-medium mr-1">Click for more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-white text-black rounded-lg p-8 max-w-5xl w-11/12 relative flex flex-col md:flex-row items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-black text-2xl"
              onClick={() => setSelectedMember(null)}
            >
              &times;
            </button>
            <div className="relative w-96 h-96 flex-shrink-0">
              <Image src={selectedMember.imageUrl} alt={selectedMember.name} fill className="object-cover rounded-md" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
              <p className="text-lg mb-4">{selectedMember.role}</p>
              <p className="text-black mb-4">{selectedMember.long1}</p>
              <p className="text-black mb-4">{selectedMember.long2}</p>
              {selectedMember.long3 && <p className="text-black mb-4">{selectedMember.long3}</p>}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}
