'use client';

import { useState, useEffect } from 'react';
import { Users, Award, Download, Heart, CheckCircle, TrendingUp, BookOpen, Star } from 'lucide-react';

export default function WhyTrustSection() {
  const [mounted, setMounted] = useState(false);
  const [counts, setCounts] = useState({
    students: 0,
    community: 0,
    downloads: 0,
  });

  useEffect(() => {
    setMounted(true);
    
    // Counter Animation
    const duration = 2000;
    const steps = 60;
    const studentTarget = 153264;
    const communityTarget = 5132651;
    const downloadTarget = 347969;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        students: Math.floor(studentTarget * progress),
        community: Math.floor(communityTarget * progress),
        downloads: Math.floor(downloadTarget * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({
          students: studentTarget,
          community: communityTarget,
          downloads: downloadTarget,
        });
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-IN');
  };

  const trustReasons = [
    {
      icon: Award,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with 10+ years experience',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Complete courses from basics to advanced level',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: CheckCircle,
      title: 'Certified Programs',
      description: 'Internationally recognized certificates',
      color: 'from-amber-600 to-yellow-700',
    },
    {
      icon: Users,
      title: 'Live Classes',
      description: 'Interactive sessions with doubt clearing',
      color: 'from-yellow-600 to-amber-700',
    },
    {
      icon: Heart,
      title: 'Lifetime Support',
      description: 'Get support even after course completion',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      icon: TrendingUp,
      title: '95% Success Rate',
      description: 'Our students build successful careers',
      color: 'from-yellow-500 to-amber-500',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Trusted By Thousands</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Why Students Trust
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
              Nasreen Fatima Fashion Academy
            </span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Join thousands of successful students who transformed their passion into profession
          </p>
        </div>

        {/* Stats Cards - Main Highlight */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Success Stories */}
          <div className="group relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-2">
                  {formatNumber(counts.students)}+
                </h3>
                <p className="text-xl font-bold text-gray-800">Success Stories</p>
              </div>
              
              <p className="text-gray-600">Students who achieved their fashion dreams with us</p>
            </div>
          </div>

          {/* Social Community */}
          <div className="group relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent mb-2">
                  {formatNumber(counts.community)}+
                </h3>
                <p className="text-xl font-bold text-gray-800">Social Community</p>
              </div>
              
              <p className="text-gray-600">Active members in our fashion community network</p>
            </div>
          </div>

          {/* App Downloads */}
          <div className="group relative bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-200 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-4">
                <h3 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-2">
                  {formatNumber(counts.downloads)}+
                </h3>
                <p className="text-xl font-bold text-gray-800">App Downloads</p>
              </div>
              
              <p className="text-gray-600">Students learning on-the-go with our mobile app</p>
            </div>
          </div>
        </div>

        {/* Trust Reasons Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {trustReasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/courses"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Our Courses</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="/student-work"
              className="px-8 py-4 border-2 border-amber-600 text-amber-700 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300"
            >
              View Student Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}