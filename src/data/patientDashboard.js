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
