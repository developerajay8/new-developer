'use client';

import { Award, Users, BookOpen, Target, Heart, Lightbulb, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutUsPage() {
  const stats = [
    { number: '1,53,264+', label: 'Happy Students', icon: Users },
    { number: '50+', label: 'Expert Courses', icon: BookOpen },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '98%', label: 'Success Rate', icon: TrendingUp },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower aspiring fashion designers with world-class education, practical skills, and industry connections to build successful careers in fashion.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description: 'To become India\'s leading fashion education institute, recognized globally for excellence in fashion design training and student success.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Excellence, Creativity, Innovation, Integrity, and Student Success are at the core of everything we do at Nasreen Fatima Fashion Academy.',
    },
  ];

  const features = [
    'Industry-Expert Instructors',
    'Hands-on Practical Training',
    'Live Interactive Sessions',
    'Lifetime Course Access',
    'Career Guidance & Support',
    'Industry-Recognized Certificates',
    'Portfolio Development',
    'Job Placement Assistance',
  ];

  const team = [
    {
      name: 'Nasreen Fatima',
      role: 'Founder & Director',
      image: '/team/founder.jpg',
      description: '15+ years of fashion industry experience',
    },
    {
      name: 'Ayesha Khan',
      role: 'Head of Design',
      image: '/team/head-design.jpg',
      description: 'Expert in Fashion Illustration',
    },
    {
      name: 'Rahul Sharma',
      role: 'Pattern Making Expert',
      image: '/team/pattern-expert.jpg',
      description: 'Specialized in Garment Construction',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8] py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white px-5 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">About Our Academy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-bold text-black leading-tight mb-6">
              Transforming Fashion
              <span className="block text-[#C9A961] mt-2">Dreams Into Reality</span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Nasreen Fatima Fashion Academy is India's premier fashion education institute dedicated to nurturing creative talent and building successful careers in the fashion industry.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] mb-3">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#C9A961] mb-1">
                      {stat.number}
                    </h3>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#C9A961] to-[#B8935A] rounded-2xl opacity-20 blur-xl"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-white p-3 rounded-2xl shadow-2xl border-[3px] border-[#C9A961]">
                  <div className="aspect-[4/5] relative rounded-xl overflow-hidden bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8]">
                    <Image
                      src="/about/our-story.jpg"
                      alt="Our Story"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Fallback Design */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                          <Award className="w-16 h-16 text-white" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#C9A961]">Our Journey</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute -top-5 -left-5 w-20 h-20 border-t-[3px] border-l-[3px] border-[#C9A961] opacity-30 rounded-tl-3xl"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 border-b-[3px] border-r-[3px] border-[#C9A961] opacity-30 rounded-br-3xl"></div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                  Our Story
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[#C9A961] to-[#B8935A] rounded-full mb-6"></div>
              </div>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Founded in 2014, Nasreen Fatima Fashion Academy began with a simple yet powerful vision: to make quality fashion education accessible to everyone. What started as a small studio with just 10 students has now grown into India's leading online fashion institute.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Over the years, we've trained more than <span className="font-bold text-[#C9A961]">1,53,000+ students</span> across India and abroad, helping them achieve their dreams of becoming successful fashion designers, stylists, and entrepreneurs.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our courses are designed by industry experts and focus on practical, hands-on learning that prepares students for real-world challenges in the fashion industry.
              </p>

              <div className="pt-4">
                <a
                  href="/courses"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Explore Our Courses
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              Our Core
              <span className="text-[#C9A961]"> Principles</span>
            </h2>
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white border-2 border-[#C9A961]/30 hover:border-[#C9A961] p-8 transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961]"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961]"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961]"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961]"></div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-black mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left - Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4">
                  Why Choose
                  <span className="block text-[#C9A961] mt-2">Nasreen Fatima Academy?</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[#C9A961] to-[#B8935A] rounded-full mb-6"></div>
              </div>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We're not just another fashion institute – we're your partner in building a successful career in the fashion industry.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl border-[3px] border-[#C9A961]">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8]">
                  <Image
                    src="/about/why-choose-us.jpg"
                    alt="Why Choose Us"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                        <Users className="w-14 h-14 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#C9A961]">Excellence</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#F5F1E8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              Meet Our
              <span className="text-[#C9A961]"> Expert Team</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Learn from industry professionals with years of experience in fashion design and education
            </p>
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-[#C9A961] overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961] z-10"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961] z-10"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961] z-10"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961] z-10"></div>

                {/* Image */}
                <div className="aspect-[3/4] relative bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Fallback */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#C9A961] mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
          <div className="absolute top-20 right-20 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
          <div className="absolute bottom-10 right-1/3 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Start Your
              <span className="block text-[#C9A961] mt-2">Fashion Journey?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join 1,53,000+ successful students and transform your passion into a thriving career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Browse Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 border-2 border-[#C9A961] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-[#C9A961]" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}