/* eslint-disable @next/next/no-img-element */

'use client'

import joAtencao from '../assets/jo-atencao.svg'
import joDuvida from '../assets/jo-duvida.svg'
import joSucesso from '../assets/jo-sucesso.svg'

import { useGlobalContext } from '@/app/Context/store'
import { useEffect, useMemo, useState } from 'react'

export function JoStatus() {
  const [fadeIn, setFadeIn] = useState(false)
  const { isLoading, dataResponse } = useGlobalContext()

  const status = useMemo(() => {
    if (!isLoading && !dataResponse.name) {
      return {
        img: joAtencao,
        text: 'Preencha e busque para exibir resultados!',
      }
    } else if (isLoading && !dataResponse.name) {
      return {
        img: joDuvida,
        text: 'Um instante, estamos buscando os dados!',
      }
    } else if (!isLoading && dataResponse.name) {
      return {
        img: joSucesso,
        text: 'Fique a vontade para pesquisar outros produtos!',
      }
    }
  }, [isLoading, dataResponse])

  useEffect(() => {
    if (!status?.img) return
    setFadeIn(true)
    setTimeout(() => {
      setFadeIn(false)
    }, 500)
  }, [status])

  console.log({ status })

  return (
    <div className={`transition-opacity opacity-${fadeIn ? '5' : '100'}`}>
      {status?.img && (
        <div className="flex flex-col items-center gap-10">
          <div className="relative h-[164px] w-[136px]">
            <img src={status?.img.src} alt="Logo" />
          </div>
          <span className="text-sm">{status?.text}</span>
        </div>
      )}
    </div>
  )
}
