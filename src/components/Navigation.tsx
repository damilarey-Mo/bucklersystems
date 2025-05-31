'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-44 md:h-12">
              <Image
                src="/images/buckler-logo.png"
                alt="Buckler Systems Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/vehicles" className="text-gray-300 hover:text-white transition-colors">
              Armored Vehicles
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="tel:+2348065555009"
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/vehicles"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            >
              Armored Vehicles
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            >
              Contact
            </Link>
            <a
              href="tel:+2348065555009"
              className="flex items-center space-x-2 px-3 py-2 text-white bg-red-600 hover:bg-red-700 rounded-md"
            >
              <Phone className="h-5 w-5" />
              <span>Emergency Contact</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 