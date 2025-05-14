import Link from 'next/link';

const SectionHeader = ({ title, subtitle, viewAllLink }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-arteng-dark">{title}</h2>
        {subtitle && <p className="text-gray-600">{subtitle}</p>}
      </div>
      {viewAllLink && (
        <Link href={viewAllLink} className="mt-2 sm:mt-0 bg-arteng-dark text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition-colors w-32 text-center">
          View All
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;