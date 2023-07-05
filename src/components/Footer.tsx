import Image from 'next/image'
import footer from '../assets/footer.svg'

export function Footer() {
  return (
    <footer className="fixed bottom-0 flex h-16 w-full justify-center bg-footer-primary">
      <Image src={footer} alt="logo-footer" width={190} height={25} />
    </footer>
  )
}
