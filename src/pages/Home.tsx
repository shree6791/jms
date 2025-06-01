import React from 'react';
import HeroSection from '../components/HeroSection';
import Introduction from '../components/Introduction';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import WhatYouGain from '../components/WhatYouGain';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <Introduction />
      <Testimonials />
      <Gallery />
      <WhatYouGain />
      <FinalCTA />
    </main>
  );
};

export default Home;