// Reusable data for the three MIRA roles.
// Add/adjust roles here and the UI updates automatically.
// `id` is also handy for routing each role to its own page later.

export const roles = [
  {
    id: 'patient',
    title: 'Patient / User',
    description:
      'Get healthcare guidance, manage appointments and medicines, and keep track of your health information.',
    icon: 'user',
  },
  {
    id: 'professional',
    title: 'Healthcare Professional',
    description:
      'Support patients, access relevant health information, and manage consultations efficiently.',
    icon: 'stethoscope',
  },
  {
    id: 'caregiver',
    title: 'Caregiver / Family Member',
    description:
      'Help manage healthcare needs, medicines, appointments, and records for a family member.',
    icon: 'family',
  },
]
