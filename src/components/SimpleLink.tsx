import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/16/solid"

type SimpleLinkProps = {
    label: string,
    href: string,
    style?: string
}

export default function SimpleLink({ label, href, style="default" }: SimpleLinkProps) {
  return (
    <a 
        className={`flex gap-2 text-xl font-bold group transition-colors duration-200 
            ${style === "default" && 'hover:text-emerald-400'}
            ${style === "modern" && ''}`}
        href={href}
        target="_BLANK"
    >
        <div className={'relative w-max'}>
          {style === "modern" && <span className='opacity-0 w-full h-0.5 bg-emerald-600 absolute -bottom-0.5 rounded-full transition-opacity duration-200 group-hover:opacity-100' />}
          {label}
        </div>
        
        <picture className='w-6 h-6 relative top-1'>
          {style === "default" && <ArrowUpRightIcon className='transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1' />}
          {style === "modern" && <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-2' />}
        </picture>
    </a>

  )
}
