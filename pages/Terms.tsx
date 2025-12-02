import React from 'react';
import { Reveal } from '../components/Reveal';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-nearing-black transition-colors duration-500 font-sans pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-8">Terms of Use</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <div className="prose dark:prose-invert max-w-none space-y-8 text-gray-600 dark:text-gray-300">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the website of NearingPoint Venture Partners ("NearingPoint", "we", "us", or "our"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use of Content</h2>
                            <p>
                                All content provided on this website is for informational purposes only. The owner of this website makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site. The owner will not be liable for any errors or omissions in this information nor for the availability of this information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Intellectual Property</h2>
                            <p>
                                The Site and its original content, features and functionality are owned by NearingPoint Venture Partners and are protected by international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. No Investment Advice</h2>
                            <p>
                                The content of this website is for general information purposes only and does not constitute a solicitation or offer to sell securities or investment advisory services. Nothing on this website is intended to be, and you should not consider anything on the website to be, investment, accounting, tax or legal advice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
                            <p>
                                In no event shall NearingPoint Venture Partners, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at: <a href="mailto:info@nearingpoint.com" className="text-blue-600 dark:text-blue-400 hover:underline">info@nearingpoint.com</a>.
                            </p>
                        </section>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Terms;
