import React from 'react';
import {
  ArrowRight, Cpu, Network, Zap, ShieldCheck, TrendingUp, Anchor,
  CheckCircle2, Target, Layers, Box, Database, Search, Bot,
  Cloud, Wallet, Activity, Globe, Mail, MapPin, Linkedin
} from 'lucide-react';
import { NeonOrbs } from '../components/ui/neon-orbs';
import { Reveal } from '../components/Reveal';
import { TeamMember, PortfolioItem, BlogPost } from '../types';
import manthanImg from '../assets/Manthan Bhanushali.jpeg';
import uditImg from '../assets/Udit Gupta.jpeg';
import saurabhImg from '../assets/Saurabh Khadelwal.jpeg';
import blogComputeImg from '../assets/blog_compute.png';
import blogLiquidityImg from '../assets/blog_liquidity.png';
import blogEnergyImg from '../assets/blog_energy.png';

const Home: React.FC = () => {
  const companyTickers = [
    'OPENAI', 'ANTHROPIC', 'DATABRICKS', 'GROQ', 'CRUSOE', 'KRAKEN', 'RIPPLE', 'PERPLEXITY',
    'OPENAI', 'ANTHROPIC', 'DATABRICKS', 'GROQ', 'CRUSOE', 'KRAKEN', 'RIPPLE', 'PERPLEXITY',
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Manthan Bhanushali',
      role: 'Managing Partner',
      bio: 'Visionary investor with a deep focus on AI infrastructure and late-stage scalability. Manthan leads the firm’s investment thesis and strategic direction.',
      image: manthanImg,
      linkedin: 'https://www.linkedin.com/in/manthan-bhanushali/'
    },
    {
      name: 'Udit Gupta',
      role: 'Partner',
      bio: 'Chartered Accountant specializing in fund operations, financial structuring, and due diligence. Udit ensures rigorous compliance and asset health.',
      image: uditImg,
      linkedin: 'https://www.linkedin.com/in/caguptaudit'
    },
    {
      name: 'Saurabh Khandelwal',
      role: 'Partner',
      bio: 'Expert in strategic partnerships and growth equity. Saurabh works closely with portfolio companies to unlock value and navigate liquidity events.',
      image: saurabhImg
    }
  ];

  const portfolioData: PortfolioItem[] = [
    {
      name: 'Databricks',
      description: 'Unified data analytics platform for massive scale data engineering and data science.',
      category: 'Infrastructure',
      logo: 'https://logo.clearbit.com/databricks.com'
    },
    {
      name: 'Perplexity',
      description: 'AI-powered search engine delivering precise answers using large language models.',
      category: 'AI',
      logo: 'https://logo.clearbit.com/perplexity.ai'
    },
    {
      name: 'OpenAI',
      description: 'AI research and deployment company dedicated to ensuring AGI benefits all of humanity.',
      category: 'AI',
      logo: 'https://logo.clearbit.com/openai.com'
    },
    {
      name: 'Anthropic',
      description: 'AI safety and research company building reliable, interpretable, and steerable AI systems.',
      category: 'AI',
      logo: 'https://logo.clearbit.com/anthropic.com'
    },
    {
      name: 'Groq',
      description: 'Creator of the LPU™ Inference Engine, delivering the fastest AI inference speeds.',
      category: 'Compute',
      logo: 'https://logo.clearbit.com/groq.com'
    },
    {
      name: 'Crusoe',
      description: 'Pioneers of climate-aligned digital infrastructure and clean computing power.',
      category: 'Infrastructure',
      logo: 'https://logo.clearbit.com/crusoeenergy.com'
    },
    {
      name: 'Kraken',
      description: 'One of the world’s largest and most secure digital asset exchanges.',
      category: 'FinTech',
      logo: 'https://logo.clearbit.com/kraken.com'
    },
    {
      name: 'Ripple',
      description: 'Real-time gross settlement system, currency exchange and remittance network.',
      category: 'FinTech',
      logo: 'https://logo.clearbit.com/ripple.com'
    },
  ];

  const blogPosts: BlogPost[] = [
    {
      title: "The Trillion Dollar Compute Cycle",
      date: "Oct 12, 2024",
      category: "Market Thesis",
      excerpt: "Why the demand for specialized inference chips is just beginning to reshape the semiconductor landscape.",
      link: "#",
      image: blogComputeImg
    },
    {
      title: "Unlocking Liquidity in Private Markets",
      date: "Sep 28, 2024",
      category: "Capital Markets",
      excerpt: "How structured secondary transactions are providing vital liquidity to founders and early employees in a high-interest rate environment.",
      link: "#",
      image: blogLiquidityImg
    },
    {
      title: "Energy is the New Latency",
      date: "Sep 15, 2024",
      category: "Infrastructure",
      excerpt: "Analyzing the power constraints of next-gen data centers and the shift towards sustainable compute.",
      link: "#",
      image: blogEnergyImg
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white dark:bg-nearing-black transition-colors duration-500 font-sans">

      {/* --- HERO SECTION (UNCHANGED) --- */}
      <div id="home" className="relative z-10 w-full min-h-[95vh] flex flex-col justify-center items-center">
        <NeonOrbs />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 w-full flex flex-col items-center">
          <Reveal width="100%">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-100 dark:bg-blue-900/10 mb-8 backdrop-blur-sm transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
                <span className="text-blue-700 dark:text-blue-400 text-xs font-medium tracking-wide uppercase">Late Stage Technology Fund</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-100 dark:to-gray-400 tracking-tighter leading-[1.05] mb-8">
                Backing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200">Engines</span> of the Future.
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-12 max-w-2xl leading-relaxed">
                We invest in late-stage companies building AI, compute, and next-generation technology infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="group inline-flex justify-center items-center px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-nearing-black text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full sm:rounded-none"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToPortfolio}
                  className="group inline-flex justify-center items-center px-8 py-4 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white text-lg font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300 rounded-full sm:rounded-none"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* --- MINIMAL TICKER --- */}
      <div className="relative border-y border-gray-100 dark:border-white/5 bg-white/80 dark:bg-black/40 backdrop-blur-md py-8 overflow-hidden z-20">
        <div className="flex animate-scroll whitespace-nowrap">
          {companyTickers.map((item, index) => (
            <div key={index} className="mx-12 flex items-center group cursor-default">
              <span className="text-sm font-mono font-medium text-gray-400 dark:text-gray-600 transition-colors uppercase tracking-[0.2em]">{item}</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-nearing-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-nearing-black to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-32 bg-white dark:bg-nearing-black border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">01. About</span>
                  <h2 className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">The Firm</h2>
                  <div className="w-12 h-0.5 bg-gray-200 dark:bg-white/10"></div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 leading-tight mb-10">
                  Built for the <br /><span className="text-gray-400 dark:text-gray-600">Long Horizon.</span>
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-12">
                  NearingPoint Venture Partners is a dedicated late-stage technology investment firm. We identify and support the most consequential companies shaping the future of digital infrastructure. By focusing exclusively on mature, high-growth assets, we provide a stable bridge to liquidity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100 dark:border-white/10">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Precision Investing</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Rigorous diligence on unit economics and moat sustainability.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Strategic Liquidity</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Solving cap table friction for founders and early investors.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- INVESTMENT THESIS --- */}
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

      {/* --- VALUE PROPOSITION --- */}
      <section className="py-32 bg-white dark:bg-nearing-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 dark:border-white/10 pb-12">
              <div className="max-w-2xl">
                <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">03. Why Us</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400">Why NearingPoint</h2>
              </div>
              <div className="mt-6 md:mt-0">
                <p className="text-gray-400 text-sm max-w-xs text-right hidden md:block">
                  Institutional grade access to the private markets.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Reveal>
              <div className="flex flex-col items-start group">
                <div className="mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Risk-Adjusted Access</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We secure exclusive allocations in pre-IPO equity of blue-chip technology companies, governed by strict due diligence and structural protections.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-col items-start group">
                <div className="mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <TrendingUp className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Growth Velocity</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Our capital targets the inflection point of mass adoption, ensuring participation in the steepest trajectory of the value creation curve.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-col items-start group">
                <div className="mb-8 p-4 bg-gray-50 dark:bg-white/5 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <Anchor className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <h4 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">Stable Capital</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  We act as a long-term strategic partner to founders and early investors, providing liquidity solutions that stabilize capitalization tables.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-32 bg-gray-50 dark:bg-[#0A0A0A] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-200/50 dark:from-white/5 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24">
              <div className="max-w-2xl">
                <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">04. Investments</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 mb-6">
                  Defining the <br /> <span className="text-blue-600 dark:text-blue-500">New Standard.</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                  A curated selection of our high-conviction bets on the companies building the backbone of the intelligent economy.
                </p>
              </div>
              <div className="hidden md:block mb-2">
                <a href="#" className="group inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  View All Investments
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.map((company, index) => (
              <Reveal key={company.name} delay={index * 100}>
                <div className="group relative bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 p-8 h-full min-h-[320px] flex flex-col justify-between hover:border-blue-500/30 dark:hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden rounded-sm">

                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                      <div className="h-16 w-16 bg-white dark:bg-white/10 rounded-lg p-3 flex items-center justify-center border border-gray-100 dark:border-white/5 shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {company.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                      {company.description}
                    </p>
                  </div>

                  <div className="relative z-10 pt-6 border-t border-gray-100 dark:border-white/5 flex items-center text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <span className="mr-2">Investment Thesis</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
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

      {/* --- BLOG SECTION --- */}
      <section id="blog" className="py-32 bg-gray-50 dark:bg-[#080808] border-t border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-20 flex justify-between items-end">
              <div>
                <span className="block text-xs font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">06. Insights</span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400">Latest Thinking</h2>
              </div>
              <div className="hidden md:block">
                <a href="#" className="group inline-flex items-center text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  View All Articles
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
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

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 bg-gray-900 dark:bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <Reveal>
              <div>
                <span className="block text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">07. Contact</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">Ready to explore <br /> the future?</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-lg font-light">
                  We are always looking for partners who share our conviction in the infrastructure of intelligence.
                </p>

                <div className="flex flex-col space-y-6">
                  <a href="mailto:info@nearingpoint.com" className="flex items-center group">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-medium">info@nearingpoint.com</span>
                  </a>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-6">
                      <MapPin className="w-5 h-5 text-gray-400" />
                    </div>
                    <span className="text-xl font-medium text-gray-400">San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="h-full flex flex-col justify-end">
                <div className="p-10 border border-white/10 bg-white/[0.02]">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-400">Regulatory Notice</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-0">
                    NearingPoint Venture Partners does not publicly offer investment interests.
                    Information on this site is for general informational purposes only and does not constitute
                    an offer to sell or a solicitation of an offer to buy any securities.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;