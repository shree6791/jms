import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact: React.FC = () => {
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

  return (
    <main className="pt-24">
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Contact Form */}
            <div 
              ref={formRef}
              className={`fade-in ${formInView ? 'visible' : ''}`}
            >
              <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-8">Get in Touch</h1>
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
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div 
              ref={infoRef}
              className={`fade-in ${infoInView ? 'visible' : ''}`}
            >
              <div className="bg-gray-50 p-8 h-full">
                <h2 className="text-2xl font-heading font-semibold mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-red mr-4" />
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-red mr-4" />
                    <p>info@joshleymodellingschool.com</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-red mr-4 mt-1" />
                    <p>Los Angeles, California</p>
                  </div>
                </div>

                <div className="mb-12">
                  <h3 className="text-xl font-heading font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-6">
                    <a 
                      href="https://instagram.com/joshley_models" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-red transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://facebook.com/joshleymodels" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-red transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://youtube.com/@joshleymodelschool" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-red transition-colors"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192113931532!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1698887993355!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
            alt="Fashion runway"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Let Your Talent Shine – Reach Out and Begin Your Journey
          </h2>
          <button className="btn btn-primary text-lg">
            Let's Connect
          </button>
        </div>
      </section>
    </main>
  );
};

export default Contact;