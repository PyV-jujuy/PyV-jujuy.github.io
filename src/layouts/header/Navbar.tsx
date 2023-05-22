import { Socials } from 'src/components/socials'

export default function Navbar() {
  return (
    <nav className="justify-end items-center h-14 px-3 flex min-w-full">
      <Socials>
        <Socials.Link
          social="FACEBOOK"
          href="https://www.facebook.com/PartidoPyVJujuy/"
        />

        <Socials.Link
          social="WHATSAPP"
          href="https://chat.whatsapp.com/HEGzXevVNdJ8Riq2IdOzBU"
        />

        <Socials.Link social="GITHUB" href="https://github.com/PyV-jujuy" />
      </Socials>
    </nav>
  )
}
