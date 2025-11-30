import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-nearing-black text-gray-900 dark:text-white flex flex-col justify-between transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            <Reveal>
                <div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Contact Us</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                        For inquiries regarding NearingPoint Venture Partners.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="bg-white dark:bg-white/10 p-3 rounded-none mr-4 shadow-sm border border-gray-100 dark:border-transparent">
                                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Email</h3>
                                <a href="mailto:info@nearingpoint.com" className="text-2xl font-display font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    info@nearingpoint.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start">
                             <div className="bg-white dark:bg-white/10 p-3 rounded-none mr-4 shadow-sm border border-gray-100 dark:border-transparent">
                                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Office</h3>
                                <p className="text-2xl font-display font-semibold">
                                    San Francisco, CA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={200}>
                <div className="bg-white dark:bg-white/5 p-8 border border-gray-200 dark:border-white/10 h-full flex flex-col justify-center shadow-lg">
                     <div className="border-l-2 border-blue-600 dark:border-blue-500 pl-6 py-2">
                         <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                            "NearingPoint Venture Partners does not publicly offer investment interests. Information on this site is for general informational purposes only."
                         </p>
                     </div>
                </div>
            </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;