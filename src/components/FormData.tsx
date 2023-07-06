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
        <div className="mt-6 lg:mt-0">
          <h1 className="text-center font-sans text-[32px] font-normal not-italic leading-[normal] text-text-secondary lg:text-left">
            Confira os dados
          </h1>
          <div className="mt-9 flex flex-col gap-[26px] pl-4 pr-4">
            <div className="hidden w-[100%] items-center gap-6 lg:flex">
              <InputData label="Nome" value={dataFormatted.nome} />
              <InputData label="Marca" value={dataFormatted.marcas} />
            </div>
            <div className="flex w-[100%] items-center gap-6 lg:hidden">
              <InputData label="Nome" value={dataFormatted.nome} />
            </div>
            <div className="flex w-[100%] items-center gap-6 lg:hidden">
              <InputData label="Marca" value={dataFormatted.marcas} />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData label="Descrição" value={dataFormatted.descricao} />
            </div>
            <div className="hidden w-[100%] items-center gap-6 lg:flex">
              <InputData label="Categoria" value={dataFormatted.categoria} />
              <InputData label="Fabricante" value={dataFormatted.fabricantes} />
            </div>
            <div className="hidden w-[100%] items-center gap-6 lg:flex">
              <InputData
                label="Indicação de uso"
                value={dataFormatted.indicacao_de_uso}
              />
              <InputData
                label="Contra indicação"
                value={dataFormatted.contra_indicacao}
              />
            </div>
            <div className="flex w-[100%] items-center gap-6 lg:hidden">
              <InputData
                label="Indicação de uso"
                value={dataFormatted.indicacao_de_uso}
              />
            </div>
            <div className="flex w-[100%] items-center gap-6 lg:hidden">
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
