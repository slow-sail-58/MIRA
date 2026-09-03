import { patient } from '../data/patientDashboard.js'

// Friendly greeting block with a demo patient avatar shown on larger screens.

function Greeting() {
  return (
    <section className="pdash__greeting" aria-label="Welcome">
      <div className="pdash__greeting-text">
        <p className="pdash__greeting-eyebrow">Good Morning,</p>
        <h1 className="pdash__greeting-name">
          {patient.fullName} <span aria-hidden="true">👋</span>
        </h1>
        <p className="pdash__greeting-support">How can we help you today?</p>
      </div>
      <img
        src={patient.avatar || '/placeholder.svg'}
        alt=""
        className="pdash__greeting-avatar"
      />
    </section>
  )
}

export default Greeting
