import { useState } from 'react'
import RoleSelection from './components/RoleSelection.jsx'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import PatientDashboard from './pages/PatientDashboard.jsx'

// Simple screen-based navigation (no router dependency).
// Flow: role selection -> login -> placeholder dashboard.
// Swap this for react-router later if you need real URLs.

function App() {
  const [screen, setScreen] = useState('roles') // 'roles' | 'login' | 'dashboard'
  const [selectedRole, setSelectedRole] = useState(null)

  // Role selection -> Login
  function handleContinue(role) {
    setSelectedRole(role)
    setScreen('login')
  }

  // Login "Change role" -> back to role selection
  function handleChangeRole() {
    setScreen('roles')
  }

  // Login submit (MVP: no real auth) -> dashboard
  function handleLogin({ id }) {
    // Wire real authentication here later using { id, password }.
    console.log('[MIRA] Sign in as role:', selectedRole, 'id:', id)
    setScreen('dashboard')
  }

  // Dashboard -> back to start
  function handleSignOut() {
    setSelectedRole(null)
    setScreen('roles')
  }

  if (screen === 'login') {
    return (
      <Login
        roleId={selectedRole}
        onChangeRole={handleChangeRole}
        onSubmit={handleLogin}
      />
    )
  }

  if (screen === 'dashboard') {
    // Patients get the full MIRA home dashboard.
    // Other roles keep their existing (separate) placeholder for now.
    if (selectedRole === 'patient') {
      return <PatientDashboard onSignOut={handleSignOut} />
    }
    return <Dashboard roleId={selectedRole} onSignOut={handleSignOut} />
  }

  return <RoleSelection onContinue={handleContinue} />
}

export default App
