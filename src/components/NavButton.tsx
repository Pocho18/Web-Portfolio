type NavButtonProps = {
    label: string,
    id?: string,
    state: string
    set: (key: string)=>void
    index?: boolean
}

export default function NavButton({ label, id=label, index=false, state, set }: NavButtonProps) {
    const navigate = document.getElementById(id)
    const handleClick = ()=>{
        set(id)
        if (navigate) {
            if (index) scrollTo({ behavior: 'smooth', top: 0 })
            else navigate.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <button 
            className={`w-max group py-2 flex items-center gap-2 cursor-pointer outline-none border-none transition-all duration-150 hover:opacity-100 ${state === id ? 'opacity-100':'opacity-40'}`}
            onClick={handleClick}
        >
            <span className={`w-10 h-[2px] bg-white rounded-full group-hover:w-20 transition-all duration-150 ${state === id && 'w-20'}`}></span>
            {label}
        </button>
    )
}