'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down & past top
        setShowNavbar(false);
        setIsOpen(false); // Close the menu when navbar disappears
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-transparent z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-blue-600">
            <Link href="/">
              <Image
                src="/NubuLogo.png" // path relative to public/
                alt="GroceryApp Logo"
                width={120} // adjust based on your logo
                height={40}
                priority // ensures it loads fast
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="md:flex space-x-6 items-center">
            <Link
              href="#waitlist"
              className="bg-[#66afb5] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#5a9ea3] hover:shadow-lg transition-all duration-300"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

