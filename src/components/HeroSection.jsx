import Link from 'next/link';

const HeroSection = ({ title, subtitle, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-arteng-dark text-white py-16 px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-xl mb-4">{subtitle}</p>}
          {description && <p className="mb-6">{description}</p>}
          {buttonText && buttonLink && (
            <Link href={buttonLink} className="inline-block bg-white text-arteng-dark px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;