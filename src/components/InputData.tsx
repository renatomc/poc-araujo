import { CopyToClipboard } from 'react-copy-to-clipboard'
import { TbCopy } from 'react-icons/tb'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type InputDataProps = {
  label: string
  value: string
}

export function InputData({ label, value }: InputDataProps) {
  function showToast() {
    toast.success('Copiado com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  return (
    <div className="flex w-[100%] flex-col gap-1">
      <span className="text-sm font-normal text-text-secondary">{label}</span>
      <div className="flex items-center justify-between rounded bg-input_bg-primary px-[23px] py-[20px]">
        <span>{value}</span>
        <div>
          <CopyToClipboard text={value}>
            <div className="cursor-pointer" onClick={() => showToast()}>
              <TbCopy color="#555555" size={25} />
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}
