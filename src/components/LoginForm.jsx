import { useState } from 'react'

// Reusable MIRA login form.
// MVP only: no real auth yet. `onSubmit({ id, password })` is called once
// both fields pass basic client-side validation, so you can swap in a real
// authentication call later without touching the UI.

function LoginForm({ onSubmit }) {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const isValid = id.trim() !== '' && password.trim() !== ''

  function handleSubmit(event) {
    event.preventDefault()

    if (!isValid) {
      setError('Please enter both your ID and password.')
      return
    }

    setError('')
    if (typeof onSubmit === 'function') {
      onSubmit({ id: id.trim(), password })
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="login-form__field">
        <label className="login-form__label" htmlFor="mira-id">
          ID
        </label>
        <input
          id="mira-id"
          className="login-form__input"
          type="text"
          value={id}
          onChange={(event) => {
            setId(event.target.value)
            if (error) setError('')
          }}
          placeholder="Enter your ID"
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
        />
      </div>

      <div className="login-form__field">
        <label className="login-form__label" htmlFor="mira-password">
          Password
        </label>
        <div className="login-form__password">
          <input
            id="mira-password"
            className="login-form__input"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
              if (error) setError('')
            }}
            placeholder="Enter your password"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="login-form__toggle"
            onClick={() => setShowPassword((show) => !show)}
            aria-pressed={showPassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
      </div>

      <div className="login-form__meta">
        <button type="button" className="login-form__link">
          Forgot password?
        </button>
      </div>

      {error ? (
        <p className="login-form__error" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="login-form__submit"
        disabled={!isValid}
      >
        Continue
        <span aria-hidden="true" className="login-form__arrow">
          →
        </span>
      </button>
    </form>
  )
}

/* Password visibility icons ------------------------------------------- */
function EyeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M9.9 4.24A9.1 9.1 0 0 1 12 4c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3 3.86" />
      <path d="M6.6 6.6A17.6 17.6 0 0 0 2 12s3.5 7 10 7a9.1 9.1 0 0 0 4.2-1" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
      <path d="m2 2 20 20" />
    </svg>
  )
}

export default LoginForm
