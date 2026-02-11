'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Award, Users, Target, Heart } from 'lucide-react';

export default function AboutHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-300/30 to-yellow-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-400/30 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>
            {[...Array(5)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={`${i * 20}%`}
                x2="100%"
                y2={`${(i * 20) + 10}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                className="animate-draw-line"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Floating Icons */}
        {[Award, Users, Target, Heart].map((Icon, i) => (
          <div
            key={i}
            className="absolute animate-float-icon opacity-20"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 1}s`,
            }}
          >
            <Icon className="w-16 h-16 text-amber-500" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full px-5 py-2 mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Our Story</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Transforming Dreams
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Into Reality
            </span>
          </h1>

          {/* Description */}
          <p className={`text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Since our inception, we've been committed to empowering aspiring fashion designers 
            with world-class education and hands-on experience.
          </p>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '5000+', label: 'Students Trained' },
              { number: '50+', label: 'Expert Faculty' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
              >
                <h3 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
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

        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes draw-line {
          0% { stroke-dasharray: 0, 1000; }
          100% { stroke-dasharray: 1000, 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-icon {
          animation: float-icon 8s ease-in-out infinite;
        }

        .animate-draw-line {
          stroke-dasharray: 0, 1000;
          animation: draw-line 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}