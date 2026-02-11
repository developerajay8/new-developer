'use client';

import { useState, useEffect } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer comprehensive courses in Fashion Designing, Pattern Making, Tailoring & Stitching, Embroidery, Fashion Illustration, and Boutique Management. Each course is designed by industry experts with hands-on practical training.',
      category: 'Courses',
    },
    {
      question: 'What is the duration of the courses?',
      answer: 'Course durations vary from 2 to 6 months depending on the program. We offer flexible schedules including weekday, weekend, and online classes to accommodate working professionals and students.',
      category: 'Courses',
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Yes! We have a dedicated placement cell that connects our students with top fashion brands and companies. We maintain strong industry relationships and have a 95% placement success rate.',
      category: 'Career',
    },
    {
      question: 'What are the fees and payment options?',
      answer: 'Course fees range from ₹10,000 to ₹25,000 depending on the program. We offer flexible EMI options, early bird discounts, and scholarship programs for deserving students. Contact our counselors for detailed fee structure.',
      category: 'Fees',
    },
    {
      question: 'Do I need prior experience to join?',
      answer: 'No prior experience is required! Our courses are designed for beginners as well as those looking to upgrade their skills. We start with fundamentals and gradually progress to advanced techniques.',
      category: 'Admission',
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: 'Yes, all our courses are certified. You will receive an internationally recognized certificate upon successful completion of the course, which will boost your career prospects in the fashion industry.',
      category: 'Certificate',
    },
    {
      question: 'Can I learn online or is it only offline?',
      answer: 'We offer both online and offline learning options. Our online courses include live classes, recorded sessions, and interactive doubt-clearing sessions. You can choose the mode that suits you best.',
      category: 'Learning',
    },
    {
      question: 'What is the class size and student-teacher ratio?',
      answer: 'We maintain small batch sizes of 15-20 students to ensure personalized attention. This allows our expert faculty to provide individual guidance and hands-on support to each student.',
      category: 'Classes',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to know about our courses and programs
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="">
           

            {/* Right Side - FAQ Accordion */}
            <div className={`lg:col-span-8 space-y-4 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-gradient-to-br from-amber-500 to-yellow-600 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {index + 1}
                      </div>

                      {/* Question Text */}
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg transition-colors duration-300 ${
                          openIndex === index ? 'text-amber-700' : 'text-gray-900'
                        }`}>
                          {faq.question}
                        </h3>
                        {/* Category Badge */}
                        <span className="inline-block mt-2 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>

                    {/* Toggle Icon */}
                    <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-amber-500 to-yellow-600 text-white rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-12">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Border Animation */}
                  <div className={`h-1 bg-gradient-to-r from-amber-500 to-yellow-600 transition-all duration-500 ${
                    openIndex === index ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              ))}
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

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
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