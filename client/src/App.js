import './App.css'
import { Route, Routes } from 'react-router-dom'
import PCInfo from './components/PCInfo'
import Home from './components/Home'
import Header from './components/Header'

const App = () => {

  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/view/:PCInfo" element={<PCInfo/>} />
      </Routes>
    </main>
  </div>
  )
}

export default App