import '../App.css'
import PCCard from './PCCard'
import PCArray from '../PC.json'
import { Link } from "react-router-dom"

console.log(PCArray)
const Home = () => {

      return(
          <div className="PCs">
            <h2>PC Builds</h2>
            <section className="container-grid">
            {
              <div key={PCArray.id}>
                <Link to={`/view/${PCArray.id}`}>
                <PCCard
                image={PCArray.backdrop_path}/>
                </Link>
              </div>
    }
            </section>
          </div>
      )
    }
    
    export default Home