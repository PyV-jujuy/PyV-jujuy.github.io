import { FaFacebook, FaWhatsapp, FaGithub } from 'react-icons/fa'

const SOCIAL_ICONS = {
  FACEBOOK: FaFacebook,
  WHATSAPP: FaWhatsapp,
  GITHUB: FaGithub,
}

interface Props {
  social: keyof typeof SOCIAL_ICONS
  href: string
}

export function Link({ social, href }: Props) {
  const Social = SOCIAL_ICONS[social]

  if (!social) return null
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Social className="text-secondary-blue hover:text-primary-blue max-h-5" />
    </a>
  )
}
