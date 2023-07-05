'use client'

import { useGlobalContext } from '@/app/Context/store'

export function Loader() {
  const { loaderStatus } = useGlobalContext()

  return (
    <div className="flex h-[100%] flex-col items-center justify-center gap-[8px]">
      <div className="relative h-[8px] w-[328px] rounded-[4px] bg-button_border-secondary">
        <div
          className={`absolute left-0 top-0 h-[8px] w-[90%] rounded-[4px] bg-button-primary`}
          style={{ width: `${loaderStatus}%` }}
        />
      </div>
      <span className="text-base font-medium text-text-secondary">
        Carregando...
      </span>
    </div>
  )
}
