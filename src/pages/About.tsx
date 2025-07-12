import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Award, Feather, Users, Star, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [founderRef, founderInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timeline = [
    { year: '2015', event: 'Foundation of Joshley Modelling School by Heydi Robledo' },
    { year: '2017', event: 'Opened second campus in Downtown LA' },
    { year: '2019', event: 'Launched International Model Exchange Program' },
    { year: '2021', event: 'Celebrated 1000th graduate' },
    { year: '2023', event: 'Named Best Modeling School in California' }
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Runway Director',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      description: '15 years of international runway experience'
    },
    {
      name: 'James Chen',
      role: 'Photography Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      description: 'Award-winning fashion photographer'
    },
    {
      name: 'Sarah Williams',
      role: 'Acting Coach',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      description: 'Former TV personality and commercial model'
    }
  ];

  return (
    <main className="pt-24">
      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div 
          ref={storyRef}
          className={`container-custom max-w-4xl mx-auto text-center fade-in ${storyInView ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-semibold mb-8">Our Story</h1>
          <div className="space-y-6 text-[#333333]">
            <p className="text-lg leading-relaxed font-body text-justify">
              Founded in 2015 by Heydi Robledo, California Runway Top Model of 2013, Joshley Modelling School (JMS) has grown into a premier institution for modeling education.
            </p>
            <p className="text-lg leading-relaxed font-body text-justify">
              Our approach is hands-on, inclusive, and tailored to help each student grow in confidence, style, and career readiness. From runway and commercial acting to editorial shoots, JMS celebrates diversity and individual potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-gray-50">
        <div 
          ref={missionRef} 
          className="container-custom max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">Our Mission</h2>
            <p className="text-xl font-heading italic text-red mb-8">
              "To shape confident, well-rounded individuals ready to thrive in the ever-evolving modeling industry."
            </p>
            <p className="text-lg leading-relaxed font-body text-[#333333] text-justify">
              Through practical training and personalized mentorship, we empower our students with the skills, knowledge, and confidence needed to succeed in the competitive fashion industry. Our comprehensive approach ensures each individual develops their unique potential while mastering the technical aspects of modeling.
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
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red bg-opacity-10 rounded-full group-hover:bg-red transition-colors duration-300">
                <Heart className="w-8 h-8 text-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Confidence</h3>
              <p className="text-[#333333] font-body text-justify">Building self-assurance through expert guidance and continuous practice, enabling our students to command any runway or photoshoot with poise and grace.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red bg-opacity-10 rounded-full group-hover:bg-red transition-colors duration-300">
                <Award className="w-8 h-8 text-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Discipline</h3>
              <p className="text-[#333333] font-body text-justify">Fostering dedication and perseverance through structured training programs that develop both physical skills and mental resilience.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-red bg-opacity-10 rounded-full group-hover:bg-red transition-colors duration-300">
                <Feather className="w-8 h-8 text-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Grace</h3>
              <p className="text-[#333333] font-body text-justify">Cultivating elegance and authenticity in every aspect of modeling, from runway walks to professional interactions within the industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div 
          ref={timelineRef}
          className={`container-custom max-w-4xl mx-auto fade-in ${timelineInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start group">
                <div className="w-24 pt-1 flex-shrink-0">
                  <span className="font-heading font-semibold text-red">{item.year}</span>
                </div>
                <div className="relative flex-grow pl-12 pb-8">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-red group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="absolute left-1 top-3 w-[1px] h-full bg-red/20"></div>
                  <p className="text-lg text-[#333333]">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="section-padding bg-white">
        <div 
          ref={founderRef}
          className={`container-custom max-w-4xl mx-auto fade-in ${founderInView ? 'visible' : ''}`}
        >
          <div className="text-center mb-12">
            <div className="relative mb-8 overflow-hidden group">
              <img
                src="/Heydi.jpg"
                alt="Heydi Robledo"
                className="w-full max-w-2xl mx-auto transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="font-heading italic text-lg mb-6 text-center">
              Heydi Robledo — A Journey from Runway to Role Model
            </p>
            <blockquote className="text-2xl md:text-3xl font-heading italic text-red">
              "At Joshley, we don't just model garments.<br />
              We model self-belief."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div 
          ref={teamRef}
          className={`container-custom fade-in ${teamInView ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-16">Meet Our Experts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative aspect-square overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-red transition-colors duration-300">{member.name}</h3>
                  <p className="text-red mb-2">{member.role}</p>
                  <p className="text-[#333333]">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;