import React from 'react';
import { ShieldCheck, TrendingUp, Anchor } from 'lucide-react';
import { Reveal } from '../Reveal';

export const ValueProp: React.FC = () => {
    return (
        <section className="py-32 bg-white dark:bg-nearing-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 dark:border-white/10 pb-12">
                        <div className="max-w-2xl">
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">03. Why Us</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400">Why NearingPoint</h2>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <p className="text-gray-400 text-sm max-w-xs text-right hidden md:block">
                                Institutional grade access to the private markets.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <Reveal>
                        <div className="flex flex-col items-start group">
                            <div className="mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                <ShieldCheck className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Risk-Adjusted Access</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We secure exclusive allocations in pre-IPO equity of blue-chip technology companies, governed by strict due diligence and structural protections.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="flex flex-col items-start group">
                            <div className="mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                <TrendingUp className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Growth Velocity</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Our capital targets the inflection point of mass adoption, ensuring participation in the steepest trajectory of the value creation curve.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="flex flex-col items-start group">
                            <div className="mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                                <Anchor className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                            </div>
                            <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Stable Capital</h4>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We act as a long-term strategic partner to founders and early investors, providing liquidity solutions that stabilize capitalization tables.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
