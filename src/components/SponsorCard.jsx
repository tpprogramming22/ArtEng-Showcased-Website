import Image from 'next/image';

const SponsorCard = ({ name, logo, description }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200 p-4 flex flex-col items-center">
      <div className="w-24 h-16 relative mb-2">
        {logo ? (
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
            <span className="text-gray-400 text-xs">{name}</span>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default SponsorCard;