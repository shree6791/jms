import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brush, Crown, Video, Camera, Book, Footprints } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  isReversed?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image, isReversed }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 items-center fade-in ${inView ? 'visible' : ''}`}
    >
      <div className={`${isReversed ? 'md:order-2' : ''}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
      <div className={`${isReversed ? 'md:order-1' : ''} px-4 md:px-8`}>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 flex items-center justify-center bg-red bg-opacity-10 rounded-full mr-4">
            {icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold">{title}</h2>
        </div>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-6xl mx-auto space-y-24">
          <ServiceCard
            title="Auto Makeup"
            description="Master the art of quick, professional makeup application essential for auditions and camera work. Our comprehensive training emphasizes grooming techniques, building confidence, and developing self-reliance in creating camera-ready looks."
            icon={<Brush className="w-6 h-6 text-red" />}
            image="https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg"
          />
          
          <ServiceCard
            title="Beauty Pageant Prep"
            description="Elevate your stage presence with our specialized pageant preparation program. Focus on perfecting poise, posture, walking techniques, and Q&A delivery. Our training builds the confidence and elegance needed to shine in competitions."
            icon={<Crown className="w-6 h-6 text-red" />}
            image="https://images.pexels.com/photos/9775889/pexels-photo-9775889.jpeg"
            isReversed
          />
          
          <ServiceCard
            title="Commercial Acting"
            description="Develop essential skills for screen success including expression, body language, and voice modulation. Experience mock auditions with professional feedback to prepare for real-world commercial opportunities."
            icon={<Video className="w-6 h-6 text-red" />}
            image="https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg"
          />
          
          <ServiceCard
            title="Photoshoot Training"
            description="Learn the art of posing, utilizing angles, and expressing yourself visually. Perfect for building your portfolio or preparing for professional brand shoots, our training helps you master the camera."
            icon={<Camera className="w-6 h-6 text-red" />}
            image="https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg"
            isReversed
          />
          
          <ServiceCard
            title="Print Modeling"
            description="Master the techniques of catalog, editorial, and still-based work. Focus on subtle body positioning and storytelling through posture to create compelling images that capture attention."
            icon={<Book className="w-6 h-6 text-red" />}
            image="https://images.pexels.com/photos/8285723/pexels-photo-8285723.jpeg"
          />
          
          <ServiceCard
            title="Runway Model"
            description="Perfect your runway presence with comprehensive training in turns, posture, walking rhythm, and stage confidence. Course culminates in a mock runway show to showcase your new skills."
            icon={<Footprints className="w-6 h-6 text-red" />}
            image="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
            isReversed
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
            Ready to train with the best?
          </h2>
          <button className="btn btn-primary text-lg">
            Book a Trial Class
          </button>
        </div>
      </section>
    </main>
  );
};

export default Services;