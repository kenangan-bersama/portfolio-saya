import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProjectDetailModal from './components/ProjectDetailModal'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    technology: ''
  })

  // useLocation is now valid because App is wrapped in BrowserRouter (in main.jsx)
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    })
  }, [])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleSearch = () => {
    // Navigate to portfolio page
    window.location.href = '/portfolio'
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                filters={filters}
                onFilterChange={handleFilterChange}
                onSearch={handleSearch}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                filters={filters}
                onProjectClick={setSelectedProject}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}

export default App
