'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <>
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                <Image
                  src="/images/logo.webp"
                  alt="Logo Chenil des Pyrénées"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                Chenil des Pyrénées
              </Link>
              {/* Bouton Réserver mobile visible à gauche du menu burger */}
              <Link
                href="/contact"
                className="md:hidden ml-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm"
              >
                Réserver
              </Link>
            </div>
            
            {/* Menu desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`${isActive('/')} transition-colors`}>
                Accueil
              </Link>
              <Link href="/services" className={`${isActive('/services')} transition-colors`}>
                Services
              </Link>
              <Link href="/tarifs" className={`${isActive('/tarifs')} transition-colors`}>
                Tarifs
              </Link>
              <Link href="/galerie" className={`${isActive('/galerie')} transition-colors`}>
                Galerie
              </Link>
              <Link href="/contact" className={`${isActive('/contact')} transition-colors`}>
                Contact
              </Link>
              <Link
                href="/contact"
                className="ml-4 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
              >
                Réserver
              </Link>
            </div>

            {/* Bouton menu mobile */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Menu mobile */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')} hover:bg-gray-50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/services"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services')} hover:bg-gray-50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/tarifs"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/tarifs')} hover:bg-gray-50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tarifs
                </Link>
                <Link
                  href="/galerie"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/galerie')} hover:bg-gray-50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galerie
                </Link>
                <Link
                  href="/contact"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')} hover:bg-gray-50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
} 