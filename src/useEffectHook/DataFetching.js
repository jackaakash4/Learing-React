import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const[post, setPost] = useState([])
    const[id, setId] = useState(1)
    const [idFromButtonChange, setIdFromButtonChange] = useState(1)
    
    const buttonHandler = () =>{
        setIdFromButtonChange(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonChange}`)
        .then(res=>{
            console.log(res)
            console.log(idFromButtonChange)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [idFromButtonChange])

  return (
    <div>
        <input type='text' value={id} onChange={ e=> setId(e.target.value)} />
        <button type='button' onClick={buttonHandler}>Fetch Title</button>
        <div>
            {post.title}
        </div>
    </div>
  )
}

export default DataFetching