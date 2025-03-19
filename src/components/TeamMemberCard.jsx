import Image from 'next/image';

const TeamMemberCard = ({ name, role, imageUrl, description }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm">
      <div className="relative aspect-square bg-gray-200">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">Image placeholder</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-arteng-dark">{name}</h3>
        <p className="text-gray-600 font-medium mb-2">{role}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;