import { useState } from 'react'
import DashboardHeader from '../components/DashboardHeader.jsx'
import Greeting from '../components/Greeting.jsx'
import HealthSummary from '../components/HealthSummary.jsx'
import QuickActions from '../components/QuickActions.jsx'
import MedicineReminder from '../components/MedicineReminder.jsx'
import HealthTimeline from '../components/HealthTimeline.jsx'
import OfflineStatus from '../components/OfflineStatus.jsx'
import BottomNavigation from '../components/BottomNavigation.jsx'
import '../components/PatientDashboard.css'

// MIRA Patient home dashboard.
// All interactions use lightweight mock behavior for the demo.

function PatientDashboard({ onSignOut }) {
  const [activeNav, setActiveNav] = useState('home')
  const [banner, setBanner] = useState(null) // simple placeholder feedback

  function notify(message) {
    setBanner(message)
    // auto-dismiss after a few seconds
    window.clearTimeout(notify._t)
    notify._t = window.setTimeout(() => setBanner(null), 3200)
  }

  function handleQuickAction(action) {
    if (action.id === 'sos') {
      const confirmed = window.confirm(
        'Send an emergency SOS alert? This will notify your emergency contacts and nearest care center.'
      )
      if (confirmed) notify('Emergency SOS sent. Help is on the way.')
      return
    }
    notify(`Opening “${action.title}”…`)
  }

  return (
    <div className="mira pdash">
      <DashboardHeader
        onMenu={() => notify('Menu coming soon.')}
        onNotifications={() => notify('You have 2 new notifications.')}
        onProfile={() => setActiveNav('profile')}
      />

      {banner && (
        <div className="pdash__banner" role="status">
          {banner}
        </div>
      )}

      <main className="pdash__main">
        <Greeting />

        <HealthSummary onViewAll={() => notify('Opening full health summary…')} />

        <QuickActions onAction={handleQuickAction} />

        <MedicineReminder />

        <HealthTimeline
          onViewAll={() => notify('Opening full activity history…')}
          onSelect={(item) => notify(item.text)}
        />

        <OfflineStatus onRetry={() => notify('Reconnecting…')} />

        <button type="button" className="pdash__signout" onClick={onSignOut}>
          Sign out
        </button>
      </main>

      <BottomNavigation
        active={activeNav}
        onChange={(id) => {
          setActiveNav(id)
          if (id !== 'home') {
            const label = id.charAt(0).toUpperCase() + id.slice(1)
            notify(`${label} is coming soon.`)
          }
        }}
      />
    </div>
  )
}

export default PatientDashboard
