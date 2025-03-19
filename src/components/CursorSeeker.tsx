import { useEffect, useRef, useState } from "preact/hooks"

export default function CursorSeeker() {
    const seeker = useRef<HTMLDivElement | null>(null)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const handleMove = (e: MouseEvent)=> {
        const X = e.clientX
        const Y = e.clientY

        if (seeker.current) {
            const cursorWidth = seeker.current.offsetWidth
            const cursorHeight = seeker.current.offsetHeight

            seeker.current.style.top = `${Y-cursorHeight/2}px`
            seeker.current.style.left = `${X-cursorWidth/2}px`
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', ()=>setScreenWidth(window.innerWidth))

        if (screenWidth < 1024 && seeker.current) {
            window.removeEventListener('mousemove', handleMove)
            seeker.current.style.top = '-120px'
            seeker.current.style.left = '-120px'
        }else {
            window.addEventListener('mousemove', handleMove)
        }

        return ()=> {
            window.removeEventListener('resize', ()=>setScreenWidth(window.innerWidth))
            window.removeEventListener('mousemove', handleMove)
        }
    }, [screenWidth])

    return (
        <div 
            ref={seeker}
            className='fixed -top-30 -left-30 p-30 rounded-full md:transition-all md:duration-50
                    bg-radial-[circle_at_center] from-[rgba(25,25,25,.2)] to-[rgba(25,25,25,.5)]
                '>
        </div>
    )
}
