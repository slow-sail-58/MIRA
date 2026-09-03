import DashboardIcon from './DashboardIcon.jsx'

// Subtle offline-awareness card. Reassures the user that saved data
// is still available, with a Retry action.

function OfflineStatus({ onRetry }) {
  return (
    <section className="pdash-offline" role="status">
      <span className="pdash-offline__icon" aria-hidden="true">
        <DashboardIcon name="cloud-off" size={22} />
      </span>
      <div className="pdash-offline__body">
        <p className="pdash-offline__title">You&apos;re offline</p>
        <p className="pdash-offline__text">
          Some features may be limited. Your saved information is still
          available.
        </p>
      </div>
      <button type="button" className="pdash-offline__retry" onClick={onRetry}>
        <DashboardIcon name="retry" size={16} /> Retry
      </button>
    </section>
  )
}

export default OfflineStatus
