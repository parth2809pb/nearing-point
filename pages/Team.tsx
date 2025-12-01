import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { teamMembers } from '../data';
import { Linkedin, X, CheckCircle2 } from 'lucide-react';
import { TeamMember } from '../types';
import { NeonBeams } from '../components/ui/neon-beams';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-nearing-black transition-colors duration-500 font-sans">

      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808] overflow-hidden">

        {/* Animated Background Elements */}
        <NeonBeams />
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="max-w-4xl">
              <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-6">Our Team</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 dark:text-white tracking-tighter leading-[1.05] mb-8">
                Builders Backing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">Builders.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl">
                We combine deep operational expertise with financial rigor. Our team has built companies, managed billion-dollar P&Ls, and navigated complex regulatory landscapes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PARTNERS GRID */}
      <section className="py-24 bg-white dark:bg-nearing-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 150}>
                <div
                  className="group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="relative mb-8 w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 dark:bg-white/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold rounded-full hover:bg-blue-600 hover:border-blue-600 transition-colors">
                        View Bio
                      </span>
                    </div>
                  </div>

                  <div className="pr-4">
                    <h3 className="text-3xl font-display font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{member.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-white/10 pt-4 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VALUES SECTION */}
      <section className="py-32 bg-gray-900 dark:bg-[#050505] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <span className="block text-xs font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">02. Culture</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">How We Work.</h2>
                <p className="text-gray-400 leading-relaxed">
                  Our culture is built on a foundation of intellectual honesty and long-term conviction. We don't chase hype cycles; we underwrite fundamental shifts in technology.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { title: "Conviction First", desc: "We only invest when we have high conviction. We don't spray and pray." },
                    { title: "Operational Empathy", desc: "We've been in the operator's seat. We know when to help and when to get out of the way." },
                    { title: "Generational Thinking", desc: "We build relationships for decades, not just for the next round." },
                    { title: "Intellectual Honesty", desc: "We challenge our own assumptions and invite dissent to reach the truth." }
                  ].map((value, i) => (
                    <div key={i} className="p-8 border border-white/10 bg-white/5 rounded-sm hover:bg-white/10 transition-colors">
                      <CheckCircle2 className="w-8 h-8 text-blue-400 mb-4" />
                      <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIO MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMember(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-white dark:bg-nearing-black border border-gray-200 dark:border-white/10 shadow-2xl rounded-lg overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] animate-fade-in-up">

            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white z-50"
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-1/3 h-64 md:h-auto relative">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">{selectedMember.name}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-6">{selectedMember.role}</p>

              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedMember.longBio || selectedMember.bio}
                </p>
              </div>

              {selectedMember.focusAreas && (
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-4">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.focusAreas.map((area, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {selectedMember.linkedin && (
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Team;