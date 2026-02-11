'use client';

import { useState, useEffect } from 'react';
import { Linkedin, Mail, Award, BookOpen } from 'lucide-react';

export default function TeamSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const team = [
    {
      name: 'Nasreen Fatima',
      role: 'Founder & Director',
      image: '👩‍🎨',
      experience: '20+ Years',
      specialty: 'Fashion Designing',
      description: 'Industry veteran with experience at top fashion houses',
      social: { linkedin: '#', email: 'nasreen@academy.com' },
    },
    {
      name: 'Rajesh Kumar',
      role: 'Head of Department',
      image: '👨‍🏫',
      experience: '15+ Years',
      specialty: 'Pattern Making',
      description: 'Expert in traditional and modern pattern techniques',
      social: { linkedin: '#', email: 'rajesh@academy.com' },
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Faculty',
      image: '👩‍💼',
      experience: '12+ Years',
      specialty: 'Textile Design',
      description: 'Specialist in fabric selection and draping',
      social: { linkedin: '#', email: 'priya@academy.com' },
    },
    {
      name: 'Amit Verma',
      role: 'Fashion Consultant',
      image: '👨‍💻',
      experience: '10+ Years',
      specialty: 'Industry Relations',
      description: 'Connects students with top fashion brands',
      social: { linkedin: '#', email: 'amit@academy.com' },
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Meet Our Expert Team
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Learn from industry professionals with decades of combined experience
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative bg-gradient-to-br from-white to-amber-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-amber-100">
                {/* Image Area */}
                <div className="relative h-64 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-200 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-500/10 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all duration-500"></div>
                  
                  {/* Avatar Emoji */}
                  <span className="text-8xl relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                    {member.image}
                  </span>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-bold text-amber-700">{member.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name & Role */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold text-sm mb-3">
                    {member.role}
                  </p>

                  {/* Specialty */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{member.specialty}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                    <a
                      href={member.social.linkedin}
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors duration-300 group/btn"
                    >
                      <Linkedin className="w-4 h-4 text-amber-700" />
                      <span className="text-xs font-medium text-amber-700">LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="flex items-center justify-center w-10 h-10 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 text-amber-700" />
                    </a>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-500 pointer-events-none"></div>
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
      `}</style>
    </section>
  );
}