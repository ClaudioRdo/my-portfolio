import React from 'react';

interface PageProps {
  id: string
  className: string
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ id, className, children }) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}

export default Page