'use client';

import { useState, useEffect } from 'react';
import { Target, Eye, Heart, Zap } from 'lucide-react';

export default function MissionVisionSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-300 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-yellow-300 via-transparent to-transparent"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Our Mission & Vision
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Guiding principles that drive us forward every day
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className={`group relative transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1OWUwYiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
              </div>

              {/* Gradient Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                  Our Mission
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  To empower aspiring fashion designers with world-class education, practical skills, and industry connections that enable them to build successful careers in the fashion industry.
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {[
                    'Quality Education for All',
                    'Industry-Ready Skills',
                    'Affordable Learning',
                    'Career Guidance',
                  ].map((point, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3 h-3 text-white fill-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`group relative transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-100 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2VhYjMwOCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
              </div>

              {/* Gradient Glow */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Eye className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">
                  Our Vision
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  To be recognized as India's leading fashion education institution, creating a new generation of designers who shape the future of fashion with innovation and sustainability.
                </p>

                {/* Points */}
                <ul className="space-y-3">
                  {[
                    'Global Recognition',
                    'Innovation in Fashion',
                    'Sustainable Practices',
                    'Student Success',
                  ].map((point, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-3 h-3 text-white fill-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: 'Passion', description: 'We love what we teach and inspire students to do the same' },
              { icon: Zap, title: 'Excellence', description: 'Committed to delivering the highest quality education' },
              { icon: Target, title: 'Innovation', description: 'Constantly evolving with industry trends' },
              { icon: Eye, title: 'Integrity', description: 'Honest, transparent, and ethical in all we do' },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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