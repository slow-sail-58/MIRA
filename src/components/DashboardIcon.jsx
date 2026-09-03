// Dependency-free inline SVG icon set for the MIRA patient dashboard.
// Pick an icon by `name`. Sizing/color come from props + CSS (currentColor).

function DashboardIcon({ name, size = 22, className, strokeWidth = 1.75 }) {
  const common = {
    className,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    focusable: false,
  }

  switch (name) {
    case 'menu':
      return (
        <svg {...common}>
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      )
    case 'bell':
      return (
        <svg {...common}>
          <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
          <path d="M10 20a2 2 0 0 0 4 0" />
        </svg>
      )
    case 'chevron-right':
      return (
        <svg {...common}>
          <path d="M9 6l6 6-6 6" />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    case 'age':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'blood':
      return (
        <svg {...common}>
          <path d="M12 3c3.5 4.2 6 7.3 6 10.2A6 6 0 0 1 6 13.2C6 10.3 8.5 7.2 12 3z" />
        </svg>
      )
    case 'weight':
      return (
        <svg {...common}>
          <path d="M5 8h14l2 12H3L5 8z" />
          <path d="M9 8a3 3 0 0 1 6 0" />
        </svg>
      )
    case 'id':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="11" r="2" />
          <path d="M6 16c.4-1.3 1.4-2 2.5-2s2.1.7 2.5 2" />
          <path d="M14 10h4M14 13h4" />
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
    case 'caregiver':
      return (
        <svg {...common}>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
          <path d="M12 10.5v3M10.5 12h3" />
        </svg>
      )
    case 'sos':
      return (
        <svg {...common}>
          <path d="M12 3v3M4.9 6.3l2.1 2.1M2 13h3M19 13h3M17 8.4l2.1-2.1" />
          <path d="M7 20a5 5 0 0 1 10 0z" />
        </svg>
      )
    case 'pill':
      return (
        <svg {...common}>
          <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(45 12 12)" />
          <path d="M9 9l6 6" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="M5 12l5 5 9-11" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'cloud-off':
      return (
        <svg {...common}>
          <path d="M17 17H7a4 4 0 0 1-.8-7.9" />
          <path d="M8 5.5A5 5 0 0 1 18 8a3.5 3.5 0 0 1 1.5 6.6" />
          <path d="M3 3l18 18" />
        </svg>
      )
    case 'retry':
      return (
        <svg {...common}>
          <path d="M20 12a8 8 0 1 1-2.3-5.6" />
          <path d="M20 4v4h-4" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M4 11l8-7 8 7" />
          <path d="M6 10v9h12v-9" />
        </svg>
      )
    case 'calendar':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <path d="M4 9h16M8 3v4M16 3v4" />
        </svg>
      )
    case 'medicine':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    case 'health':
      return (
        <svg {...common}>
          <path d="M20.8 6.6a5 5 0 0 0-8.8-2 5 5 0 0 0-8.8 2c-.9 3.2 1.8 6 4.4 8.3L12 20l4.4-5.1c2.6-2.3 5.3-5.1 4.4-8.3z" />
        </svg>
      )
    case 'profile':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
        </svg>
      )
    default:
      return null
  }
}

export default DashboardIcon
