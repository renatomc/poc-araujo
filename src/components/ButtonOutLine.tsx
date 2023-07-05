type ButtonOutLineProps = {
  name: string
  onClick: () => void
}

export function ButtonOutLine({ name, onClick }: ButtonOutLineProps) {
  return (
    <button
      onClick={() => onClick()}
      className="font-roboto h-16 w-80 rounded-md border border-gray-300 bg-button-secondary font-normal text-button_text-secondary"
    >
      {name}
    </button>
  )
}
