import { useState } from 'react'
import DashboardIcon from './DashboardIcon.jsx'
import { medicine } from '../data/patientDashboard.js'

// Medicine reminder card. Clicking "Taken" visually marks the dose as done.
// "Remind Me Later" shows a small confirmation without changing the status.

function MedicineReminder() {
  const [status, setStatus] = useState('pending') // 'pending' | 'taken'
  const [snoozed, setSnoozed] = useState(false)

  const taken = status === 'taken'

  function handleTaken() {
    setStatus('taken')
    setSnoozed(false)
  }

  function handleRemindLater() {
    setSnoozed(true)
  }

  return (
    <section
      className={`pdash__card pdash-medicine${taken ? ' pdash-medicine--taken' : ''}`}
      aria-labelledby="medicine-title"
    >
      <div className="pdash-card__head">
        <h2 className="pdash-card__title" id="medicine-title">
          Medicine Reminder
        </h2>
        <span className="pdash-medicine__time">
          <DashboardIcon name="clock" size={15} /> {medicine.time}
        </span>
      </div>

      <div className="pdash-medicine__body">
        <span className="pdash-medicine__pill" aria-hidden="true">
          <DashboardIcon name="pill" size={24} />
        </span>
        <div className="pdash-medicine__info">
          <p className="pdash-medicine__name">{medicine.name}</p>
          <p className="pdash-medicine__detail">
            {medicine.dose} · {medicine.timing}
          </p>
        </div>
      </div>

      {taken ? (
        <p className="pdash-medicine__done" role="status">
          <DashboardIcon name="check" size={16} /> Marked as taken
        </p>
      ) : (
        <>
          <div className="pdash-medicine__actions">
            <button
              type="button"
              className="pdash-btn pdash-btn--primary"
              onClick={handleTaken}
            >
              <DashboardIcon name="check" size={16} /> Taken
            </button>
            <button
              type="button"
              className="pdash-btn pdash-btn--ghost"
              onClick={handleRemindLater}
            >
              <DashboardIcon name="clock" size={16} /> Remind Me Later
            </button>
          </div>
          {snoozed && (
            <p className="pdash-medicine__snooze" role="status">
              We&apos;ll remind you again in 30 minutes.
            </p>
          )}
        </>
      )}
    </section>
  )
}

export default MedicineReminder
