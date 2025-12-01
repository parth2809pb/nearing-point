import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonOrbs } from '../ui/neon-orbs';
import { Reveal } from '../Reveal';

export const Hero: React.FC = () => {
    return (
        <div id="home" className="relative z-10 w-full min-h-[95vh] flex flex-col justify-center items-center">
            <NeonOrbs />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 w-full flex flex-col items-center">
                <Reveal width="100%">
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-100 dark:bg-blue-900/10 mb-8 backdrop-blur-sm transition-colors">
                            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
                            <span className="text-blue-700 dark:text-blue-400 text-xs font-medium tracking-wide uppercase">Late Stage Technology Fund</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-400 tracking-tighter leading-[1.05] mb-8">
                            Backing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">Engines</span> of the Future.
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-12 max-w-2xl leading-relaxed">
                            We invest in late-stage companies building AI, compute, and next-generation technology infrastructure.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="group inline-flex justify-center items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-nearing-black text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full sm:rounded-none"
                            >
                                Get In Touch
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="group inline-flex justify-center items-center px-8 py-4 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white text-lg font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 rounded-full sm:rounded-none"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};
