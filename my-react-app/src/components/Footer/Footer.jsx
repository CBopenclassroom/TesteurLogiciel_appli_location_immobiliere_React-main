import './footer.css'
import kasaLogoFooter from "./../../assets/LOGOFOOTER.svg"

function Footer() {

  return (
    <footer>
      <img src={kasaLogoFooter} alt='logo kasa' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer