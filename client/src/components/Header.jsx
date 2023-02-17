import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {

  return (
    <header>
      <nav>
        <Link className="home-link" to="/">Home</Link>
        <Link className="about-link" to="/About">About</Link>
        <h2 className='slogan'>Work hard and Play harder!</h2>
      </nav>
    </header>
  )
}

export default Header