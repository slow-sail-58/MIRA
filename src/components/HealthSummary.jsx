import DashboardIcon from './DashboardIcon.jsx'
import { healthSummary } from '../data/patientDashboard.js'

// Prominent "Your Health Summary" card with four compact, scannable stats.

function HealthSummary({ onViewAll }) {
  return (
    <section className="pdash__card pdash-summary" aria-labelledby="summary-title">
      <div className="pdash-card__head">
        <h2 className="pdash-card__title" id="summary-title">
          Your Health Summary
        </h2>
        <button type="button" className="pdash__link" onClick={onViewAll}>
          View All <DashboardIcon name="arrow-right" size={15} />
        </button>
      </div>

      <ul className="pdash-summary__grid">
        {healthSummary.map((item) => (
          <li key={item.id} className="pdash-summary__item">
            <span className="pdash-summary__icon" aria-hidden="true">
              <DashboardIcon name={item.icon} size={20} />
            </span>
            <span className="pdash-summary__meta">
              <span className="pdash-summary__label">{item.label}</span>
              <span className="pdash-summary__value">{item.value}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HealthSummary
