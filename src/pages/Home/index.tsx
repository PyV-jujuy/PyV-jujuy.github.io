import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

import Article from 'src/components/article'
import logo from 'src/assets/logo.svg'
import { ECONOMIC_PLAN, FACEBOOK_LINK, WHATSAPP_LINK } from 'src/utils/const'

export default function Home() {
  return (
    <main
      id="main"
      className="flex flex-col items-center justify-center min-h-[88vh] p-5 sm:p-7 md:p-10"
    >
      <h1 className="font-title text-center text-3xl sm:text-5xl sm:m-0">
        Principios y Valores - Jujuy
      </h1>

      <Article>
        <Article.Section>
          <h2 className="font-title text-3xl mb-3">Acerca de Nosotros</h2>
          <p>
            Somos la agrupación de Principios y Valores Jujuy. Militando el{' '}
            <a
              className="italic underline font-bold"
              href={ECONOMIC_PLAN}
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan Económico Peronista
            </a>
            , un Modelo de Desarrollo Permanente y Sustentable orientado a la
            producción
          </p>

          <h3 className="font-title text-2xl my-2">Redes Sociales</h3>
          <ul className="pl-4">
            <li>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
                <FaFacebook className="inline items-center text-xl text-primary-blue" />{' '}
                Facebook
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="inline items-center text-xl text-primary-blue" />{' '}
                Whatsapp
              </a>
            </li>
          </ul>
        </Article.Section>
        <Article.Section>
          <img src={logo} alt="logo" />
        </Article.Section>
      </Article>
    </main>
  )
}
