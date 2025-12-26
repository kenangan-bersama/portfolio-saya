import PortfolioSection from '../components/PortfolioSection'

function PortfolioPage({ filters, onProjectClick }) {
    return (
        <div className="min-h-screen pt-40 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
            <PortfolioSection
                filters={filters}
                onProjectClick={onProjectClick}
            />
        </div>
    )
}

export default PortfolioPage
