import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const location = useLocation()

    const navLinks = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Skills', to: '/skills' },
        { name: 'Portfolio', to: '/portfolio' },
        { name: 'Contact', to: '/contact' },
    ]

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Navbar state depends only on scroll position now, consistent across all pages
    const navbarScrolled = isScrolled

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${navbarScrolled
                    ? 'bg-white shadow-md'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <h1 className={`text-2xl font-bold transition-colors duration-300 ${navbarScrolled ? 'text-navy-900' : 'text-white'
                                    }`}>
                                    Portfolio<span className="text-primary-500">.</span>
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    className={({ isActive }) => `font-medium transition-all duration-300 relative group py-1 ${navbarScrolled
                                        ? isActive ? 'text-primary-600 font-bold' : 'text-navy-800'
                                        : isActive ? 'text-primary-400 font-bold' : 'text-white'
                                        }`}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {link.name}
                                            {/* Underline: Visible ONLY if Active. No hover effect. */}
                                            <span className={`absolute left-0 bottom-0 w-full h-0.5 transition-transform duration-300 origin-left ${isActive
                                                ? (navbarScrolled ? 'bg-primary-600 scale-x-100' : 'bg-primary-400 scale-x-100')
                                                : 'scale-x-0'
                                                }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden md:block">
                            <button className={`transition-all duration-300 px-6 py-2.5 rounded-full font-medium ${navbarScrolled
                                ? 'bg-navy-900 text-white shadow-lg'
                                : 'bg-white text-navy-900 shadow-lg'
                                }`}>
                                Hubungi Saya
                            </button>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 ${navbarScrolled
                                    ? 'text-navy-800'
                                    : 'text-white'
                                    }`}
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Hamburger Icon */}
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop/Overlay (Optional for full width, but good for transition) */}
                <div
                    className={`fixed inset-0 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                    onClick={toggleMenu}
                />

                {/* Sidebar Panel */}
                <div
                    className={`fixed top-0 right-0 bottom-0 w-full bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-navy-900">Menu</h2>
                        <button
                            onClick={toggleMenu}
                            className="p-2 -mr-2 text-gray-500 hover:text-navy-900 transition-colors focus:outline-none"
                        >
                            <svg
                                className="h-8 w-8"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Sidebar Navigation Links */}
                    <div className="py-6 px-4 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                onClick={toggleMenu}
                                className={({ isActive }) => `block px-4 py-4 text-lg font-medium rounded-xl transition-colors duration-200 ${isActive ? 'text-primary-600 bg-primary-50' : 'text-navy-800 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Sidebar CTA */}
                    <div className="absolute bottom-10 left-6 right-6">
                        <button className="w-full bg-navy-900 text-white px-6 py-4 rounded-full text-lg font-medium shadow-xl hover:bg-navy-800 transition-colors">
                            Hubungi Saya
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
