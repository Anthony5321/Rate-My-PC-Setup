import '../App.css'
import PCArray from '../PC.json'
import { Link } from "react-router-dom"



const Home = () => {

      return(
          <div className="PCs">
            <h2>PC Builds</h2>
            <section className="container-grid">
            {
              PCArray.map((PC) => (
              <div key={PC.id}>
                <Link to={`/${PC.id}`}>
                <img src={PC.backdrop_path} alt={PC.title}/>
                </Link>
              </div>
    ))}
            </section>
          </div>
      )
    }

    export default Home