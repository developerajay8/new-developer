'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Award, BookOpen, Sparkles, Star, TrendingUp } from 'lucide-react';

export default function HomeSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Students' },
    { icon: Award, number: '500+', label: 'Certified Designers' },
    { icon: BookOpen, number: '50+', label: 'Expert Courses' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-300/30 to-yellow-300/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300/30 to-amber-400/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Floating Fashion Icons */}
        <div className="absolute top-32 left-20 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg opacity-20 rotate-12"></div>
        </div>
        <div className="absolute bottom-40 right-32 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20"></div>
        </div>
        <div className="absolute top-1/3 right-20 animate-float">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-lg opacity-20 -rotate-12"></div>
        </div>

        {/* Sparkle Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Star className="w-3 h-3 text-amber-400/40 fill-amber-400/40" />
          </div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full px-4 py-2 shadow-md">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                  India's Premier Fashion Institute
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight">
                  <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent animate-gradient">
                    Transform Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent animate-gradient">
                    Passion Into
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent animate-gradient inline-flex items-center">
                    Profession
                    <Sparkles className="w-8 h-8 lg:w-12 lg:h-12 ml-3 text-amber-500 animate-pulse" />
                  </span>
                </h1>

                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  Learn from <span className="font-bold text-amber-700">expert designers</span> and master the art of 
                  <span className="font-bold text-yellow-700"> fashion designing</span>, pattern making, and more at India's most trusted fashion academy.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/contact-us"
                  className="px-8 py-4 border-2 border-amber-600 text-amber-700 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300 text-center"
                >
                  Talk to Expert
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-gray-900">5000+ Students</p>
                    <p className="text-gray-600">Learning with us</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Illustration Area */}
            <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="aspect-[4/5] bg-gradient-to-br from-amber-200 via-yellow-100 to-amber-300 relative overflow-hidden">
                    {/* Placeholder for image - replace with actual image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                          <Sparkles className="w-16 h-16 text-white" />
                        </div>
                        <p className="text-2xl font-serif font-bold text-amber-800">
                          Your Success
                          <br />
                          Story Starts Here
                        </p>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-xl animate-float">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Certified</p>
                          <p className="text-lg font-bold text-amber-700">Courses</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-xl animate-float-delayed">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-600">Join</p>
                          <p className="text-lg font-bold text-amber-700">5000+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl opacity-20 animate-spin-slow"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20 animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className={`mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
            fillOpacity="0.5"
          />
          <path
            d="M0 120L60 112.5C120 105 240 90 360 82.5C480 75 600 75 720 78.75C840 82.5 960 90 1080 93.75C1200 97.5 1320 97.5 1380 97.5L1440 97.5V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
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

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}