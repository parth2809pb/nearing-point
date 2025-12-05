import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-nearing-black border-t border-gray-200 dark:border-white/10 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-4 tracking-tight">NEARINGPOINT</h3>
            <p className="text-gray-500 dark:text-gray-500 text-sm max-w-xs leading-relaxed">
              Backing the engines of the future. We invest in late-stage companies building AI, compute, and next-generation technology infrastructure.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-300 uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-500">
              <li><Link to="/privacy" className="hover:text-blue-600 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 dark:hover:text-white transition-colors">Terms of Use</Link></li>
              <li><Link to="/disclosure" className="hover:text-blue-600 dark:hover:text-white transition-colors">Disclosures</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-gray-900 dark:text-gray-300 uppercase tracking-widest mb-6">Contact</h4>
            <a href="mailto:info@nearingpoint.com" className="text-sm text-gray-500 dark:text-gray-500 hover:text-blue-600 dark:hover:text-white transition-colors">
              info@nearingpoint.com
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              San Francisco, CA
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 mt-8">
          <p className="text-xs text-gray-400 dark:text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
            © {new Date().getFullYear()} NearingPoint Venture Partners. All rights reserved.
            <br className="my-3" />
            <span className="block font-medium">
              DISCLAIMER: NearingPoint Venture Partners does not publicly offer investment interests.
              Information on this site is for general informational purposes only and does not constitute
              an offer to sell or a solicitation of an offer to buy any securities.
              Past performance is not indicative of future results.
            </span>
          </p>
          <a href="https://frayze.ca" className="opacity-0 absolute bottom-0 right-0 text-[1px] select-none cursor-default" tabIndex={-1}>Frayze</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;