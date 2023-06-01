import { ReactElement } from 'react'
import { Link } from './Link'

interface Props {
  children: ReactElement<typeof Link> | ReactElement<typeof Link>[]
}

function Socials({ children }: Props) {
  if (!Array.isArray(children))
    return (
      <ul className="flex px-1 h-fit py-0.5 bg-white border-2 border-primary-blue rounded-full justify-center items-center">
        <li className="mx-0.5 sm:mx-1">{children}</li>
      </ul>
    )
  return (
    <ul className="flex px-1 h-fit py-0.5 bg-white border-2 border-primary-blue rounded-full justify-center items-center">
      {children.map(function (Link, i) {
        return (
          <li key={i} className="mx-0.5 sm:mx-1">
            {Link}
          </li>
        )
      })}
    </ul>
  )
}

Socials.Link = Link

export { Socials }
