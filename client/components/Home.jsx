
import PCPick from '../src/PC.json'
import { Link } from "react-router-dom"


const Home = () => {




  const showPC = (PC) => {

  }

  return (
    <div className="PC-grid">
      {
      props.PCs.map((PC) => (
        <div className="PC-card" onClick={() => showPC(PC)} key={PC.id}>
          <Link to={`${PC.id}`}>
          <img style={{ display: 'block' }} src={PC.backdrop_path} alt={PC.title} />
          <h3>{PC.title}</h3>
          </Link>
          <Link to="/">Home</Link>
        </div>
      ))}
    </div>
  )
}

export default Home