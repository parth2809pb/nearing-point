import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal } from '../Reveal';
import { blogPosts } from '../../data';

export const InsightsSection: React.FC = () => {
    return (
        <section id="blog" className="py-32 bg-gray-50 dark:bg-[#080808] border-t border-gray-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="mb-20 flex justify-between items-end">
                        <div>
                            <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">06. Insights</span>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400">Latest Thinking</h2>
                        </div>
                        <div className="hidden md:block">
                            <Link to="/insights" className="group inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                View All Articles
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {blogPosts.map((post, idx) => (
                        <Reveal key={idx} delay={idx * 100}>
                            <a href={post.link} className="group flex flex-col h-full">
                                <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-sm bg-gray-200 dark:bg-white/5">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>

                                <div className="flex items-center space-x-4 mb-4 text-xs font-medium">
                                    <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider">{post.category}</span>
                                    <span className="text-gray-400 dark:text-gray-600">•</span>
                                    <span className="text-gray-500 dark:text-gray-500">{post.date}</span>
                                </div>

                                <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
