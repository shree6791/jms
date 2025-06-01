import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const FinalCTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-black text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Fashion runway" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div 
          ref={ref}
          className={`text-center max-w-2xl mx-auto fade-in ${inView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-semibold mb-6">
            Ready to own the runway?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Take the first step toward your modeling career. Join our next intake and transform your passion into profession.
          </p>
          <Link to="/contact" className="btn btn-primary text-lg">
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;