"use client";
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-black -text-white p-4">
      <nav className="container mx-auto flex justify-between items-center relative">
        <Link href="#home" className="text-lg font-bold text-white">
          My Portfolio
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="bg-black hidden md:flex md:space-x-4">
          <Link href="#home" className="text-white rounded-full py-2 px-4 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400/50">
            Home
          </Link>
          <Link href="#about" className="text-white rounded-full py-2 px-4 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400/50">
            About
          </Link>
          <Link href="#skills" className="text-white rounded-full py-2 px-4 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400/50">
            Skills
          </Link>
          <Link href="#projects" className="text-white rounded-full py-2 px-4 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400/50">
            Projects
          </Link>
          <Link href="#contact" className="text-white rounded-full py-2 px-4 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-400/50">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-purple-400 md:hidden flex flex-col items-center space-y-4 p-4 shadow-lg" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>
            <Link href="#home" className="hover:shadow-lg hover:shadow-purple-400/50 rounded-full py-2 px-4 w-full text-center">Home</Link>
            <Link href="#about" className="hover:shadow-lg hover:shadow-purple-400/50 rounded-full py-2 px-4 w-full text-center">About</Link>
            <Link href="#skills" className="hover:shadow-lg hover:shadow-purple-400/50 rounded-full py-2 px-4 w-full text-center">Skills</Link>
            <Link href="#projects" className="hover:shadow-lg hover:shadow-purple-400/50 rounded-full py-2 px-4 w-full text-center">Projects</Link>
            <Link href="#contact" className="hover:shadow-lg hover:shadow-purple-400/50 rounded-full py-2 px-4 w-full text-center">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
