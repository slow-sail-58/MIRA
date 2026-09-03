import DashboardIcon from './DashboardIcon.jsx'
import { quickActions } from '../data/patientDashboard.js'

// Three primary action cards. The Emergency SOS card is visually distinct
// (warm accent) to signal urgency without turning the whole UI red.

function QuickActions({ onAction }) {
  return (
    <section className="pdash-section" aria-labelledby="quick-actions-title">
      <h2 className="pdash-section__title" id="quick-actions-title">
        Quick Actions
      </h2>

      <div className="pdash-actions">
        {quickActions.map((action) => (
          <button
            key={action.id}
            type="button"
            className={`pdash-action pdash-action--${action.tone}`}
            onClick={() => onAction(action)}
          >
            <span className="pdash-action__icon" aria-hidden="true">
              <DashboardIcon name={action.icon} size={24} />
            </span>
            <span className="pdash-action__body">
              <span className="pdash-action__title">{action.title}</span>
              <span className="pdash-action__desc">{action.description}</span>
            </span>
            <span className="pdash-action__arrow" aria-hidden="true">
              <DashboardIcon name="arrow-right" size={18} />
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default QuickActions
