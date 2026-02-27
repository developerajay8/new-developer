'use client';

import Link from 'next/link';
import { Clock, Users, Star, Award, BookOpen, Video } from 'lucide-react';
import Image from 'next/image';

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: 'Professional Fashion Designing',
      subtitle: 'Complete Masterclass',
      image: '',
      price: '₹4,999',
      originalPrice: '₹12,999',
      rating: 4.9,
      students: '45,230',
      duration: '12 Weeks',
      lessons: 48,
      level: 'Beginner to Advanced',
      badge: 'Bestseller',
      features: ['Certificate', 'Live Sessions', 'Lifetime Access'],
    },
    {
      id: 2,
      title: 'Textile & Pattern Making',
      subtitle: 'Expert-Led Training',
      image: '',
      price: '₹7,499',
      originalPrice: '₹15,999',
      rating: 4.8,
      students: '32,150',
      duration: '10 Weeks',
      lessons: 42,
      level: 'Intermediate',
      badge: 'Popular',
      features: ['Certificate', 'Projects', 'Job Support'],
    },
    {
      id: 3,
      title: 'Fashion Illustration Mastery',
      subtitle: 'Design Like a Pro',
      image: '',
      price: '₹5,999',
      originalPrice: '₹13,999',
      rating: 4.9,
      students: '28,890',
      duration: '8 Weeks',
      lessons: 36,
      level: 'All Levels',
      badge: 'Trending',
      features: ['Certificate', 'Portfolio', 'Mentorship'],
    },
    {
      id: 4,
      title: 'Garment Construction',
      subtitle: 'Professional Techniques',
      image: '',
      price: '₹6,499',
      originalPrice: '₹14,999',
      rating: 4.7,
      students: '19,450',
      duration: '14 Weeks',
      lessons: 52,
      level: 'Advanced',
      badge: 'New',
      features: ['Certificate', 'Hands-on', 'Materials Kit'],
    },
    {
      id: 3,
      title: 'Fashion Illustration Mastery',
      subtitle: 'Design Like a Pro',
      image: '',
      price: '₹5,999',
      originalPrice: '₹13,999',
      rating: 4.9,
      students: '28,890',
      duration: '8 Weeks',
      lessons: 36,
      level: 'All Levels',
      badge: 'Trending',
      features: ['Certificate', 'Portfolio', 'Mentorship'],
    },
    {
      id: 1,
      title: 'Professional Fashion Designing',
      subtitle: 'Complete Masterclass',
      image: '',
      price: '₹4,999',
      originalPrice: '₹12,999',
      rating: 4.9,
      students: '45,230',
      duration: '12 Weeks',
      lessons: 48,
      level: 'Beginner to Advanced',
      badge: 'Bestseller',
      features: ['Certificate', 'Live Sessions', 'Lifetime Access'],
    },
  ];

  return (
    <section className="relative bg-[#F5F1E8] py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 border border-[#C9A961] rotate-45"></div>
        <div className="absolute top-40 right-20 w-2 h-2 border border-[#C9A961] rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 border border-[#C9A961] rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 border border-[#C9A961] rotate-45"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-bold text-black mb-3">
            Featured Collection
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-2">
            Exclusive Courses Crafted for Modern Fashion Designers
          </p>
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto mt-6"></div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-none border-2 border-[#C9A961] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961]"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961]"></div>

                {/* Badge */}
                {course.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {course.badge}
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback Design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-sm font-medium text-[#C9A961]">Course Image</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col">
                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-black mb-1 line-clamp-1">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{course.subtitle}</p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#C9A961] text-[#C9A961]" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>{course.lessons}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-[#F5F1E8] text-gray-700 px-2 py-0.5 rounded border border-[#C9A961]/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mb-4"></div>

                  {/* Price & Button */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-[#C9A961]">
                        {course.price}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </span>
                    </div>

                    {/* Learn more → video player; Enroll Now reserved for payment later */}
                    <Link
                      href={`/learn/${course.id}`}
                      className="w-full block text-center bg-[#C9A961] hover:bg-[#B8935A] text-white font-semibold py-3 px-6 transition-all duration-300 group-hover:shadow-lg rounded"
                    >
                      Learn more
                    </Link>
                    <button className="w-full mt-2 bg-black hover:bg-black/90 text-white font-semibold py-2.5 px-6 transition-all duration-300 text-sm">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[#C9A961]">
            <span>View All Courses</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
    </section>
  );
}