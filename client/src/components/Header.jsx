import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {

  return (
    <header>
      <nav>
        <Link className="home-link" to="/">Home</Link>
      </nav>
    </header>
  )
}

export default Header