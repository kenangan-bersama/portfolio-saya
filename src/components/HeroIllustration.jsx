function HeroIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Browser Mockup */}
            <div className="relative z-10 w-60 md:w-72 bg-white rounded-lg shadow-2xl transform -rotate-2 transition-all duration-300">
                {/* Browser Header */}
                <div className="bg-gray-200 rounded-t-lg px-3 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-red-500"></div>
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500"></div>
                    </div>
                </div>

                {/* Browser Content */}
                <div className="p-3 md:p-4 space-y-3 bg-white rounded-b-lg">
                    <div className="flex gap-2">
                        <div className="h-12 md:h-16 flex-1 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg"></div>
                        <div className="h-12 md:h-16 flex-1 bg-gradient-to-br from-primary-300 to-primary-500 rounded-lg"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-6 md:w-8 h-6 md:h-8 bg-primary-500 rounded-full"></div>
                        <div className="flex-1 space-y-1">
                            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-1.5 md:h-2 bg-gray-200 rounded"></div>
                        <div className="h-1.5 md:h-2 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    <div className="h-6 md:h-8 bg-primary-500 rounded-lg"></div>
                </div>
            </div>

            {/* Smartphone Mockup */}
            <div className="absolute right-4 md:right-8 top-8 md:top-12 z-20 w-32 md:w-40 bg-white rounded-3xl shadow-2xl transform rotate-3 border-4 md:border-8 border-gray-800 transition-all duration-300">
                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="bg-gray-800 h-4 md:h-6 rounded-b-xl md:rounded-b-2xl mx-auto w-16 md:w-24"></div>

                    {/* Phone Content */}
                    <div className="p-3 space-y-3">
                        {/* Header Card */}
                        <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg p-3 text-white">
                            <div className="h-2 bg-white/80 rounded w-3/4 mb-2"></div>
                            <div className="h-1.5 bg-white/60 rounded w-1/2"></div>
                        </div>

                        {/* Content Cards */}
                        <div className="flex gap-2">
                            <div className="h-12 flex-1 bg-primary-100 rounded-lg flex items-center justify-center">
                                <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
                            </div>
                            <div className="h-12 flex-1 bg-primary-50 rounded-lg"></div>
                        </div>

                        {/* Slider/Progress */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="h-1.5 flex-1 bg-gray-200 rounded"></div>
                                <div className="w-6 h-6 bg-primary-500 rounded-full"></div>
                                <div className="h-1.5 flex-1 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Blur Effects */}
            <div className="absolute top-0 left-12 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-12 w-56 h-56 bg-primary-600/5 rounded-full blur-3xl"></div>
        </div>
    )
}

export default HeroIllustration
