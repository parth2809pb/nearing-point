import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { blogPosts } from '../data';
import { ArrowRight, Mail } from 'lucide-react';
import { NeonBeams } from '../components/ui/neon-beams';

const Insights: React.FC = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    return (
        <div className="min-h-screen bg-white dark:bg-nearing-black transition-colors duration-500 font-sans">

            {/* 1. HERO / FEATURED POST */}
            <section className="relative pt-48 pb-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#080808] overflow-hidden">

                {/* Animated Background Elements */}
                <NeonBeams />
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-6">Latest Thinking</span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                    {featuredPost.category}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                    {featuredPost.title}
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center space-x-4 text-sm font-medium text-gray-500 dark:text-gray-500 mb-8">
                                    <span>{featuredPost.date}</span>
                                    <span>•</span>
                                    <span>5 min read</span>
                                </div>
                                <a href={featuredPost.link} className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:bg-blue-600 dark:hover:bg-blue-400 transition-colors">
                                    Read Article
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 2. NEWSLETTER SIGNUP */}
            <section className="py-20 bg-blue-600 dark:bg-blue-900/20 border-y border-blue-500/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Reveal>
                        <Mail className="w-12 h-12 text-blue-200 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">The Signal in the Noise.</h2>
                        <p className="text-blue-100 mb-8 text-lg">Join 10,000+ investors and founders receiving our weekly briefing on AI infrastructure and private markets.</p>

                        {subscribed ? (
                            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-white font-bold animate-fade-in">
                                Welcome to the inner circle. Check your inbox.
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                                    required
                                />
                                <button type="submit" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                                    Subscribe
                                </button>
                            </form>
                        )}
                    </Reveal>
                </div>
            </section>

            {/* 3. RECENT ARTICLES GRID */}
            <section className="py-24 bg-white dark:bg-nearing-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <div className="flex justify-between items-end mb-16">
                            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">Recent Articles</h2>
                            <div className="flex space-x-4">
                                {['All', 'Market Thesis', 'Deep Tech', 'Infrastructure'].map((cat) => (
                                    <button key={cat} className="text-sm font-bold text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {recentPosts.map((post, idx) => (
                            <Reveal key={idx} delay={idx * 100}>
                                <a href={post.link} className="group flex flex-col h-full">
                                    <div className="relative aspect-[16/9] mb-6 overflow-hidden rounded-sm bg-gray-100 dark:bg-white/5">
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

                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
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

        </div>
    );
};

export default Insights;
