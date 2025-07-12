import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin } from 'lucide-react';

const LatestNews: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      title: "Summer Intensive Workshop",
      date: "July 15-30, 2025",
      location: "Los Angeles Studio",
      description: "Two-week intensive training covering runway, photoshoot, and personal branding.",
      image: "/Heydi_BG.jpg"
    },
    {
      title: "JMS Annual Fashion Show",
      date: "August 20, 2025",
      location: "LA Fashion District",
      description: "Showcase featuring our top students and alumni in collaboration with leading designers.",
      image: "/Runway_Model.jpg"
    },
    {
      title: "International Model Scout Visit",
      date: "September 5, 2025",
      location: "JMS Main Campus",
      description: "Exclusive opportunity to meet and audition for international modeling agencies.",
      image: "/Print_Modelling.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`fade-in ${inView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-12">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-white shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="text-red hover:text-black transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;