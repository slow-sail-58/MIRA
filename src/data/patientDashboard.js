// Mock/demo data for the MIRA Patient dashboard.
// All content is placeholder for the hackathon demo — no backend required.

export const patient = {
  firstName: 'Sita',
  fullName: 'Sita Devi',
  avatar: '/mira/patient-avatar.png',
}

export const healthSummary = [
  { id: 'age', label: 'Age', value: '42 Years', icon: 'age' },
  { id: 'blood', label: 'Blood Group', value: 'B+', icon: 'blood' },
  { id: 'weight', label: 'Weight', value: '58 kg', icon: 'weight' },
  { id: 'patientId', label: 'Patient ID', value: 'MIRA-10245', icon: 'id' },
]

export const quickActions = [
  {
    id: 'doctor',
    title: 'Connect with Doctor',
    description: 'Talk to your doctor',
    icon: 'stethoscope',
    tone: 'blue',
  },
  {
    id: 'caretaker',
    title: 'Connect with Caretaker',
    description: 'Get help from your ASHA worker',
    icon: 'caregiver',
    tone: 'green',
  },
  {
    id: 'sos',
    title: 'Emergency SOS',
    description: 'Get emergency assistance',
    icon: 'sos',
    tone: 'alert',
  },
]

export const medicine = {
  name: 'Metformin 500 mg',
  dose: 'Take 1 tablet',
  timing: 'After breakfast',
  time: '8:00 AM',
}

export const timeline = [
  {
    id: 't1',
    when: 'Today · 8:00 AM',
    text: 'Medicine reminder – Take Metformin',
    tone: 'blue',
    icon: 'pill',
  },
  {
    id: 't2',
    when: 'Yesterday · 4:30 PM',
    text: 'Doctor consultation completed',
    tone: 'green',
    icon: 'stethoscope',
  },
  {
    id: 't3',
    when: '2 Days Ago · 11:15 AM',
    text: 'Prescription added',
    tone: 'blue',
    icon: 'medicine',
  },
  {
    id: 't4',
    when: '5 Days Ago · 10:00 AM',
    text: 'Follow-up appointment scheduled',
    tone: 'green',
    icon: 'calendar',
  },
]

export const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'appointments', label: 'Appointments', icon: 'calendar' },
  { id: 'medicines', label: 'Medicines', icon: 'medicine' },
  { id: 'health', label: 'Health', icon: 'health' },
  { id: 'profile', label: 'Profile', icon: 'profile' },
]

export const sidebarGroups = [
  {
    id: 'healthcare',
    label: 'Healthcare',
    items: [
      { id: 'home', label: 'Home', icon: 'home', description: 'Your health overview' },
      { id: 'caretaker', label: 'My Caretaker', icon: 'caregiver', description: 'Assigned ASHA Worker' },
      { id: 'history', label: 'Medical History', icon: 'clipboard', description: 'Consultations and notes' },
      { id: 'dosage', label: 'Dosage Reminders', icon: 'pill', description: 'Medicines and schedules' },
      { id: 'alerts', label: 'Alerts', icon: 'bell', description: 'Personal and caretaker updates', unread: true },
      { id: 'qr', label: 'QR Center', icon: 'qr', description: 'Your personal MIRA QR' },
    ],
  },
  {
    id: 'support',
    label: 'Support & Preferences',
    items: [
      { id: 'language', label: 'Language', icon: 'globe', description: 'Choose your language' },
      { id: 'help', label: 'Help', icon: 'help', description: 'Guidance and support' },
      { id: 'settings', label: 'Settings', icon: 'settings', description: 'App preferences' },
    ],
  },
]

export const caretaker = {
  name: 'Anita Kumari',
  role: 'ASHA Worker',
  phone: '+91 98765 43210',
  area: 'Rampur Village',
  availability: 'Available today, 9 AM - 5 PM',
  assignedDate: '12 January 2024',
}

export const medicalHistory = [
  { date: '18 August 2026', title: 'Follow-up consultation', detail: 'Blood pressure is stable. Continue current care plan.', tone: 'blue' },
  { date: '05 June 2026', title: 'Seasonal allergy', detail: 'Prescribed antihistamine for five days.', tone: 'green' },
  { date: '22 March 2026', title: 'Routine health check', detail: 'No new allergies reported. Previous prescription reviewed.', tone: 'blue' },
]

export const dosageReminders = [
  { id: 'dose-1', name: 'Metformin 500 mg', dose: '1 tablet', time: '8:00 AM', frequency: 'Daily', status: 'Pending' },
  { id: 'dose-2', name: 'Vitamin D3', dose: '1 capsule', time: '1:00 PM', frequency: 'Every Sunday', status: 'Taken' },
]
