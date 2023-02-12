import PCArray from '../PC.json'
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import axios from 'axios'


const PCInfo = () => {

  let { id } = useParams()

  const [PC, setPC] = useState('')

  useEffect(() => {
    let selectedPC = PCArray.find(
      (PC) => PC.id === parseInt(id)
    )
    setPC(selectedPC)
  }, [id])


  return PC ?(
    <div className="PCs">
      <h2>PC Builds</h2>
      <section className="container-grid">
      {
        <div key={PC.id}>
          <img src={PC.backdrop_path} alt="" />
          <h1>{PC.title}</h1>
          <h1>CPU: {PC.CPU}</h1>
          <h1>GPU: {PC.GPU}</h1>
          <h1>Memory: {PC.memory}</h1>
          <h1>Power and Cooling: {PC.powerAndCooling}</h1>
          <h1>Price: {PC.price}</h1>
          <h1>Release date: {PC.release_date}</h1>
          <h1>Storage: {PC.storage}</h1>
        </div>
}
      </section>
      <Review/>
    </div>
) : null
}

export default PCInfo