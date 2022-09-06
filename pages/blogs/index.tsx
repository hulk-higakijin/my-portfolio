import { useState } from 'react'
import { Blog, Blogs } from '../../types/Blog'

export async function getServerSideProps() {
  try {
    const blogs = await fetch('http://localhost:3000/api/blogs').then((data) =>
      data.json()
    )
    return { props: { blogs } }
  } catch (e) {
    return { props: { blogs: [] } }
  }
}

const Blogs = (props: { blogs: Blogs }) => {
  const [blogs, setBlogs] = useState(props.blogs)

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">Blogs</h1>
        <ul>
          {blogs.map((blog: Blog, i: number) => (
            <li key={i}>{blog.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Blogs
