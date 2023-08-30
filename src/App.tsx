import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BusBoard from './pages/BusBoard'
import Poke from './pages/Poke'
import PhotoViewer from './pages/PhotoViewer'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/busboard' element={<BusBoard />} />
          <Route path='/poke' element={<Poke />} />
          <Route path='/poke' element={<PhotoViewer />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
