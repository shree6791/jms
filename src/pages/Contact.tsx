import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Instagram, Facebook, Music as TikTok, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be handled by Netlify
  };

  const businessHours = [
    { days: 'Friday', hours: '4:30 PM – 6 PM' },
    { days: 'Sunday', hours: '12:30 PM – 2 PM' }
  ];

  return (
    <main className="pt-24">
      {/* Header Section */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={headerRef}
          className={`container-custom max-w-3xl mx-auto text-center fade-in ${headerInView ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`fade-in ${formInView ? 'visible' : ''}`}
            >
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-heading font-semibold mb-8">Send us a Message</h2>
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                      placeholder="+1 (408) 420-6203"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="enrollment">Course Enrollment</option>
                      <option value="trial">Book Trial Class</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary w-full group"
                  >
                    <Send className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div 
              ref={infoRef}
              className={`fade-in ${infoInView ? 'visible' : ''}`}
            >
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h2 className="text-2xl font-heading font-semibold mb-8">Contact Information</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-red transition-colors duration-300">
                      <Phone className="w-5 h-5 text-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <p className="font-medium">+1 (408) 420-6203</p>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 bg-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-red transition-colors duration-300">
                      <Mail className="w-5 h-5 text-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <p className="font-medium">joshleymodellingschoolus@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-red transition-colors duration-300">
                      <MapPin className="w-5 h-5 text-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location</p>
                      <p className="font-medium">Campbell, CA</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-red bg-opacity-10 rounded-full flex items-center justify-center mr-4 group-hover:bg-red transition-colors duration-300">
                      <Clock className="w-5 h-5 text-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Business Hours</p>
                      <div className="space-y-2">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="font-medium">{schedule.days}</span>
                            <span className="font-medium ml-4">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/joshley_modeling_school" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-red bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red transition-colors duration-300 group"
                    >
                      <Instagram className="w-5 h-5 text-red group-hover:text-white transition-colors duration-300" />
                    </a>
                    <a 
                      href="https://www.facebook.com/JoshleyModelingSchool" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-red bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red transition-colors duration-300 group"
                    >
                      <Facebook className="w-5 h-5 text-red group-hover:text-white transition-colors duration-300" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@joshleymodelingschool" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-red bg-opacity-10 rounded-full flex items-center justify-center hover:bg-red transition-colors duration-300 group"
                    >
                      <TikTok className="w-5 h-5 text-red group-hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;