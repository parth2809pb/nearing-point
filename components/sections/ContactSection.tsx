import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Reveal } from '../Reveal';

export const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-32 bg-gray-900 dark:bg-[#050505] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <Reveal>
                        <div>
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">07. Contact</span>
                            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Ready to explore <br /> the future?</h2>
                            <p className="text-xl text-gray-400 mb-12 max-w-lg font-light">
                                We are always looking for partners who share our conviction in the infrastructure of intelligence.
                            </p>

                            <div className="flex flex-col space-y-6">
                                <a href="mailto:info@nearingpoint.com" className="flex items-center group">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="text-xl font-medium">info@nearingpoint.com</span>
                                </a>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6">
                                        <MapPin className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <span className="text-xl font-medium text-gray-400">San Francisco, CA</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="h-full flex flex-col justify-end">
                            <div className="p-10 border border-white/10 bg-white/[0.02]">
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">Regulatory Notice</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-0">
                                    NearingPoint Venture Partners does not publicly offer investment interests.
                                    Information on this site is for general informational purposes only and does not constitute
                                    an offer to sell or a solicitation of an offer to buy any securities.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
