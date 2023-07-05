import { Dispatch, SetStateAction } from 'react'

type InputProps = {
  name: string
  setValue: Dispatch<SetStateAction<string>>
  value: string
  placeholder?: string
}

export function Input({ name, setValue, value, placeholder = '' }: InputProps) {
  return (
    <div className="flex flex-col">
      <span className="font-roboto mb-1 text-left text-sm font-normal text-gray-700">
        {name}
      </span>
      <input
        type="text"
        className="mb-8 h-16 w-80 rounded-md border border-gray-300 p-5 text-lg font-semibold text-text-secondary"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
