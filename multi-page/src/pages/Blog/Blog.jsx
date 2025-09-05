import React, { useEffect, useState } from 'react'


const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  })

  return (
    <>

      <h1>Página Blog</h1>
    </>
  )
}

export default Blog