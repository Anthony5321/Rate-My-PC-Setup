
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import axios from 'axios'


const PCInfo = () => {

  let { id } = useParams()

  const [pc, setPC] = useState('')

  const getPcs = async (e) => {
    try {
      let response = await axios.get(`http://localhost:3001/api/pc/${id}`)
      setPC(response.data.pc);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPcs()
  }, [id])


  return pc ?(
    <div className="PCs">
      <h2>PC Builds</h2>
      <section className="container-grid">
      {

        <div key={pc.id}>
          <img src={pc.backdrop_path} alt="" />
          <h1>{pc.title}</h1>
          <h1>CPU: {pc.CPU}</h1>
          <h1>GPU: {pc.GPU}</h1>
          <h1>Memory: {pc.memory}</h1>
          <h1>Storage: {pc.storage}</h1>
          <h1>Power and Cooling: {pc.powerAndCooling}</h1>
          <h1>Price: {pc.price}</h1>
          <h1>Release date: {pc.release_date}</h1>
        </div>
}
      </section>
      <Review 
      pcId={pc._id}
      />
    </div>
) : null
}

export default PCInfo