import Banner from '../../components/Banner/Banner'
import './home.css'
import bannerHome from "./../../assets/banner-home.png"

function Home() {

  return (
    <main>
      <Banner image={bannerHome} text={"Chez vous, partout et ailleurs"} />
      <p>je suis la page home</p>
    </main>
  )
}

export default Home
