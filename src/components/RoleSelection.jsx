import { useState } from 'react'
import { roles } from '../data/roles.js'
import RoleCard from './RoleCard.jsx'
import ContinueButton from './ContinueButton.jsx'
import './RoleSelection.css'

// First screen of MIRA: pick how you'll use the app, then continue.
// `onContinue` is optional — pass a handler from a parent/router later to
// navigate each role to its own dashboard.

function RoleSelection({ onContinue }) {
  const [selectedRole, setSelectedRole] = useState(null)

  function handleContinue() {
    if (!selectedRole) return

    if (typeof onContinue === 'function') {
      // Hook this up to your router later, e.g. navigate(`/${selectedRole}`)
      onContinue(selectedRole)
    } else {
      // MVP fallback: log the choice so you can wire up navigation later.
      console.log('[MIRA] Selected role:', selectedRole)
    }
  }

  return (
    <div className="mira">
      <header className="mira__header">
        <span className="mira__logo">MIRA</span>
        <span className="mira__tagline">Healthcare, made accessible.</span>
      </header>

      <main className="mira__main">
        <section className="mira__welcome">
          <h1 className="mira__heading">Welcome to MIRA</h1>
          <p className="mira__subheading">How will you be using MIRA?</p>
          <p className="mira__support">Choose an option to continue.</p>
        </section>

        <div
          className="mira__cards"
          role="radiogroup"
          aria-label="How will you be using MIRA?"
        >
          {roles.map((role) => (
            <RoleCard
              key={role.id}
              role={role}
              selected={selectedRole === role.id}
              onSelect={setSelectedRole}
            />
          ))}
        </div>

        <div className="mira__actions">
          <ContinueButton disabled={!selectedRole} onClick={handleContinue} />
          <p className="mira__helper">
            You can change your role later from your profile settings.
          </p>
        </div>
      </main>
    </div>
  )
}

export default RoleSelection
