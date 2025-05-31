import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Assuming this is handled by Navigation now */}
          <div className="flex items-center">
            {/* Logo will be rendered by Navigation component */}
          </div>

          {/* Desktop Navigation - Assuming this is handled by Navigation now */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop navigation links rendered by Navigation component */}
          </div>

          {/* Mobile menu button - Assuming this is handled by Navigation now */}
          <div className="md:hidden">
            {/* Mobile menu button rendered by Navigation component */}
          </div>
        </div>
      </div>
    </header>
  );
} 