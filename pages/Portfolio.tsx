import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { portfolioData } from '../data';
import { ArrowRight, Search, X, ExternalLink } from 'lucide-react';
import { NeonBeams } from '../components/ui/neon-beams';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedCompany, setSelectedCompany] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'AI', 'Infrastructure', 'FinTech', 'Compute'];

  const filteredData = filter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);

  const featuredItems = portfolioData.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-nearing-black transition-colors duration-500 font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808] overflow-hidden">

        {/* Animated Background Elements */}
        <NeonBeams />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <div className="max-w-4xl">
              <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-6">Our Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-[1.05] mb-8">
                Defining the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">New Standard.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                We back the companies building the backbone of the intelligent economy. From foundation models to sustainable compute, our portfolio represents the highest conviction bets in the market.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. SPOTLIGHT SECTION */}
      <section className="py-24 bg-white dark:bg-nearing-black border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-2">Featured Investments</h2>
              <p className="text-gray-500 dark:text-gray-400">High-conviction positions shaping the future.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredItems.slice(0, 2).map((item, idx) => (
              <Reveal key={item.name} delay={idx * 100}>
                <div
                  className="group relative bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-sm overflow-hidden hover:border-blue-500/30 dark:hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                  onClick={() => setSelectedCompany(item)}
                >
                  <div className="p-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="h-20 w-20 bg-white dark:bg-white/10 rounded-xl p-4 flex items-center justify-center border border-gray-100 dark:border-white/5 shadow-sm">
                        <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">{item.name}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {item.longDescription || item.description}
                    </p>
                    <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                      <span className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center">
                        Read Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTERABLE GRID */}
      <section className="py-24 bg-gray-50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Bar */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-16 pb-8 border-b border-gray-200 dark:border-white/10">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mr-4">Filter by:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-nearing-black shadow-lg'
                    : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredData.map((company, index) => (
              <Reveal key={company.name} delay={index * 50}>
                <div
                  className="group relative bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-8 h-full min-h-[320px] flex flex-col justify-between hover:border-blue-500/30 dark:hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 rounded-sm cursor-pointer"
                  onClick={() => setSelectedCompany(company)}
                >

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="h-14 w-14 bg-white dark:bg-white/10 rounded-lg p-3 flex items-center justify-center border border-gray-100 dark:border-white/5 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {company.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {company.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-gray-100 dark:border-white/5 flex items-center text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <span className="mr-2">View Details</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CASE STUDY TEASER */}
      <section className="py-32 bg-blue-600 dark:bg-[#050505] text-white relative overflow-hidden border-t border-transparent dark:border-white/10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-900/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal width="100%">
            <span className="block text-xs font-bold tracking-[0.2em] text-blue-200 uppercase mb-6">Spotlight</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">The Generative Revolution</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 font-light">
              How our portfolio companies OpenAI, Anthropic, and Perplexity are collectively dismantling the barriers to artificial general intelligence.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPANY DETAIL MODAL */}
      {selectedCompany && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedCompany(null)}
          ></div>
          <div className="relative w-full max-w-3xl bg-white dark:bg-nearing-black border border-gray-200 dark:border-white/10 shadow-2xl rounded-lg overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">

            <button
              onClick={() => setSelectedCompany(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-white/10 backdrop-blur-md rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white z-50 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center space-x-6 mb-8">
                <div className="h-24 w-24 bg-white dark:bg-white/5 rounded-2xl p-4 flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                  <img src={selectedCompany.logo} alt={selectedCompany.name} className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">{selectedCompany.name}</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    {selectedCompany.category}
                  </span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">Investment Thesis</h4>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedCompany.longDescription || selectedCompany.description}
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100 dark:border-white/10 flex justify-between items-center">
                <button
                  className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    // In a real app, this would link to the company website
                    window.open(`https://google.com/search?q=${selectedCompany.name}`, '_blank');
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;