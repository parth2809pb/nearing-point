import React from 'react';
import { Linkedin } from 'lucide-react';
import { TeamMember } from '../types';
import { Reveal } from '../components/Reveal';

const teamMembers: TeamMember[] = [
  {
    name: 'Manthan Bhanushali',
    role: 'Managing Partner',
    bio: 'Visionary investor with a deep focus on AI infrastructure and late-stage scalability. Manthan leads the firm’s investment thesis and strategic direction.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://www.linkedin.com/in/manthan-bhanushali/'
  },
  {
    name: 'Udit Gupta',
    role: 'Partner',
    bio: 'Chartered Accountant specializing in fund operations, financial structuring, and due diligence. Udit ensures rigorous compliance and asset health.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=60',
    linkedin: 'https://www.linkedin.com/in/caguptaudit'
  },
  {
    name: 'Saurabh Khandelwal',
    role: 'Partner',
    bio: 'Expert in strategic partnerships and growth equity. Saurabh works closely with portfolio companies to unlock value and navigate liquidity events.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60'
  }
];

const Team: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-nearing-black text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
            <Reveal>
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Leadership</h1>
                <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
                    We are a team of operators, engineers, and investors with deep domain expertise in the frontiers of computation.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, idx) => (
                <Reveal key={member.name} delay={idx * 150}>
                    <div className="group">
                        <div className="relative mb-6 overflow-hidden shadow-lg rounded-sm group-hover:scale-[1.02] transition-transform duration-500">
                            <div className="aspect-w-1 aspect-h-1 w-full bg-gray-200 dark:bg-gray-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                                 <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover object-center"
                                 />
                            </div>
                            {member.linkedin && (
                                <a 
                                  href={member.linkedin} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="absolute bottom-4 right-4 bg-white text-blue-600 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-50 z-10"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            <div className="absolute inset-0 border border-black/5 dark:border-white/10 pointer-events-none"></div>
                        </div>
                        
                        <h3 className="text-2xl font-display font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-blue-600 dark:text-blue-500 text-sm font-semibold uppercase tracking-wider mb-4">{member.role}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {member.bio}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Team;