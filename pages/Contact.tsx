import React from 'react';
import { Reveal } from '../components/Reveal';
import { Mail, MapPin, ArrowRight, Building2, Users } from 'lucide-react';
import { NeonBeams } from '../components/ui/neon-beams';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-nearing-black transition-colors duration-500 font-sans">

            {/* 1. HERO SECTION */}
            <section className="relative pt-48 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808] overflow-hidden">

                {/* Animated Background Elements */}
                <NeonBeams />
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="max-w-4xl">
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-6">Contact Us</span>
                            <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-[1.05] mb-8">
                                Partner with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">NearingPoint.</span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                                We are always looking for partners who share our conviction in the infrastructure of intelligence. Whether you are building the future or looking to invest in it.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 2. SPLIT LAYOUT: Founders vs LPs */}
            <section className="py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

                    {/* LEFT: FOR FOUNDERS */}
                    <div className="relative group bg-white dark:bg-nearing-black border-r border-gray-200 dark:border-white/10 p-12 lg:p-24 flex flex-col justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400">
                                <Users size={32} />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">For Founders</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                Building the infrastructure of intelligence? We want to hear from you. We invest from Seed to Series B in AI, Compute, and Energy.
                            </p>
                            <a href="mailto:pitch@nearingpoint.com" className="inline-flex items-center text-lg font-bold text-blue-600 dark:text-blue-400 hover:translate-x-2 transition-transform">
                                Pitch Us <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: FOR LPs */}
                    <div className="relative group bg-gray-50 dark:bg-[#080808] p-12 lg:p-24 flex flex-col justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gray-100 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gray-200 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-gray-700 dark:text-white">
                                <Building2 size={32} />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">For Limited Partners</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                We offer institutional investors access to high-conviction strategies in the AI ecosystem. Request our latest performance deck.
                            </p>
                            <a href="mailto:ir@nearingpoint.com" className="inline-flex items-center text-lg font-bold text-gray-900 dark:text-white hover:translate-x-2 transition-transform">
                                Investor Relations <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. OFFICE / MAP */}
            <section className="py-24 bg-white dark:bg-nearing-black border-t border-gray-200 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">Headquarters</span>
                                <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-8">San Francisco</h2>
                                <div className="flex items-start space-x-6 mb-8">
                                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-500 mt-1 flex-shrink-0" />
                                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                                        415 Mission Street<br />
                                        Salesforce Tower, Suite 3500<br />
                                        San Francisco, CA 94105
                                    </p>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                                    <a href="mailto:info@nearingpoint.com" className="text-xl font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        info@nearingpoint.com
                                    </a>
                                </div>
                            </div>

                            {/* Abstract Map Visualization */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                                <div className="absolute inset-0 opacity-50 dark:opacity-30 grayscale contrast-125">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019266266677!2d-122.39962222354064!3d37.78969397198197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806674d64231%3A0x633519095b1916d4!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1716320000000!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="grayscale invert dark:invert-0"
                                    ></iframe>
                                </div>
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50"></div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="mt-24 p-8 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] rounded-sm">
                            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-500">Regulatory Notice</h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                NearingPoint Venture Partners does not publicly offer investment interests.
                                Information on this site is for general informational purposes only and does not constitute
                                an offer to sell or a solicitation of an offer to buy any securities. Past performance is not indicative of future results.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
};

export default Contact;