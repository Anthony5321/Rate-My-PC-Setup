import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// console.log(PC)
//create form state, create handle change, spread opp, line 8 send state name.
const Review = ({pcId}) => {
  const cleanPost = {
    review: '',
    rating: '3',
    name: '',
  }
  
  // const [oldPost, setOldPost] = useState([])
  const [post, setPost] = useState([])
const [formValues, setFormValues] = useState(cleanPost)
const [updatePost, setUpdatePost] = useState()
const [commentId, setCommentId] = useState('')
const [editing, setEditing] = useState(true)

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
    console.log(post);

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          const createNewPost = {...formValues, pcId: pcId}
          const response = await axios.post(`http://localhost:3001/api/post`, createNewPost)
          setFormValues(cleanPost)
          console.log(response)
          getPosts()
        } catch (error) {
          console.log(error)
        } 
      }
      const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
      }

const handleRemove = async (id) => {
  console.log(post);
await axios.delete(`http://localhost:3001/api/pc/post/${pcId}/${id}`)
getPosts()
}

const handleUpdate =  async (e) => {
  e.preventDefault()
 await axios.put(`http://localhost:3001/api/pc/post/${pcId}/${commentId}`, updatePost)
setEditing(true)
getPosts()
}

const handleEditState = (post) => {
  setUpdatePost({ review: `${post.review}`, rating: `${post.rating}`, name: `${post.name}`})
  setEditing(false)
  setCommentId(post._id)
}

const updateHandleChange = (e) => {
  setUpdatePost({...updatePost, [e.target.name]: e.target.value})
}

return (

<div>
  <div className="card">
    <h1>{editing ? 'Add a': "Edit"} comment</h1>
    { editing ? 
    (
      <form onSubmit={ handleSubmit }>
        <input type="text" onChange={handleChange} value={formValues.review} name={"review"}  placeholder={'Review'} />
        <select name='rating' id="rating" value={formValues.rating} onChange={handleChange}>
          <option value="1">Worst PC you could buy</option>
          <option value="2">Could be Better</option>
          <option selected value="3">Decent</option>
          <option value="4">Better than most</option>
          <option value="5">Best ever made</option>
        </select>
        <input type="text" onChange={handleChange} value={formValues.name} name={"name"} placeholder={'Name'} />
        <button >Submit</button>
      </form>
    ): (
      <form onSubmit={ handleUpdate }>
        <input type="text" onChange={updateHandleChange} value={updatePost?.review} name={"review"}  placeholder={'Review'} />
        <select name='rating' id="rating" value={updatePost?.rating} onChange={updateHandleChange}>
          <option value="1">Worst PC you could buy</option>
          <option value="2">Could be Better</option>
          <option selected value="3">Decent</option>
          <option value="4">Better than most</option>
          <option value="5">Best ever made</option>
        </select>
        <input type="text" onChange={updateHandleChange} value={updatePost?.name} name={"name"} placeholder={'Name'} />
        <button >Edit</button>
      </form>
      )
    }
    {post?.post?.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).map((post) => (
      <div key={post._id}>
        <h3>Review: {post.review}</h3>
        <p>Rating: {post.rating}</p>
        <p>Name: {post.name}</p>
        <button onClick={() => handleRemove(post._id)}>remove</button>
       {editing && <button onClick={() => handleEditState(post)}>Edit</button>}
      </div> 
      ))} 
  </div>
</div>
)}

  export default Review