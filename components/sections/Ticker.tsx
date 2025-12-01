import React from 'react';

export const Ticker: React.FC = () => {
    const companyTickers = [
        'OPENAI', 'ANTHROPIC', 'DATABRICKS', 'GROQ', 'CRUSOE', 'KRAKEN', 'RIPPLE', 'PERPLEXITY',
        'OPENAI', 'ANTHROPIC', 'DATABRICKS', 'GROQ', 'CRUSOE', 'KRAKEN', 'RIPPLE', 'PERPLEXITY',
        'OPENAI', 'ANTHROPIC', 'DATABRICKS', 'GROQ', 'CRUSOE', 'KRAKEN', 'RIPPLE', 'PERPLEXITY',
        'OPENAI', 'ANTHROPIC', 'DATABRICKS', 'GROQ', 'CRUSOE', 'KRAKEN', 'RIPPLE', 'PERPLEXITY',
    ];

    return (
        <div className="relative border-y border-gray-100 dark:border-white/5 bg-white/80 dark:bg-black/40 backdrop-blur-md py-8 overflow-hidden z-20">
            <div className="flex animate-scroll-fast md:animate-scroll whitespace-nowrap">
                {companyTickers.map((item, index) => (
                    <div key={index} className="mx-12 flex items-center group cursor-default">
                        <span className="text-sm font-mono font-medium text-gray-400 dark:text-gray-600 transition-colors uppercase tracking-[0.2em]">{item}</span>
                    </div>
                ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-nearing-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-nearing-black to-transparent z-10 pointer-events-none"></div>
        </div>
    );
};
