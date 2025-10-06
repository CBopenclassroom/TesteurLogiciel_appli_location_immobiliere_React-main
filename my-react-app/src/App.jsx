import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import Housing from './pages/Housing/Housing'
import About from './pages/About/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='housing/:id' element={<Housing />} />
          <Route path='about' element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App
