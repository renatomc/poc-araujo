'use client'

import {
  getProductDetails,
  getTemplateOptions,
} from '@/services/questionServices'
import { QuestionResponseData } from '@/services/types/questionResponseType'
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useCallback,
} from 'react'

type RequestData = {
  name: string
  ean: string
}

interface ContextProps {
  setDataRequest: Dispatch<SetStateAction<RequestData>>
  handleGetData: () => void
  dataResponse: QuestionResponseData
  isLoading: boolean
  loaderStatus: number
}

const GlobalContext = createContext<ContextProps>({
  dataResponse: {
    response: {
      categoria: '',
      composicao_simplificada: '',
      contra_indicacao: '',
      descricao: '',
      descricao_detalhada: '',
      ean: '',
      fabricantes: '',
      indicacao_de_uso: '',
      marcas: '',
      nome: '',
    },
  },
  setDataRequest: (): RequestData => {
    return { ean: '', name: '' }
  },
  isLoading: false,
  loaderStatus: 0,
  handleGetData: () => {},
})

// @ts-expect-error
export const GlobalContextProvider = ({ children }) => {
  const [loaderStatus, setLoaderStatus] = useState<number>(0)
  const [intervalId, setIntervalId] = useState<string | number | undefined>(
    undefined,
  )
  const [dataRequest, setDataRequest] = useState<RequestData>({} as RequestData)
  const [dataResponse, setDataResponse] = useState<QuestionResponseData>(
    {} as QuestionResponseData,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const addLoaderStatus = useCallback(() => {
    setLoaderStatus((prev) => {
      if (prev <= 90) return prev + 10
      return prev
    })
  }, [])

  useEffect(() => {
    if (isLoading && !intervalId) {
      const interval = setInterval(() => {
        addLoaderStatus()
      }, 500)
      // @ts-expect-error
      setIntervalId(interval)
    }
  }, [isLoading, addLoaderStatus, intervalId])

  useEffect(() => {
    if (!isLoading && intervalId) {
      setLoaderStatus(100)
      clearInterval(intervalId)
      setIntervalId(undefined)
    }
    if (!isLoading && !intervalId) {
      setLoaderStatus(0)
    }
  }, [isLoading, intervalId])

  const getTemplateRequest = useCallback(async (): Promise<string> => {
    const response = await getTemplateOptions()
    if (response.length > 0) {
      const [template] = response
      let templateResponse = template.content.replace(
        '{product_name}',
        dataRequest.name,
      )
      templateResponse = templateResponse.replace(
        '{product_ean}',
        dataRequest.ean,
      )

      return templateResponse
    }
    return ''
  }, [dataRequest])

  const handleGetData = useCallback(async () => {
    setIsLoading(true)
    const template = await getTemplateRequest()
    const response = await getProductDetails(template)
    console.log({ dados: response })
    setDataResponse(response)
    setIsLoading(false)
  }, [getTemplateRequest])

  return (
    <GlobalContext.Provider
      value={{
        dataResponse,
        setDataRequest,
        isLoading,
        loaderStatus,
        handleGetData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
