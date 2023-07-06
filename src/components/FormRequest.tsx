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
  const [isRequiredError, setIsRequiredError] = useState(false)

  useEffect(() => {
    setDataRequest({
      name,
      ean,
    })
  }, [name, ean, setDataRequest])

  const handleClickSearch = useCallback(() => {
    if (!name || !ean) {
      setIsRequiredError(true)
      return
    }

    setIsRequiredError(false)
    handleGetData()
  }, [name, ean, handleGetData])

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
          required
        />
        {isRequiredError && !name && (
          <span className="text-red-500">Campo obrigatório.</span>
        )}
        <Input
          name="EAN"
          placeholder="Informe o código EAN"
          setValue={setEan}
          value={ean}
          required
        />
        {isRequiredError && !ean && (
          <span className="text-red-500">Campo obrigatório.</span>
        )}
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
