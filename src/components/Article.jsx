import Image from 'next/image';
import Link from 'next/link';

const Article = ({ 
  imageUrl, 
  title, 
  description,
  readTime, 
  link, 
  linkText = "Read Now",
  aspectRatio = "aspect-video",
}) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200 flex flex-col h-full">
      <div className={`relative ${aspectRatio} bg-gray-200`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">Image placeholder</span>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg mb-2 text-arteng-dark">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{description}</p>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{readTime} minutes</p>
        <div className="mt-auto">
          <Link href={link} className="inline-block bg-arteng-dark text-white px-4 py-1 rounded text-sm hover:bg-opacity-90 transition-colors w-24 text-center">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Article;