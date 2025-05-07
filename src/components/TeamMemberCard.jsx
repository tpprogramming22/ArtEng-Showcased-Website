import Image from 'next/image';
import Link from 'next/link';

const TeamMemberCard = ({ name, role, imageUrl, description, linkToAbout = true }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all transform hover:scale-105 group relative h-[420px] flex flex-col items-center justify-center p-4"
    >
      <div className="relative w-56 h-56 mb-4 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={name} 
          fill 
          className="object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <h3 className="font-bold text-lg text-arteng-dark group-hover:text-arteng-dark transition-colors duration-300">{name}</h3>
      <p className="text-gray-600 font-medium mb-2">{role}</p>
      <p className="text-gray-500 text-sm text-center">{description}</p>
      
      {linkToAbout && (
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href="/about-us" className="flex items-center text-arteng-dark">
            <span className="text-sm font-medium mr-1">Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
