export interface PortfolioItem {
  name: string;
  description: string;
  category: 'AI' | 'Infrastructure' | 'FinTech' | 'Compute';
  logo?: string;
  icon?: any;
  featured?: boolean;
  longDescription?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  longBio?: string;
  focusAreas?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  link: string;
  image?: string;
}