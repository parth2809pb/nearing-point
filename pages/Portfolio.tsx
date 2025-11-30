import React from 'react';
import { Database, Search, Cpu, Bot, Cloud, Wallet, Activity, Globe } from 'lucide-react';
import { PortfolioItem } from '../types';
import { Reveal } from '../components/Reveal';

interface ExtendedPortfolioItem extends PortfolioItem {
    icon: React.ReactNode;
}

const portfolioData: ExtendedPortfolioItem[] = [
  { 
    name: 'Databricks', 
    description: 'Unified data analytics platform for massive scale data engineering and data science.',
    category: 'Infrastructure',
    icon: <Database className="w-8 h-8" />
  },
  { 
    name: 'Perplexity', 
    description: 'AI-powered search engine delivering precise answers using large language models.',
    category: 'AI',
    icon: <Search className="w-8 h-8" />
  },
  { 
    name: 'OpenAI', 
    description: 'AI research and deployment company dedicated to ensuring AGI benefits all of humanity.',
    category: 'AI',
    icon: <Bot className="w-8 h-8" />
  },
  { 
    name: 'Anthropic', 
    description: 'AI safety and research company building reliable, interpretable, and steerable AI systems.',
    category: 'AI',
    icon: <Cpu className="w-8 h-8" />
  },
  { 
    name: 'Groq', 
    description: 'Creator of the LPU™ Inference Engine, delivering the fastest AI inference speeds.',
    category: 'Compute',
    icon: <Activity className="w-8 h-8" />
  },
  { 
    name: 'Crusoe', 
    description: 'Pioneers of climate-aligned digital infrastructure and clean computing power.',
    category: 'Infrastructure',
    icon: <Cloud className="w-8 h-8" />
  },
  { 
    name: 'Kraken', 
    description: 'One of the world’s largest and most secure digital asset exchanges.',
    category: 'FinTech',
    icon: <Globe className="w-8 h-8" />
  },
  { 
    name: 'Ripple Labs', 
    description: 'Real-time gross settlement system, currency exchange and remittance network.',
    category: 'FinTech',
    icon: <Wallet className="w-8 h-8" />
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-nearing-black text-gray-900 dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <Reveal width="100%">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Portfolio</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Select investments in category-defining technology companies.
                </p>
            </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((company, index) => (
                <Reveal key={company.name} delay={index * 50}>
                    <div className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 p-8 hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm hover:shadow-lg">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-gray-900 dark:text-white">
                            {company.icon}
                        </div>
                        
                        <div className="mb-6 flex items-center space-x-4">
                            <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-lg text-blue-600 dark:text-blue-400">
                                {company.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">{company.name}</h3>
                                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest">{company.category}</span>
                            </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                            {company.description}
                        </p>

                        <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    </div>
                </Reveal>
            ))}
        </div>
        
        <div className="mt-16 border-t border-gray-200 dark:border-white/10 pt-8 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
                Past performance is not indicative of future results.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;