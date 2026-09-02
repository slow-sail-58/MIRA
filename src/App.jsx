import RoleSelection from './components/RoleSelection.jsx'

function App() {
  // Later, connect each role to its own dashboard/route here.
  // e.g. with react-router: const navigate = useNavigate(); navigate(`/${role}`)
  function handleContinue(role) {
    console.log('[MIRA] Continue with role:', role)
  }

  return <RoleSelection onContinue={handleContinue} />
}

export default App
