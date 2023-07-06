'use client'
import { useGlobalContext } from '@/app/Context/store'
import { InputData } from './InputData'
import { NoData } from './NoData'
import { Loader } from './Loader'
import { useMemo } from 'react'

export function FormData() {
  const { dataResponse, isLoading } = useGlobalContext()

  const dataFormatted = useMemo(() => {
    if (dataResponse?.response) {
      return dataResponse.response
    }
    return null
  }, [dataResponse])

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !dataFormatted && <NoData />}
      {!isLoading && dataFormatted && (
        <div>
          <h1 className="font-sans text-[32px] font-normal not-italic leading-[normal] text-text-secondary">
            Confira os dados
          </h1>
          <div className="mt-9 flex flex-col gap-[26px]">
            <div className="flex w-[100%] items-center gap-6">
              <InputData label="Nome" value={dataFormatted.nome} />
              <InputData label="Marca" value={dataFormatted.marcas} />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData label="Descrição" value={dataFormatted.descricao} />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData label="Categoria" value={dataFormatted.categoria} />
              <InputData label="Fabricante" value={dataFormatted.fabricantes} />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Indicação de uso"
                value={dataFormatted.indicacao_de_uso}
              />
              <InputData
                label="Contra indicação"
                value={dataFormatted.contra_indicacao}
              />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Descrição simples"
                value={dataFormatted.descricao}
              />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Descrição detalhada"
                value={dataFormatted.descricao_detalhada}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
