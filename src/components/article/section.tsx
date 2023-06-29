import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Section({ children }: Props) {
  return <section className="md:w-[50%] p-5">{children}</section>
}
