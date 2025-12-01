import React from 'react';
import { Linkedin } from 'lucide-react';
import { Reveal } from '../Reveal';
import { teamMembers } from '../../data';

export const TeamSection: React.FC = () => {
    return (
        <section id="team" className="py-32 bg-white dark:bg-nearing-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end">
                        <div className="max-w-2xl">
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">05. Team</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-6">Operators & Investors</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                                We combine deep operational expertise with financial rigor to support founders through every stage of growth.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {teamMembers.map((member, idx) => (
                        <Reveal key={member.name} delay={idx * 150}>
                            <div className="group relative">
                                <div className="relative mb-8 w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 dark:bg-white/5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {member.linkedin && (
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute bottom-4 right-4 p-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-blue-600 hover:border-blue-600"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>

                                <div className="pr-4">
                                    <h3 className="text-2xl font-display font-bold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">{member.role}</p>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4">
                                        {member.bio}
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
