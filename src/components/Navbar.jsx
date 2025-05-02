import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-5 bg-white text-arteng-dark">
      <div className="flex items-center">
        <Link href="/" className="text-3xl font-bold flex items-center">
          <div className="mr-2">
            <Image
              src="/logo.svg"
              alt="ArtEng Logo"
              width={180}
              height={60}
              priority
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-lg hover:underline">Home</Link>
        <Link href="/events" className="text-lg hover:underline">Events</Link>
        <Link href="/news" className="text-lg hover:underline">News</Link>
        <Link href="/about-us" className="text-lg hover:underline">About Us</Link>
        <Link href="/membership" className="text-lg hover:underline">Membership</Link>
        <Link href="/partners" className="text-lg hover:underline">Partners</Link>
        <Link href="/faq" className="text-lg hover:underline">FAQ</Link>
        <Link href="/contact" className="text-lg hover:underline">Contact</Link>
        <Link href="/login" className="ml-4 px-6 py-2 rounded bg-arteng-dark text-white hover:bg-opacity-90 transition-colors font-bold text-lg flex items-center justify-center">
          SIGN UP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
