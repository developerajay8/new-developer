'use client';

import { useState, useEffect } from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function MapLocationSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Replace with your actual location coordinates
  const location = {
    name: 'Nasreen Fatima Fashion Academy',
    address: '123 Fashion Street, Malviya Nagar',
    city: 'Jaipur, Rajasthan - 302001',
    coordinates: {
      lat: 26.9124,
      lng: 75.7873,
    },
    phone: '+91 98765 43210',
    email: 'info@nasreenfatima.com',
    googleMapsUrl: 'https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.9124,75.7873,15z',
  };

  const quickInfo = [
    {
      icon: Phone,
      label: 'Call Us',
      value: location.phone,
      action: `tel:${location.phone.replace(/\s/g, '')}`,
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Mail,
      label: 'Email Us',
      value: location.email,
      action: `mailto:${location.email}`,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon-Sat: 9AM-7PM',
      action: '#',
      color: 'from-amber-500 to-yellow-600',
    },
  ];

  const landmarks = [
    { name: 'Metro Station', distance: '500m', direction: 'North' },
    { name: 'Bus Stop', distance: '200m', direction: 'East' },
    { name: 'Shopping Mall', distance: '1km', direction: 'South' },
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
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-700 bg-clip-text text-transparent">
              Visit Our Campus
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Come experience our state-of-the-art facilities and meet our expert faculty
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="">
            {/* Map Container - Takes 2 columns */}
            <div className={`lg:col-span-2 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-100 h-full">
                {/* Map Header */}
                <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">{location.name}</h3>
                        <p className="text-white/90 text-sm">{location.city}</p>
                      </div>
                    </div>
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg transition-all duration-300 text-white text-sm font-semibold"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div className="relative h-[400px] lg:h-[500px]">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624775!2d75.65046970649679!3d26.88544791587877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>

                  {/* Custom Location Pin Overlay */}
                  <div className="absolute top-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-900">We're Here!</span>
                    </div>
                  </div>
                </div>

                {/* Address Bar at Bottom */}
                <div className="bg-gradient-to-r from-gray-50 to-amber-50 px-6 py-4 border-t border-gray-100 w-full">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">{location.address}</p>
                      <p className="text-gray-600 text-sm">{location.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

         
          </div>

        </div>
      </div>
    </section>
  );
}