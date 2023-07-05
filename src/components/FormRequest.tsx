'use client'

import { useCallback, useEffect, useState } from 'react'
import { Button } from './Button'
import { ButtonOutLine } from './ButtonOutLine'
import { Input } from './Input'
import { useGlobalContext } from '@/app/Context/store'
import { JoStatus } from './JoStatus'

export function FormRequest() {
  const [name, setName] = useState<string>('')
  const [ean, setEan] = useState<string>('')

  const { setDataRequest, handleGetData } = useGlobalContext()

  useEffect(() => {
    setDataRequest({
      name,
      ean,
    })
  }, [name, ean, setDataRequest])

  const handleClickSearch = useCallback(() => {
    handleGetData()
  }, [handleGetData])

  const handleClear = useCallback(() => {
    setName('')
    setEan('')
  }, [setName, setEan])

  return (
    <div>
      <div className="flex flex-col">
        <Input
          name="Nome do Produto"
          placeholder="Informe o nome do produto"
          setValue={setName}
          value={name}
        />
        <Input
          name="EAN"
          placeholder="Informe o código EAN"
          setValue={setEan}
          value={ean}
        />
      </div>
      <div className="flex flex-col">
        <Button name="Buscar" onClick={handleClickSearch} />
        <ButtonOutLine name="Limpar" onClick={handleClear} />
      </div>
      <div className="mt-10">
        <JoStatus />
      </div>
    </div>
  )
}
