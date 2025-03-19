import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-5 bg-arteng-dark text-white shadow-md">
      <div className="flex items-center">
        <Link href="/" className="text-3xl font-bold flex items-center">
          <div className="border-2 border-white p-1 mr-2">
            <span className="px-2">arteng</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-lg hover:underline">Home</Link>
        <Link href="/events" className="text-lg hover:underline">Events</Link>
        <Link href="/news" className="text-lg hover:underline">News</Link>
        <Link href="/about-us" className="text-lg hover:underline">About Us</Link>
        <Link href="/partners" className="text-lg hover:underline">Partners</Link>
        <Link href="/faq" className="text-lg hover:underline">FAQ</Link>
        <Link href="/login" className="ml-4 px-6 py-2 rounded bg-white text-arteng-dark hover:bg-gray-200 transition-colors font-bold text-lg">
          LOG IN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;