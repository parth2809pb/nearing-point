import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../Reveal';
import { portfolioData } from '../../data';

export const PortfolioSection: React.FC = () => {
    return (
        <section id="portfolio" className="py-32 bg-gray-50 dark:bg-[#0A0A0A] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-200/50 dark:from-white/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                        <div className="max-w-2xl">
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">04. Investments</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-6">
                                Defining the <br /> <span className="text-blue-600 dark:text-blue-500">New Standard.</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                                A curated selection of our high-conviction bets on the companies building the backbone of the intelligent economy.
                            </p>
                        </div>
                        <div className="hidden md:block mb-2">
                            <Link to="/portfolio" className="group inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                View All Investments
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.map((company, index) => (
                        <Reveal key={company.name} delay={index * 100}>
                            <div className="group relative bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-8 h-full min-h-[320px] flex flex-col justify-between hover:border-blue-500/30 dark:hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden rounded-sm">

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="h-16 w-16 bg-white dark:bg-white/10 rounded-lg p-3 flex items-center justify-center border border-gray-100 dark:border-white/5 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                            <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {company.category}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {company.name}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                        {company.description}
                                    </p>
                                </div>

                                <Link to="/portfolio" className="relative z-10 pt-6 border-t border-gray-100 dark:border-white/5 flex items-center text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    <span className="mr-2">Investment Thesis</span>
                                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
