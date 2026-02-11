'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  Mail, 
  Phone, 
  MapPin,
  Send,
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  const footerLinks = {
    courses: [
      { name: 'Fashion Designing', href: '/courses/fashion-designing' },
      { name: 'Pattern Making', href: '/courses/pattern-making' },
      { name: 'Tailoring & Stitching', href: '/courses/tailoring' },
      { name: 'Embroidery', href: '/courses/embroidery' },
      { name: 'Fashion Illustration', href: '/courses/illustration' },
    ],
    quickLinks: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Faculty', href: '/faculty' },
      { name: 'Student Work', href: '/student-work' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Gallery', href: '/gallery' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Refund Policy', href: '/refund' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-600/20 to-yellow-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-600/20 to-amber-600/20 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse-very-slow"></div>

        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #f59e0b 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'movePattern 20s linear infinite',
          }}></div>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-500/30 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center space-x-3 group">
                <div className="relative w-14 h-14">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full opacity-20 group-hover:opacity-40 transition-all duration-500 blur-md animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border-[3px] border-transparent bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 shadow-lg"></div>
                  <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-gray-900 to-gray-800"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-serif font-black bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                      NF
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    NASREEN FATIMA
                  </h3>
                  <p className="text-xs tracking-[0.2em] text-amber-400/80">FASHION ACADEMY</p>
                </div>
              </Link>

              <p className="text-gray-400 leading-relaxed max-w-sm">
                Transforming passion into profession. India's premier fashion institute empowering thousands of students to achieve their dreams.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Courses Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white relative inline-block">
                Popular Courses
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.courses.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full group-hover:bg-amber-500 transition-colors duration-300"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full group-hover:bg-amber-500 transition-colors duration-300"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white relative inline-block">
                Support
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full group-hover:bg-amber-500 transition-colors duration-300"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter & Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 pt-12 border-t border-white/10">
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-gray-400">
                Get latest updates about courses, workshops, and special offers!
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg font-semibold hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-amber-500" />
                  </div>
                  <span>+91 98765 43210</span>
                </a>

                <a
                  href="mailto:info@nasreenfatima.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-amber-400 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-500/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-amber-500" />
                  </div>
                  <span>info@nasreenfatima.com</span>
                </a>

                <div className="flex items-start space-x-3 text-gray-400 group">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  <span>123 Fashion Street, Jaipur, Rajasthan, India - 302001</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Nasreen Fatima Fashion Academy. All rights reserved.
              </p>

              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
                <span>for Fashion Enthusiasts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }

        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(-20px); }
        }

        @keyframes pulse-very-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }

        @keyframes float-particle {
          0% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        @keyframes movePattern {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }

        .animate-float-slow-delayed {
          animation: float-slow-delayed 18s ease-in-out infinite;
        }

        .animate-pulse-very-slow {
          animation: pulse-very-slow 8s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
    </footer>
  );
}