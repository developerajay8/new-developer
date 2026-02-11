'use client';

import { useState, useEffect } from 'react';
import { Lightbulb, Rocket, Trophy, Globe } from 'lucide-react';

export default function OurStorySection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const milestones = [
    {
      year: '2010',
      icon: Lightbulb,
      title: 'The Beginning',
      description: 'Started with a vision to make quality fashion education accessible to everyone in India.',
      color: 'from-blue-500 to-cyan-500',
      position: 'left',
    },
    {
      year: '2015',
      icon: Rocket,
      title: 'Rapid Growth',
      description: 'Expanded to multiple courses and reached 1000+ students across the country.',
      color: 'from-purple-500 to-pink-500',
      position: 'right',
    },
    {
      year: '2020',
      icon: Trophy,
      title: 'Recognition',
      description: 'Awarded as the Best Fashion Institute. Our students won national competitions.',
      color: 'from-amber-500 to-yellow-500',
      position: 'left',
    },
    {
      year: '2024',
      icon: Globe,
      title: 'Going Global',
      description: 'Launched online courses reaching students worldwide with 5000+ graduates.',
      color: 'from-green-500 to-emerald-500',
      position: 'right',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A story of passion, dedication, and transforming thousands of lives
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-yellow-500 to-amber-600 hidden lg:block"></div>

          {/* Milestones */}
          <div className="space-y-16 lg:space-y-24">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 delay-${index * 200} ${
                  mounted ? 'opacity-100 translate-x-0' : `opacity-0 ${milestone.position === 'left' ? '-translate-x-20' : 'translate-x-20'}`
                }`}
              >
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${milestone.position === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-amber-100 group">
                      {/* Year Badge */}
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} rounded-full mb-4`}>
                        <span className="text-white font-bold text-lg">{milestone.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="relative z-10 w-20 h-20 lg:w-24 lg:h-24">
                      {/* Pulse Ring */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full opacity-20 animate-ping`}></div>
                      
                      {/* Main Circle */}
                      <div className={`relative w-full h-full bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300`}>
                        <milestone.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}