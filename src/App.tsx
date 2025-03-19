import { useState } from "preact/hooks"
import NavButton from "./components/header/NavButton"
import LogoLink from "./components/header/LogoLink"
import WorksItem from "./components/main/WorksItem"
import CursorSeeker from "./components/CursorSeeker"
import SectionText from "./components/main/SectionText"
import SimpleLink from "./components/SimpleLink"

export default function App() {
  const [tab, setTab] = useState('about')
  const [hoverExp, setHoverExp] = useState(false)
  const [hoverProject, setHoverProject] = useState(false)

  // GMAIL CONTACT
  const email = 'joaknuttzen06@gmail.com'
  
  return (
    <>
      <div className='
        mx-auto max-w-screen-2xl grid 
        lg:grid-cols-2 max-md:px-3 max-md:py-0
        max-lg:flex max-lg:flex-col
        '>
        <CursorSeeker />
        <header className='z-30 flex flex-col lg:fixed lg:col-start-1 lg:gap-15 lg:h-10/12 lg:min-h-max max-lg:gap-8'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <h1 className='text-5xl font-extrabold flex items-center gap-3 max-md:text-4xl overflow-hidden'>Joaquin Knuttzen</h1>
              <p className='text-xl'>Desarrollador Web Full-Stack</p>
            </div>
            <div className='w-90'>
              <p className='opacity-90'>En constante actualización para brindar el mejor servicio. Apasionado por la lógica y el diseño.</p>
            </div>
          </div>

          <nav className='lg:flex lg:flex-col lg:justify-between lg:grow'>
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

        <main className='z-30 lg:col-start-2 lg:col-end-2 max-lg:mt-15 max-lg:space-y-10'>
          <SectionText id='about' title="SOBRE MÍ">
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
          </SectionText>
 
          <SectionText id='experience' title="EXPERIENCIA" childrenStyle='space-y-8'>
            <WorksItem 
              type="exp"
              title="Desarrollador Front-End Trainee - Soluciones IT" 
              date="Feb 2024 - Feb 2025"
              tags={['HTML', 'CSS', 'JavaScript', 'React']}
              path="https://www.it-solutions.com.ar/"
              hover={hoverExp}
              setHover={setHoverExp}
            >
              Formé parte del equipo de desarrollo de la landing page. Además de utilizar las mejores prácticas para el desarrollo,
              también colaboré con el equipo creativo (UX/UI) para definir el diseño de la página.
            </WorksItem>

            <WorksItem
              type="exp"
              title="Desarrollador Full-Stack Junior - Freelance" 
              date="May 2024 - ACTUALMENTE"
              tags={['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'TypeScript', 'React', 'Node', 'Express', 'MongoDB', 'PostgreSQL']}
              path="https://www.fiverr.com/"
              hover={hoverExp}
              setHover={setHoverExp}
            >
              Me desempeño como desarrollador web full-stack freelance, postulandome para trabajos requeridos 
              por usuarios para llevarlo a cabo. Utilizando principalmente MERN Stack para el desarrollo.
            </WorksItem>

            <SimpleLink label="Mí Curriculum" href="https://www.micurriculum.com" />
          </SectionText>

          <SectionText id="projects" title="PROYECTOS" childrenStyle='space-y-8'>
            <WorksItem 
              type="prj"
              title="FreeSocial" 
              tags={["React", "TypeScript", "TailwindCSS", "Node", "Express", "MongoDB"]}
              path="https://www.github.com/Pocho18"
              hover={hoverProject} 
              setHover={setHoverProject} 
              imgUrl="https://imgs.search.brave.com/jJ5UQJwt8hFWSntb-2aHUfqedt_WqQ2BnP4JzXsMmcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn"
            >
              Una red social de código abierto. Entra y postea lo que piensas. interactúa con personas de todo el mundo!
            </WorksItem>

            <WorksItem 
              type="prj"
              title="UpWork" 
              tags={["React", "TypeScript", "TailwindCSS", "Node", "Express", "MongoDB"]}
              path="https://www.github.com/Pocho18"
              hover={hoverProject} 
              setHover={setHoverProject} 
              imgUrl="https://imgs.search.brave.com/jJ5UQJwt8hFWSntb-2aHUfqedt_WqQ2BnP4JzXsMmcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn"
            >
              App para gestionar proyectos en equipo. Crear, eliminar, clasificar tareas y mucho más!
            </WorksItem>

            <WorksItem 
              type="prj"
              title="Gestor de Productos" 
              tags={["React", "TypeScript", "TailwindCSS", "Node", "Express", "PostgreSQL"]}
              path="https://www.github.com/Pocho18"
              hover={hoverProject} 
              setHover={setHoverProject} 
              imgUrl="https://imgs.search.brave.com/jJ5UQJwt8hFWSntb-2aHUfqedt_WqQ2BnP4JzXsMmcI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS93/cC1jb250ZW50L3Ro/ZW1lcy93YWxscGFw/ZXJzLmNvbS9zcmMv/c3BsYXNoLW4uanBn"
            >
              Simple interfaz para organizar productos. Útil para llevar registro de tu negocio!
            </WorksItem>

            <SimpleLink label="Todos mis Proyectos" href="https://www.github.com/Pocho18" style="modern" />
          </SectionText>

          <SectionText id="contact"title="CONTACTO">
            Pongamosnos en contacto!
          </SectionText>
        </main>
      </div>
    </>
  )
}