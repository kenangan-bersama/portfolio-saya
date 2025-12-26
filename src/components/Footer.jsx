import { Link } from 'react-router-dom'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
    return (
        <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            Portfolio<span className="text-primary-500">.</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Membangun pengalaman digital yang estetik dan fungsional.
                            Mari berkolaborasi untuk mewujudkan ide brilian Anda menjadi kenyataan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary-400">Menu</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary-400">Social Media</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                                    <span>Instagram</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary-400">Hubungi Saya</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <EnvelopeIcon className="w-5 h-5 text-primary-500 mt-0.5" />
                                <span>hello@portfolio.dev</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPinIcon className="w-5 h-5 text-primary-500 mt-0.5" />
                                <span>Jakarta, Indonesia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separator */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Made with <span className="text-red-500">❤</span> and React
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
