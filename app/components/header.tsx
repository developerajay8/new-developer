'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ShoppingCart, User, Search, LogOut } from 'lucide-react';
import { useAuth } from '@/app/contexts/AuthContext';

export default function Header() {
  const router = useRouter();
  const { user, loading: authLoading, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
    router.push('/');
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <header className="bg-[#F5F1E8] border-b-2 border-[#C9A961] sticky top-0 z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
          <p className="font-light">Premium Fashion Education | Enroll Today</p>
          <div className="flex gap-4">
            <a href="tel:+911234567890" className="hover:text-black transition">
              📞 +91 123-456-7890
            </a>
            <a href="mailto:info@nasreenfatima.com" className="hover:text-black transition hidden sm:block">
              ✉ info@nasreenfatima.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-[1240px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-center">
              <h1 className="text-2xl  font-serif text-[#C9A961] font-bold tracking-wide">
                NASREEN FATIMA
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-black font-light tracking-[0.2em] mt-1">
                FASHION ACADEMY
              </p>
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mt-1"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-[#C9A961] font-medium text-base transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C9A961] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Search Icon */}
            <button className="text-black hover:text-[#C9A961] transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <button className="text-black hover:text-[#C9A961] transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-[#C9A961] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* User Menu */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={toggleUserMenu}
                className="text-black hover:text-[#C9A961] transition-colors flex items-center space-x-1"
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <User className="w-5 h-5" />
                <span className="hidden md:inline text-sm">
                  {authLoading ? '...' : user ? (user.email?.split('@')[0] || 'Account') : 'Account'}
                </span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-xl border-2 border-[#C9A961] overflow-hidden z-50">
                  {user ? (
                    <>
                      <div className="px-4 py-3 border-b border-gray-200">
                        <p className="text-xs text-black/60 truncate">{user.email}</p>
                        <p className="text-sm font-medium text-black mt-0.5">My account</p>
                      </div>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-3 text-sm text-black hover:bg-[#F5F1E8] hover:text-[#C9A961] transition-colors border-b border-gray-200"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        My Dashboard
                      </Link>
                      <button
                        type="button"
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-3 text-sm text-black hover:bg-[#F5F1E8] hover:text-[#C9A961] transition-colors flex items-center gap-2"
                      >
                        <LogOut className="w-4 h-4" />
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block px-4 py-3 text-sm text-black hover:bg-[#F5F1E8] hover:text-[#C9A961] transition-colors border-b border-gray-200"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/signup"
                        className="block px-4 py-3 text-sm text-black hover:bg-[#F5F1E8] hover:text-[#C9A961] transition-colors border-b border-gray-200"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Sign Up
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-3 text-sm text-black hover:bg-[#F5F1E8] hover:text-[#C9A961] transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        My Dashboard
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-black hover:text-[#C9A961] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t-2 border-[#C9A961] pt-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-[#C9A961] font-medium text-base py-2 px-4 hover:bg-[#F5F1E8] rounded transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t-2 border-[#C9A961] pt-3 mt-2">
                <Link
                  href="/search"
                  className="text-black hover:text-[#C9A961] font-medium text-base py-2 px-4 hover:bg-[#F5F1E8] rounded transition-all flex items-center"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search Courses
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}