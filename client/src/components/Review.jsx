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
  
  // const [oldPost, setOldPost] = useState([])
  const [post, setPost] = useState(cleanPost)

      const getPosts = async () => {
        try {
          const res = await axios.get(`http://localhost:3001/api/pc/post/${pcId}`)
          setPost(res.data)
          console.log(post);
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
          const createNewPost = {...post, pcId: pcId}
          const response = await axios.post(`http://localhost:3001/api/post`, createNewPost)
          setPost(cleanPost)
          console.log(response)
          getPosts()
        } catch (error) {
          console.log(error)
        } 
      }
      const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value})
      }

const handleRemove = async (id) => {
  console.log(post);
await axios.delete(`http://localhost:3001/api/pc/post/${pcId}/${id}`)
getPosts()
}

const handleUpdate =  async (id) => {
  console.log(post);
await axios.put(`http://localhost:3001/api/pc/post/${pcId}/${id}`)
getPosts()
}
    
return (

<div>

      <div className="card">
        <h1>Add a comment</h1>
        <form onSubmit={ handleSubmit }>
        <input type="text" onChange={handleChange} value={post.review} name={"review"}  placeholder={'Review'} />
        <input type="text" onChange={handleChange} value={post.rating} name={"rating"} placeholder={'Rating out of 10'} />
        <input type="text" onChange={handleChange} value={post.name} name={"name"} placeholder={'Name'} />
        <button>Submit</button>
        </form>
        {post?.post?.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map((old) => (
        <div key={old._id}>
          <h3>Review: {old.review}</h3>
           <p>Rating: {old.rating}</p>
          <p>Name: {old.name}</p>
       <button onClick={() => handleRemove(old._id)}>remove</button>

          </div> 
           ))} 
      </div>
</div>

)}

  
  export default Review