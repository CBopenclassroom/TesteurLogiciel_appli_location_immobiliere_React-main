import './header.css'
import kasaLogo from "./../../assets/LOGO.svg"
import { Link } from 'react-router'


function Header() {

  return (
    <header>
      <img src={kasaLogo} alt='logo kasa' />

      <nav>
        <ul>
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
