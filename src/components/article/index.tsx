import { Fragment, ReactElement } from 'react'
import Section from './section'

interface Props {
  reverse?: boolean
  children: [ReactElement<typeof Section>, ReactElement<typeof Section>]
}
function Article({ reverse = false, children }: Props) {
  const flexRow = reverse ? 'md:flex-row-reverse' : 'md:flex-row'

  return (
    <article
      className={`flex flex-col items-center flex-auto md:w-3/4 ${flexRow}`}
    >
      {children.map(function (a, i) {
        return <Fragment key={i}> {a} </Fragment>
      })}
    </article>
  )
}

Article.Section = Section

export default Article
