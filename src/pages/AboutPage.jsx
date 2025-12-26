import { BriefcaseIcon, AcademicCapIcon, UserIcon } from '@heroicons/react/24/outline'

function AboutPage() {
    return (
        <div className="min-h-screen relative pt-40 pb-24 px-4 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">

            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <div className="text-center mb-16 relative">
                    <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Curriculum Vitae</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                        Tentang Saya
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Berdedikasi untuk menciptakan solusi digital yang efisien dan memberikan dampak nyata bagi bisnis.
                    </p>
                </div>

                {/* --- GRID SYSTEM --- */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* COLUMN 1: Profile Summary (Full Width on Mobile, 4 Cols on Desktop) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Profile Card */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Card Header (Image/Icon Area) */}
                            <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-8 text-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg mb-4">
                                    <UserIcon className="w-12 h-12 text-primary-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-1">Sultan Hasibuan</h2>
                                <p className="text-primary-100 font-medium text-sm">Web Developer & IT Support</p>
                            </div>

                            {/* Card Body */}
                            <div className="p-8">
                                <h4 className="text-navy-900 font-bold mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-primary-500 rounded-full block"></span>
                                    Summary
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    Saya mahasiswa Teknik Informatika semester akhir dengan pengalaman di bidang ritel, administrasi,
                                    dan makanan cepat saji. Memiliki jiwa kepemimpinan, percaya diri, serta manajemen waktu yang baik.
                                </p>
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                    <p className="text-gray-600 text-sm">
                                        Fokus mengembangkan keterampilan <strong>web development</strong> dengan CodeIgniter, Laravel, dan Vue.js.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Education Card Container */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Card Header */}
                            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
                                <div className="p-2 bg-emerald-100 rounded-lg">
                                    <AcademicCapIcon className="w-5 h-5 text-emerald-600" />
                                </div>
                                <h3 className="text-lg font-bold text-navy-900">Pendidikan</h3>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-6">
                                {/* Edu 1 */}
                                <div className="relative pl-6 border-l-2 border-emerald-100 pb-1 last:pb-0">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
                                    <h4 className="text-base font-bold text-navy-900">S1 Teknik Informatika</h4>
                                    <p className="text-emerald-600 text-sm font-medium mb-1">Universitas Krisnadwipayana</p>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full inline-block mb-2">Aug 2021 - Present</span>
                                </div>

                                {/* Edu 2 */}
                                <div className="relative pl-6 border-l-2 border-emerald-100 pb-1">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-200 border-4 border-white shadow-sm"></div>
                                    <h4 className="text-base font-bold text-navy-900">SMA Sandikta</h4>
                                    <p className="text-emerald-600 text-sm font-medium mb-1">Ilmu Pengetahuan Sosial</p>
                                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full inline-block">Aug 2015 - Aug 2018</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: Experience (Takes 8 columns on Desktop) */}
                    <div className="lg:col-span-8">
                        {/* Experience Card Container */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Card Header */}
                            <div className="px-8 py-6 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 rounded-xl">
                                        <BriefcaseIcon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-navy-900">Pengalaman Kerja</h3>
                                        <p className="text-sm text-gray-500">Riwayat karir profesional</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body - List Style */}
                            <div className="divide-y divide-gray-100">

                                {/* Item 1 */}
                                <div className="p-8 hover:bg-gray-50/50 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-navy-900 group-hover:text-primary-600 transition-colors">IT Helpdesk Intern</h4>
                                            <p className="text-gray-500 font-medium">PT Mustika Ratu Tbk</p>
                                        </div>
                                        <span className="px-4 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full border border-primary-100 whitespace-nowrap self-start">
                                            Oct 2024 - Jan 2025
                                        </span>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                                        <li>Memasukkan data aset perusahaan seperti laptop, PC, printer, dan ponsel ke dalam sistem manajemen aset.</li>
                                        <li>Melakukan audit secara berkala untuk memastikan data aset akurat dan sesuai dengan kondisi fisik di lapangan.</li>
                                        <li>Inventaris: Memastikan inventaris perusahaan selalu tercatat secara akurat dan up-to-date.</li>
                                        <li>Menindaklanjuti ketidaksesuaian antara data sistem dan kondisi fisik aset.</li>
                                    </ul>
                                </div>

                                {/* Item 2 */}
                                <div className="p-8 hover:bg-gray-50/50 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-navy-900 group-hover:text-primary-600 transition-colors">Staff Operational</h4>
                                            <p className="text-gray-500 font-medium">Farmers Family</p>
                                        </div>
                                        <span className="px-4 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200 whitespace-nowrap self-start">
                                            Aug 2021 - Jan 2022
                                        </span>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                                        <li>Mengelola inventaris buah dan sayuran untuk mengurangi limbah dan kerugian.</li>
                                        <li>Menjaga kualitas produk dengan rutin menyortir buah dan sayuran.</li>
                                        <li>Menjaga kebersihan dan keamanan area penyimpanan.</li>
                                        <li>Meningkatkan kepuasan pelanggan dengan layanan ramah dan produk berkualitas.</li>
                                    </ul>
                                </div>

                                {/* Item 3 */}
                                <div className="p-8 hover:bg-gray-50/50 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-navy-900 group-hover:text-primary-600 transition-colors">Freshfood Crew</h4>
                                            <p className="text-gray-500 font-medium">Alfamidi</p>
                                        </div>
                                        <span className="px-4 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200 whitespace-nowrap self-start">
                                            Mar 2019 - Mar 2021
                                        </span>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                                        <li>Mengelola inventaris buah dan sayuran untuk mengurangi limbah dan kerugian.</li>
                                        <li>Menjaga kualitas produk dengan rutin menyortir buah dan sayuran.</li>
                                        <li>Menjaga kebersihan dan keamanan area penyimpanan.</li>
                                    </ul>
                                </div>

                                {/* Item 4 */}
                                <div className="p-8 hover:bg-gray-50/50 transition-colors group">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-navy-900 group-hover:text-primary-600 transition-colors">Barista Part-time</h4>
                                            <p className="text-gray-500 font-medium">Pizza Hut Restaurant</p>
                                        </div>
                                        <span className="px-4 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full border border-gray-200 whitespace-nowrap self-start">
                                            Aug 2018 - Jan 2019
                                        </span>
                                    </div>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm leading-relaxed">
                                        <li>Menjaga operasi peralatan dengan mengikuti instruksi pengoperasian dan melakukan pemeliharaan.</li>
                                        <li>Menyiapkan dan menyajikan kopi, minuman, minuman segar, jus buah, atau milkshake.</li>
                                        <li>Menjamin kebersihan area kerja dan kesesuaian dengan prosedur keamanan pangan.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage
