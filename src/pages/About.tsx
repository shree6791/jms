import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Award, Feather } from 'lucide-react';

const About: React.FC = () => {
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [founderRef, founderInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="pt-24">
      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div 
          ref={storyRef}
          className={`container-custom max-w-4xl mx-auto text-center fade-in ${storyInView ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-8">Our Story</h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl mb-6">
              Founded in 2015 by Heydi Robledo, California Runway Top Model of 2013, Joshley Modelling School (JMS) has grown into a premier institution for modeling education.
            </p>
            <p className="text-lg">
              Our approach is hands-on, inclusive, and tailored to help each student grow in confidence, style, and career readiness. From runway and commercial acting to editorial shoots, JMS celebrates diversity and individual potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">Our Mission</h2>
            <p className="text-xl font-heading italic text-red">
              To shape confident, well-rounded individuals ready to thrive in the ever-evolving modeling industry through practical training and personalized mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div 
          ref={valuesRef}
          className={`container-custom fade-in ${valuesInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-16">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red bg-opacity-10 rounded-full">
                <Heart className="w-8 h-8 text-red" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Confidence</h3>
              <p>Empowering self-expression</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red bg-opacity-10 rounded-full">
                <Award className="w-8 h-8 text-red" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Discipline</h3>
              <p>Commitment to continuous growth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red bg-opacity-10 rounded-full">
                <Feather className="w-8 h-8 text-red" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Grace</h3>
              <p>Mastering elegance and authenticity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="section-padding bg-gray-50">
        <div 
          ref={founderRef}
          className={`container-custom max-w-4xl mx-auto fade-in ${founderInView ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <div className="relative mb-8 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Heydi Robledo"
                className="w-full max-w-2xl mx-auto filter grayscale"
              />
            </div>
            <p className="font-heading italic text-lg mb-6">
              Heydi Robledo — A Journey from Runway to Role Model
            </p>
            <blockquote className="text-2xl md:text-3xl font-heading italic text-red">
              "At Joshley, we don't just model garments. We model self-belief."
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;