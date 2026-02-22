'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, Star, Users, Award, TrendingUp } from 'lucide-react';

export default function HomeSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F5F1E8] via-[#FAF7F0] to-[#F5F1E8] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white px-4 py-2 rounded-full shadow-lg">
              <Award className="w-3.5 h-3.5" />
              <span className="text-[13px] font-medium">India's Premier Fashion Academy</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-serif font-bold text-black leading-[1.1]">
                Transform Your
                <span className="block text-[#C9A961] mt-1">
                  Fashion Dreams
                </span>
                <span className="block mt-1">
                  Into Reality
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-[#C9A961] to-[#B8935A] mt-5 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-base md:text-[17px] lg:text-[18px] text-gray-700 leading-relaxed">
              Join <span className="font-bold text-[#C9A961]">1,50,000+ Students</span> who are mastering the art of fashion designing with expert-led courses, live workshops, and industry-recognized certifications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 hidden gap-4 py-5 border-t-2 border-b-2 border-[#C9A961]/20">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-4 h-4 text-[#C9A961]" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#C9A961]">1.5L+</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5">Students</p>
              </div>
              <div className="text-center border-l-2 border-r-2 border-[#C9A961]/20">
                <div className="flex items-center justify-center mb-1">
                  <Star className="w-4 h-4 text-[#C9A961]" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#C9A961]">4.9/5</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5">Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <TrendingUp className="w-4 h-4 text-[#C9A961]" />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#C9A961]">50+</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-0.5">Courses</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/courses"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white font-semibold text-[15px] rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Browse Courses
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>

              <button className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white border-2 border-[#C9A961] text-[#C9A961] font-semibold text-[15px] rounded-lg hover:bg-[#C9A961] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="w-9 h-9 rounded-full bg-[#C9A961] group-hover:bg-white flex items-center justify-center transition-colors">
                  <Play className="w-4 h-4 text-white group-hover:text-[#C9A961] fill-current" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#C9A961] border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-[#B8935A] border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-[#C9A961] border-2 border-white"></div>
                  <div className="w-7 h-7 rounded-full bg-[#B8935A] border-2 border-white"></div>
                </div>
                <div className="text-[13px] text-gray-600">
                  <span className="font-bold text-black">10,000+</span> joined this week
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" />
                ))}
                <span className="text-[13px] text-gray-600 ml-1.5">Trusted by Students</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#C9A961] to-[#B8935A] rounded-2xl opacity-20 blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white p-2.5 rounded-2xl shadow-2xl border-[3px] border-[#C9A961]">
                <div className="aspect-[3/4] lg:aspect-[4/5] relative rounded-xl overflow-hidden bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8]">
                  {/* Placeholder Image - Replace with actual image */}
                  <Image
                    src=""
                    alt="Fashion Design Student"
                    fill
                    className="object-cover"
                    priority
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  
                  {/* Fallback Design if image not found */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-28 h-28 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                        <Award className="w-14 h-14 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#C9A961] mb-1.5">
                        Fashion Excellence
                      </h3>
                      <p className="text-sm text-gray-600">
                        Premium Education
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge - Student Count */}
                <div className="absolute -top-3 -right-3 bg-white rounded-full shadow-xl border-[3px] border-[#C9A961] p-3 z-10">
                  <div className="text-center">
                    <p className="text-xl font-bold text-[#C9A961]">1.5L+</p>
                    <p className="text-[10px] text-gray-600">Students</p>
                  </div>
                </div>
                
                {/* Floating Badge - Courses */}
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-[#C9A961] to-[#B8935A] rounded-xl shadow-xl p-3 z-10">
                  <div className="text-white">
                    <p className="text-sm font-semibold">50+ Courses</p>
                    <p className="text-[11px] opacity-90">Expert-Led Training</p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-5 -left-5 w-20 h-20 border-t-[3px] border-l-[3px] border-[#C9A961] opacity-30 rounded-tl-3xl"></div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-[3px] border-r-[3px] border-[#C9A961] opacity-30 rounded-br-3xl"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}