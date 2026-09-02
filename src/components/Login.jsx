import { roles } from '../data/roles.js'
import RoleIcon from './RoleIcon.jsx'
import LoginForm from './LoginForm.jsx'
import './Login.css'

// MIRA login page — one component reused for every role.
// It receives the selected `roleId` and looks up the matching role config,
// so the identity block adapts automatically.
//
// Props:
//   roleId       - id of the selected role (matches src/data/roles.js)
//   onChangeRole - go back to the role-selection screen
//   onSubmit     - called with { id, password } after basic validation

function Login({ roleId, onChangeRole, onSubmit }) {
  const role = roles.find((item) => item.id === roleId) ?? roles[0]

  return (
    <div className="mira mira--login">
      <header className="mira__header">
        <span className="mira__logo">MIRA</span>
        <span className="mira__tagline">Healthcare, made accessible.</span>
      </header>

      <main className="login">
        <section className="login__panel" aria-labelledby="login-heading">
          <div className="login__identity">
            <span className="login__identity-icon">
              <RoleIcon name={role.icon} />
            </span>
            <span className="login__identity-text">
              <span className="login__identity-label">Signing in as</span>
              <span className="login__identity-role">{role.title}</span>
            </span>
            <button
              type="button"
              className="login__change"
              onClick={onChangeRole}
            >
              Change role
            </button>
          </div>

          <div className="login__intro">
            <h1 id="login-heading" className="login__heading">
              Welcome back
            </h1>
            <p className="login__subheading">
              Sign in to continue to your MIRA dashboard.
            </p>
          </div>

          <LoginForm onSubmit={onSubmit} />
        </section>
      </main>
    </div>
  )
}

export default Login
