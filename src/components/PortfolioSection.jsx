import { useState } from 'react'

function PortfolioSection({ filters, onProjectClick }) {
    const projects = [
        {
            id: 1,
            title: 'Zura Cleaning Solutions',
            category: 'Web Application',
            year: '2024',
            thumbnail: '/zura-preview.png',
            images: ['/zura-preview.png'],
            description: 'Aplikasi Customer Relationship Management (CRM) untuk efisiensi operasional bisnis cleaning service. Mengelola ID karyawan, login secure, dan dashboard admin.',
            tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
            features: [
                'Secure Employee Login',
                'Operational Dashboard',
                'Employee Management',
                'Reporting System',
                'Task Assignment'
            ],
            role: 'Full-Stack Developer',
            duration: '3 bulan',
            status: 'Live',
            link: '#'
        },
        {
            id: 2,
            title: 'GTA Smart System',
            category: 'Web Application',
            year: '2024',
            thumbnail: '/gta-preview.png',
            images: ['/gta-preview.png'],
            description: 'Portal sistem informasi terintegrasi untuk CV Global Artha Yasa. Memberikan akses secure & encrypted untuk manajemen data internal perusahaan.',
            tech: ['React', 'TailwindCSS', 'Node.js', 'Rest API'],
            features: [
                'Secure Authentication',
                'Encrypted Data Transmission',
                'User Profile Management',
                '24/7 Support Integration',
                'Responsive Dashboard'
            ],
            role: 'Frontend Developer',
            duration: '4 bulan',
            status: 'Live',
            link: '#'
        }
    ]

    // Filter projects based on active filters
    const filteredProjects = projects.filter(project => {
        // Search filter - check title, description, and tech
        if (filters.search) {
            const searchLower = filters.search.toLowerCase()
            const matchesSearch =
                project.title.toLowerCase().includes(searchLower) ||
                project.description.toLowerCase().includes(searchLower) ||
                project.tech.some(tech => tech.toLowerCase().includes(searchLower)) ||
                project.role.toLowerCase().includes(searchLower)

            if (!matchesSearch) return false
        }

        // Category filter
        if (filters.category && project.category !== filters.category) {
            return false
        }

        // Technology filter
        if (filters.technology && !project.tech.includes(filters.technology)) {
            return false
        }

        return true
    })

    return (
        <section id="portfolio" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Portfolio Projects
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Berikut adalah beberapa project yang telah saya kerjakan dengan berbagai teknologi modern
                    </p>

                    {/* Active Filters Display */}
                    {(filters.search || filters.category || filters.technology) && (
                        <div className="mt-6 flex flex-wrap gap-2 justify-center">
                            {filters.search && (
                                <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm">
                                    Search: "{filters.search}"
                                </span>
                            )}
                            {filters.category && (
                                <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm">
                                    {filters.category}
                                </span>
                            )}
                            {filters.technology && (
                                <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm">
                                    {filters.technology}
                                </span>
                            )}
                            <span className="text-gray-300 text-sm mt-2">
                                {filteredProjects.length} project(s) found
                            </span>
                        </div>
                    )}
                </div>

                {/* Project Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => onProjectClick(project)}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform"
                            >
                                {/* Project Thumbnail */}
                                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                                    {/* IMAGE RENDERING */}
                                    <div className="absolute inset-0 p-4">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Overlay removed or static if needed, but removing hover effect from here too */}
                                    <div className="absolute inset-0 bg-transparent"></div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                                            {project.year}
                                        </span>
                                        <span className="text-xs text-gray-500">{project.duration}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-navy-900 mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs text-gray-500">
                                                +{project.tech.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* View Detail Button */}
                                    <button className="w-full bg-navy-900 text-white py-2 rounded-lg font-medium text-sm">
                                        Lihat Detail
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // No Results Message
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Tidak Ada Project Ditemukan
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Coba ubah filter atau keyword pencarian Anda
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default PortfolioSection
