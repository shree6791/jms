import React from 'react';
import { useInView } from 'react-intersection-observer';

const Introduction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-5xl mx-auto">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto fade-in ${inView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">Our Philosophy</h2>
          <p className="text-lg md:text-xl font-heading italic text-red mb-12">
            "At Joshley Modelling School, we believe modeling is more than just a walk — it's a journey of self-discovery, discipline, and confidence."
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-heading font-medium mb-4">Our Mission</h3>
              <p className="text-base leading-relaxed text-justify">
                We empower aspiring models with the skills, knowledge, and confidence needed to succeed in the competitive fashion industry. Through personalized training and mentorship, we help you discover your unique potential and transform it into a successful modeling career.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-heading font-medium mb-4">Our Approach</h3>
              <p className="text-base leading-relaxed text-justify">
                Our curriculum combines technical training with personal development. From perfecting your runway walk to building a standout portfolio, we provide comprehensive education in all aspects of modeling while nurturing your individual style and presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;