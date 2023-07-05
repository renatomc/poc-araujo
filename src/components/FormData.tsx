'use client'
import { useGlobalContext } from '@/app/Context/store'
import { InputData } from './InputData'
import { NoData } from './NoData'
import { Loader } from './Loader'

export function FormData() {
  const { dataResponse, isLoading } = useGlobalContext()

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !dataResponse?.name && <NoData />}
      {!isLoading && dataResponse?.name && (
        <div>
          <h1 className="font-sans text-[32px] font-normal not-italic leading-[normal] text-text-secondary">
            Confira os dados
          </h1>
          <div className="mt-9 flex flex-col gap-[26px]">
            <div className="flex w-[100%] items-center gap-6">
              <InputData label="Nome" value={dataResponse?.name} />
              <InputData
                label="Marca"
                value="Lorem Ipsum is simply dum simply"
              />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Descrição"
                value="Lorem Ipsum is simply dum lorem Ipsum is simply dum lorem Ipsum is simply dum"
              />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Categoria"
                value="Lorem Ipsum is simply dum simply "
              />
              <InputData
                label="Fabricante"
                value="Lorem Ipsum is simply dum simply"
              />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Indicação de uso"
                value="Lorem Ipsum is simply dum simply "
              />
              <InputData
                label="Contra indicação"
                value="Lorem Ipsum is simply dum simply"
              />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Descrição simples"
                value="Lorem Ipsum is simply dum lorem Ipsum is simply dum lorem Ipsum is simply dum"
              />
            </div>
            <div className="flex w-[100%] items-center gap-6">
              <InputData
                label="Descrição detalhada"
                value="Lorem Ipsum is simply dum lorem Ipsum is simply Lorem Ipsum is simply dum lorem ipsum is simply Lorem Ipsum is simply dum lorem Ipsum is simply Lorem Ipsum is simply dum lorem Ipsum is simply Lorem Ipsum is simply dum lorem Ipsum is simply "
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
