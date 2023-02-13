import axios from 'axios'
import { useState, useEffect } from 'react'
// console.log(PC)
//create form state, create handle change, spread opp, line 8 send state name.
const Review = ({pcId}) => {
  const cleanPost = {
    review: '',
    rating: '',
    name: '',
  }
  
  const [oldPost, setOldPost] = useState([])
  const [newPost, setNewPost] = useState(cleanPost)

      const getPosts = async () => {
        try {
          let res = await axios.get(`http://localhost:3001/api/${pcId}`)
          setOldPost(res.data)
          console.log(res)
        } catch (err) {
          console.log(err)
        }
        
      }
      useEffect((e) => {
        getPosts()
      },[])
    

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
        setNewPost({...newPost, [e.target.name]: e.target.value, pcId})
      }
    
return (

<div>

      <div className="card">
        <h1>Add a comment</h1>
        <form onSubmit={ handleSubmit }>
        <input type="text" onChange={handleChange} value={newPost.review} name={"review"}  placeholder={'Review'} />
        <input type="text" onChange={handleChange} value={newPost.rating} name={"rating"} placeholder={'Rating out of 10'} />
        <input type="text" onChange={handleChange} value={newPost.name} name={"name"} placeholder={'Name'} />
        <button>Submit</button>
        </form>
        {oldPost?.posts?.map((old) => (
        <div key={old._id}>
          <h3>Review: {old.review}</h3>
           <p>Rating: {old.rating}</p>
          <p>Name: {old.name}</p>
          </div>
           ))} 
      </div>
</div>

)}

  
  export default Review