import './components/HomePage'
// import About from './pages/About'
import Header from './components/Header'
import Home from './components/Home'
import PCInfo from './components/PCInfo'
import { Route, Routes } from 'react-router-dom'

const App = () => {

        return (
          <div>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/details/:gameId" element={<PCInfo/>} />
              {/* <Route path="/About" element={<About/>} /> */}
            </Routes>
          </main>
        </div>
        )
      }
      
      export default App