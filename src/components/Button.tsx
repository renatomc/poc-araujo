type ButtonProps = {
  name: string
  onClick: () => void
}

export function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      className="mb-5 mt-8 h-16 w-80 rounded-md bg-button-primary text-button_text-primary"
      onClick={() => onClick()}
    >
      {name}
    </button>
  )
}
