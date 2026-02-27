'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Video, Users, Award, Clock, CheckCircle, Star, Download, MessageCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';

export interface PublishedCourse {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  duration?: string;
  price?: number;
  level?: string;
}

// Component 1: Services Hero Section
export function ServicesHero() {
  const features = [
    { icon: BookOpen, text: '50+ Expert Courses' },
    { icon: Video, text: 'Live & Recorded Sessions' },
    { icon: Users, text: '1.5L+ Happy Students' },
    { icon: Award, text: 'Industry Certificates' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8] py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 border border-[#C9A961] rotate-45"></div>
        <div className="absolute top-40 right-20 w-2 h-2 border border-[#C9A961] rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 border border-[#C9A961] rotate-45"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 border border-[#C9A961] rotate-45"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white px-5 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-bold text-black leading-tight mb-6">
            Premium Fashion
            <span className="block text-[#C9A961] mt-2">Education Services</span>
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
            Comprehensive fashion design courses taught by industry experts. From beginner to advanced levels, we have everything you need to succeed in the fashion industry.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white border-2 border-[#C9A961] px-5 py-3 hover:bg-[#C9A961] hover:text-white transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-[#C9A961] group-hover:text-white" />
                  <span className="font-medium text-sm">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#C9A961] font-semibold px-8 py-4 border-2 border-[#C9A961] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component 2: Services Grid (shows published courses from API, fallback to static services)
export function ServicesGrid() {
  const [publishedCourses, setPublishedCourses] = useState<PublishedCourse[] | null>(null);

  useEffect(() => {
    fetch('/api/courses')
      .then((res) => (res.ok ? res.json() : []))
      .then((data: PublishedCourse[]) => setPublishedCourses(Array.isArray(data) ? data : []))
      .catch(() => setPublishedCourses([]));
  }, []);

  const staticServices = [
    {
      id: 1,
      title: 'Fashion Design Courses',
      description: 'Complete fashion designing programs from basics to advanced. Learn sketching, pattern making, garment construction, and more.',
      image: '/services/fashion-design.jpg',
      icon: BookOpen,
      features: [
        'Beginner to Advanced Levels',
        'Hands-on Projects',
        'Industry-Standard Tools',
        'Portfolio Development',
      ],
      duration: '12-16 Weeks',
      price: 'From ₹4,999',
      badge: 'Most Popular',
    },
    {
      id: 2,
      title: 'Pattern Making & Draping',
      description: 'Master the art of pattern making and draping techniques. Learn to create patterns for different garment types and body shapes.',
      image: '/services/pattern-making.jpg',
      icon: Award,
      features: [
        'Professional Patterns',
        'Draping Techniques',
        'Size Grading',
        'Technical Drawings',
      ],
      duration: '10-12 Weeks',
      price: 'From ₹7,499',
      badge: 'Advanced',
    },
    {
      id: 3,
      title: 'Fashion Illustration',
      description: 'Develop your sketching and illustration skills. Learn to create stunning fashion illustrations using both traditional and digital methods.',
      image: '/services/illustration.jpg',
      icon: Star,
      features: [
        'Hand Sketching',
        'Digital Illustration',
        'Figure Drawing',
        'Design Presentation',
      ],
      duration: '8-10 Weeks',
      price: 'From ₹5,999',
      badge: 'Creative',
    },
    {
      id: 4,
      title: 'Textile & Fabric Studies',
      description: 'Comprehensive knowledge of textiles, fabrics, and materials. Understand fabric properties, selection, and sustainability.',
      image: '/services/textile.jpg',
      icon: CheckCircle,
      features: [
        'Fabric Properties',
        'Textile Technology',
        'Sustainable Materials',
        'Quality Analysis',
      ],
      duration: '6-8 Weeks',
      price: 'From ₹4,499',
      badge: 'Essential',
    },
    {
      id: 5,
      title: 'Fashion Styling & Trends',
      description: 'Learn personal styling, wardrobe management, and trend forecasting. Become a professional fashion stylist.',
      image: '/services/styling.jpg',
      icon: Users,
      features: [
        'Personal Styling',
        'Trend Analysis',
        'Color Theory',
        'Client Management',
      ],
      duration: '8 Weeks',
      price: 'From ₹6,499',
      badge: 'Trending',
    },
    {
      id: 6,
      title: 'Fashion Business & Marketing',
      description: 'Learn to start and grow your fashion business. Marketing strategies, branding, and entrepreneurship for fashion designers.',
      image: '/services/business.jpg',
      icon: Award,
      features: [
        'Business Planning',
        'Brand Development',
        'Social Media Marketing',
        'E-commerce Setup',
      ],
      duration: '10 Weeks',
      price: 'From ₹8,999',
      badge: 'Professional',
    },
  ];

  const showPublished = Array.isArray(publishedCourses) && publishedCourses.length > 0;
  const services = showPublished ? null : staticServices;

  return (
    <section id="services" className="relative py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-bold text-black mb-4">
            Our Fashion
            <span className="text-[#C9A961]"> Education Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Explore our comprehensive range of fashion education services designed to help you succeed
          </p>
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto"></div>
        </div>

        {/* Loading */}
        {publishedCourses === null && (
          <div className="flex justify-center py-12">
            <Loader2 className="w-10 h-10 animate-spin text-[#C9A961]" />
          </div>
        )}

        {/* Published courses from API */}
        {showPublished && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedCourses.map((course) => (
              <div
                key={course.id}
                className="group relative bg-[#F5F1E8] border-2 border-[#C9A961] hover:border-[#C9A961] transition-all duration-300 hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961] z-10"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961] z-10"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961] z-10"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961] z-10"></div>
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Course
                  </div>
                </div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm font-medium text-[#C9A961]">Course</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-serif font-bold text-black mb-3">{course.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {course.subtitle || course.description || 'Explore this course.'}
                  </p>
                  {course.level && (
                    <p className="text-xs text-[#C9A961] font-medium mb-2">{course.level}</p>
                  )}
                  <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mb-4"></div>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#C9A961]" />
                      <span>{course.duration || '–'}</span>
                    </div>
                    <div className="text-xl font-bold text-[#C9A961]">
                      {course.price != null ? `₹${course.price}` : '–'}
                    </div>
                  </div>
                  <Link
                    href={`/learn/${course.id}`}
                    className="w-full block text-center bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Static services fallback when no published courses */}
        {!showPublished && publishedCourses !== null && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-[#F5F1E8] border-2 border-[#C9A961] hover:border-[#C9A961] transition-all duration-300 hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961] z-10"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961] z-10"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961] z-10"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961] z-10"></div>
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                      {service.badge}
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-[#E8DCC8] to-[#F5F1E8] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-sm font-medium text-[#C9A961]">Service Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-serif font-bold text-black mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#C9A961] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="h-px bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mb-4"></div>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#C9A961]" />
                        <span>{service.duration}</span>
                      </div>
                      <div className="text-xl font-bold text-[#C9A961]">{service.price}</div>
                    </div>
                    <Link
                      href={`/learn/${service.id}`}
                      className="w-full block text-center bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold py-3 transition-all duration-300 group-hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#F5F1E8] border-2 border-[#C9A961] px-8 py-6 max-w-2xl">
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A961]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A961]"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A961]"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A961]"></div>
            
            <p className="text-gray-700 font-medium">
              <span className="text-[#C9A961] font-bold">Need a Custom Course?</span> We offer personalized training programs tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component 3: Benefits & CTA Section
export function ServicesBenefits() {
  const benefits = [
    {
      icon: Video,
      title: 'Live & Recorded Classes',
      description: 'Attend live sessions or watch recorded lectures at your convenience. Learn at your own pace.',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world fashion experience.',
    },
    {
      icon: Award,
      title: 'Industry Certificates',
      description: 'Receive recognized certificates upon completion to boost your career prospects.',
    },
    {
      icon: CheckCircle,
      title: 'Lifetime Access',
      description: 'Get lifetime access to all course materials, updates, and community support.',
    },
    {
      icon: BookOpen,
      title: 'Practical Projects',
      description: 'Work on real-world projects to build a strong portfolio that showcases your skills.',
    },
    {
      icon: MessageCircle,
      title: 'Career Support',
      description: 'Get job placement assistance, interview prep, and career guidance from our team.',
    },
  ];

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4">
              Why Choose Our
              <span className="text-[#C9A961]"> Services?</span>
            </h2>
            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border-2 border-[#C9A961]/30 hover:border-[#C9A961] p-6 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A961]"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A961]"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A961]"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A961]"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Box */}
        <div className="relative bg-gradient-to-br from-black via-gray-900 to-black p-10 md:p-12 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961]"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Ready to Start Your
              <span className="block text-[#C9A961] mt-2">Fashion Career?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join 1,53,000+ successful students and transform your passion into a thriving career today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Browse All Courses
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 border-2 border-[#C9A961] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-[#C9A961]" />
                Talk to Counselor
              </a>
            </div>

            {/* Download App */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6 border-t border-[#C9A961]/30">
              <Download className="w-5 h-5 text-[#C9A961]" />
              <span className="text-gray-300 text-sm">Also available on mobile:</span>
              <div className="flex gap-2">
                <a href="#" className="text-xs bg-white text-black px-3 py-1.5 rounded hover:bg-gray-100 transition-colors font-medium">
                  Google Play
                </a>
                <a href="#" className="text-xs bg-white text-black px-3 py-1.5 rounded hover:bg-gray-100 transition-colors font-medium">
                  App Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}