import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {

  return (
    <header>
      <nav>
        <Link className="home-link" to="/">Home</Link>
        <Link className="about-link" to="/About">About</Link>
      </nav>
    </header>
  )
}

export default Header