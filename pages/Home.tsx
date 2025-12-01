import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Ticker } from '../components/sections/Ticker';
import { About } from '../components/sections/About';
import { ThesisPreview } from '../components/sections/ThesisPreview';
import { ValueProp } from '../components/sections/ValueProp';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { TeamSection } from '../components/sections/TeamSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { ContactSection } from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white dark:bg-nearing-black transition-colors duration-500 font-sans">
      <Hero />
      <Ticker />
      <About />
      <ThesisPreview />
      <ValueProp />
      <PortfolioSection />
      <TeamSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
};

export default Home;