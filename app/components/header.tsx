'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'Courses',
      href: '/courses',
      dropdown: [
        { name: 'Fashion Designing', href: '/courses/fashion-designing' },
        { name: 'Pattern Making', href: '/courses/pattern-making' },
        { name: 'Tailoring & Stitching', href: '/courses/tailoring' },
        { name: 'Embroidery & Embellishment', href: '/courses/embroidery' },
      ],
    },
    {
      name: 'About',
      href: '/about',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Faculty', href: '/about/faculty' },
        { name: 'Facilities', href: '/about/facilities' },
        { name: 'Why Choose Us', href: '/about/why-us' },
      ],
    },
    { name: 'Testimonial', href: '/testimonial' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+919876543210" className="flex items-center space-x-2 hover:text-amber-100 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@nasreenfatima.com" className="flex items-center space-x-2 hover:text-amber-100 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>info@nasreenfatima.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-amber-100">🎓 Admissions Open for 2026!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-lg shadow-xl py-3'
            : 'bg-white/95 backdrop-blur-md shadow-md py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              {/* Logo Icon with NF */}
              <div className="relative">
                <div className={`relative transition-all duration-500 ${
                  isScrolled ? 'w-12 h-12 sm:w-14 sm:h-14' : 'w-14 h-14 sm:w-16 sm:h-16'
                }`}>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 blur-md animate-pulse"></div>
                  
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300"
                    style={{
                      backgroundClip: 'padding-box',
                      borderImage: 'linear-gradient(135deg, #f59e0b, #eab308, #d97706) 1',
                    }}
                  ></div>
                  
                  {/* Inner Background */}
                  <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-white to-amber-50"></div>
                  
                  {/* NF Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`font-serif font-black tracking-tight bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:via-yellow-700 group-hover:to-amber-800 transition-all duration-300 ${
                      isScrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                    }`}>
                      NF
                    </span>
                  </div>
                </div>
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <h1
                  className={`font-serif font-bold tracking-wide leading-tight transition-all duration-500 bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent group-hover:from-amber-800 group-hover:via-yellow-700 group-hover:to-amber-800 ${
                    isScrolled ? 'text-base lg:text-lg' : 'text-lg lg:text-xl'
                  }`}
                >
                  NASREEN FATIMA
                </h1>
                <div className={`flex items-center transition-all duration-500 ${
                  isScrolled ? 'mt-0' : 'mt-0.5'
                }`}>
                  <div className="h-px flex-grow bg-gradient-to-r from-amber-500 to-transparent"></div>
                </div>
                <p
                  className={`tracking-[0.2em] font-medium transition-all duration-500 bg-gradient-to-r from-amber-600 to-yellow-700 bg-clip-text text-transparent ${
                    isScrolled ? 'text-[10px] lg:text-xs' : 'text-xs lg:text-sm'
                  }`}
                >
                  FASHION ACADEMY
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group/nav"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-[15px] font-medium transition-all duration-300 flex items-center space-x-1 text-gray-700 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 relative group"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-amber-100 overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="py-2">
                        {item.dropdown.map((subItem, index) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:via-yellow-50 hover:to-amber-50 hover:text-amber-700 transition-all duration-200 border-l-4 border-transparent hover:border-amber-500"
                            style={{
                              animationDelay: `${index * 50}ms`,
                            }}
                          >
                            <span className="font-medium">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Enroll Button */}
              <Link
                href="/enroll"
                className={`hidden md:flex items-center px-5 xl:px-7 py-2.5 xl:py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-semibold text-sm xl:text-base shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-amber-600 hover:via-yellow-600 hover:to-amber-700 relative overflow-hidden group ${
                  isScrolled ? 'text-sm' : 'text-sm xl:text-base'
                }`}
              >
                <span className="relative z-10">Create Account</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg transition-all duration-300 text-gray-700 hover:text-amber-600 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-6' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-2xl p-5 space-y-2 border border-amber-100">
              {navItems.map((item, index) => (
                <div key={item.name} className="space-y-1">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-amber-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 rounded-lg transition-all duration-300 font-medium border-l-4 border-transparent hover:border-amber-500"
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 space-y-1 pl-4 border-l-2 border-amber-200">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-all duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Enroll Button */}
              <Link
                href="/enroll"
                className="block mt-4 px-6 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white text-center rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create Account
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}