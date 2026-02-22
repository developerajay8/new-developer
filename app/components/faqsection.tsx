'use client';

import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What courses do you offer at Nasreen Fatima Fashion Academy?',
      answer: 'We offer a comprehensive range of fashion design courses including Professional Fashion Designing, Textile & Pattern Making, Fashion Illustration, Garment Construction, and many more. Each course is designed by industry experts and includes certification upon completion.',
    },
    {
      question: 'Are the courses suitable for beginners?',
      answer: 'Yes! Our courses cater to all levels - from complete beginners to advanced professionals. Each course clearly indicates its difficulty level, and our instructors provide personalized guidance to ensure every student succeeds regardless of their starting point.',
    },
    {
      question: 'How long does it take to complete a course?',
      answer: 'Course duration varies from 8 to 14 weeks depending on the program. You can learn at your own pace with lifetime access to all course materials. Most students complete their courses within the recommended timeframe while balancing other commitments.',
    },
    {
      question: 'Do I get a certificate after completing the course?',
      answer: 'Absolutely! Upon successful completion of any course, you will receive an industry-recognized certificate from Nasreen Fatima Fashion Academy. This certificate can be shared on LinkedIn, included in your portfolio, and presented to potential employers.',
    },
    {
      question: 'Can I access courses on mobile devices?',
      answer: 'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store. The app provides 24/7 access to all your courses, allowing you to learn anytime, anywhere.',
    },
    {
      question: 'What if I need help during the course?',
      answer: 'We provide comprehensive support including live Q&A sessions, dedicated mentor support, community forums, and direct messaging with instructors. Our support team is available to help you with any questions or technical issues you may encounter.',
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 7-day money-back guarantee. If you\'re not satisfied with your course within the first 7 days of purchase, you can request a full refund - no questions asked. We want you to be completely confident in your learning investment.',
    },
    {
      question: 'Can I get job placement assistance after completing the course?',
      answer: 'Yes! We provide career support including portfolio building guidance, resume review, interview preparation, and connections to our network of fashion industry partners. Many of our students have successfully launched their careers with our assistance.',
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-[#FAF7F0] to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white px-5 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-bold text-black mb-4">
            Frequently Asked
            <span className="block text-[#C9A961] mt-2">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses, enrollment, and more
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto mt-6"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-[#C9A961]/30 hover:border-[#C9A961] rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left hover:bg-[#F5F1E8] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-[#C9A961] to-[#B8935A]' 
                        : 'bg-gray-200 group-hover:bg-[#C9A961]/20'
                    }`}>
                      <span className={`text-sm font-bold ${
                        openIndex === index ? 'text-white' : 'text-[#C9A961]'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className={`text-base md:text-lg font-semibold transition-colors duration-300 ${
                      openIndex === index ? 'text-[#C9A961]' : 'text-black group-hover:text-[#C9A961]'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-gradient-to-br from-[#C9A961] to-[#B8935A] rotate-180' 
                      : 'bg-gray-200 group-hover:bg-[#C9A961]/20'
                  }`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#C9A961]" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="pl-12 border-l-2 border-[#C9A961]/30">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-to-br from-[#F5F1E8] to-white border-2 border-[#C9A961] rounded-2xl p-8 md:p-10 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you. Reach out anytime!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contact Support
              </a>
              <a
                href="mailto:info@nasreenfatima.com"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#C9A961] font-semibold px-8 py-3 rounded-full border-2 border-[#C9A961] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}