import { useState } from 'react'

function ProjectDetailModal({ project, onClose }) {
    const [activeTab, setActiveTab] = useState('detail')
    const [selectedImage, setSelectedImage] = useState(0)

    if (!project) return null

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Left Column - Image Gallery */}
                        <div>
                            {/* Main Image */}
                            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl overflow-hidden mb-4 aspect-video flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="text-8xl mb-4">📁</div>
                                    <p className="text-xl font-medium">{project.title}</p>
                                </div>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="grid grid-cols-4 gap-2">
                                {[1, 2, 3, 4].map((idx) => (
                                    <div
                                        key={idx}
                                        className="aspect-square bg-gradient-to-br from-primary-300 to-primary-500 rounded-lg flex items-center justify-center text-white text-2xl"
                                    >
                                        📷
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Project Details */}
                        <div>
                            {/* Project Title */}
                            <h1 className="text-3xl font-bold text-navy-900 mb-2">
                                {project.title}
                            </h1>

                            {/* Category & Year */}
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-sm text-gray-500">
                                    Kategori: <span className="font-medium text-navy-800">{project.category}</span>
                                </span>
                                <span className="text-sm text-gray-500">•</span>
                                <span className="text-sm text-gray-500">
                                    Tahun: <span className="font-medium text-navy-800">{project.year}</span>
                                </span>
                            </div>

                            {/* Status Badge */}
                            <div className="mb-6">
                                <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    {project.status}
                                </span>
                            </div>

                            {/* Role & Duration */}
                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Role</p>
                                        <p className="text-sm font-medium text-navy-900">{project.role}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-1">Durasi</p>
                                        <p className="text-sm font-medium text-navy-900">{project.duration}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="border-b border-gray-200 mb-6">
                                <div className="flex gap-6">
                                    {['detail', 'spesifikasi', 'teknologi'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`pb-3 px-1 font-medium text-sm capitalize transition-colors relative ${activeTab === tab
                                                    ? 'text-primary-600'
                                                    : 'text-gray-500'
                                                }`}
                                        >
                                            {tab}
                                            {activeTab === tab && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="mb-6">
                                {activeTab === 'detail' && (
                                    <div>
                                        <h3 className="font-semibold text-navy-900 mb-3">Deskripsi Project</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {project.description}
                                        </p>
                                        <h3 className="font-semibold text-navy-900 mb-3">Fitur Utama</h3>
                                        <ul className="space-y-2">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-600">
                                                    <span className="text-green-500 mt-1">✓</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {activeTab === 'spesifikasi' && (
                                    <div className="space-y-3">
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Status</span>
                                            <span className="font-medium text-navy-900">{project.status}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Role</span>
                                            <span className="font-medium text-navy-900">{project.role}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Durasi</span>
                                            <span className="font-medium text-navy-900">{project.duration}</span>
                                        </div>
                                        <div className="flex justify-between py-2 border-b border-gray-100">
                                            <span className="text-gray-600">Kategori</span>
                                            <span className="font-medium text-navy-900">{project.category}</span>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'teknologi' && (
                                    <div>
                                        <h3 className="font-semibold text-navy-900 mb-3">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full bg-navy-900 text-white text-center py-3 rounded-full font-medium"
                                    >
                                        Visit Live Site
                                    </a>
                                )}
                                <button className="w-full bg-gray-100 text-navy-900 py-3 rounded-full font-medium">
                                    Hubungi untuk Project Serupa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailModal
