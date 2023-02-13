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
          const res = await axios.get(`http://localhost:3001/api/pc/post/${pcId}`)
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
          const createNewPost = {...newPost, pcId: pcId}
          const response = await axios.post(`http://localhost:3001/api/post`, createNewPost)
          setNewPost(cleanPost)
          console.log(response)
          getPosts()
        } catch (error) {
          console.log(error)
        } 
      }
      const handleChange = (e) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})
      }

const handleRemove = async (id) => {
await axios.delete(`http://localhost:3001/api/post/delete/${oldPost}`)
console.log(oldPost);
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
        {oldPost?.post?.sort((a,b) => b.createdAt - a.createdAt).map((old) => (
        <div key={old._id}>
          <h3>Review: {old.review}</h3>
           <p>Rating: {old.rating}</p>
          <p>Name: {old.name}</p>
          <p>{old.createdAt}</p>
       <button onClick={handleRemove}>remove</button>

          </div>
           ))} 
      </div>
</div>

)}

  
  export default Review