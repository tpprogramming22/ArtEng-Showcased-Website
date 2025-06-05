import Image from "next/image";
import Link from "next/link";

const TeamMemberCard = ({
  name,
  role,
  imageUrl,
  description,
  linkToAbout = true,
}) => {
  // Create a shortened version of the description for mobile
  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div className="cursor-pointer flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow hover:shadow-md transition-all transform hover:translate-y-[-3px] group relative">
      <div className="relative w-full aspect-square mb-3 sm:mb-4">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-md object-top"
        />

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all "></div>
      </div>
      <h3 className="font-bold text-base sm:text-lg text-arteng-dark group-hover:text-arteng-dark transition-colors">
        {name}
      </h3>
      <p className="text-gray-600 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
        {role}
      </p>

      <p className="text-gray-500 text-xs sm:text-sm text-center ">
        {description}
      </p>

      {linkToAbout && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity ">
          <Link href="/about-us" className="flex items-center text-arteng-dark">
            <span className="text-xs sm:text-sm font-medium mr-1">
              Learn more
            </span>
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
          </Link>
        </div>
      )}
    </div>
  );
};

export default TeamMemberCard;
