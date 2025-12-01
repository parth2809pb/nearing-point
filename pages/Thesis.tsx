import React from 'react';
import { Reveal } from '../components/Reveal';
import { Cpu, Zap, Anchor, Database, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NeonBeams } from '../components/ui/neon-beams';

const Thesis: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-nearing-black transition-colors duration-500 font-sans selection:bg-blue-500/30">

            {/* 1. HERO SECTION: The Manifesto Header */}
            <section className="relative pt-48 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>

                {/* Animated Background Elements */}
                <NeonBeams />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Reveal>
                        <div className="max-w-4xl">
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-6">Investment Thesis</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-[1.05] mb-12">
                                The Infrastructure <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">of Intelligence.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl border-l-2 border-blue-500 pl-8">
                                We are entering the largest capital expenditure cycle in human history. The transition from deterministic computing to probabilistic intelligence requires a complete re-architecting of the digital stack.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 2. THE COMPUTE CYCLE: Historical Context */}
            <section className="py-32 bg-gray-50 dark:bg-[#080808] border-y border-gray-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-6">The Fourth Compute Cycle</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                    Every 15 years, a new computing paradigm emerges that reshapes the global economy. From Mainframes to PCs, to Mobile and Cloud, each cycle has created trillions in value.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                                    We are now in the early innings of the <strong>AI Cycle</strong>. Unlike previous shifts that focused on distribution (getting computers into hands), this cycle is about <strong>production</strong> (generating intelligence). This requires an exponential increase in compute density, energy availability, and data throughput.
                                </p>
                                <div className="flex items-center space-x-4 text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                                    <span>We invest here</span>
                                </div>
                            </div>

                            {/* Diagrammatic View */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
                                <div className="relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 space-y-6">
                                    {[
                                        { label: "Mainframe", year: "1960s", icon: Database, active: false },
                                        { label: "PC / Internet", year: "1990s", icon: Network, active: false },
                                        { label: "Mobile / Cloud", year: "2000s", icon: Cloud, active: false },
                                        { label: "Artificial Intelligence", year: "2020s+", icon: Cpu, active: true },
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex items-center p-4 rounded-lg transition-all ${item.active ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30' : 'bg-gray-50 dark:bg-white/5 border border-transparent'}`}>
                                            <div className={`p-3 rounded-md mr-4 ${item.active ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-white/10 text-gray-500'}`}>
                                                <item.icon size={20} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className={`font-bold ${item.active ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-500'}`}>{item.label}</h4>
                                                <span className="text-xs uppercase tracking-wider text-gray-400">{item.year}</span>
                                            </div>
                                            {item.active && <div className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">Current</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 3. DEEP DIVE: Energy & Infrastructure */}
            <section className="py-32 bg-white dark:bg-nearing-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="mb-24">
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">02. The Bottleneck</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8">Energy is the New Latency.</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                    The limiting factor for AI scaling is no longer just silicon—it's power. Training a single frontier model consumes gigawatt-hours of energy. As inference scales to billions of users, the energy demand will outpace current grid capacity.
                                </p>
                                <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                                    We back companies solving this through <strong>specialized silicon</strong> (LPU/TPU), <strong>liquid cooling</strong>, and <strong>sustainable data center</strong> architectures. The winners will be those who can deliver the most FLOPs per watt.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Specialized Compute", desc: "Moving beyond general purpose GPUs to application-specific integrated circuits (ASICs) designed for inference.", icon: Cpu },
                            { title: "Sustainable Power", desc: "Nuclear micro-reactors and renewable-first data centers that can operate off-grid.", icon: Zap },
                            { title: "Next-Gen Networking", desc: "Optical interconnects and photonics to eliminate data transfer bottlenecks.", icon: Network },
                        ].map((card, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="p-8 border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/[0.05] transition-colors duration-300 h-full">
                                    <card.icon className="w-10 h-10 text-blue-600 dark:text-blue-500 mb-6" />
                                    <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-4">{card.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{card.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. LIQUIDITY STRATEGY */}
            <section className="py-32 bg-gray-900 dark:bg-[#050505] text-white relative overflow-hidden">
                {/* Abstract Grid Background */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-5">
                                <span className="block text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">03. The Instrument</span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Solving the Liquidity Paradox.</h2>
                                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                    Companies are staying private longer than ever—11+ years on average. This creates a "liquidity paradox" where trillions in value are locked in private equity, inaccessible to employees and early investors.
                                </p>
                                <div className="p-6 border border-white/10 bg-white/5 rounded-lg backdrop-blur-sm">
                                    <h4 className="text-xl font-bold mb-2 text-white">Our Approach</h4>
                                    <p className="text-sm text-gray-400">
                                        We specialize in <strong>structured secondary transactions</strong>. We provide clean exits for early stakeholders while giving our LPs access to pre-IPO alpha with significantly reduced duration risk compared to early-stage venture.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-7 flex flex-col justify-center">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                                        <Anchor className="w-8 h-8 text-blue-400 mb-4" />
                                        <h4 className="text-lg font-bold mb-2">Cap Table Stabilization</h4>
                                        <p className="text-sm text-gray-400">Aligning long-term incentives by replacing tired capital with fresh, strategic institutional holding.</p>
                                    </div>
                                    <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                                        <Database className="w-8 h-8 text-blue-400 mb-4" />
                                        <h4 className="text-lg font-bold mb-2">Data-Driven Pricing</h4>
                                        <p className="text-sm text-gray-400">Proprietary valuation models based on real-time private market transaction data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 5. CTA / NEXT STEPS */}
            <section className="py-24 bg-blue-600 dark:bg-[#050505] border-t border-blue-500/30 dark:border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-900/10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Reveal width="100%">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">See how this thesis translates to action.</h2>
                        <div className="flex justify-center">
                            <Link
                                to="/portfolio"
                                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                            >
                                View Our Portfolio
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
    );
};

// Helper for icons in the diagram
import { Cloud } from 'lucide-react';

export default Thesis;
