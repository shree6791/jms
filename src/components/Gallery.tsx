import React from 'react';
import { useInView } from 'react-intersection-observer';

const galleryImages = [
  {
    src: "https://images.pexels.com/photos/4937448/pexels-photo-4937448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Fashion model in stylish outfit"
  },
  {
    src: "https://images.pexels.com/photos/6203491/pexels-photo-6203491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Model posing in modern environment"
  },
  {
    src: "https://images.pexels.com/photos/7691445/pexels-photo-7691445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Close up fashion portrait"
  },
  {
    src: "https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Model on runway"
  },
  {
    src: "https://images.pexels.com/photos/4726538/pexels-photo-4726538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Behind the scenes at photoshoot"
  },
  {
    src: "https://images.pexels.com/photos/10043245/pexels-photo-10043245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Model in high fashion outfit"
  }
];

const Gallery: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div 
          ref={titleRef}
          className={`text-center mb-12 fade-in ${titleInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">From First Step to Final Pose</h2>
          <p className="text-lg max-w-2xl mx-auto">See the Joshley Journey</p>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div className="gallery-grid px-4 md:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {galleryImages.map((image, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });
            
            return (
              <div
                key={index}
                ref={ref}
                className={`gallery-item aspect-square overflow-hidden fade-in ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full w-full overflow-hidden group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;