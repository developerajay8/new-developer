'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 123-456-7890', '+91 987-654-3210'],
      link: 'tel:+911234567890',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@nasreenfatima.com', 'support@nasreenfatima.com'],
      link: 'mailto:info@nasreenfatima.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Nasreen Fatima Fashion Academy', 'Jaipur, Rajasthan, India - 302001'],
      link: '#',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
      link: '#',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:bg-red-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:bg-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-700' },
  ];

  const faqs = [
    {
      question: 'How can I enroll in a course?',
      answer: 'You can browse our courses and click the "Enroll Now" button on any course page.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 7-day money-back guarantee on all courses.',
    },
    {
      question: 'Can I get a demo class?',
      answer: 'Yes! Contact us and we will arrange a free demo class for you.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8] py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A961] opacity-5 rounded-full blur-3xl"></div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] text-white px-5 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-serif font-bold text-black leading-tight mb-6">
              Contact
              <span className="block text-[#C9A961] mt-2">Nasreen Fatima Academy</span>
            </h1>
            
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Have questions? We're here to help you 24/7. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-[#F5F1E8] border-2 border-[#C9A961]/30 hover:border-[#C9A961] p-6 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C9A961]"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C9A961]"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C9A961]"></div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C9A961]"></div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-black mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-700 leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F5F1E8] via-white to-[#F5F1E8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left - Contact Form */}
            <div className="relative">
              <div className="bg-white border-2 border-[#C9A961] p-8 md:p-10">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961]"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961]"></div>

                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-3">
                    Send Us a Message
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#C9A961] to-[#B8935A] rounded-full mb-4"></div>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#C9A961]/30 focus:border-[#C9A961] focus:outline-none transition-colors text-gray-900"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#C9A961]/30 focus:border-[#C9A961] focus:outline-none transition-colors text-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-[#C9A961]/30 focus:border-[#C9A961] focus:outline-none transition-colors text-gray-900"
                      placeholder="+91 123-456-7890"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-[#C9A961]/30 focus:border-[#C9A961] focus:outline-none transition-colors text-gray-900"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-[#C9A961]/30 focus:border-[#C9A961] focus:outline-none transition-colors resize-none text-gray-900"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold py-4 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Additional Info & Map */}
            <div className="space-y-8">
              
              {/* Map Placeholder */}
              <div className="relative bg-white border-2 border-[#C9A961] overflow-hidden h-[400px]">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C9A961] z-10"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C9A961] z-10"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C9A961] z-10"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C9A961] z-10"></div>

                {/* Google Maps Embed - Replace with your location */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256272038!2d75.65046970478855!3d26.88544791710024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1644339283267!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  // allowFullScreen=""
                  loading="lazy"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="bg-white border-2 border-[#C9A961] p-8">
                {/* Corner Decorations */}
                <div className="absolute w-4 h-4 border-t-2 border-l-2 border-[#C9A961]"></div>
                
                <h3 className="text-2xl font-serif font-bold text-black mb-4">
                  Connect With Us
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-[#C9A961] to-[#B8935A] rounded-full mb-6"></div>
                <p className="text-gray-600 mb-6">
                  Follow us on social media for updates, tips, and inspiration
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A961] to-[#B8935A] ${social.color} flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-gradient-to-br from-[#C9A961] to-[#B8935A] p-8 text-white">
                <h3 className="text-2xl font-serif font-bold mb-6">
                  Quick Questions?
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-2">{faq.question}</h4>
                      <p className="text-sm text-white/90">{faq.answer}</p>
                      {index < faqs.length - 1 && (
                        <div className="h-px bg-white/20 mt-4"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
          <div className="absolute top-20 right-20 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
          <div className="absolute bottom-10 right-1/3 w-3 h-3 border-2 border-[#C9A961] rotate-45"></div>
        </div>

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Prefer to Talk Directly?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Call us now and speak to one of our education counselors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+911234567890"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C9A961] to-[#B8935A] hover:from-[#B8935A] hover:to-[#C9A961] text-white font-semibold px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +91 123-456-7890
              </a>
              <a
                href="mailto:info@nasreenfatima.com"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 border-2 border-[#C9A961] shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[#C9A961]" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
