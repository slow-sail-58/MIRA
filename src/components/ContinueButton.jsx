// Centered call-to-action button.
// Appears subtle/disabled until a role is selected.

function ContinueButton({ disabled, onClick }) {
  return (
    <button
      type="button"
      className="continue-button"
      disabled={disabled}
      onClick={onClick}
    >
      Continue
      <span aria-hidden="true" className="continue-button__arrow">
        →
      </span>
    </button>
  )
}

export default ContinueButton
