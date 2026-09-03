import { useState } from 'react'
import DashboardIcon from './DashboardIcon.jsx'
import { caretaker, dosageReminders, medicalHistory, patient } from '../data/patientDashboard.js'

const sectionCopy = {
  caretaker: ['My Caretaker', 'Stay connected with your assigned ASHA worker.'],
  history: ['Medical History', 'A clear record of your consultations and care notes.'],
  dosage: ['Dosage Reminders', 'Keep track of medicines and daily schedules.'],
  alerts: ['Alerts', 'Important personal and caretaker updates in one place.'],
  qr: ['QR Center', 'Share your MIRA profile quickly with your healthcare worker.'],
  language: ['Language Preferences', 'Choose the language that feels most comfortable.'],
  help: ['Help & Support', 'Find answers and reach the MIRA support team.'],
  settings: ['App Settings', 'Manage your notifications, privacy, and preferences.'],
  profile: ['Patient Profile', 'Your personal information and MIRA account details.'],
}

function SectionHeader({ title, description, onHome }) {
  return (
    <div className="patient-section__header">
      <button type="button" className="patient-section__back" onClick={onHome}>
        <DashboardIcon name="arrow-right" size={17} /> Home
      </button>
      <p className="patient-section__eyebrow">MIRA PATIENT CARE</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

function CaretakerView() {
  return <div className="patient-section__card patient-section__caretaker-card">
    <img src={patient.avatar || '/placeholder.svg'} alt="" className="patient-section__large-avatar" />
    <div><span className="patient-section__tag">Assigned ASHA Worker</span><h2>{caretaker.name}</h2><p>{caretaker.role}</p></div>
    <dl className="patient-section__details"><div><dt><DashboardIcon name="phone" size={16} /> Contact</dt><dd>{caretaker.phone}</dd></div><div><dt><DashboardIcon name="map-pin" size={16} /> Area</dt><dd>{caretaker.area}</dd></div><div><dt>Availability</dt><dd>{caretaker.availability}</dd></div><div><dt>Assigned date</dt><dd>{caretaker.assignedDate}</dd></div></dl>
    <button type="button" className="pdash-btn pdash-btn--primary"><DashboardIcon name="phone" size={16} /> Contact Caretaker</button>
  </div>
}

function HistoryView() {
  return <div className="patient-section__timeline">{medicalHistory.map((entry) => <article className="patient-section__history-entry" key={entry.date}><span className={`patient-section__timeline-dot patient-section__timeline-dot--${entry.tone}`} /><div><time>{entry.date}</time><h2>{entry.title}</h2><p>{entry.detail}</p></div></article>)}</div>
}

function DosageView() {
  const [reminders, setReminders] = useState(dosageReminders)
  function markTaken(id) { setReminders((current) => current.map((item) => item.id === id ? { ...item, status: 'Taken' } : item)) }
  return <div className="patient-section__stack">{reminders.map((item) => <article className="patient-section__card patient-section__dose" key={item.id}><span className="patient-section__dose-icon"><DashboardIcon name="pill" size={22} /></span><div><h2>{item.name}</h2><p>{item.dose} · {item.frequency} · {item.time}</p></div><span className={`patient-section__status patient-section__status--${item.status.toLowerCase()}`}>{item.status}</span>{item.status === 'Pending' && <button type="button" className="pdash-btn pdash-btn--primary" onClick={() => markTaken(item.id)}>Mark as Taken</button>}</article>)}</div>
}

function AlertsView() {
  return <div className="patient-section__alert-groups"><section className="patient-section__card"><div className="patient-section__subhead"><h2>Personal alerts</h2><span>2 new</span></div><SimpleListView items={['Medicine reminder · Today, 8:00 AM', 'Follow-up appointment · 24 August']} /></section><section className="patient-section__card"><div className="patient-section__subhead"><h2>Caretaker alerts</h2><span>1 new</span></div><SimpleListView items={['Anita sent you a message', 'Health check reminder · This Friday']} /></section></div>
}

function SimpleListView({ items }) {
  return <div className="patient-section__stack">{items.map((item) => <button type="button" className="patient-section__list-item" key={item}><span>{item}</span><DashboardIcon name="chevron-right" size={18} /></button>)}</div>
}

function SectionContent({ active }) {
  if (active === 'caretaker') return <CaretakerView />
  if (active === 'history') return <HistoryView />
  if (active === 'dosage') return <DosageView />
  if (active === 'alerts') return <AlertsView />
  if (active === 'qr') return <div className="patient-section__card patient-section__qr"><div className="patient-section__qr-code" aria-label="Demo MIRA QR code">MIRA</div><h2>Your personal MIRA QR code</h2><p>Show your QR code to your healthcare worker for quick access to your MIRA profile.</p><button type="button" className="pdash-btn pdash-btn--primary">Show QR in full screen</button></div>
  if (active === 'language') return <LanguageView />
  if (active === 'help') return <SimpleListView items={['Frequently Asked Questions', 'How to use MIRA', 'Contact support', 'Emergency guidance']} />
  if (active === 'settings') return <SimpleListView items={['Notification preferences', 'Privacy', 'Accessibility', 'App preferences']} />
  return <div className="patient-section__card patient-section__profile-card"><img src={patient.avatar || '/placeholder.svg'} alt="" className="patient-section__large-avatar" /><h2>{patient.fullName}</h2><p>Patient ID · MIRA-10245</p><dl className="patient-section__details"><div><dt>Age</dt><dd>42 Years</dd></div><div><dt>Contact</dt><dd>+91 98765 12345</dd></div></dl><button type="button" className="pdash-btn pdash-btn--primary"><DashboardIcon name="edit" size={16} /> Edit Profile</button></div>
}

function LanguageView() {
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  return <div className="patient-section__card"><h2>Select your language</h2><div className="patient-section__choices">{['English', 'Hindi', 'Regional Language'].map((language) => <button type="button" className={`patient-section__choice${language === selectedLanguage ? ' patient-section__choice--selected' : ''}`} onClick={() => setSelectedLanguage(language)} key={language}>{language}<span>{language === selectedLanguage ? 'Selected' : 'Choose'}</span></button>)}</div></div>
}

function PatientSectionView({ active, onHome }) {
  const [title, description] = sectionCopy[active] || sectionCopy.profile
  return <main className="patient-section"><SectionHeader title={title} description={description} onHome={onHome} /><SectionContent active={active} /></main>
}

export default PatientSectionView
