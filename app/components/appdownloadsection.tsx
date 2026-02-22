'use client';

import { Smartphone, CheckCircle, Download, Play, Apple } from 'lucide-react';
import Image from 'next/image';

export default function MobileAppSection() {
  const features = [
    'Learn from anywhere with 24/7 access on our mobile app.',
    'Watch recorded lectures, practice with quizzes, and download study materials.',
    'Get instant updates for live classes, assignments, and more.',
    'Track your progress, revisit lessons, and never miss a session.',
  ];

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
        <div className="absolute top-40 right-40 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            
            {/* Heading */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white px-4 py-2 rounded-full mb-6">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-medium">Mobile Learning</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-bold text-white leading-tight mb-4">
                Carry Your Dreams 
                <span className="block text-[#C9A961] mt-2">
                  with You...
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#C9A961] to-[#B8935A] rounded-full"></div>
            </div>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Download className="w-5 h-5" />
                <span className="text-base">Download App</span>
              </button>

              <div className="flex gap-3">
                {/* Google Play */}
                <a
                  href="#"
                  className="group flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#C9A961]"
                >
                  <Play className="w-6 h-6 text-[#C9A961] fill-[#C9A961]" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-600 leading-none">GET IT ON</p>
                    <p className="text-sm font-bold">Google Play</p>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="#"
                  className="group flex items-center gap-2 bg-white hover:bg-gray-100 text-black px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#C9A961]"
                >
                  <Apple className="w-6 h-6 text-[#C9A961]" />
                  <div className="text-left">
                    <p className="text-[10px] text-gray-600 leading-none">Download on</p>
                    <p className="text-sm font-bold">App Store</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-[#C9A961]/30">
              <div>
                <p className="text-3xl font-bold text-[#C9A961]">3,47,969+</p>
                <p className="text-sm text-gray-400 mt-1">App Downloads</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#C9A961]">4.8/5</p>
                <p className="text-sm text-gray-400 mt-1">User Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#C9A961]">24/7</p>
                <p className="text-sm text-gray-400 mt-1">Access</p>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile App Mockup */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961] to-[#B8935A] opacity-20 blur-3xl rounded-3xl"></div>
              
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-[#C9A961]">
                {/* Screen */}
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[12/19]">
                  
                  {/* App Screenshot Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1E8] to-white p-4">
                    
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-teal-700 to-teal-600 rounded-t-2xl p-4 mb-3">
                      <h3 className="text-white font-bold text-lg">Welcome to Nasreen Fatima</h3>
                      <p className="text-white/80 text-xs">Fashion Academy</p>
                    </div>

                    {/* Categories */}
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Categories</p>
                      <div className="grid grid-cols-4 gap-2">
                        {['Fashion', 'Design', 'Textile', 'Style'].map((cat, idx) => (
                          <div key={idx} className="bg-teal-700 rounded-lg p-2 text-center">
                            <div className="w-8 h-8 bg-teal-600 rounded-lg mx-auto mb-1"></div>
                            <p className="text-white text-[8px] font-medium">{cat}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Courses */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-xs font-semibold text-gray-600">Courses</p>
                        <p className="text-[8px] text-gray-500">View All →</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((course) => (
                          <div key={course} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            <div className="aspect-video bg-gradient-to-br from-teal-600 to-teal-500"></div>
                            <div className="p-1.5">
                              <p className="text-[7px] font-semibold text-gray-800 line-clamp-1">Fashion Course</p>
                              <p className="text-[6px] text-gray-500">10 Lessons</p>
                              <div className="flex items-center justify-between mt-1">
                                <span className="text-[7px] font-bold text-[#C9A961]">₹4,999</span>
                                <span className="text-[6px] bg-orange-500 text-white px-1 rounded">Enroll</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Premium Badge */}
                    <div className="mt-3 bg-gradient-to-r from-[#C9A961] to-[#B8935A] rounded-lg p-2">
                      <p className="text-white text-[8px] font-bold">⭐ Premium Courses Available</p>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl"></div>
                </div>

                {/* Side Buttons */}
                <div className="absolute right-0 top-20 w-1 h-8 bg-gray-700 rounded-l"></div>
                <div className="absolute right-0 top-32 w-1 h-12 bg-gray-700 rounded-l"></div>
                <div className="absolute right-0 top-48 w-1 h-12 bg-gray-700 rounded-l"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#C9A961] to-[#B8935A] rounded-full p-4 shadow-xl animate-bounce">
                <Download className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-xl border-2 border-[#C9A961]">
                <Smartphone className="w-6 h-6 text-[#C9A961]" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
    </section>
  );
}