import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brush, Crown, Video, Camera, Book, Footprints } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  isReversed?: boolean;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, isReversed, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 items-center fade-in ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`${isReversed ? 'md:order-2' : ''} group overflow-hidden rounded-lg shadow-lg`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>
      </div>
      <div className={`${isReversed ? 'md:order-1' : ''} px-4 md:px-8 group`}>
        <div className="flex items-center mb-6 transform transition-transform duration-500 group-hover:translate-x-2">
          <div className="w-12 h-12 flex items-center justify-center bg-red bg-opacity-10 rounded-full mr-4 group-hover:bg-red group-hover:bg-opacity-100 transition-colors duration-500">
            {React.cloneElement(icon as React.ReactElement, {
              className: "w-6 h-6 text-red group-hover:text-white transition-colors duration-500"
            })}
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold group-hover:text-red transition-colors duration-500">{title}</h2>
        </div>
        <p className="text-lg leading-relaxed text-justify transform opacity-90 group-hover:opacity-100 transition-all duration-500">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="pt-24">
      {/* Header Section */}
      <section className="py-16 bg-gray-50">
        <div 
          ref={headerRef}
          className={`container-custom max-w-3xl mx-auto text-center fade-in ${headerInView ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Comprehensive training programs designed to transform aspiring models into industry professionals
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom max-w-6xl mx-auto space-y-32">
          <ServiceCard
            title="Auto Makeup"
            description="Master the art of quick, professional makeup application essential for auditions and camera work. Our comprehensive training emphasizes grooming techniques, building confidence, and developing self-reliance in creating camera-ready looks."
            icon={<Brush />}
            image="/Auto Make Up-min.jpg"
            delay={100}
          />
          
          <ServiceCard
            title="Photoshoot Training"
            description="Learn the art of posing, utilizing angles, and expressing yourself visually. Perfect for building your portfolio or preparing for professional brand shoots, our training helps you master the camera."
            icon={<Camera />}
            image="https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg"
            isReversed
            delay={200}
          />
          
          <ServiceCard
            title="Print Modeling"
            description="Master the techniques of catalog, editorial, and still-based work. Focus on subtle body positioning and storytelling through posture to create compelling images that capture attention."
            icon={<Book />}
            image="/Print Modelling-min.jpg"
            delay={300}
          />
          
          <ServiceCard
            title="Commercial Acting"
            description="Develop essential skills for screen success including expression, body language, and voice modulation. Experience mock auditions with professional feedback to prepare for real-world commercial opportunities."
            icon={<Video />}
            image="https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg"
            isReversed
            delay={400}
          />
          
          <ServiceCard
            title="Beauty Pageant Prep"
            description="Elevate your stage presence with our specialized pageant preparation program. Focus on perfecting poise, posture, walking techniques, and Q&A delivery. Our training builds the confidence and elegance needed to shine in competitions."
            icon={<Crown />}
            image="/Beauty Pageant-min.jpg"
            delay={500}
          />
          
          <ServiceCard
            title="Runway Model"
            description="Perfect your runway presence with comprehensive training in turns, posture, walking rhythm, and stage confidence. Course culminates in a mock runway show to showcase your new skills."
            icon={<Footprints />}
            image="/Runway Model-min.jpg"
            isReversed
            delay={600}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1926768/pexels-photo-1926768.jpeg"
            alt="Fashion runway"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div 
          ref={ctaRef}
          className={`container-custom relative z-10 text-center fade-in ${ctaInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
            Ready to transform your modeling career?
          </h2>
          <p className="text-xl mb-8 text-white/90">Book your trial class today and take the first step towards success</p>
          <Link 
            to="/contact" 
            className="btn btn-primary text-lg group relative overflow-hidden"
          >
            <span className="relative z-10">Book a Trial Class</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;