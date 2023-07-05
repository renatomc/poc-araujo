import Image from 'next/image'
import logo from '../assets/logo.svg'
import { FormData } from '@/components/FormData'
import { Footer } from '@/components/Footer'
import { FormRequest } from '@/components/FormRequest'

export default function Home() {
  return (
    <div className="">
      <main className="grid min-h-screen grid-cols-12">
        <div className="col-span-4 ml-20 flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center justify-center align-middle">
            <div className="mb-14 flex  justify-center">
              <Image src={logo} alt="Logo" width={200} height={60} />
            </div>
            <FormRequest />
          </div>
          <div className="ml-20 h-5/6 w-1 bg-gray-300"></div>
        </div>

        <div className="col-span-8 flex flex-col p-16">
          <FormData />
        </div>
      </main>
      <Footer />
    </div>
  )
}
