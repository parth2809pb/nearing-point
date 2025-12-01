import { TeamMember, PortfolioItem, BlogPost } from '../types';
import manthanImg from '../assets/Manthan Bhanushali.jpeg';
import uditImg from '../assets/Udit Gupta.jpeg';
import saurabhImg from '../assets/Saurabh Khadelwal.jpeg';
import blogComputeImg from '../assets/blog_compute.png';
import blogLiquidityImg from '../assets/blog_liquidity.png';
import blogEnergyImg from '../assets/blog_energy.png';

export const teamMembers: TeamMember[] = [
    {
        name: 'Manthan Bhanushali',
        role: 'Managing Partner',
        bio: 'Visionary investor with a deep focus on AI infrastructure and late-stage scalability. Manthan leads the firm’s investment thesis and strategic direction.',
        image: manthanImg,
        linkedin: 'https://www.linkedin.com/in/manthan-bhanushali/',
        longBio: 'Manthan Bhanushali is the Managing Partner at NearingPoint Venture Partners, where he leads the firm’s investment strategy and thesis development. With over a decade of experience in technology investing, Manthan has developed a reputation for identifying platform shifts before they become consensus. His deep technical understanding of AI infrastructure—from silicon to model serving—allows him to partner effectively with technical founders building the next generation of computing.',
        focusAreas: ['AI Infrastructure', 'Semiconductors', 'Foundation Models']
    },
    {
        name: 'Udit Gupta',
        role: 'Partner',
        bio: 'Chartered Accountant specializing in fund operations, financial structuring, and due diligence. Udit ensures rigorous compliance and asset health.',
        image: uditImg,
        linkedin: 'https://www.linkedin.com/in/caguptaudit',
        longBio: 'Udit Gupta brings institutional-grade financial rigor to the venture capital asset class. As a Chartered Accountant, he oversees all fund operations, deal structuring, and compliance at NearingPoint. His expertise is critical in executing complex secondary transactions and ensuring that the firm’s portfolio is optimized for liquidity and risk-adjusted returns.',
        focusAreas: ['Fund Operations', 'Deal Structuring', 'Compliance']
    },
    {
        name: 'Saurabh Khandelwal',
        role: 'Partner',
        bio: 'Expert in strategic partnerships and growth equity. Saurabh works closely with portfolio companies to unlock value and navigate liquidity events.',
        image: saurabhImg,
        longBio: 'Saurabh Khandelwal focuses on growth equity and strategic value creation. He works hand-in-hand with portfolio companies to accelerate their go-to-market strategies and prepare for liquidity events. His background in strategic partnerships helps bridge the gap between late-stage startups and public markets.',
        focusAreas: ['Growth Equity', 'Strategic Partnerships', 'Capital Markets']
    }
];

export const portfolioData: PortfolioItem[] = [
    {
        name: 'Databricks',
        description: 'Unified data analytics platform for massive scale data engineering and data science.',
        category: 'Infrastructure',
        logo: 'https://logo.clearbit.com/databricks.com',
        featured: true,
        longDescription: 'Databricks is the pioneer of the Lakehouse architecture, unifying data warehousing and AI. As enterprises race to build proprietary models, Databricks provides the essential infrastructure to manage, govern, and process the massive datasets required for training and fine-tuning.'
    },
    {
        name: 'Perplexity',
        description: 'AI-powered search engine delivering precise answers using large language models.',
        category: 'AI',
        logo: 'https://cdn.simpleicons.org/perplexity',
        featured: true,
        longDescription: 'Perplexity is redefining information retrieval by combining real-time web indexing with large language models. It represents the shift from "search" to "answer" engines, challenging the decades-old dominance of keyword-based search.'
    },
    {
        name: 'OpenAI',
        description: 'AI research and deployment company dedicated to ensuring AGI benefits all of humanity.',
        category: 'AI',
        logo: 'https://logo.clearbit.com/openai.com',
        featured: true,
        longDescription: 'The creator of GPT-4 and ChatGPT, OpenAI is the defining company of the generative AI era. Their foundation models serve as the intelligence layer for thousands of applications, creating a new platform shift comparable to the internet itself.'
    },
    {
        name: 'Anthropic',
        description: 'AI safety and research company building reliable, interpretable, and steerable AI systems.',
        category: 'AI',
        logo: 'https://logo.clearbit.com/anthropic.com',
        featured: true,
        longDescription: 'Anthropic focuses on AI safety and steerability. Their Claude models offer a compelling alternative for enterprises requiring high-context windows and rigorous safety guardrails, making them a critical player in the foundation model landscape.'
    },
    {
        name: 'Groq',
        description: 'Creator of the LPU™ Inference Engine, delivering the fastest AI inference speeds.',
        category: 'Compute',
        logo: 'https://logo.clearbit.com/groq.com',
        longDescription: 'Groq has re-architected the processor for the age of AI. Their Language Processing Unit (LPU) delivers deterministic performance and ultra-low latency, unlocking real-time AI use cases that are impossible with traditional GPUs.'
    },
    {
        name: 'Crusoe',
        description: 'Pioneers of climate-aligned digital infrastructure and clean computing power.',
        category: 'Infrastructure',
        logo: 'https://logo.clearbit.com/crusoeenergy.com',
        longDescription: 'Crusoe Energy taps into stranded energy assets (like flared gas) to power data centers. This unique model provides low-cost, carbon-negative compute, addressing the critical energy bottleneck facing the AI industry.'
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

export const blogPosts: BlogPost[] = [
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
    },
    {
        title: "Sovereign AI: The New Geopolitics",
        date: "Aug 30, 2024",
        category: "Deep Tech",
        excerpt: "Nations are realizing that AI infrastructure is critical national security. We explore the rise of sovereign clouds.",
        link: "#",
        image: blogComputeImg // Reusing image for now
    },
    {
        title: "Fusion Energy: Closer Than You Think",
        date: "Aug 12, 2024",
        category: "Deep Tech",
        excerpt: "Recent breakthroughs in magnetic confinement are bringing commercial fusion within a decade's reach.",
        link: "#",
        image: blogEnergyImg // Reusing image for now
    },
    {
        title: "The Vertical SaaS Renaissance",
        date: "Jul 22, 2024",
        category: "Market Thesis",
        excerpt: "AI agents are enabling vertical software to move from 'system of record' to 'system of action'.",
        link: "#",
        image: blogLiquidityImg // Reusing image for now
    }
];
