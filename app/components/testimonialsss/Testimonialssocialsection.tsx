'use client';

import { useState, useEffect } from 'react';
import { Star, ThumbsUp, MessageCircle, Share2, Verified, Play } from 'lucide-react';

export default function TestimonialsSocialSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Riya Malhotra',
      username: '@riya_designs',
      avatar: '👩‍🎨',
      verified: true,
      role: 'Fashion Designer',
      time: '2 weeks ago',
      rating: 5,
      likes: 234,
      comments: 45,
      shares: 12,
      text: 'Just completed my Fashion Designing course at Nasreen Fatima Academy! 🎨✨ The journey has been absolutely incredible. From learning basic stitching to creating my first collection, every moment was enriching. Special thanks to all the amazing faculty!',
      images: ['🎨', '✂️', '👗'],
      achievement: 'Launched First Collection',
    },
    {
      id: 2,
      name: 'Aditya Kumar',
      username: '@aditya_fashion',
      avatar: '👨‍💼',
      verified: true,
      role: 'Pattern Maker',
      time: '1 month ago',
      rating: 5,
      likes: 189,
      comments: 32,
      shares: 8,
      text: 'Best decision ever! 💯 Got placed at Raymond Group within a month of completing the Pattern Making course. The practical training and industry exposure here is top-notch. Highly recommend to anyone serious about fashion career! 🚀',
      images: ['📐', '✨', '🏆'],
      achievement: 'Placed at Raymond',
    },
    {
      id: 3,
      name: 'Zara Sheikh',
      username: '@zara_boutique',
      avatar: '👩',
      verified: true,
      role: 'Boutique Owner',
      time: '3 weeks ago',
      rating: 5,
      likes: 312,
      comments: 67,
      shares: 23,
      text: 'From zero knowledge to running my own successful boutique! 🎯 The boutique management course gave me all the tools I needed. Revenue crossed ₹10 lakhs in just 6 months! Thank you Nasreen Fatima Academy! 🙏💖',
      images: ['💼', '💰', '🎉'],
      achievement: '₹10L Revenue',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Social Proof & Reviews
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            See what our students are sharing on social media about their experience
          </p>
        </div>

        {/* Testimonials Feed */}
        <div className="max-w-7xl mx-auto space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-1000 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start space-x-4">
                    {/* Avatar */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-2xl shadow-md">
                        {testimonial.avatar}
                      </div>
                      {testimonial.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                          <Verified className="w-3 h-3 text-white fill-white" />
                        </div>
                      )}
                    </div>

                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-0.5">
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        {testimonial.verified && (
                          <Verified className="w-4 h-4 text-blue-500 fill-blue-500" />
                        )}
                      </div>
                      <p className="text-amber-600 text-sm font-medium mb-0.5">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {testimonial.username} • {testimonial.time}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {testimonial.text}
                  </p>
                </div>

                {/* Images/Emojis */}
                <div className="px-6 pb-4">
                  <div className="flex items-center space-x-3">
                    {testimonial.images.map((emoji, idx) => (
                      <div
                        key={idx}
                        className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="px-6 pb-4">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    <span className="text-sm font-bold">{testimonial.achievement}</span>
                  </div>
                </div>

                {/* Engagement Bar */}
                <div className="border-t border-gray-100 px-6 py-3">
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 hover:text-red-500 transition-colors duration-300 group">
                        <ThumbsUp className="w-5 h-5 group-hover:fill-red-500 transition-all duration-300" />
                        <span className="font-semibold">{testimonial.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors duration-300">
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-semibold">{testimonial.comments}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-green-500 transition-colors duration-300">
                        <Share2 className="w-5 h-5" />
                        <span className="font-semibold">{testimonial.shares}</span>
                      </button>
                    </div>
                    <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Stats */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '📱', number: '50K+', label: 'Social Followers' },
              { icon: '⭐', number: '4.9/5', label: 'Google Rating' },
              { icon: '💬', number: '2K+', label: 'Reviews' },
              { icon: '🎥', number: '500+', label: 'Video Testimonials' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="/contact-us"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Join Our Success Community</span>
            <Play className="w-5 h-5" />
          </a>
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