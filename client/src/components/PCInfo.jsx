import '../App.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import axios from 'axios'

const PCInfo = () => {

const { id } = useParams()

const [pc, setPC] = useState('')

const getPcs = async (e) => {
  try {
    let response = await axios.get(`/api/pc/${id}`)
    setPC(response.data.pc);
  } catch (error) {
    console.log(error)
  }
}

useEffect(() => {
  getPcs()
}, [id])


return pc ?(
  <div className="PCs">
    <h2>{pc.title}</h2>
    <section className="container-page">
    {
      <div key={pc.id}>
        <img className='info-img'src={pc.backdrop_path} alt="" />
        {/* <h1>{pc.title}</h1> */}
        <h1>CPU: {pc.CPU}</h1>
        <h1>GPU: {pc.GPU}</h1>
        <h1>Memory: {pc.memory}</h1>
        <h1>Storage: {pc.storage}</h1>
        <h1>Power and Cooling: {pc.powerAndCooling}</h1>
        <h1>Price: {pc.price}</h1>
        <h1>Price Check Date: {pc.release_date}</h1>
      </div>
    }
    </section>
      <Review 
      pcId={id}
      />
  </div>
) : null
}

export default PCInfo