import { roles } from '../data/roles.js'
import RoleIcon from './RoleIcon.jsx'
import './Dashboard.css'

// Placeholder destination after a successful (MVP) login.
// Swap this out for the real role-specific dashboards later.

function Dashboard({ roleId, onSignOut }) {
  const role = roles.find((item) => item.id === roleId) ?? roles[0]

  return (
    <div className="mira mira--login">
      <header className="mira__header">
        <span className="mira__logo">MIRA</span>
        <span className="mira__tagline">Healthcare, made accessible.</span>
      </header>

      <main className="dashboard">
        <section className="dashboard__panel">
          <span className="dashboard__icon">
            <RoleIcon name={role.icon} />
          </span>
          <h1 className="dashboard__heading">You&apos;re signed in</h1>
          <p className="dashboard__text">
            This is a placeholder for the <strong>{role.title}</strong>{' '}
            dashboard. Your real MIRA experience will appear here.
          </p>
          <button
            type="button"
            className="dashboard__signout"
            onClick={onSignOut}
          >
            Sign out
          </button>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
