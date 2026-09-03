import DashboardIcon from './DashboardIcon.jsx'
import { timeline } from '../data/patientDashboard.js'

// Compact, chronological list of recent health activity.

function HealthTimeline({ onViewAll, onSelect }) {
  return (
    <section className="pdash-section" aria-labelledby="timeline-title">
      <div className="pdash-section__head">
        <h2 className="pdash-section__title" id="timeline-title">
          Your Health Timeline
        </h2>
        <button type="button" className="pdash__link" onClick={onViewAll}>
          View All Activity <DashboardIcon name="arrow-right" size={15} />
        </button>
      </div>

      <ul className="pdash-timeline">
        {timeline.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className="pdash-timeline__item"
              onClick={() => onSelect(item)}
            >
              <span
                className={`pdash-timeline__dot pdash-timeline__dot--${item.tone}`}
                aria-hidden="true"
              >
                <DashboardIcon name={item.icon} size={16} />
              </span>
              <span className="pdash-timeline__body">
                <span className="pdash-timeline__when">{item.when}</span>
                <span className="pdash-timeline__text">{item.text}</span>
              </span>
              <span className="pdash-timeline__arrow" aria-hidden="true">
                <DashboardIcon name="chevron-right" size={18} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HealthTimeline
