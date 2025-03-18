import React from "preact/compat"

type ExperienceItemProps = {
    children: string
    title: string
    tags: string[],
    date: string,
    path: string
}

export default function ExperienceItem({ children, title, tags, date, path }: ExperienceItemProps) {
  return (
    <a className='flex w-full gap-5 h-max rounded-xl p-5 max-sm:flex-col max-sm:p-2 max-sm:gap-2 lg:hover:bg-[rgba(100,100,100,.2)] transition-colors duration-200 cursor-pointer'
        href={path}
        target='_BLANK'
    >
        <section className='opacity-60 text-sm min-w-25 mt-1'>{date}</section>
        <section className='grow flex flex-col gap-2'>
            <h3 className='text-lg font-bold max-sm:'>{title}</h3>
            <p className='opacity-90'>{children}</p>

            <div className='flex gap-3 mt-2 flex-wrap'>
                {tags.map((item)=>(
                    <span key={item} className='px-4 py-1 bg-cyan-600 rounded-full text-sm flex items-center justify-center'>
                        {item}
                    </span>
                ))}
            </div>
        </section>
    </a>
  )
}