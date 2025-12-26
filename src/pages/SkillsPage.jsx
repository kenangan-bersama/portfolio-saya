import {
    CodeBracketIcon,
    ServerIcon,
    SwatchIcon,
    CommandLineIcon,
    UserIcon,
    CheckBadgeIcon,
    CpuChipIcon
} from '@heroicons/react/24/outline'

function SkillsPage() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: CodeBracketIcon,
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            description: "Membangun antarmuka yang responsif dan interaktif.",
            items: ["Vue.js", "React", "Next.js", "Tailwind CSS", "Bootstrap", "HTML5/CSS3"]
        },
        {
            title: "Backend Development",
            icon: ServerIcon,
            color: "text-green-500",
            bgColor: "bg-green-50",
            description: "Merancang arsitektur server dan database.",
            items: ["CodeIgniter 3", "Laravel", "PHP OOP", "MySQL", "REST API", "Node.js"]
        },
        {
            title: "UI/UX Design",
            icon: SwatchIcon,
            color: "text-purple-500",
            bgColor: "bg-purple-50",
            description: "Visualisasi ide ke dalam desain fungsional.",
            items: ["Figma", "User Research", "Wireframing", "Prototyping", "Responsive Design"]
        },
        {
            title: "Tools & DevOps",
            icon: CommandLineIcon,
            color: "text-orange-500",
            bgColor: "bg-orange-50",
            description: "Alat pendukung workflow development.",
            items: ["Git", "GitHub", "VS Code", "Postman", "Composer", "NPM"]
        }
    ]

    return (
        <div className="min-h-screen relative pt-40 pb-24 px-4 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 overflow-hidden">

            {/* Decorative Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16 relative">
                    <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Expertise</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
                        Keahlian & Teknologi
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Kombinasi keahlian teknis dan interpersonal untuk memberikan hasil terbaik.
                    </p>
                </div>

                {/* Top Row: Hard & Soft Skills Panels */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">

                    {/* PANEL: Hard Skills */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
                        {/* Card Header */}
                        <div className="px-8 py-6 border-b border-gray-100 bg-yellow-50/50 flex items-center gap-4">
                            <div className="p-3 bg-yellow-100 rounded-xl">
                                <CodeBracketIcon className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-900">Hard Skills</h3>
                                <p className="text-sm text-gray-500 mt-1 border-b-2 border-yellow-400 inline-block pb-1">Kompetensi Teknis Utama</p>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 flex-grow">
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-yellow-50/30 transition-colors">
                                    <CheckBadgeIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Pengembangan website (CodeIgniter 3, Laravel, Vue.js)</span>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-yellow-50/30 transition-colors">
                                    <CheckBadgeIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Pemrograman berbasis objek (OOP) PHP</span>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-yellow-50/30 transition-colors">
                                    <CheckBadgeIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Perancangan & pengelolaan basis data MySQL (Backend)</span>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-yellow-50/30 transition-colors">
                                    <CheckBadgeIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 font-medium">Integrasi Frontend Vue.js dengan Backend CI/Laravel</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* PANEL: Soft Skills */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
                        {/* Card Header */}
                        <div className="px-8 py-6 border-b border-gray-100 bg-purple-50/50 flex items-center gap-4">
                            <div className="p-3 bg-purple-100 rounded-xl">
                                <UserIcon className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy-900">Soft Skills</h3>
                                <p className="text-sm text-gray-500 mt-1 border-b-2 border-purple-400 inline-block pb-1">Karakter Personal</p>
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 flex-grow">
                            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                Keterampilan interpersonal yang mendukung kolaborasi tim dan efektivitas kerja.
                            </p>

                            {/* Changed from Flex Pills to Grid Layout to fill space */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: 'Komunikasi', desc: 'Menyampaikan ide dengan jelas & efektif.' },
                                    { name: 'Kepemimpinan', desc: 'Mampu mengarahkan & memotivasi tim.' },
                                    { name: 'Manajemen Waktu', desc: 'Prioritas tugas & efisiensi kerja.' },
                                    { name: 'Adaptasi Cepat', desc: 'Fleksibel terhadap teknologi baru.' },
                                    { name: 'Kerjasama Tim', desc: 'Kolaboratif & suportif dalam grup.' },
                                    { name: 'Problem Solving', desc: 'Analitis dalam menyelesaikan masalah.' }
                                ].map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 bg-purple-50/50 rounded-xl border border-purple-100 hover:bg-purple-50 transition-colors"
                                    >
                                        <h4 className="text-purple-700 font-bold text-sm mb-1">{skill.name}</h4>
                                        <p className="text-gray-500 text-xs">{skill.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* PANEL: Tech Stack Detail (Full Width) */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* Card Header */}
                    <div className="px-8 py-6 border-b border-gray-100 bg-gray-50/50 flex items-center gap-4">
                        <div className="p-3 bg-navy-100 rounded-xl">
                            <CpuChipIcon className="w-6 h-6 text-navy-700" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy-900">Tech Stack Breakdown</h3>
                            <p className="text-sm text-gray-500 mt-1 border-b-2 border-navy-400 inline-block pb-1">Rincian alat dan teknologi yang dikuasai</p>
                        </div>
                    </div>

                    {/* Card Body - Grid Layout */}
                    <div className="p-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {skillCategories.map((category, idx) => (
                                <div
                                    key={idx}
                                    className="group p-4 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Icon */}
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.bgColor}`}>
                                        <category.icon className={`w-6 h-6 ${category.color}`} />
                                    </div>

                                    <h3 className="text-lg font-bold text-navy-900 mb-2">{category.title}</h3>
                                    <p className="text-gray-500 text-xs mb-4 h-10">
                                        {category.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((item, itemIdx) => (
                                            <span
                                                key={itemIdx}
                                                className="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-semibold rounded"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SkillsPage
