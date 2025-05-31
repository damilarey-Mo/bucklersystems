import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
           
          </Link>
        </div>
        {/* Navigation links can be added here */}
        {/*
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/vehicles">Vehicles</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        */}
      </div>
    </header>
  );
} 