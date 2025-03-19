import React from "preact/compat"

type SectionTextProps = {
    children: React.ReactNode,
    id: string, 
    title: string,
    childrenStyle?: string
}

export default function SectionText({ children, id, title, childrenStyle }: SectionTextProps) {
  return (
    <section id={id} className='mb-25 max-lg:mt-5 space-y-5 py-2'>
        <h3 className='lg:hidden font-bold'>{title}</h3>
        <div className={childrenStyle}>
            {children}
        </div>
    </section>
  )
}
