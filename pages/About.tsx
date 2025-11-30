import React from 'react';
import { Target, Layers, Box } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-nearing-black text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <Reveal>
             <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About the Firm</h1>
             <div className="w-24 h-1 bg-blue-600 mb-8"></div>
          </Reveal>
        </div>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <Reveal>
                <div>
                     <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                        <span className="text-blue-600 dark:text-blue-500 mr-2">01.</span> Who We Are
                     </h2>
                     <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-blue-200 dark:border-white/10 pl-6">
                     NearingPoint Venture Partners is a dedicated late-stage technology investment firm. We identify and support the most consequential companies shaping the future of digital infrastructure. By focusing exclusively on mature, high-growth assets, we provide a stable bridge to liquidity and long-term value creation in the technology ecosystem.
                     </p>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="bg-gradient-to-br from-white to-gray-100 dark:from-nearing-charcoal dark:to-black p-8 border border-gray-200 dark:border-white/5 rounded-none relative overflow-hidden h-64 flex items-center justify-center shadow-lg">
                    <div className="absolute inset-0 grid-bg opacity-10 dark:opacity-30"></div>
                    <div className="relative z-10 text-center">
                        <div className="inline-block p-4 border border-gray-200 dark:border-white/10 rounded-full mb-4 bg-white dark:bg-white/5">
                            <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <p className="text-sm font-display tracking-widest uppercase text-gray-500">Precision Investing</p>
                    </div>
                </div>
            </Reveal>
        </div>

        {/* What We Focus On */}
        <div className="mb-24">
            <Reveal>
                <h2 className="text-2xl font-display font-semibold mb-10 flex items-center">
                    <span className="text-blue-600 dark:text-blue-500 mr-2">02.</span> What We Focus On
                </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Artificial Intelligence", desc: "Foundation models, inference layers, and vertical AI applications." },
                    { title: "Compute Infrastructure", desc: "Next-gen silicon, data centers, and specialized processing units." },
                    { title: "Digital Rails", desc: "Financial technology, blockchain infrastructure, and decentralized networks." }
                ].map((item, idx) => (
                    <Reveal key={idx} delay={idx * 100}>
                        <div className="bg-white dark:bg-white/5 p-8 shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-white/10 transition-colors duration-300 border border-gray-200 dark:border-transparent hover:border-blue-500/30 dark:hover:border-blue-500/30 h-full">
                            <h3 className="text-xl font-display font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>

        {/* Our Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <Reveal>
                 <div className="order-2 lg:order-1 bg-gradient-to-tl from-blue-50 to-white dark:from-blue-900/20 dark:to-black p-1 relative h-64 flex items-center justify-center border border-gray-200 dark:border-white/5 shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <Layers className="w-16 h-16 text-blue-200 dark:text-white/20" />
                 </div>
             </Reveal>
             <div className="order-1 lg:order-2">
                 <Reveal delay={200}>
                     <h2 className="text-2xl font-display font-semibold mb-6 flex items-center">
                        <span className="text-blue-600 dark:text-blue-500 mr-2">03.</span> Our Approach
                     </h2>
                     <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        Our strategy is disciplined and selective. We target late-stage secondary and structured opportunities in companies with proven product-market fit and established revenue trajectories.
                     </p>
                     <ul className="space-y-4">
                         <li className="flex items-center text-gray-700 dark:text-gray-300">
                             <Box className="w-4 h-4 text-blue-600 dark:text-blue-500 mr-3" />
                             <span>Access to exclusive pre-IPO equity</span>
                         </li>
                         <li className="flex items-center text-gray-700 dark:text-gray-300">
                             <Box className="w-4 h-4 text-blue-600 dark:text-blue-500 mr-3" />
                             <span>Rigorous due diligence standards</span>
                         </li>
                         <li className="flex items-center text-gray-700 dark:text-gray-300">
                             <Box className="w-4 h-4 text-blue-600 dark:text-blue-500 mr-3" />
                             <span>Strategic alignment with founder timelines</span>
                         </li>
                     </ul>
                 </Reveal>
             </div>
        </div>

      </div>
    </div>
  );
};

export default About;