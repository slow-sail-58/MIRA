import DashboardIcon from './DashboardIcon.jsx'
import { navItems } from '../data/patientDashboard.js'

// Primary navigation. Renders as a bottom bar on mobile and a horizontal
// rail on desktop (styled via CSS). Highlights the active item.

function BottomNavigation({ active, onChange }) {
  return (
    <nav className="pdash-nav" aria-label="Primary">
      <ul className="pdash-nav__list">
        {navItems.map((item) => {
          const isActive = item.id === active
          return (
            <li key={item.id}>
              <button
                type="button"
                className={`pdash-nav__item${isActive ? ' pdash-nav__item--active' : ''}`}
                onClick={() => onChange(item.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                <DashboardIcon name={item.icon} size={22} />
                <span className="pdash-nav__label">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BottomNavigation
