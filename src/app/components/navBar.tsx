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
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="#features" className="text-black hover:text-blue-600">
              Features
            </Link>
            <Link href="#pricing" className="text-black hover:text-blue-600">
              Pricing
            </Link>
            <Link
              href="#waitlist"
              className="bg-[#66afb5] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#5a9ea3] hover:shadow-lg transition-all duration-300"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden bg-white border border-gray-200 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          <Link
            href="#features"
            className="block text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="block text-black hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#waitlist"
            className="inline-block bg-[#66afb5] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#5a9ea3] hover:shadow-lg transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
