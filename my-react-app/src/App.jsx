import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import Error from './pages/Error/Error'
import Housing from './pages/Housing/Housing'
import About from './pages/About/About'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='home' element={<Home />} />
        </Routes>

        <Routes>
          <Route path='housing' element={<Housing />} />
        </Routes>

        <Routes>
          <Route path='about' element={<About />} />
        </Routes>

        <Routes>
          <Route path="*" element={<Error />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
