import { RocketLaunchIcon } from '@heroicons/react/24/outline'

function FloatingCard({ filters, onFilterChange, onSearch }) {
    return (
        <div className="relative w-full">
            <div className="max-w-4xl mx-auto">
                <div className="bg-navy-800 rounded-2xl shadow-2xl overflow-hidden border border-navy-700/50 backdrop-blur-sm">

                    {/* Dark Header Style */}
                    <div className="px-8 py-6 border-b border-navy-700 bg-navy-900/40 flex items-center justify-center flex-col text-center">
                        <div className="p-3 bg-navy-700/50 rounded-xl mb-3 ring-1 ring-white/10">
                            <RocketLaunchIcon className="w-8 h-8 text-primary-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Mari Mulai Project Bersama
                        </h3>
                        <p className="text-gray-400 text-sm max-w-lg">
                            Bergabunglah dengan tim yang passionate dan berkembang bersama teknologi terdepan
                        </p>
                    </div>

                    {/* Dark Card Body */}
                    <div className="p-8">
                        {/* Form Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {/* Search Input */}
                            <div>
                                <label htmlFor="search-projects" className="block text-sm font-bold text-gray-300 mb-2">
                                    Cari
                                </label>
                                <div className="relative group">
                                    <input
                                        id="search-projects"
                                        name="search"
                                        autoComplete="off"
                                        type="text"
                                        value={filters.search}
                                        onChange={(e) => onFilterChange('search', e.target.value)}
                                        placeholder="Posisi, skill..."
                                        className="w-full pl-4 pr-10 py-3 text-sm border border-navy-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-navy-900/50 text-white placeholder-gray-500 focus:bg-navy-900 group-hover:border-navy-500"
                                    />
                                    <svg
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary-400 transition-colors"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Category Select */}
                            <div>
                                <label htmlFor="project-category" className="block text-sm font-bold text-gray-300 mb-2">
                                    Kategori Project
                                </label>
                                <div className="relative">
                                    <select
                                        id="project-category"
                                        name="category"
                                        autoComplete="off"
                                        value={filters.category}
                                        onChange={(e) => onFilterChange('category', e.target.value)}
                                        className="w-full pl-4 pr-10 py-3 text-sm border border-navy-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none bg-navy-900/50 text-white hover:border-navy-500 cursor-pointer focus:bg-navy-900"
                                    >
                                        <option value="" className="bg-navy-900 text-gray-300">Semua Kategori</option>
                                        <option value="Web Development" className="bg-navy-900">Web Development</option>
                                        <option value="Mobile Development" className="bg-navy-900">Mobile Development</option>
                                        <option value="UI/UX Design" className="bg-navy-900">UI/UX Design</option>
                                        <option value="SaaS" className="bg-navy-900">SaaS</option>
                                        <option value="Full-Stack" className="bg-navy-900">Full-Stack</option>
                                    </select>
                                    {/* Custom Dropdown Arrow */}
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Technology Select */}
                            <div>
                                <label htmlFor="project-tech" className="block text-sm font-bold text-gray-300 mb-2">
                                    Teknologi
                                </label>
                                <div className="relative">
                                    <select
                                        id="project-tech"
                                        name="technology"
                                        autoComplete="off"
                                        value={filters.technology}
                                        onChange={(e) => onFilterChange('technology', e.target.value)}
                                        className="w-full pl-4 pr-10 py-3 text-sm border border-navy-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all appearance-none bg-navy-900/50 text-white hover:border-navy-500 cursor-pointer focus:bg-navy-900"
                                    >
                                        <option value="" className="bg-navy-900 text-gray-300">Semua Teknologi</option>
                                        <option value="React" className="bg-navy-900">React</option>
                                        <option value="React Native" className="bg-navy-900">React Native</option>
                                        <option value="Vue.js" className="bg-navy-900">Vue.js</option>
                                        <option value="Next.js" className="bg-navy-900">Next.js</option>
                                        <option value="Node.js" className="bg-navy-900">Node.js</option>
                                        <option value="Laravel" className="bg-navy-900">Laravel</option>
                                        <option value="TailwindCSS" className="bg-navy-900">TailwindCSS</option>
                                    </select>
                                    {/* Custom Dropdown Arrow */}
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="mt-8">
                            <button
                                onClick={onSearch}
                                className="w-full bg-primary-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-primary-900/20 hover:bg-primary-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <RocketLaunchIcon className="w-5 h-5" />
                                Cari Project
                            </button>
                        </div>

                        {/* Quick Stats - Dark Mode */}
                        <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-navy-700">
                            <div className="text-center group cursor-default">
                                <p className="text-3xl font-extrabold text-white group-hover:text-primary-400 transition-colors">15+</p>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Projects Completed</p>
                            </div>
                            <div className="text-center group cursor-default">
                                <p className="text-3xl font-extrabold text-white group-hover:text-primary-400 transition-colors">10+</p>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Happy Clients</p>
                            </div>
                            <div className="text-center group cursor-default">
                                <p className="text-3xl font-extrabold text-white group-hover:text-primary-400 transition-colors">3+</p>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-1">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloatingCard
