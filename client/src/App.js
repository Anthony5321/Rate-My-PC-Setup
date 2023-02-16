import './App.css'
import { Route, Routes } from 'react-router-dom'
import PCInfo from './components/PCInfo'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'

const App = () => {

  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:id" element={<PCInfo/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </main>
  </div>
  )
}

export default App