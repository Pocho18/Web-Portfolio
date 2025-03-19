type LogoLinkProps = {
    src: string, 
    alt: string, 
    title: string,
    href: string,
    w?:string
}

export default function LogoLink({ src, alt, title, href, w='w-6' }: LogoLinkProps) {
  return (
    <a href={href} target='_BLANK' className='opacity-60 hover:opacity-100 transition-opacity duration-300'>
        <img src={`./src/${src}`} alt={alt} title={title}
          className={w}
        />
    </a>
  )
}
