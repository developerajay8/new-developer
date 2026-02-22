'use client';

import { Users, Award, GraduationCap, BookOpen, Star, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: '1,53,264+',
      label: 'Success Stories',
      description: 'Students Transformed Their Careers',
      icon: Award,
      gradient: 'from-[#C9A961] to-[#B8935A]',
    },
    {
      id: 2,
      number: '5,132,651+',
      label: 'Social Community',
      description: 'Active Members Worldwide',
      icon: Users,
      gradient: 'from-[#B8935A] to-[#C9A961]',
    },
    {
      id: 3,
      number: '3,47,969+',
      label: 'Course Enrollments',
      description: 'Learning Journeys Started',
      icon: GraduationCap,
      gradient: 'from-[#C9A961] to-[#B8935A]',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-[#FAF7F0] to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white px-5 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by Thousands</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-bold text-black mb-4">
            Why Students Trust
            <span className="block text-[#C9A961] mt-2">Nasreen Fatima Fashion Academy</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their passion into a thriving career
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8 shadow-2xl border border-[#C9A961]/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(201,169,97,0.3)]">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C9A961] to-transparent opacity-10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#C9A961] to-transparent opacity-10 rounded-tr-full"></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${stat.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Number */}
                <h3 className="text-3xl md:text-4xl  font-bold text-white mb-3 group-hover:text-[#C9A961] transition-colors duration-300">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-lg md:text-xl font-semibold text-[#C9A961] mb-2">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {stat.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${stat.gradient} group-hover:w-full transition-all duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="sm:block hidden">
        <div className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-black">50+</p>
              <p className="text-sm text-gray-600">Expert Courses</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-[#C9A961]/30"></div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-black">4.9/5</p>
              <p className="text-sm text-gray-600">Student Rating</p>
            </div>
          </div>

          <div className="hidden sm:block w-px h-12 bg-[#C9A961]/30"></div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-black">100%</p>
              <p className="text-sm text-gray-600">Certified Training</p>
            </div>
          </div>
        </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="mt-12 lg:mt-16 h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent"></div>
      </div>
    </section>
  );
}