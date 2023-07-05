'use client'

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useCallback,
} from 'react'

type ResponseData = {
  name: string
  description: string
}

type RequestData = {
  name: string
  ean: string
}

interface ContextProps {
  setDataRequest: Dispatch<SetStateAction<RequestData>>
  handleGetData: () => void
  dataResponse: ResponseData
  isLoading: boolean
  loaderStatus: number
}

const GlobalContext = createContext<ContextProps>({
  dataResponse: { description: '', name: '' },
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
  const [dataResponse, setDataResponse] = useState<ResponseData>(
    {} as ResponseData,
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

  const handleGetData = useCallback(() => {
    setIsLoading(true)
    setDataResponse({} as ResponseData)
    setTimeout(() => {
      setDataResponse({
        description: 'Teste descrição',
        name: dataRequest.name,
      })
      setIsLoading(false)
    }, 2000)
  }, [dataRequest])

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
