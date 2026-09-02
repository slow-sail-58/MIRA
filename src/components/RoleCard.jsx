import RoleIcon from './RoleIcon.jsx'

// A single selectable role card.
// Rendered as a <button> so it is keyboard- and screen-reader-accessible.

function RoleCard({ role, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`role-card${selected ? ' role-card--selected' : ''}`}
      aria-pressed={selected}
      onClick={() => onSelect(role.id)}
    >
      <span className="role-card__check" aria-hidden={!selected}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>

      <span className="role-card__icon">
        <RoleIcon name={role.icon} />
      </span>

      <span className="role-card__title">{role.title}</span>
      <span className="role-card__description">{role.description}</span>
    </button>
  )
}

export default RoleCard
