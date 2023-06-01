import { Outlet } from 'react-router-dom'
import Notify from './Notify'

export default function Header() {
  return (
    <>
      <header className="flex flex-col min-w-full h-[100vh] bg-banner bg-center bg-cover">
        <Notify />
      </header>
      <Outlet />
    </>
  )
}
