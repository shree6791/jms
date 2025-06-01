import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Globe, Star } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, number, label, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`text-center fade-in ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-red bg-opacity-10 rounded-full">
        {icon}
      </div>
      <h3 className="text-4xl font-heading font-bold mb-2 text-red">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Statistics: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <StatItem
            icon={<Trophy className="w-8 h-8 text-red" />}
            number="500+"
            label="Successful Graduates"
            delay={100}
          />
          <StatItem
            icon={<Users className="w-8 h-8 text-red" />}
            number="95%"
            label="Industry Placement"
            delay={300}
          />
          <StatItem
            icon={<Star className="w-8 h-8 text-red" />}
            number="200+"
            label="Runway Shows"
            delay={500}
          />
          <StatItem
            icon={<Globe className="w-8 h-8 text-red" />}
            number="25+"
            label="Partner Agencies"
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;