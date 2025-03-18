import { useEffect, useRef, useState } from "preact/hooks"
import NavButton from "./components/NavButton"
import LogoLink from "./components/LogoLink"
import ExperienceItem from "./components/ExperienceItem"

export default function App() {
  const [tab, setTab] = useState('about')
  const bgCursor = useRef<HTMLDivElement | null>(null)

  const handleBgCursor = (e: MouseEvent)=>{
    const X = e.clientX 
    const Y = e.clientY
    
    if (bgCursor.current){
      const cursorWidth = bgCursor.current.offsetWidth
      const cursorHeight = bgCursor.current.offsetHeight

      bgCursor.current.style.left = `${X-cursorWidth/2}px`
      bgCursor.current.style.top = `${Y-cursorHeight/2}px`
    }
  }

  useEffect(()=>{
    window.addEventListener("mousemove", handleBgCursor)
    return ()=>{
      window.removeEventListener("mousemove", handleBgCursor)
    }
  }, [])

  // GMAIL CONTACT
  const email = 'joaknuttzen06@gmail.com'
  
  return (
    <>
      <div className='
        m-auto max-w-screen-2xl grid 
        lg:grid-cols-2 max-lg:py-7'>
        <div id='cursor-bg' className='fixed -top-30 -left-30 p-30 rounded-full transition-all duration-50' ref={bgCursor}></div>
        <header className='z-30 lg:fixed lg:col-start-1 lg:space-y-15 lg:row-start-1 lg:row-end-3 h-screen'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-5xl font-extrabold flex items-center gap-3 max-md:text-4xl overflow-hidden'>Joaquin Knuttzen</h1>
              <p className='text-xl'>Desarrollador Web Full-Stack</p>
            </div>
            <div className='w-90'>
              <p className='opacity-90'>En constante actualización para brindar el mejor servicio. Apasionado por la lógica y el diseño.</p>
            </div>
          </div>

          <nav className='lg:flex lg:flex-col lg:justify-between lg:grow:'>
            <div className='flex flex-col gap-2 font-semibold max-lg:hidden '>
              <NavButton label="SOBRE MI" id="about" index={true} state={tab} set={setTab} />
              <NavButton label="EXPERIENCIA" id="experience" state={tab} set={setTab}  />
              <NavButton label="PROYECTOS" id="projects" state={tab} set={setTab}  /> 
              <NavButton label="CONTACTO" id="coontact" state={tab} set={setTab}  /> 
            </div>

            <div className='flex gap-5 items-center'>
              <LogoLink src='/assets/github.png' alt="Github Logo" title="Github" href="https://www.github.com/Pocho18/" />
              <LogoLink w={'w-5'} src='/assets/linkedin.png' alt="Linkedin Logo" title="Linkedin" href="https://www.linkedin.com/in/joaqu%C3%ADn-knuttzen-519097343/" />
              <LogoLink w={'w-6.5'} src='/assets/gmail.png' alt="Gmail Logo" title="Gmail" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`} />
            </div>
          </nav>
        </header>

        <main className='lg:col-start-2 lg:col-end-2 max-lg:mt-15 z-30'>
          <section id='about' className='max-lg:mt-5 max-lg:p-5 space-y-8 py-2'>
            <h3 className='lg:hidden font-bold'>SOBRE MI</h3>
            <div>
              <p>
                Hola! Soy un entusiasta del desarrollo nacido en Argentina. Tengo 18 años y soy estudiante de la carrera de ingeniería en informática.
                Hoy en día estoy especializado en el desarrollo web utilizando tecnologías como:
              </p>
              <ul className='list-disc py-4 px-10'>
                <li>Javascript/Typescript</li>
                <li><b>Front-End:</b> Vite - React - TailwindCSS.</li>
                <li><b>Back-End:</b> Node - Express - PostgreSQL - MongoDB.</li>
                <li><b>Extras:</b> Git - Github - Docker.</li>
              </ul>
              <p>
                Actualmente, soy desarrollador junior freelancer, ofreciendo mis servicios en páginas como <b>Fiverr - Workana - LinkedIn</b>,
                donde utilizo las tecnologías antes mencionadas.
              </p>
              <br />
              <p>
                En mi pasado, fui pasante de la empresa <b>Soluciones IT</b> donde adquiri experiencia sobre el mundo de la web y senté las bases de mi aprendizaje.
                Además, realicé varios proyectos para el programa <b>NoCountry</b> donde me relacioné con personas de todo el mundo.
              </p>
              <br />
              <p>Además de programar, mis pasatiempos son la música y el ajedrez. Soy pianista, trombonista y cantante! :).</p>
            </div>
          </section>

          <section id='experience' className='max-lg:mt-5 max-lg:p-5 space-y-8 py-2 lg:mt-10'>
            <h3 className='lg:hidden font-bold'>EXPERIENCIA</h3>
            <ExperienceItem 
              title="Desarrollador Front-End Trainee - Soluciones IT" 
              date="Feb 2024 - Feb 2025"
              tags={['HTML', 'CSS', 'JavaScript', 'React']}
              path="https://www.it-solutions.com.ar/"
            >
              Formé parte del equipo de desarrollo de la landing page. Además de utilizar las mejores prácticas para el desarrollo,
              también colaboré con el equipo creativo (UX/UI) para definir el diseño de la página.
            </ExperienceItem>

            <ExperienceItem
              title="Desarrollador Front-End Trainee - Soluciones IT" 
              date="May 2024 - ACTUALMENTE"
              tags={['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'React', 'Node', 'Express', 'MongoDB', 'PostgreSQL']}
              path="https://www.fiverr.com/"
            >
              Me desempeño como desarrollador web full-stack freelance, postulandome para trabajos requeridos 
              por usuarios para llevarlo a cabo. Utilizando principalmente MERN Stack para el desarrollo.
            </ExperienceItem>
          </section>
        </main>
      </div>
    </>
  )
}