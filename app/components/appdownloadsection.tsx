'use client';

import { useState, useEffect } from 'react';
import { Smartphone, Download, Play, CheckCircle, Star, TrendingUp, Bell } from 'lucide-react';

export default function AppDownloadSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Play,
      title: 'Watch Recorded Lectures',
      description: 'Access all recorded classes anytime, anywhere at your convenience',
    },
    {
      icon: Download,
      title: 'Download Study Materials',
      description: 'Download notes, PDFs, and resources for offline learning',
    },
    {
      icon: Bell,
      title: 'Instant Notifications',
      description: 'Get updates for live classes, assignments, and announcements',
    },
    {
      icon: TrendingUp,
      title: 'Track Your Progress',
      description: 'Monitor your learning journey and track course completion',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-700"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-sm font-semibold text-white">24/7 Learning Access</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Carry Your Dreams
              <br />
              <span className="text-yellow-200">with You...</span>
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Learn from anywhere with 24/7 access on our mobile app. Your fashion education companion in your pocket!
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="group flex items-center justify-center space-x-3 px-6 py-4 bg-white rounded-2xl font-bold text-amber-700 hover:bg-yellow-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-xl flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-600">GET IT ON</p>
                  <p className="text-lg font-black">Google Play</p>
                </div>
              </a>

              <a
                href="#"
                className="group flex items-center justify-center space-x-3 px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-white rounded-2xl font-bold text-white hover:bg-white hover:text-amber-700 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-600 group-hover:to-yellow-700 transition-all duration-300">
                  <Download className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs opacity-80">Download on the</p>
                  <p className="text-lg font-black">App Store</p>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <p className="text-3xl font-black text-white mb-1">50K+</p>
                <p className="text-sm text-white/80">Downloads</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white mb-1">4.8⭐</p>
                <p className="text-sm text-white/80">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-white mb-1">24/7</p>
                <p className="text-sm text-white/80">Access</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative max-w-md mx-auto">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-4 shadow-2xl animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Course Progress</p>
                    <p className="text-lg font-bold text-gray-900">85% Complete</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-4 shadow-2xl animate-float-delayed">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">New Achievement</p>
                    <p className="text-lg font-bold text-gray-900">🏆 Unlocked!</p>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-[3rem] blur-2xl opacity-50"></div>
                
                {/* Phone */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-white to-amber-50 rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-6 py-3 flex items-center justify-between text-white text-xs">
                      <span>9:41</span>
                      <span>📶 📡 🔋</span>
                    </div>

                    {/* App Content */}
                    <div className="p-6 space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">My Courses</h3>
                          <p className="text-sm text-gray-600">Continue Learning</p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full"></div>
                      </div>

                      {/* Course Card */}
                      <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="text-3xl">🎨</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">Fashion Design</h4>
                            <p className="text-xs text-gray-600">Module 5 of 10</p>
                          </div>
                        </div>
                        <div className="w-full bg-white/50 rounded-full h-2">
                          <div className="bg-gradient-to-r from-amber-500 to-yellow-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3">
                        {['📹 Live Class', '📝 Notes', '💬 Community', '🏆 Achievements'].map((item, i) => (
                          <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm">
                            <p className="text-sm font-semibold text-gray-700">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
                        {['🏠', '📚', '🔔', '👤'].map((icon, i) => (
                          <button key={i} className="text-2xl opacity-50 hover:opacity-100 transition-opacity">
                            {icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}