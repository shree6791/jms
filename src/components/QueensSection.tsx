import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Crown } from 'lucide-react';

interface QueenCardProps {
  image: string;
  name: string;
  title: string;
  delay: number;
}

const QueenCard: React.FC<QueenCardProps> = ({ image, name, title, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`flex-shrink-0 w-72 bg-white shadow-lg transition-all duration-700 fade-in group hover:shadow-2xl ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${title}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <Crown className="w-6 h-6 text-red mb-2" />
          <p className="text-white text-sm">JMS Alumna</p>
        </div>
      </div>
      <div className="p-6 text-center bg-black text-white transform group-hover:bg-red transition-colors duration-500">
        <h3 className="font-heading text-xl mb-2">{name}</h3>
        <p className="text-white/90 mb-2">{title}</p>
      </div>
    </div>
  );
};

const QueensSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const queens = [
    {
      image: '/Queens - 1-min.jpg',
      name: 'Berenice Gutierrez',
      title: 'Miss Elegance 2023'
    },
    {
      image: '/Queens - 2-min.jpg',
      name: 'Alexia Flores',
      title: 'Queen Ambassador Maytorena 2023'
    },
    {
      image: '/Queens - 3-min.jpg',
      name: 'Tiffany Antonio',
      title: 'Miss Popular 2023'
    },
    {
      image: '/Queens - 4-min.jpg',
      name: 'Samhara Vela',
      title: 'Miss Princesa 2023'
    },
    {
      image: '/Queens - 5-min.jpg',
      name: 'Missell Rodas',
      title: 'Miss USA 2023'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div 
          ref={titleRef}
          className={`text-center mb-12 fade-in ${titleInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">Queens of JMS</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Celebrating our award-winning students who represent JMS with pride across pageants, runways, and beyond.
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-red hover:text-white transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 p-2 rounded-full shadow-lg hover:bg-red hover:text-white transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {queens.map((queen, index) => (
              <QueenCard
                key={index}
                image={queen.image}
                name={queen.name}
                title={queen.title}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueensSection;