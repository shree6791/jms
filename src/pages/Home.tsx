import React from 'react';
import HeroSection from '../components/HeroSection';
import Introduction from '../components/Introduction';
import Testimonials from '../components/Testimonials';
import QueensSection from '../components/QueensSection';
import WhatYouGain from '../components/WhatYouGain';
import FinalCTA from '../components/FinalCTA';
import Statistics from '../components/Statistics';
import LatestNews from '../components/LatestNews';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <QueensSection />
      <Introduction />
      <Statistics />
      <WhatYouGain />
      <LatestNews />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default Home;