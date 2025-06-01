import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Camera, Sparkles, Briefcase } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white p-8 shadow-md text-center transition-all duration-700 delay-${delay} fade-in ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center bg-red bg-opacity-10 rounded-full text-red">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const WhatYouGain: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${inView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">What You'll Gain</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Our comprehensive training program provides you with all the tools needed to succeed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Sparkles size={32} />}
            title="Confidence"
            description="Develop poise, presence, and the self-assurance to command any runway or photoshoot."
            delay={100}
          />
          <FeatureCard 
            icon={<Camera size={32} />}
            title="Photoshoot Portfolio"
            description="Create a professional portfolio showcasing your versatility and unique look."
            delay={300}
          />
          <FeatureCard 
            icon={<Award size={32} />}
            title="Certification"
            description="Receive official JMS certification recognized by leading agencies and brands."
            delay={500}
          />
          <FeatureCard 
            icon={<Briefcase size={32} />}
            title="Industry-Ready Skills"
            description="Master practical skills from runway techniques to professional etiquette."
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatYouGain;