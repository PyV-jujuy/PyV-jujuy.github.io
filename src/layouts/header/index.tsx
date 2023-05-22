import Navbar from './Navbar'
import Notify from './Notify'

export function Header() {
  return (
    <header className="flex flex-col min-w-full h-[100vh] bg-banner bg-center bg-cover">
      <Notify />
    </header>
  )
}
