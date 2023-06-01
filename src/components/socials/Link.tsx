import SOCIAL_ICONS from './social-icons'

interface Props {
  social: keyof typeof SOCIAL_ICONS
  href: string
}

export function Link({ social, href }: Props) {
  const Social = SOCIAL_ICONS[social]

  if (!social) return null
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Social className="text-xs sm:text-xl md:text-2xl text-secondary-blue hover:text-primary-blue" />
    </a>
  )
}
