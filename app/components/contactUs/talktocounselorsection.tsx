'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Headphones, Clock, CheckCircle, Sparkles } from 'lucide-react';

export default function TalkToCounselorSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const benefits = [
    {
      icon: CheckCircle,
      text: 'Free career counseling session',
    },
    {
      icon: CheckCircle,
      text: 'Personalized course recommendations',
    },
    {
      icon: CheckCircle,
      text: 'Instant doubt resolution',
    },
    {
      icon: CheckCircle,
      text: 'Learn about placement opportunities',
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '+91 98765 43210',
      action: 'tel:+919876543210',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick Reply in 5 mins',
      action: 'https://wa.me/919876543210',
      color: 'from-green-600 to-teal-600',
    },
    {
      icon: Headphones,
      title: 'Live Chat',
      description: 'Chat with our team',
      action: '#',
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Animated Circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-500/30 rounded-full animate-float-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-700">We're Here to Help</span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
                    Talk to Real People
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
                    Who Care About Your Growth
                  </span>
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Have questions? Need guidance? Our expert counselors are here to help you step confidently into your fashion journey.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-amber-700 transition-colors duration-300">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                      {method.title}
                    </h4>
                    <p className="text-xs text-gray-600">{method.description}</p>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Working Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - CTA Card */}
            <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 lg:p-10 shadow-2xl border border-amber-200 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-3xl"></div>

                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-xl mx-auto">
                    <Headphones className="w-10 h-10 text-white" />
                  </div>

                  {/* Text */}
                  <div className="text-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      Book Your Free Counseling
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Get personalized guidance from our expert counselors. We'll help you choose the perfect course for your career goals.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-amber-200">
                    <div className="text-center">
                      <p className="text-2xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                        5K+
                      </p>
                      <p className="text-xs text-gray-600">Students Guided</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                        4.9★
                      </p>
                      <p className="text-xs text-gray-600">Counselor Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent">
                        24Hr
                      </p>
                      <p className="text-xs text-gray-600">Support</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#contact-section"
                    className="group relative block w-full px-8 py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Talk to a Counselor</span>
                      <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>

                  {/* Trust Badge */}
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      ✓ No obligation · ✓ Free consultation · ✓ Expert guidance
                    </p>
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

        @keyframes float-particle {
          0% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% { 
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
    </section>
  );
}