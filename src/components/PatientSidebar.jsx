import DashboardIcon from './DashboardIcon.jsx'
import { patient, sidebarGroups } from '../data/patientDashboard.js'

function SidebarItem({ item, active, onNavigate }) {
  const isActive = item.id === active

  return (
    <button
      type="button"
      className={`patient-sidebar__item${isActive ? ' patient-sidebar__item--active' : ''}`}
      onClick={() => onNavigate(item.id)}
      aria-current={isActive ? 'page' : undefined}
    >
      <span className="patient-sidebar__item-icon">
        <DashboardIcon name={item.icon} size={19} />
      </span>
      <span className="patient-sidebar__item-copy">
        <span className="patient-sidebar__item-label">{item.label}</span>
        <span className="patient-sidebar__item-description">{item.description}</span>
      </span>
      {item.unread && <span className="patient-sidebar__unread" aria-label="Unread alerts" />}
    </button>
  )
}

function SidebarGroup({ group, active, onNavigate }) {
  return (
    <section className="patient-sidebar__group" aria-labelledby={`sidebar-${group.id}`}>
      <h2 className="patient-sidebar__group-label" id={`sidebar-${group.id}`}>
        {group.label}
      </h2>
      <div className="patient-sidebar__items">
        {group.items.map((item) => (
          <SidebarItem key={item.id} item={item} active={active} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}

function PatientSidebar({ active, isOpen, onNavigate, onClose, onSignOut }) {
  return (
    <>
      <div
        className={`patient-sidebar__scrim${isOpen ? ' patient-sidebar__scrim--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`patient-sidebar${isOpen ? ' patient-sidebar--open' : ''}`} aria-label="Patient navigation">
        <div className="patient-sidebar__topline">
          <span className="patient-sidebar__logo">MIRA</span>
          <button type="button" className="patient-sidebar__close" onClick={onClose} aria-label="Close menu">
            <DashboardIcon name="close" size={20} />
          </button>
        </div>

        <div className="patient-sidebar__nav">
          {sidebarGroups.map((group) => (
            <SidebarGroup key={group.id} group={group} active={active} onNavigate={onNavigate} />
          ))}
        </div>

        <div className="patient-sidebar__account">
          <span className="patient-sidebar__group-label">Account</span>
          <button
            type="button"
            className={`patient-sidebar__profile${active === 'profile' ? ' patient-sidebar__profile--active' : ''}`}
            onClick={() => onNavigate('profile')}
            aria-current={active === 'profile' ? 'page' : undefined}
          >
            <img src={patient.avatar || '/placeholder.svg'} alt="" className="patient-sidebar__profile-avatar" />
            <span>
              <strong>Profile</strong>
              <small>{patient.fullName}</small>
            </span>
            <DashboardIcon name="chevron-right" size={17} />
          </button>
          <button type="button" className="patient-sidebar__logout" onClick={onSignOut}>
            <DashboardIcon name="logout" size={17} />
            Sign out
          </button>
        </div>
      </aside>
    </>
  )
}

export default PatientSidebar
