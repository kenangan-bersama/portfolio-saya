import HeroIllustration from '../components/HeroIllustration'
import { CodeBracketIcon, DevicePhoneMobileIcon, PaintBrushIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

function HomePage({ filters, onFilterChange, onSearch }) {
    return (
        <div className="relative overflow-x-hidden">
            {/* Hero Section */}
            {/* Background Gradient adjusted to end in 'navy-800' so the 'navy-900' wave is visible */}
            <section id="hero" className="relative pt-24 md:pt-32 pb-20 md:pb-48 px-4 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="text-left" data-aos="fade-right" data-aos-duration="1000">
                            <div className="mb-6">
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                                    <span className="inline-block animate-gradient bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                                        Halo, Saya Developer
                                    </span>
                                </h2>
                            </div>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-lg" data-aos="fade-up" data-aos-delay="200">
                                Membuat pengalaman digital yang menakjubkan dengan teknologi modern
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                                <a href="/portfolio" className="btn-primary text-center">
                                    Lihat Portfolio
                                </a>
                                <a href="/contact" className="btn-secondary text-center">
                                    Hubungi Saya
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Illustration */}
                        <div className="relative h-64 sm:h-72 lg:h-96 w-full flex justify-center items-center" data-aos="zoom-in" data-aos-delay="300">
                            <HeroIllustration />
                        </div>
                    </div>
                </div>

                {/* Waterfall / Wave Shape Divider */}
                {/* fill-navy-900 matches the NEXT section's background color to create a seamless blend */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-full h-[60px] md:h-[120px] fill-navy-900"
                    >
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* Services Section */}
            {/* Validated: bg-navy-900 matches the Wave fill color */}
            <section className="pt-12 pb-24 px-4 relative z-10 bg-navy-900 border-t-0 shadow-2xl">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Layanan</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Apa yang Saya Tawarkan</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div
                            className="bg-navy-800/50 backdrop-blur-lg border border-navy-700 p-8 rounded-2xl transition-all duration-300 hover:bg-navy-800 hover:-translate-y-1 hover:border-primary-500/30 group"
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <CodeBracketIcon className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
                            <p className="text-gray-400">
                                Membangun website responsif, cepat, dan modern menggunakan teknologi terbaru seperti React, Next.js, dan TailwindCSS.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div
                            className="bg-navy-800/50 backdrop-blur-lg border border-navy-700 p-8 rounded-2xl transition-all duration-300 hover:bg-navy-800 hover:-translate-y-1 hover:border-primary-500/30 group"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                                <DevicePhoneMobileIcon className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Mobile Apps</h3>
                            <p className="text-gray-400">
                                Pengembangan aplikasi mobile cross-platform yang powerful dengan React Native, untuk iOS dan Android.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div
                            className="bg-navy-800/50 backdrop-blur-lg border border-navy-700 p-8 rounded-2xl transition-all duration-300 hover:bg-navy-800 hover:-translate-y-1 hover:border-primary-500/30 group"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                <PaintBrushIcon className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
                            <p className="text-gray-400">
                                Desain antarmuka yang intuitif dan menarik, fokus pada pengalaman pengguna yang seamless dan estetika modern.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Me Section - Background Navy 950 (Darker) + Top Border */}
            <section className="py-24 px-4 bg-navy-950 relative z-10 border-t border-navy-800">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div data-aos="fade-right">
                        <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Kenapa Saya</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Solusi Digital yang Berdampak Bisnis</h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Saya tidak hanya menulis kode, tetapi juga memahami tujuan bisnis Anda.
                            Setiap project dikerjakan dengan standar kualitas tinggi, performa optimal,
                            dan keamanan terjamin.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Komunikasi yang jelas & transparan',
                                'Deadline yang terjamin tepat waktu',
                                'Support teknis jangka panjang',
                                'Kode yang bersih & mudah di-maintain'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-primary-500 flex-shrink-0" />
                                    <span className="text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative pl-8 pt-8" data-aos="fade-left">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary-600 rounded-3xl opacity-20 transform -translate-x-4 -translate-y-4"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Collaboration"
                            className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover border border-navy-700"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section - Gradient Background + Top Border */}
            <section className="py-24 px-4 relative z-10 bg-gradient-to-b from-navy-900 to-navy-800 border-t border-navy-800">
                <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        Siap Mewujudkan Ide Anda?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Mari diskusikan kebutuhan project Anda dan ciptakan solusi digital yang luar biasa bersama-sama.
                    </p>
                    <a
                        href="/contact"
                        className="btn-primary text-lg !px-10 !py-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block"
                    >
                        Mulai Konsultasi Gratis
                    </a>
                </div>
            </section>
        </div>
    )
}

export default HomePage
