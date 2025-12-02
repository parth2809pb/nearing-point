import React from 'react';
import { Reveal } from '../components/Reveal';

const Disclosure: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-nearing-black transition-colors duration-500 font-sans pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">Disclosures</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">General Disclaimer</h2>
                            <p>
                                NearingPoint Venture Partners ("NearingPoint") is a venture capital firm. This website is intended solely to provide general information about NearingPoint, its services, and its people for entrepreneurs, company management teams, and prospective portfolio companies.
                            </p>
                            <p className="mt-4">
                                Nothing on this website is intended to constitute an offer to sell or a solicitation of an offer to buy any interest in any investment vehicle managed by NearingPoint. Any such offer or solicitation will be made only through a confidential private placement memorandum and other offering documents, and will be subject to the terms and conditions contained in such documents.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Portfolio Companies</h2>
                            <p>
                                The portfolio companies listed on this website are intended to serve as examples of the types of investments made by NearingPoint. The companies listed do not necessarily represent all of the investments made by NearingPoint or its affiliates. It should not be assumed that recommendations made in the future will be profitable or will equal the performance of the securities in this list.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Content</h2>
                            <p>
                                Certain information contained on this website may be derived from third-party sources. While NearingPoint believes such sources to be reliable, NearingPoint makes no representation or warranty, express or implied, with respect to the accuracy, fairness, reasonableness, or completeness of any of the information contained herein, and expressly disclaims any responsibility or liability therefor.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Forward-Looking Statements</h2>
                            <p>
                                Certain information on this website may contain forward-looking statements, which are subject to risks and uncertainties and speak only as of the date on which they are made. The words "believe", "expect", "anticipate", "optimistic", "intend", "aim", "will" or similar expressions are intended to identify forward-looking statements. NearingPoint undertakes no obligation to update publicly or revise any forward-looking statements, whether as a result of new information, future developments or otherwise.
                            </p>
                        </section>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Disclosure;
