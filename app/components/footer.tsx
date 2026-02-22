'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: 'Fashion Designing', href: '/courses/fashion-designing' },
      { name: 'Pattern Making', href: '/courses/pattern-making' },
      { name: 'Fashion Illustration', href: '/courses/illustration' },
      { name: 'Garment Construction', href: '/courses/garment' },
      { name: 'All Courses', href: '/courses' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Instructors', href: '/instructors' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faq' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:bg-red-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#C9A961] to-[#B8935A] rounded-2xl p-8 md:p-10 mb-12 lg:mb-16">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Stay Updated with Latest Courses
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                Subscribe to our newsletter and get exclusive offers & updates
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-serif font-bold text-[#C9A961] mb-2">
                NASREEN FATIMA
              </h2>
              <p className="text-sm text-gray-400 tracking-[0.2em]">
                FASHION ACADEMY
              </p>
              <div className="h-px w-full bg-gradient-to-r from-[#C9A961] to-transparent mt-3"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's premier fashion design academy empowering 1,50,000+ students with expert-led courses, industry certifications, and lifetime career support.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+911234567890" className="flex items-center gap-3 text-gray-400 hover:text-[#C9A961] transition-colors text-sm group">
                <div className="w-8 h-8 rounded-full bg-[#C9A961]/20 group-hover:bg-[#C9A961] flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-[#C9A961] group-hover:text-white" />
                </div>
                +91 123-456-7890
              </a>
              <a href="mailto:info@nasreenfatima.com" className="flex items-center gap-3 text-gray-400 hover:text-[#C9A961] transition-colors text-sm group">
                <div className="w-8 h-8 rounded-full bg-[#C9A961]/20 group-hover:bg-[#C9A961] flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-[#C9A961] group-hover:text-white" />
                </div>
                info@nasreenfatima.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-[#C9A961]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#C9A961]" />
                </div>
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-5 flex items-center">
              <span className="w-2 h-2 bg-[#C9A961] rounded-full mr-2"></span>
              Popular Courses
            </h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm block hover:translate-x-1 transform duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-5 flex items-center">
              <span className="w-2 h-2 bg-[#C9A961] rounded-full mr-2"></span>
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm block hover:translate-x-1 transform duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-5 flex items-center">
              <span className="w-2 h-2 bg-[#C9A961] rounded-full mr-2"></span>
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C9A961] transition-colors text-sm block hover:translate-x-1 transform duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm mr-2">Follow Us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-[#C9A961] hover:to-[#B8935A] flex items-center justify-center transition-all duration-300 hover:scale-110 group ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} <span className="text-[#C9A961] font-semibold">Nasreen Fatima Fashion Academy</span>
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed in Off-White, Gold & Black Theme
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}