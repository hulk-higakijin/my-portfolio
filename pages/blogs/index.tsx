import { useEffect, useState } from 'react'
import prisma from '../../lib/prisma'
import { Blog, Blogs } from '../../types/Blog'
import { format } from '../../lib/format'

export async function getServerSideProps() {
  const data = await prisma.blog.findMany()
  const blogs = JSON.parse(JSON.stringify(data))
  return { props: { blogs } }
}

const Blogs = (props: { blogs: Blogs }) => {
  const [blogs, setBlogs] = useState<Blog[]>([...props.blogs].reverse())

  return (
    <>
      <div className="container mx-auto flex flex-col gap-4">
        <h1 className="text-xl font-bold border-b">Blogs</h1>

        {blogs.map((blog: Blog, i: number) => (
          <div className="border-b p-4" key={i}>
            <div className="flex">
              <h2 className="text-blue-500 text-xl font-bold">{blog.title}</h2>
              <p className="ml-auto text-sm">{format(blog.createdAt)}</p>
            </div>
            <p>{blog.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Blogs
