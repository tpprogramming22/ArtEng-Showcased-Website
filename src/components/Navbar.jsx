"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuHeight, setMenuHeight] = useState('100vh');

  const isOpenRef = useRef(isOpen);

  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Handle viewport height changes for mobile menu
  useEffect(() => {
    const updateMenuHeight = () => {
      if (isOpen) {
        const vh = window.innerHeight * 0.01;
        setMenuHeight(`${vh * 100}px`);
      }
    };

    updateMenuHeight();
    window.addEventListener('resize', updateMenuHeight);

    return () => {
      window.removeEventListener('resize', updateMenuHeight);
    };
  }, [isOpen]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (isMobile && !isOpenRef.current) {
        setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile, prevScrollPos]);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);

    if (newIsOpen) {
      setVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-5 bg-white text-arteng-dark transition-all duration-300 ${
      isMobile && !visible && !isOpen ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="flex items-center">
        <Link href="/" className="text-3xl font-bold flex items-center" onClick={closeMenu}>
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

      {isMobile && (
        <button 
          className="block md:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {!isMobile && (
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-lg hover:underline">Home</Link>
          <Link href="/events" className="text-lg hover:underline">Events</Link>
          <Link href="/news" className="text-lg hover:underline">News</Link>
          <Link href="/about-us" className="text-lg hover:underline">About Us</Link>
          <Link href="/membership" className="text-lg hover:underline">Membership</Link>
          <Link href="/partners" className="text-lg hover:underline">Partners</Link>
          <Link href="/faq" className="text-lg hover:underline">FAQ</Link>
          <Link href="/contact" className="text-lg hover:underline">Contact</Link>
          <Link href="/login" className="ml-4 bg-arteng-dark text-white font-bold text-lg rounded flex items-center justify-center h-10 w-28 pt-[3px]">
            SIGN UP
          </Link>
        </div>
      )}

      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-white z-40 overflow-auto flex flex-col"
          style={{ top: 0, bottom: 0, height: menuHeight }}
        >
          <div className="p-5 flex justify-between items-center border-b border-gray-200">
            <Link href="/" className="text-3xl font-bold flex items-center" onClick={closeMenu}>
              <div>
                <Image
                  src="/logo.svg"
                  alt="ArtEng Logo"
                  width={180}
                  height={60}
                  priority
                />
              </div>
            </Link>
            <button 
              onClick={closeMenu}
              className="text-arteng-dark focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-6 p-6 flex-grow overflow-auto">
            <Link href="/" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>Home</Link>
            <Link href="/events" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>Events</Link>
            <Link href="/news" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>News</Link>
            <Link href="/about-us" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>About Us</Link>
            <Link href="/membership" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>Membership</Link>
            <Link href="/partners" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>Partners</Link>
            <Link href="/faq" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>FAQ</Link>
            <Link href="/contact" className="text-xl font-medium border-b border-gray-200 pb-2" onClick={closeMenu}>Contact</Link>
            <Link 
              href="/login" 
              className="bg-arteng-dark text-white font-bold text-xl rounded flex items-center justify-center py-3 px-6 mt-4"
              onClick={closeMenu}
            >
              SIGN UP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
