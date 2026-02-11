'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, Users, Star, BookOpen, Award, ArrowRight, Video, FileText } from 'lucide-react';

export default function CoursesSection() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'professional', name: 'Professional' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Fashion Designing Masterclass',
      category: 'professional',
      image: '🎨',
      duration: '6 Months',
      students: 2500,
      rating: 4.9,
      reviews: 450,
      price: '₹25,000',
      originalPrice: '₹35,000',
      level: 'Professional',
      lessons: 120,
      certificate: true,
      description: 'Complete fashion designing course from basics to advanced techniques',
      features: ['Live Classes', 'Lifetime Access', 'Certificate', 'Projects'],
    },
    {
      id: 2,
      title: 'Pattern Making & Draping',
      category: 'advanced',
      image: '📐',
      duration: '4 Months',
      students: 1800,
      rating: 4.8,
      reviews: 320,
      price: '₹18,000',
      originalPrice: '₹25,000',
      level: 'Advanced',
      lessons: 85,
      certificate: true,
      description: 'Master the art of pattern making and draping techniques',
      features: ['Hands-on Practice', 'Expert Guidance', 'Certificate', 'Portfolio'],
    },
    {
      id: 3,
      title: 'Tailoring & Stitching Basics',
      category: 'beginner',
      image: '✂️',
      duration: '3 Months',
      students: 3200,
      rating: 4.9,
      reviews: 580,
      price: '₹12,000',
      originalPrice: '₹18,000',
      level: 'Beginner',
      lessons: 60,
      certificate: true,
      description: 'Learn professional tailoring and stitching from scratch',
      features: ['Beginner Friendly', 'Practical Sessions', 'Certificate', 'Materials'],
    },
    {
      id: 4,
      title: 'Fashion Illustration & Design',
      category: 'beginner',
      image: '✏️',
      duration: '2 Months',
      students: 1500,
      rating: 4.7,
      reviews: 280,
      price: '₹10,000',
      originalPrice: '₹15,000',
      level: 'Beginner',
      lessons: 45,
      certificate: true,
      description: 'Create stunning fashion illustrations and design concepts',
      features: ['Creative Skills', 'Digital Tools', 'Certificate', 'Portfolio'],
    },
    {
      id: 5,
      title: 'Embroidery & Embellishment',
      category: 'advanced',
      image: '🧵',
      duration: '3 Months',
      students: 1200,
      rating: 4.8,
      reviews: 210,
      price: '₹15,000',
      originalPrice: '₹22,000',
      level: 'Advanced',
      lessons: 70,
      certificate: true,
      description: 'Master various embroidery techniques and embellishments',
      features: ['Multiple Techniques', 'Live Projects', 'Certificate', 'Materials'],
    },
    {
      id: 6,
      title: 'Boutique Management',
      category: 'professional',
      image: '💼',
      duration: '2 Months',
      students: 950,
      rating: 4.9,
      reviews: 175,
      price: '₹20,000',
      originalPrice: '₹28,000',
      level: 'Professional',
      lessons: 50,
      certificate: true,
      description: 'Learn to start and manage your own fashion boutique',
      features: ['Business Skills', 'Marketing', 'Certificate', 'Mentorship'],
    },
    {
      id: 7,
      title: 'Tailoring & Stitching Basics',
      category: 'beginner',
      image: '✂️',
      duration: '3 Months',
      students: 3200,
      rating: 4.9,
      reviews: 580,
      price: '₹12,000',
      originalPrice: '₹18,000',
      level: 'Beginner',
      lessons: 60,
      certificate: true,
      description: 'Learn professional tailoring and stitching from scratch',
      features: ['Beginner Friendly', 'Practical Sessions', 'Certificate', 'Materials'],
    },
    {
      id: 8,
      title: 'Fashion Illustration & Design',
      category: 'beginner',
      image: '✏️',
      duration: '2 Months',
      students: 1500,
      rating: 4.7,
      reviews: 280,
      price: '₹10,000',
      originalPrice: '₹15,000',
      level: 'Beginner',
      lessons: 45,
      certificate: true,
      description: 'Create stunning fashion illustrations and design concepts',
      features: ['Creative Skills', 'Digital Tools', 'Certificate', 'Portfolio'],
    },
    {
      id: 9,
      title: 'Fashion Designing Masterclass',
      category: 'professional',
      image: '🎨',
      duration: '6 Months',
      students: 2500,
      rating: 4.9,
      reviews: 450,
      price: '₹25,000',
      originalPrice: '₹35,000',
      level: 'Professional',
      lessons: 120,
      certificate: true,
      description: 'Complete fashion designing course from basics to advanced techniques',
      features: ['Live Classes', 'Lifetime Access', 'Certificate', 'Projects'],
    },
    {
      id: 10,
      title: 'Pattern Making & Draping',
      category: 'advanced',
      image: '📐',
      duration: '4 Months',
      students: 1800,
      rating: 4.8,
      reviews: 320,
      price: '₹18,000',
      originalPrice: '₹25,000',
      level: 'Advanced',
      lessons: 85,
      certificate: true,
      description: 'Master the art of pattern making and draping techniques',
      features: ['Hands-on Practice', 'Expert Guidance', 'Certificate', 'Portfolio'],
    },
    {
      id: 11,
      title: 'Tailoring & Stitching Basics',
      category: 'beginner',
      image: '✂️',
      duration: '3 Months',
      students: 3200,
      rating: 4.9,
      reviews: 580,
      price: '₹12,000',
      originalPrice: '₹18,000',
      level: 'Beginner',
      lessons: 60,
      certificate: true,
      description: 'Learn professional tailoring and stitching from scratch',
      features: ['Beginner Friendly', 'Practical Sessions', 'Certificate', 'Materials'],
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Popular Programs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Best Selling Courses
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Choose from our most popular courses and start your fashion journey today
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                {course.level}
              </div>

              {/* Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all duration-500"></div>
                <span className="text-7xl relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {course.image}
                </span>
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Save {Math.round(((parseInt(course.originalPrice.replace(/[^0-9]/g, '')) - parseInt(course.price.replace(/[^0-9]/g, ''))) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span className="text-sm font-bold text-gray-900">{course.rating}</span>
                    <span className="text-xs text-gray-500">({course.reviews})</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-xs font-medium">{course.students.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-medium">{course.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-amber-50 text-amber-700 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Info Row */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Video className="w-4 h-4" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  {course.certificate && (
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span className="text-amber-700 font-medium">Certificate</span>
                    </div>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                        {course.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        {course.originalPrice}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${course.id}`}
                    className="group/btn px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
                  >
                    <span>Enroll</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}