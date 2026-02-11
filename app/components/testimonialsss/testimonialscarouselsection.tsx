'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function TestimonialsCarouselSection() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Fashion Designer',
      company: 'Fabindia',
      image: '👩‍🎨',
      rating: 5,
      text: 'Nasreen Fatima Fashion Academy transformed my passion into a profession. The expert faculty and hands-on training gave me the confidence to start my own boutique. Best decision of my life!',
      course: 'Fashion Designing Masterclass',
    },
    {
      id: 2,
      name: 'Rahul Verma',
      role: 'Pattern Maker',
      company: 'Raymond Group',
      image: '👨‍💼',
      rating: 5,
      text: 'The pattern making course here is incredibly detailed and practical. I got placed in Raymond within 2 months of completion. The placement support team is outstanding!',
      course: 'Pattern Making & Draping',
    },
    {
      id: 3,
      name: 'Anjali Singh',
      role: 'Boutique Owner',
      company: 'Anjali\'s Designs',
      image: '👩‍💻',
      rating: 5,
      text: 'From learning basics to running my own successful boutique, this academy guided me every step. The business management modules were game-changers for me.',
      course: 'Boutique Management',
    },
    {
      id: 4,
      name: 'Vikram Patel',
      role: 'Fashion Illustrator',
      company: 'Freelancer',
      image: '👨‍🎨',
      rating: 5,
      text: 'The creative freedom and expert mentorship helped me develop my unique style. Now I work with top brands as a freelance fashion illustrator. Forever grateful!',
      course: 'Fashion Illustration',
    },
    {
      id: 5,
      name: 'Sneha Reddy',
      role: 'Textile Designer',
      company: 'Fab India',
      image: '👩',
      rating: 5,
      text: 'The comprehensive curriculum and industry exposure at this academy are unmatched. I learned everything from traditional to modern techniques. Highly recommended!',
      course: 'Fashion Designing',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Floating Quote Icons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <Quote className="w-8 h-8 text-amber-500/10" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Success Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              What Our Students Say
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real stories from real students who transformed their careers with us
          </p>
        </div>

        {/* Main Carousel */}
        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-amber-100 overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl"></div>

              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-amber-500 fill-amber-500" />
              </div>

              <div className="relative">
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl lg:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Student Info */}
                <div className="flex flex-col items-center space-y-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-4xl shadow-xl">
                      {testimonials[activeIndex].image}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center border-4 border-white">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-amber-600 font-semibold mb-1">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm mb-2">
                      {testimonials[activeIndex].company}
                    </p>
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full">
                      <p className="text-xs font-semibold text-amber-700">
                        {testimonials[activeIndex].course}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-full lg:left-0 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-amber-100 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-full lg:right-0 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-amber-100 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-amber-500 to-yellow-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-amber-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '5000+', label: 'Happy Students' },
            { number: '4.9/5', label: 'Average Rating' },
            { number: '95%', label: 'Success Rate' },
            { number: '500+', label: '5-Star Reviews' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100 text-center"
            >
              <h3 className="text-3xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}