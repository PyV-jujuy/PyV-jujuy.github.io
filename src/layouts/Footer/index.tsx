import { Socials } from 'src/components/socials'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center min-w-full bg-primary-blue text-white justify-center p-3">
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

      <p>© Principios y Valores - Jujuy</p>
    </footer>
  )
}
