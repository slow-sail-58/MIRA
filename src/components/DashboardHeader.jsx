import DashboardIcon from './DashboardIcon.jsx'
import { patient } from '../data/patientDashboard.js'

// Top navigation for the patient dashboard.
// Left: menu (mobile) + MIRA brand. Right: notifications + profile avatar.

function DashboardHeader({ onMenu, onNotifications, onProfile, notificationCount = 2 }) {
  return (
    <header className="pdash__header">
      <div className="pdash__header-left">
        <button
          type="button"
          className="pdash__icon-btn pdash__icon-btn--menu"
          onClick={onMenu}
          aria-label="Open menu"
        >
          <DashboardIcon name="menu" />
        </button>
        <span className="pdash__logo">MIRA</span>
      </div>

      <div className="pdash__header-right">
        <button
          type="button"
          className="pdash__icon-btn"
          onClick={onNotifications}
          aria-label={`Notifications, ${notificationCount} unread`}
        >
          <DashboardIcon name="bell" />
          {notificationCount > 0 && (
            <span className="pdash__badge" aria-hidden="true">
              {notificationCount}
            </span>
          )}
        </button>

        <button
          type="button"
          className="pdash__avatar-btn"
          onClick={onProfile}
          aria-label="Open your profile"
        >
          <img
            src={patient.avatar || '/placeholder.svg'}
            alt=""
            className="pdash__avatar-img"
          />
        </button>
      </div>
    </header>
  )
}

export default DashboardHeader
