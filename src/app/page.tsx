import Image from 'next/image'
import logo from '../assets/logo.svg'
import { FormData } from '@/components/FormData'
import { Footer } from '@/components/Footer'
import { FormRequest } from '@/components/FormRequest'

export default function Home() {
  return (
    <div className="pb-8 pl-0 pr-0 pt-8">
      <main className="grid min-h-screen pb-4 pt-4 sm:grid-cols-4 lg:grid-cols-12">
        <div className="flex flex-1 items-center justify-center sm:col-span-4 lg:col-span-4 lg:ml-20">
          <div className="flex flex-col items-center justify-center align-middle">
            <div className="mb-14 flex  justify-center">
              <Image src={logo} alt="Logo" width={200} height={60} />
            </div>
            <FormRequest />
          </div>
          <div className="sm:invisible sm:hidden lg:ml-20 lg:h-5/6 lg:w-1 lg:bg-gray-300"></div>
        </div>

        <div className="flex flex-col pb-8 sm:col-span-4 sm:mb-8 lg:col-span-8 lg:p-16 lg:pb-0">
          <FormData />
        </div>
      </main>
      <Footer />
    </div>
  )
}
