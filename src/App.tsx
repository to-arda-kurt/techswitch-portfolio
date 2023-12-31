import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Project from './pages/Project'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:seoUrl' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
