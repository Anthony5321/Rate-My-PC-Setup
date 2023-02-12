import axios from 'axios'
import { useState, useEffect } from 'react'
const PC = require('../PC.json')
//create form state, create handle change, spread opp, line 8 send state name.
const Review = () => {
  const cleanPost = {
    review: '',
    rating: '',
    name: '',
  }
  
  const [oldPost, setOldPost] = useState([])
  const [newPost, setNewPost] = useState(cleanPost)

      // const getPosts = async () => {
      //   try {
      //     let res = await axios.get(`http://localhost:3001/api/1`)
      //     setOldPost(res.data)
      //     console.log(res)
      //   } catch (err) {
      //     console.log(err)
      //   }
        
      // }
      // useEffect((e) => {
      //   getPosts()
      //   setOldPost({...oldPost, [e.target.name]: e.target.value})
      // },[])
    

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          let response = await axios.post(`http://localhost:3001/api/post`, newPost)
          setNewPost(cleanPost)
          console.log(response)
        } catch (error) {
          console.log(error)
        } 
      }
      const handleChange = (e) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})
      }
    
return (

<div>

      <div className="card">
        <h1>Add a comment</h1>
        <form onSubmit={ handleSubmit }>
        <input type="text" onChange={handleChange} value={newPost.review} name={"review"}  placeholder={'Review'} />
        <input type="text" onChange={handleChange} value={newPost.rating} name={"rating"} placeholder={'Rating'} />
        <input type="text" onChange={handleChange} value={newPost.name} name={"name"} placeholder={'name'} />
        <button>Submit</button>
        </form>
        {/* {oldPost.map((old) => ( */}
        <div key={oldPost._id}>
          {/* <h3>Review: {oldPost.}</h3> */}
          {/* <p>Rating: {old}</p>
          <p>Name: {old}</p> */}
          </div>
                {/* ))} */}
      </div>
</div>

)}

  
  export default Review