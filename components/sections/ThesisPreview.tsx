import React from 'react';
import { Cpu, Network, Zap } from 'lucide-react';
import { Reveal } from '../Reveal';

export const ThesisPreview: React.FC = () => {
    return (
        <section className="py-32 bg-gray-50 dark:bg-[#080808] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Reveal>
                    <div className="mb-24">
                        <div className="max-w-3xl">
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">02. Thesis</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-6">The Infrastructure of Intelligence</h2>
                            <div className="w-16 h-1 bg-blue-600 dark:bg-blue-500 mb-8"></div>
                            <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                                Deploying capital into the physical and digital rails that power the next generation of computing.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Cpu className="w-6 h-6" />,
                            title: "Compute",
                            desc: "Next-gen silicon and hardware accelerators driving the AI revolution.",
                            color: "blue"
                        },
                        {
                            icon: <Network className="w-6 h-6" />,
                            title: "Infrastructure",
                            desc: "Scalable data fabrics, energy solutions, and connectivity networks.",
                            color: "indigo"
                        },
                        {
                            icon: <Zap className="w-6 h-6" />,
                            title: "Intelligence",
                            desc: "Foundation models and autonomous agents redefining productivity.",
                            color: "sky"
                        }
                    ].map((item, i) => (
                        <Reveal key={i} delay={i * 100}>
                            <div className="group relative h-full p-8 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/50 transition-all duration-500 rounded-sm hover:-translate-y-1 overflow-hidden">
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}-50/50 to-transparent dark:from-${item.color}-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-lg bg-gray-50 dark:bg-white/5 flex items-center justify-center mb-8 text-gray-900 dark:text-white group-hover:text-${item.color}-600 dark:group-hover:text-${item.color}-400 transition-colors`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">{item.title}</h4>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
