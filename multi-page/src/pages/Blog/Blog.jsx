import React, { useEffect, useState } from 'react'


const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <>
      <div className='flex gap-2'>
        {
          posts && posts.map(post =>(
            <div key={post.id} className='card'>
              <h2>{post.title}</h2>
              <p>{post.views}</p>
              
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Blog