import { useState } from "preact/hooks"

type CommonProps = {
    children?: string,
    title: string,
    tags: string[],
    path: string,
    hover: boolean,
    setHover: (key: boolean)=>void
}

type ExperienceProps = CommonProps & {
    type: "exp",
    date?: string,
    imgUrl?: never
}

type ProjectProps = CommonProps & {
    type: "prj",
    imgUrl?: string,
    date?:  never
}

type WorksItemProps = ExperienceProps | ProjectProps

export default function WorksItem({ children, title, tags, date, imgUrl, path, hover, setHover}: WorksItemProps) {
    const [innerMouse, setInnerMouse] = useState(false)

    const handleMouseEnter = ()=>{
        setInnerMouse(true)
        setHover(true)
    }
    const handleMouseLeave = ()=>{
        setInnerMouse(false)
        setHover(false)
    }

    return (
        <a 
            className={`flex w-full relative right-4 gap-5 h-max rounded-xl p-5 transition-all duration-200 cursor-pointer
                    lg:hover:bg-[rgba(100,100,100,.2)] max-lg:right-5 max-sm:right-2 max-sm:p-2 max-sm:gap-2 group
                    ${hover && !innerMouse ? 'opacity-40':'opacity-100'} ${imgUrl ? 'max-sm:flex-col-reverse':'max-sm:flex-col'}`}
            href={path}
            target='_BLANK'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <section className='min-w-30 mt-1 max-sm:w-1/2'>
                {date ? 
                    <p className='opacity-60 text-sm'>{date}</p>
                    :
                    <img src={imgUrl} alt={title + ' portait image'} className='rounded-md max-w-30 ring-neutral-600 group-hover:ring-2 max-sm:max-w-50 max-sm:mt-4 transition-all duration-150' />
                }
            </section>
            <section className='grow flex flex-col gap-2'>
                <h3 className='text-lg font-bold max-sm:'>{title}</h3>
                <p className='opacity-90'>{children}</p>

                <div className='flex gap-3 mt-2 flex-wrap'>
                    {tags.map((item)=>(
                        <span key={item} className='px-4 py-1 font-bold bg-cyan-600 rounded-full text-sm flex items-center justify-center'>
                            {item}
                        </span>
                    ))}
                </div>
            </section>
        </a>
  )
}