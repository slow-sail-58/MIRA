// Simple, dependency-free inline SVG icons for the role cards.
// Pick an icon by name (matches the `icon` field in src/data/roles.js).

function RoleIcon({ name, className }) {
  const common = {
    className,
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  }

  switch (name) {
    case 'user':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
        </svg>
      )
    case 'stethoscope':
      return (
        <svg {...common}>
          <path d="M6 3v5a4 4 0 0 0 8 0V3" />
          <path d="M10 15v1a5 5 0 0 0 10 0v-2" />
          <circle cx="20" cy="11" r="2" />
        </svg>
      )
    case 'family':
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M2.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
          <path d="M15 20c0-2.4 1.5-4 3.5-4s3 1.4 3 3.5" />
        </svg>
      )
    default:
      return null
  }
}

export default RoleIcon
