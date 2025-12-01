import React from 'react';
import { Reveal } from '../Reveal';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-white dark:bg-nearing-black border-b border-gray-100 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">01. About</span>
                                <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">The Firm</h2>
                                <div className="w-12 h-0.5 bg-gray-200 dark:bg-white/10"></div>
                            </div>
                        </div>
                        <div className="lg:col-span-8">
                            <h3 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 leading-tight mb-10">
                                Built for the <br /><span className="text-gray-400 dark:text-gray-600">Long Horizon.</span>
                            </h3>
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-12">
                                NearingPoint Venture Partners is a dedicated late-stage technology investment firm. We identify and support the most consequential companies shaping the future of digital infrastructure. By focusing exclusively on mature, high-growth assets, we provide a stable bridge to liquidity.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100 dark:border-white/10">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Precision Investing</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">Rigorous diligence on unit economics and moat sustainability.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Strategic Liquidity</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">Solving cap table friction for founders and early investors.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
