import styles from '../modules/NavBar.module.css'
import { DocumentTextIcon, UserIcon } from '@heroicons/react/16/solid'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <div>
            <h1>JoaK - WebDev</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">
                <img src="./src/assets/github-mark-white.svg" alt="Github logo" />
                <p>Github</p>
              </a>
            </li>
            <li>
              <a href="/">
                <DocumentTextIcon width={35} height={35} />
                <p>Currículum</p>
              </a>
            </li>
            <li>
              <a href="/">
                <UserIcon width={35} height={35} />
                <p>Contacto</p>
              </a>
            </li>
          </ul>
        </div>
    </nav>
  )
}
