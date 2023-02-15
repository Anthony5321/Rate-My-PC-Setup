import '../App.css'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'




const Home = () => {
const [pcs, setPcs] = useState([])

const getPcs = async (e) => {
  try {
    let response = await axios.get('/api/')
    setPcs(response.data.pcs);
    console.log(response.data.pcs);
  } catch (error) {
    console.log(error)
  }
}
useEffect(() => {
  getPcs()
},[])
      return(
          <div className="PCs">
            <h2>PC Builds</h2>
            <section className="container-grid">
            {
              pcs.map((PC) => (
              <div key={PC._id}>
                <Link to={`/${PC._id}`}>
                <img src={PC.backdrop_path} alt={PC.title}/>
                </Link>
              </div>
    ))}
            </section>
          </div>
      )
    }

    export default Home