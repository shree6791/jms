import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, title, image, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Quote Section */}
      <div className="relative mb-8">
        <Quote className="absolute -top-4 -left-4 w-8 h-8 text-red/20 transform rotate-180 transition-transform duration-500 group-hover:scale-125" />
        <p className="font-quote italic text-lg leading-relaxed pt-4">{quote}</p>
      </div>

      {/* Author Section */}
      <div className="grid grid-cols-2 items-center gap-6 pt-6 border-t border-gray-100">
        <div className="w-24 h-24 rounded-full overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
        <div className="transform transition-all duration-500 group-hover:translate-x-2">
          <p className="font-heading font-semibold text-lg group-hover:text-red transition-colors duration-500">{name}</p>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Success Stories</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Hear from our students who have transformed their passion into successful careers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Joshley transformed my daughter from shy to confident. The portfolio they helped create landed her first three professional jobs!"
            name="Melissa J."
            title="Parent of Student"
            image="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={100}
          />
          <TestimonialCard 
            quote="The runway training I received was invaluable. Two months after graduating, I walked in my first Fashion Week show."
            name="Carlos T."
            title="Professional Model"
            image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={300}
          />
          <TestimonialCard 
            quote="JMS didn't just teach me how to pose—they taught me how to present myself professionally in every situation."
            name="Sarah L."
            title="Commercial Model"
            image="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;